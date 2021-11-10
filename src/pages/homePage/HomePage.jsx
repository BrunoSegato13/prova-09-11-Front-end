import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Container, Button, Row, Col } from "react-bootstrap";
import api from "../../api/api"

const HomePage = () => {
  const [apiData, setApiData] = useState([]);

  useEffect( () => {
    getData()
  }, [])

  const getData = async () => {
    const res =  await api.get()
    setApiData(res.data)
  }

  const onDelete = (id) => {
    api.delete(`${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <Container fluid="md">
      <Row className="justify-content-end mb-2 mt-2">
        <Col >
        <Button as={Link}
          to="/create"
        >
          Cadastrar Novo
        </Button>
        </Col>
      </Row>
      <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Atualizar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {apiData?.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>
                  <Button 
                    variant="warning"
                    as={Link}
                    to={`/update/${data.id}`}
                    >
                    Atualizar
                  </Button>
              </td>
              <td>
              <Button variant="danger" onClick={() => onDelete(data.id)}>Deletar</Button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </Table>
      </Row>
    </Container>
  );
}

export default HomePage;