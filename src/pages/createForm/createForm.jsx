import React, { useState } from 'react';
import { Form, Button, Container, Row } from "react-bootstrap";
import { useHistory } from 'react-router';
import InputMask from "react-input-mask";
import api from "../../api/api"

const CreateForm = () => {
  const history = useHistory();
  const [apiData, setApiData] = useState({});

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post("", apiData).then(() => {
        history.push("/")
      })
    } catch (res) {
      alert(res.response.data.message)
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiData({
      ...apiData, [name]: value
    });
  }

  return (
    <Container className="col-sm-4">
      <Row>
        <Form onSubmit={handleCreate}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              id="name"
              data-testid="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              data-testid="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="col-sm-12">Telefone</Form.Label>
            <InputMask
              className="col-sm-12"
              id="phone"
              data-testid="phone"
              type="tel"
              name="phone"
              onChange={handleChange}
              // mask="(99)99999-9999"
              />
          </Form.Group>
          <Button id="save" variant="success" type="submit">
            Salvar
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default CreateForm;