// Copyright 2017-2024 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';


import Accounts from './Accounts/index.js';
import Vanity from './Vanity/index.js';
import useCounter from './useCounter.js';

export { useCounter };


function CalendarApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {

  return (
    <main className='accounts--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Vanity onStatusChange={onStatusChange} />
            }
            path='vanity'
          />
          <Route
            element={
              <Accounts onStatusChange={onStatusChange} />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(CalendarApp);
