// Copyright 2017-2024 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';


import I18n from './I18n/index.js';
import Metadata from './Metadata/index.js';
import Developer from './Developer.js';
import General from './General.js';
import useCounter from './useCounter.js';

export { useCounter };

function SettingsApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {

  return (
    <main className='settings--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Developer onStatusChange={onStatusChange} />
            }
            path='developer'
          />
          <Route
            element={
              <I18n />
            }
            path='i18n'
          />
          <Route
            element={
              <Metadata />
            }
            path='metadata'
          />
          <Route
            element={
              <General />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(SettingsApp);
