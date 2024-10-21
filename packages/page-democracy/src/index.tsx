// Copyright 2017-2024 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Route, Routes } from 'react-router';


import Overview from './Overview/index.js';

export { default as useCounter } from './useCounter.js';

interface Props {
  basePath: string;
}

function DemocracyApp ({ basePath }: Props): React.ReactElement<Props> {

  return (
    <main className='democracy--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Overview />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(DemocracyApp);
