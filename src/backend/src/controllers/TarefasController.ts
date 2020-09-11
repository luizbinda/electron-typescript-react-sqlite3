import knex from '../database/connection';

export interface Tarefa {
  id?: number;
  name: string;
  descripton: string;
}

export default class TarefasController {
  index(): Promise<any> {
    return knex('tarefas').select('*');
  }

  store(tarefa: Tarefa): Promise<any> {
    return knex('tarefas').insert(tarefa);
  }

  delete(id: number): Promise<any> {
    return knex('tarefas').where('id', id).del();
  }
}
