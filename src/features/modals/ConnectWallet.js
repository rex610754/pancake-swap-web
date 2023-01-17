import React from 'react';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import './Modal.scss';
import { showErrorToast } from '../../helpers/toasters';
// import { toast } from '../../components/Toast/Toast';
import iconMatamask from '../../assets/images/icon/metamask_icon.png';

export const ConnectWallet = (props) => {
  const loginCall = async () => {
    try {
      const account = await isMetamaskInstalled();
      if (account) {
        props.loginWallet(account);
      }
    } catch (err) {
      showErrorToast(err.message);
    }
  };

  const isMetamaskInstalled = async () => {
    const { ethereum, web3 } = window;
    const result = Boolean(ethereum && ethereum.isMetaMask);
    showErrorToast();
    if (result) {
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        return accounts[0];
      } catch (err) {
        showErrorToast(err.message);
        return false;
      }
    } else if (ethereum) {
      //trust wallet
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        return accounts[0];
      } catch (err) {
        showErrorToast(err.message);
        return false;
      }
    } else if (web3) {
      //trustwallet
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    } else {
      showErrorToast(`Install extension first!`);
      // toast.error(`Install extension first!`);
      return false;
    }
  };

  return (
    <Modal centered scrollable={true} show={props.show} onHide={props.handleClose} className="connect-wallet-modal">
      <Modal.Header className="d-flex justify-content-center" style={{ borderBottom: '0px' }}>
        <Modal.Title className="d-flex justify-content-center">Connect to a wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="baseToken_style token_strut">
            <ul>
              <li>
                <Button className="wallet-button" onClick={loginCall}>
                  MetaMasks
                  <span>
                    <img src={iconMatamask} />
                  </span>{' '}
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
