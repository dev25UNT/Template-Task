import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CustomDropdown from "../CustomDropdown";
import Form from "react-bootstrap/Form";
import "./modal.css";

const CustomModal = ({ show, handleClose, data, showPreview, previewData }) => {
  const required = data ? data?.required : previewData[0]?.required;
  return (
    <Modal show={showPreview} onHide={handleClose}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Template Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Full Name: </h6>
        <Form.Control
          placeholder="Your template name"
          value={data ? data?.templateName : previewData[0]?.templateName}
        />
        <h6 className="hobbiesModal">Hobbies {required ? "*" : ""}</h6>
        <CustomDropdown
          hobbies={data ? data?.hobbies : previewData[0]?.hobbies}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
