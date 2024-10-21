// Copyright 2017-2024 @polkadot/app-contracts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';


import Contracts from './Contracts/index.js';

function ContractsApp ({ className = '' }: Props): React.ReactElement<Props> {

  return (
    <main className={`${className} contracts--App`}>
      <Contracts />
    </main>
  );
}

export default React.memo(ContractsApp);
