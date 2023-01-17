import React from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.scss';

export const WalletDetails = (props) => {
  return (
    <Modal centered scrollable={true} show={props.show} onHide={props.handleClose} className="wallet-details-modal">
      <Modal.Header className="d-flex justify-content-center" style={{ borderBottom: '0px' }}>
        <Modal.Title className="d-flex justify-content-center">Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column details">
          <div>
            <span className="title">Account Address:</span>
            &nbsp;
            <span className="value">{props.accountAddress}</span>
          </div>
          <div>
            <span className="title">Account Balance:</span>
            &nbsp;&nbsp;
            <span className="value">{props.accountBalance}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
