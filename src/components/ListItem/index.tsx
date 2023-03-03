import React, { FC } from 'react';

import * as css from './css';

interface IListItemProps {
  name: string;
  region: string;
}

const ListItem: FC<IListItemProps> = ({ name, region }) => (
  <div css={css.listItem}>
    <p css={css.name}>{name}</p>
    <p css={css.region}>{region}</p>
  </div>
);

export default ListItem;
