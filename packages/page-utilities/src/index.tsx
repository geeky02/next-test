// Copyright 2017-2024 @polkadot/app-utilities authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Route, Routes } from 'react-router';


import Convert from './Convert.js';
import Hash from './Hash.js';
import Xcm from './Xcm.js';

interface Props {
  basePath: string;
  className?: string;
}

function UtilitiesApp ({ basePath, className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Xcm />
            }
            path='xcm'
          />
          <Route
            element={
              <Hash />
            }
            path='hash'
          />
          <Route
            element={
              <Convert />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(UtilitiesApp);
