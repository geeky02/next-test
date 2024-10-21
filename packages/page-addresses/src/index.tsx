// Copyright 2017-2024 @polkadot/app-addresses authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';


import Contacts from './Contacts/index.js';

function AddressesApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {

  return (
    <main>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Contacts onStatusChange={onStatusChange} />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(AddressesApp);
