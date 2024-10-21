// Copyright 2017-2024 @polkadot/app-signing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';

import Sign from './Sign.js';
import Verify from './Verify.js';

function SigningApp ({ basePath }: Props): React.ReactElement<Props> {

  return (
    <main className='toolbox--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Verify />
            }
            path='verify'
          />
          <Route
            element={
              <Sign />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(SigningApp);
