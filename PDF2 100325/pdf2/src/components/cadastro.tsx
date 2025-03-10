import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [user, setUser] = useState({ nome: "", email: "", idade: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ nome, email, idade });
    console.log(user);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card className="p-4 shadow">
        <Card.Title className="text-center">Cadastro</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Idade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite sua Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Registrar
          </Button>
        </Form>
      </Card>
      
      {user.nome && (
        <Card className="mt-4 p-3 text-center">
          <Card.Body>
            <Card.Title>Bem-vindo, {user.nome}!</Card.Title>
            <Card.Text>
              <strong>Idade:</strong> {user.idade}
              <br />
              <strong>Email:</strong> {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Cadastro;