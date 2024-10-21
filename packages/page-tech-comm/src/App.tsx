// Copyright 2017-2024 @polkadot/app-tech-comm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CollectiveType } from '@polkadot/react-hooks/types';
import type { Hash } from '@polkadot/types/interfaces';

import React from 'react';
import { Route, Routes } from 'react-router';

import { useApi, useCall, useCollectiveMembers } from '@polkadot/react-hooks';

import Overview from './Overview/index.js';
import Proposals from './Proposals/index.js';

interface Props {
  basePath: string;
  className?: string;
  type: CollectiveType;
}

function TechCommApp ({ basePath, className, type }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const { isMember, members, prime } = useCollectiveMembers(type);
  const proposalHashes = useCall<Hash[]>(api.derive[type].proposalHashes);

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Proposals
                isMember={isMember}
                members={members}
                prime={prime}
                proposalHashes={proposalHashes}
                type={type}
              />
            }
            path='proposals'
          />
          <Route
            element={
              <Overview
                isMember={isMember}
                members={members}
                prime={prime}
                proposalHashes={proposalHashes}
                type={type}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(TechCommApp);
