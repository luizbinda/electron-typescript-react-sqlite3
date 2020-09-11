import React, { useEffect, useState } from 'react';
import { Container, Header, Lista } from './styles';
import { ipcRenderer } from 'electron';
import { Tarefa } from '../../backend/src/controllers/TarefasController';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    ipcRenderer.send('tarefas/index');
    ipcRenderer.on('tarefas/index', (_, response) => {
      console.log(response);
      setTarefas(response);
    });
  }, []);

  const handlerDeletarTarefa = (tarefa: Tarefa) => {
    ipcRenderer.send('tarefas/delete', tarefa.id);
  };

  return (
    <Container>
      <Lista>
        <Header>
          <h1>Tarefas Cadastradas</h1>
          <Link to="/cadastrarTarefa">
            <Button>Cadastrar Tarefas</Button>
          </Link>
        </Header>
        <ul>
          {tarefas.map((tarefa: Tarefa) => (
            <li key={tarefa.id}>
              <div>
                <h3>{tarefa.name}</h3>
                <p>{tarefa.descripton}</p>
              </div>
              <button onClick={() => handlerDeletarTarefa(tarefa)}>
                <h2>X</h2>
              </button>
            </li>
          ))}
        </ul>
      </Lista>
    </Container>
  );
};

export default Home;
