import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo/logo.png';
import darkLogo from '../../assets/images/logo/logo-dark.png';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { titleize } from '../../helpers/string';
import { Button } from 'react-bootstrap';
import { ConnectWallet } from '../modals/ConnectWallet';
import { WalletDetails } from '../modals/WalletDetails';
import { setAccount, getAccount } from './headerSlice';
import { useSelector, useDispatch } from 'react-redux';
import Web3 from 'web3';

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const navigationLinks = ['home', 'about', 'markets', 'trade', 'support', 'feeds'];

  const [activeLink, setActiveLink] = useState('home');
  const [balance, setBalance] = useState(0);
  const [showConnect, setShowConnect] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentLink = navigationLinks.find((link) => location.pathname.includes(link));
    setActiveLink(currentLink);
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      const { ethereum } = window;
      const web3 = new Web3(ethereum);
      if (web3) {
        let result = await web3.eth.getBalance(account);
        result = (Number(result) / 10 ** 18).toFixed(5);
        setBalance(Number(result));
      }
    };
    account && getBalance();
  }, [account]);

  const changePage = (link) => {
    setActiveLink(link);
    navigate(`/${link}`);
  };

  const loginWallet = (account) => {
    dispatch(setAccount(account));
    setShowConnect(false);
  };

  console.log({ parent: showConnect });

  return (
    <header id="header_main" className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">
              <div className="header__left">
                <div className="logo">
                  <a className="light" href="index.html">
                    <img
                      src={logo}
                      alt=""
                      width="118"
                      height="32"
                      // data-retina="%PUBLIC_URL%/images/logo/logo@2x.png"
                      data-width="118"
                      data-height="32"
                    />
                  </a>
                  <a className="dark" href="index.html">
                    <img
                      src={darkLogo}
                      alt=""
                      width="118"
                      height="32"
                      // data-retina="%PUBLIC_URL%/images/logo/logo-dark@2x.png"
                      data-width="118"
                      data-height="32"
                    />
                  </a>
                </div>
                <div className="left__main">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      {navigationLinks.map((link) => (
                        <li
                          key={`header-link-${link}`}
                          className={`${link === activeLink ? 'current-' : ''}menu-item`}
                          onClick={() => changePage(link)}
                        >
                          <span>{titleize(link)}</span>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header__right">
                <div className="mobile-button">
                  <span></span>
                </div>
                <div className="wallet">
                  {account ? (
                    <Button onClick={() => setShowDetails(true)} className="mr-1">
                      Wallet Details
                    </Button>
                  ) : (
                    <Button onClick={() => setShowConnect(true)} className="mr-1">
                      Wallet
                    </Button>
                  )}
                </div>
                <div className="wallet">
                  <Button onClick={() => changePage('trade')}>Trade Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WalletDetails
        show={showDetails}
        handleClose={() => setShowDetails(false)}
        accountAddress={account}
        accountBalance={balance}
      />
      <ConnectWallet show={showConnect} handleClose={() => setShowConnect(false)} loginWallet={loginWallet} />
    </header>
  );
};
