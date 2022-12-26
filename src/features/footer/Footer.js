import React from 'react';
import logoFooter from '../../assets/images/logo/logo-footer.png';

export const Footer = () => {
  return (
    <footer className="footer style-2">
      <div className="container">
        <div className="footer__main">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="info">
                <a href="index.html" className="logo">
                  <img src={logoFooter} alt="" />
                </a>
                <h6>Let`s talk! 🤙</h6>
                <ul className="list">
                  <li>
                    <p>+91 9244 342423</p>
                  </li>
                  <li>
                    <p>support@vozswap.io</p>
                  </li>
                  <li>
                    <p>C-68,Pandav Nagar,New Delhi-110092</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="widget">
                <div className="widget-link">
                  <h6 className="title">PRODUCTS</h6>
                  <ul>
                    <li>
                      <a href="spot.html">Spot</a>
                    </li>
                    <li>
                      <a href="#">Inverse Perpetual</a>
                    </li>
                    <li>
                      <a href="#">USDT Perpetual</a>
                    </li>
                    <li>
                      <a href="exchange.html">Exchange</a>
                    </li>
                    <li>
                      <a href="#">Launchpad</a>
                    </li>
                    <li>
                      <a href="#">Binance Pay</a>
                    </li>
                  </ul>
                </div>
                <div className="widget-link s2">
                  <h6 className="title">SERVICES</h6>
                  <ul>
                    <li>
                      <a href="buy-crypto-select.html">Buy Crypto</a>
                    </li>
                    <li>
                      <a href="markets.html">Markets</a>
                    </li>
                    <li>
                      <a href="#">Tranding Fee</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Referral Program</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="footer-contact">
                <h5>Newletters</h5>
                <p>Subscribe our newsletter to get more free design course and resource.</p>
                <form action="#">
                  <input type="email" placeholder="Enter your email" required="" />
                  <button type="submit" className="btn-action">
                    Submit
                  </button>
                </form>
                <ul className="list-social">
                  <li>
                    <a href="#">
                      <span className="icon-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-youtube"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="footer__bottom">
          <p>©2022 vozswap.com. All rights reserved. Terms of Service | Privacy Terms</p>
        </div>
      </div>
    </footer>
  );
};
