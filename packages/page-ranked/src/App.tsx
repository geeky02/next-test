// Copyright 2017-2024 @polkadot/app-ranked authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletColl, PalletPoll } from './types.js';

import React from 'react';
import { Route, Routes } from 'react-router';

import Referenda from '@polkadot/app-referenda/Referenda';

import Members from './Members/index.js';
import useMembers from './useMembers.js';

interface Props {
  basePath: string;
  className?: string;
  palletColl: PalletColl;
  palletPoll: PalletPoll;
}

function App ({ basePath, className, palletColl, palletPoll }: Props): React.ReactElement<Props> {
  const members = useMembers(palletColl);

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Referenda
                members={members?.memberIds}
                palletReferenda={palletPoll}
                palletVote={palletColl}
                ranks={members?.memberRanks}
              />
            }
            path='referenda'
          />
          <Route
            element={
              <Members members={members?.members} />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(App);
