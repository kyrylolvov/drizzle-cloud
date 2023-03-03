import { ICreateDatabase, IDataBase } from '../types/database';
import { instance } from './instance';

export const getDatabases = async () => instance.get<IDataBase[]>('/db');

export const getDatabaseById = async (databaseId: string) => instance.get<IDataBase>(`/db/${databaseId}`);

export const createDatabase = async ({ name, region }: ICreateDatabase) =>
  instance.post<IDataBase>('/db', {
    name,
    region,
  });
