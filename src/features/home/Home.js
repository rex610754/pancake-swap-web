import React from 'react';
// import { Container } from 'react-bootstrap';
import bannerImage from '../../assets/images/banner.png';
import aboutImage from '../../assets/images/layout/about-h1.png';
import icon1Image from '../../assets/images/icon/icon-01.png';
import icon2Image from '../../assets/images/icon/icon-02.png';
import icon3Image from '../../assets/images/icon/icon-03.png';
import icon4Image from '../../assets/images/icon/icon-04.png';
import icon5Image from '../../assets/images/icon/icon-05.png';
import downloadImage from '../../assets/images/layout/download.png';
import googlePlayIcon from '../../assets/images/icon/googleplay.png';
import appStoreIcon from '../../assets/images/icon/appstore.png';
import avtar1 from '../../assets/images/avt/avt-02.png';
import avtar2 from '../../assets/images/avt/avt-03.png';
import avtar3 from '../../assets/images/avt/avt-04.png';
import cloudImage from '../../assets/images/icon/Cloud.png';
import connectLineImage from '../../assets/images/icon/connect-line.png';
import walletImage from '../../assets/images/icon/Wallet.png';
import miningImage from '../../assets/images/icon/Mining.png';
import comparisonImage from '../../assets/images/icon/Comparison.png';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__content">
                <h2 className="title">Buy & Sell Digital Assets In Vozswap</h2>
                <p className="fs-20 desc">
                  Coin rockie is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                </p>
                <a href="#" className="btn-action">
                  <span>Get started now</span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__image">
                <img src={bannerImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crypto" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="crypto__main">
                <div className="flat-tabs">
                  <ul className="menu-tab">
                    <li className="active">
                      <h6 className="fs-16">Crypto</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">DeFi</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">BSC</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">NFT</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Metaverse</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Polkadot</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Solana</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Opensea</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Makersplace</h6>
                    </li>
                  </ul>
                  <div className="content-tab">
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner">
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                              <span className="path5"></span>
                              <span className="path6"></span>
                            </span>
                            <span>BNB</span> <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coin-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text">
                <h3 className="heading">Market Update</h3>
                <a className="btn-action-2" href="#">
                  See All Coins
                </a>
              </div>

              <div className="coin-list__main">
                <div className="flat-tabs">
                  <ul className="menu-tab">
                    <li className="active">
                      <h6 className="fs-16">View All</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Metaverse</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Entertainment</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Energy</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">NFT</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Gaming</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Music</h6>
                    </li>
                  </ul>
                  <div className="content-tab">
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-1"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-2"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-3"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-4"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-5"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-6"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-7"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-8"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-9"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-10"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-11"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-12"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-13"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-14"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-15"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-16"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-17"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-18"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-19"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-20"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-21"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-22"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-23"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-24"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-25"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-26"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-27"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-28"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-29"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-30"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-31"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-32"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-33"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-34"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-35"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-36"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-37"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-38"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-39"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-40"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-41"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-42"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-43"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-44"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-45"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-46"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-47"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-48"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-49"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-50"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-51"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-52"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-53"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                                <span>XRP</span> <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-54"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                  <span className="path5"></span>
                                  <span className="path6"></span>
                                  <span className="path7"></span>
                                  <span className="path8"></span>
                                  <span className="path9"></span>
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-55"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star"></span>
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                  <span className="path4"></span>
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-56"></div>
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h3 className="heading">How It Work</h3>
                <p className="fs-20 desc">
                  Stacks is a production-ready library of stackable content blocks built in React Native.
                </p>
              </div>

              <div className="work__main">
                <div className="work-box">
                  <div className="image">
                    <img src={cloudImage} alt="" />
                  </div>
                  <div className="content">
                    <p className="step">Step 1</p>
                    <a href="#" className="title">
                      Download
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connectLineImage} alt="" />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={walletImage} alt="" />
                  </div>
                  <div className="content">
                    <p className="step">Step 2</p>
                    <a href="#" className="title">
                      Connect wallet
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connectLineImage} alt="" />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={miningImage} alt="" />
                  </div>
                  <div className="content">
                    <p className="step">Step 3</p>
                    <a href="#" className="title">
                      Start trading
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connectLineImage} alt="" />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={comparisonImage} alt="" />
                  </div>
                  <div className="content">
                    <p className="step">Step 4</p>
                    <a href="#" className="title">
                      Earn money
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content blocks built in React Native.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="about_image">
                <div className="swiper img-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img className="img-main" src={aboutImage} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={aboutImage} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={aboutImage} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={aboutImage} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>

                <img className="icon icon-1" src={icon1Image} alt="" />
                <img className="icon icon-2" src={icon2Image} alt="" />
                <img className="icon icon-3" src={icon3Image} alt="" />
                <img className="icon icon-4" src={icon4Image} alt="" />
                <img className="icon icon-5" src={icon5Image} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="heading">What Is Rockie</h3>
                <p className="fs-20 decs">
                  Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                  Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                </p>
                <ul className="list">
                  <li>
                    <h6 className="title">
                      <span className="icon-check"></span>View real-time cryptocurrency prices
                    </h6>
                    <p className="text">
                      Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                      Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                    </p>
                  </li>
                  <li>
                    <h6 className="title">
                      <span className="icon-check"></span>Buy and sell BTC, ETH, XRP, OKB, Etc...
                    </h6>
                    <p className="text">
                      Experience a variety of trading on Bitcost. You can use various types of coin transactions such as
                      Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                    </p>
                  </li>
                </ul>
                <a href="#" className="btn-action">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="download__content" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="heading">Free your money & Invest with confident</h3>
                <p className="fs-20 decs">With Cryptor Trade, you can be sure your trading skills are matched</p>
                <ul className="list">
                  <li>
                    <h6 className="title">
                      <span className="icon-check"></span>Buy, Sell, And Trade On The Go
                    </h6>
                    <p className="text">Managa your holdings from your mobile decive</p>
                  </li>
                  <li>
                    <h6 className="title">
                      <span className="icon-check"></span>Take Control Of Your Wealth
                    </h6>
                    <p className="text">Rest assured you (and only you) have access to your funds</p>
                  </li>
                </ul>
                <div className="group-button">
                  <a href="#">
                    <img src={googlePlayIcon} alt="" />
                  </a>
                  <a href="#">
                    <img src={appStoreIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="download__image">
                <div className="button">Scan To Download</div>
                <img src={downloadImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h3 className="heading">Our customers love what we do</h3>
                <h6 className="fs-20">Transform Your idea into Reality With Finsweet</h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>

                <div className="swiper swiper-thumb1">
                  <div className="swiper-wrapper list-img">
                    <div className="swiper-slide">
                      <img src={avtar1} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={avtar2} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={avtar3} alt="" />
                    </div>
                  </div>
                </div>
                <div className="couter">
                  <h6>30+</h6>
                  <p className="title">Customer Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="swiper swiper-testimonial-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote"></span>
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way easy to learn with very good
                        explanations of the code, I could easily understand and develop applications with the knowledge
                        gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src={avtar1} alt="" />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src="assets/images/partner/logo-05.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote"></span>
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way easy to learn with very good
                        explanations of the code, I could easily understand and develop applications with the knowledge
                        gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src="assets/images/avt/avt-03.png" alt="" />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src="assets/images/partner/logo-05.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote"></span>
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way easy to learn with very good
                        explanations of the code, I could easily understand and develop applications with the knowledge
                        gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src="assets/images/avt/avt-04.png" alt="" />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src="assets/images/partner/logo-05.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sale">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="block-text">
                <h4 className="heading">Earn up to $25 worth of crypto</h4>
                <p className="desc">
                  Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="button">
                <a href="#">Create Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
