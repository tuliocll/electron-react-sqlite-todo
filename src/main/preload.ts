// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { TODO } from './services/Database.service';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  insertTODO: (todo: TODO) => ipcRenderer.invoke('todo:insert', todo),
  deleteTODO: (id: number) => ipcRenderer.invoke('todo:delete', id),
  getAllTODO: () => ipcRenderer.invoke('todo:getAll'),
  getOneTODO: (id: number) => ipcRenderer.invoke('todo:getOne', id),
  updateTODO: (todo: TODO) => ipcRenderer.invoke('todo:update', todo),
  login: (user: Auth) => ipcRenderer.invoke('auth:login', user),
  register: (user: Auth) => ipcRenderer.invoke('auth:register', user),
  getUser: (username: string) => ipcRenderer.invoke('auth:getUser', username),
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
