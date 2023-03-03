import React, { FC, useState } from 'react';

import { ReactComponent as PlusIcon } from '../assets/images/icons/plus-icon.svg';
import DatabaseModal from '../components/DatabaseModal';
import IconButton from '../components/IconButton';
import ListItem from '../components/ListItem';

import * as css from './_css';

const DashboardPage: FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div css={css.pageContainer}>
      <div css={css.header}>
        <h2>Databases</h2>
        <IconButton type="button" onClick={() => setIsAddModalOpen(true)}>
          <PlusIcon />
        </IconButton>
      </div>
      <div css={css.body}>
        <ListItem name="Drizzle Database" region="NYC" />
      </div>

      <DatabaseModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default DashboardPage;
