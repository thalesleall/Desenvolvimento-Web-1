import React, { useState } from "react";
import { Card, Form, Container } from "react-bootstrap";

const CorFundo = () => {
  const [cor, setCor] = useState("white");

  const handleColorChange = (e) => {
    setCor(e.target.value);
    document.body.style.backgroundColor = e.target.value; // Alterando a cor do fundo
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <Card className="p-4 shadow">
        <Card.Title className="text-center">Escolha a Cor de Fundo</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Escolha uma cor:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Vermelho"
                name="cor"
                value="red"
                onChange={handleColorChange}
                checked={cor === "red"}
              />
              <Form.Check
                type="radio"
                label="Verde"
                name="cor"
                value="green"
                onChange={handleColorChange}
                checked={cor === "green"}
              />
              <Form.Check
                type="radio"
                label="Azul"
                name="cor"
                value="blue"
                onChange={handleColorChange}
                checked={cor === "blue"}
              />
              <Form.Check
                type="radio"
                label="Amarelo"
                name="cor"
                value="yellow"
                onChange={handleColorChange}
                checked={cor === "yellow"}
              />
            </div>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default CorFundo;
