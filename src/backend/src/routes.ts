import { ipcMain } from 'electron';

import TarefasController from './controllers/TarefasController';

const tarefasController = new TarefasController();

ipcMain.on('tarefas/index', (event, arg) => {
  tarefasController
    .index()
    .then((response) => {
      event.reply('tarefas/index', response);
    })
    .catch((error) => {
      console.log(error);
      event.reply('tarefas/index', error);
    });
});

ipcMain.on('tarefas/store', (event, arg) => {
  tarefasController.store(arg).catch((error) => console.log(error));
  tarefasController
    .index()
    .then((response) => {
      event.reply('tarefas/index', response);
    })
    .catch((error) => console.log(error));
});

ipcMain.on('tarefas/delete', (event, arg) => {
  console.log('aki');
  tarefasController.delete(arg).catch((error) => console.log(error));
  tarefasController
    .index()
    .then((response) => {
      event.reply('tarefas/index', response);
    })
    .catch((error) => console.log(error));
});
