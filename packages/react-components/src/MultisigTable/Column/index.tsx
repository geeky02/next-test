// Copyright 2017-2024 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Balance from './Balance.js';
import Id from './Id.js';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function ColumnBase ({ children }: Props): React.ReactElement<Props> {
  return (
    <td className={``}>
      {children}
    </td>
  );
}

const Column = React.memo(ColumnBase) as unknown as typeof ColumnBase & {
  Balance: typeof Balance,
  Id: typeof Id
};

Column.Balance = Balance;
Column.Id = Id;

export default Column;
