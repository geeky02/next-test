// Copyright 2017-2024 @polkadot/app-gilt authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Route, Routes } from 'react-router';


import Overview from './Overview/index.js';

interface Props {
  basePath: string;
  className?: string;
}

function GiltApp ({ basePath, className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
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

export default React.memo(GiltApp);
