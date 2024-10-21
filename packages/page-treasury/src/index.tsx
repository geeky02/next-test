// Copyright 2017-2024 @polkadot/app-treasury authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Route, Routes } from 'react-router';

import { useCollectiveMembers } from '@polkadot/react-hooks';

import Overview from './Overview/index.js';
import Tips from './Tips/index.js';
import useTipHashes from './useTipHashes.js';

export { default as useCounter } from './useCounter.js';

interface Props {
  basePath: string;
}

function TreasuryApp ({ basePath }: Props): React.ReactElement<Props> {
  const { isMember, members } = useCollectiveMembers('council');
  const tipHashes = useTipHashes();

  return (
    <main className='treasury--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Tips
                hashes={tipHashes}
                isMember={isMember}
                members={members}
              />
            }
            path='tips'
          />
          <Route
            element={
              <Overview
                isMember={isMember}
                members={members}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(TreasuryApp);
