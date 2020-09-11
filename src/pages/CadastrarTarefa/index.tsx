import React, { useState } from 'react';

import { Container, Form } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { ipcRenderer } from 'electron';
import { Link } from 'react-router-dom';

const CadastrarTarefa: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [descripton, setDescripton] = useState<string>('');

  const handlerCadastrarTarefa = () => {
    ipcRenderer.send('tarefas/store', {
      name,
      descripton,
    });
  };

  return (
    <Form>
      <h1>Nova Tarefa</h1>
      <Container>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={descripton}
          onChange={(e) => setDescripton(e.target.value)}
        ></textarea>
      </Container>
      <Button onClick={handlerCadastrarTarefa}>Cadastrar</Button>
      <Link to="/">Voltar</Link>
    </Form>
  );
};

export default CadastrarTarefa;
