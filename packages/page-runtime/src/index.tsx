// Copyright 2017-2024 @polkadot/app-runtime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';


import Runtime from './Runtime/index.js';

function RuntimeApp ({ basePath }: Props): React.ReactElement<Props> {

  return (
    <main className='runtime--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Runtime />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(RuntimeApp);
