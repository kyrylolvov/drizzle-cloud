import { create } from 'zustand';
import { createDatabase, getDatabaseById, getDatabases } from '../api/database';
import { IDataBaseStore } from '../types/database';

export const useDatabaseStore = create<IDataBaseStore>()((set, get) => ({
  databases: [],
  currentDatabase: null,

  getDatabases: async () => {
    const { data } = await getDatabases();

    set({ databases: data });
  },
  getDatabaseById: async (databaseId) => {
    const { data } = await getDatabaseById(databaseId);

    set({ currentDatabase: data });
  },
  createDatabase: async ({ name, region }) => {
    const { data } = await createDatabase({ name, region });

    set({ databases: [data, ...get().databases] });
  },
}));
