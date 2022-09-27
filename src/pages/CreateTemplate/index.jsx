import React, { useEffect } from "react";
import Header from "../../components/Header";
import CustomModal from "../../components/CustomModal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./createTemplate.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTemplate = ({ data, setData }) => {
  const [dummyObject, setDummyObject] = useState({
    id: 0,
    templateName: "",
    fieldName: "",
    hobbies: [],
    required: false,
  });

  const [showPreview, setShowPreview] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [input, setInput] = useState({
    fieldName: Boolean,
    templateName: Boolean,
    hobbies: Boolean,
  });
  const templateHandler = (e) => {
    const templateName = e.target.value;
    setDummyObject((pr) => ({ ...pr, templateName }));
    setInput((pr) => ({ ...pr, templateName: true }));
  };

  const fieldHandler = (e) => {
    const fieldName = e.target.value;
    setDummyObject((pr) => ({ ...pr, fieldName }));
    setInput((pr) => ({ ...pr, fieldName: true }));
  };

  const inputArr = [
    {
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = (e) => {
    e.preventDefault();
    setArr((s) => {
      return [
        ...s,
        {
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      setDummyObject((pr) => ({ ...pr, hobbies: newArr, id: uuidv4() }));
      setInput((pr) => ({ ...pr, hobbies: true }));
      return newArr;
    });
  };

  const checkHandler = (e) => {
    dummyObject?.required
      ? setDummyObject((pr) => ({ ...pr, required: false }))
      : setDummyObject((pr) => ({ ...pr, required: true }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (dummyObject.fieldName === "") {
      setInput((pr) => ({ ...pr, fieldName: false }));
      setSubmitClicked(false);
    } else if (dummyObject.templateName === "") {
      setInput((pr) => ({ ...pr, templateName: false }));
      setSubmitClicked(false);
    } else if (Object.keys(JSON.stringify(dummyObject.hobbies)).length <= 2) {
      setInput((pr) => ({ ...pr, hobbies: false }));
      setSubmitClicked(false);
    } else {
      setData((pr) => [...pr, dummyObject]);
      setSubmitClicked(true);
      alert("Template is submitted,please go to home page for seeing the created template")
    }
  };

  useEffect(() => {
    localStorage.setItem("updatedData", JSON.stringify(data));
  }, [submitClicked]);

  const PreviewHandler = (e) => {
    e.preventDefault();
    setShowPreview(!showPreview);
  };
  return (
    <div>
      <Header heading="Create Template" home="false" />
      <CustomModal
        data={dummyObject}
        showPreview={showPreview}
        handleClose={PreviewHandler}
      />
      <Container className="tempContainer">
        <div className="tempInputContainer">
          <Form.Label>Template Name</Form.Label>
          <input
            className="tempInput"
            type="text"
            onChange={(e) => {
              templateHandler(e);
            }}
          />
          {input.templateName ? (
            ""
          ) : (
            <p className="danger">Please fill the field label</p>
          )}
        </div>
        <Container className="tempContainer">
          <Form>
            <Form.Group className="mb-3">
              <div className="mainField">
                <div className="fieldLabel">
                  <Form.Label htmlFor="disabledTextInput">
                    Field Label
                  </Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Enter the field label "
                    onChange={(e) => {
                      fieldHandler(e);
                    }}
                  />
                  {input.fieldName ? (
                    ""
                  ) : (
                    <p className="danger">Please fill the field label</p>
                  )}
                </div>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="Required"
                      onChange={checkHandler}
                      checked={dummyObject?.required}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="select">Dropdown Options </Form.Label>
              <button className="addButton" onClick={addInput}>
                +
              </button>
              <div className="hobbiesField">
                {arr.map((item, i) => {
                  return (
                    <input
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="20"
                    />
                  );
                })}
                {input.hobbies ? (
                  ""
                ) : (
                  <p className="danger">Please fill the field label</p>
                )}
              </div>
            </Form.Group>

            <Button
              type="submit"
              disabled={submitClicked}
              onClick={SubmitHandler}
            >
              Submit
            </Button>
            <Button
              type="submit"
              className="previewButton"
              onClick={PreviewHandler}
            >
              Preview
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default CreateTemplate;
