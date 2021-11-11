import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from 'react-router';
import InputMask from "react-input-mask";
import api from "../../api/api"


const UpdateForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const res = await api.get(`${id}`)
    setApiData(res.data)
    console.log(res.data)

  }

  const handleUpdate = (e) => {
    e.preventDefault();
    api.put("", apiData).then(() => {
      history.push("/")
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiData({
      ...apiData, [name]: value
    });
  }


  return (
    <Container className="col-sm-4">
      <Row >
        <Form onSubmit={handleUpdate}>
          <input type="hidden" value={apiData.id} />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={apiData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={apiData.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="col-sm-12">Telefone</Form.Label>
            <InputMask
              className="col-sm-12"
              id="phone"
              data-testid="phone"
              type="tel"
              name="phone"
              value={apiData.phone}
              onChange={handleChange}
              // mask="(99)99999-9999"
              />
          </Form.Group>
          <Button variant="success" type="submit">
            Atualizar
          </Button>
        </Form>
      </Row>
    </Container>
  )
}


export default UpdateForm;