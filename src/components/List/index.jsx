import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import "./list.css";
import CustomModal from "../CustomModal";
const List = ({ listData }) => {
  const [showPreview, setShowPreview] = useState(false);

  const [previewdata, setPreviewData] = useState();

  const previewHandler = (e) => (
    setShowPreview(!showPreview),
    setPreviewData(listData?.filter((item) => item?.id === e.target.id))
  );

  return (
    <Container className="listContainer">
      <h5>Template Name</h5>
      <ListGroup>
        {listData?.map((item, index) => {
          return (
            <ListGroup.Item key={index} id={item?.id} onClick={previewHandler}>
              {index}. {item?.templateName}
            </ListGroup.Item>
          );
        })}

        <CustomModal
          previewData={previewdata ? previewdata : ""}
          showPreview={showPreview}
          handleClose={previewHandler}
        />
      </ListGroup>
    </Container>
  );
};

export default List;
