// Copyright 2017-2024 @polkadot/app-rpc authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';


import Rpc from './Rpc/index.js';

function RpcApp ({ basePath }: Props): React.ReactElement<Props> {

  return (
    <main className='rpc--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Rpc />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(RpcApp);
