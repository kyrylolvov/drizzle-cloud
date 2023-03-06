import React, { FC, useEffect, useState } from 'react';

import { ReactComponent as PlusIcon } from '../assets/images/icons/plus-icon.svg';
import DatabaseModal from '../components/DatabaseModal';
import IconButton from '../components/IconButton';
import ListItem from '../components/ListItem';
import { useDatabaseStore } from '../store/databaseStore';

import * as css from './_css';

const DashboardPage: FC = () => {
  const { databases, getDatabases } = useDatabaseStore((state) => state);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    getDatabases();
  }, []);

  return (
    <div css={css.pageContainer}>
      <div css={css.header}>
        <h2>Databases</h2>
        <IconButton type="button" onClick={() => setIsAddModalOpen(true)}>
          <PlusIcon />
        </IconButton>
      </div>
      <div css={css.body}>
        {databases.map((database) => (
          <ListItem name={database.name} region={database.region} key={database.id} />
        ))}
      </div>

      <DatabaseModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default DashboardPage;
