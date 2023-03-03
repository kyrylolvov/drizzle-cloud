export interface IDataBaseStore {
  databases: IDataBase[];
  currentDatabase: IDataBase | null;

  getDatabases: () => Promise<void>;
  getDatabaseById: (databaseId: string) => Promise<void>;
  createDatabase: ({ name, region }: ICreateDatabase) => Promise<void>;
}

export interface IDataBase {
  id: number;
  name: string;
  region: string;
  tag: string;
  created_at: string; // new Date().toString()
  updated_at: string; // new Date().toString()
}

export interface ICreateDatabase {
  name: string;
  region: string;
}
