import React, { useState, useEffect } from "react";
import { Card, Form, Button, Container, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";

const Tarefas = () => {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // Atualizar o localStorage sempre que a lista de tarefas mudar
  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTarefas([...tarefas, input]);
      setInput("");
      
    }
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center" style={{ maxWidth: "500px" }}>
      <Card className="p-4 shadow w-100">
        <Card.Title className="text-center text-primary">Cadastro de Tarefas</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nova Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite uma nova tarefa"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <Button variant="success" type="submit" className="w-100">
              Adicionar
            </Button>
            <OverlayTrigger placement="top" overlay={<Tooltip>Resetar</Tooltip>}>
              <Button variant="danger" className="w-100" onClick={() => setTarefas([])}>
                <FaTrash />
              </Button>
            </OverlayTrigger>
          </div>
        </Form>
      </Card>

      {tarefas.length > 0 && (
        <Card className="mt-4 p-3 shadow w-100">
          <Card.Body>
            <Card.Title className="text-center text-secondary">Lista de Tarefas</Card.Title>
            <ListGroup variant="flush">
              {tarefas.map((tarefa, index) => (
                <ListGroup.Item key={index} className="text-center">
                  {tarefa}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Tarefas;
