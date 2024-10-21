// Copyright 2017-2024 @polkadot/app-alliance authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';

import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router';

import Motions from '@polkadot/app-tech-comm/Proposals';
import { useApi, useCall, useCollectiveMembers } from '@polkadot/react-hooks';

import Announcements from './Announcements/index.js';
import Members from './Members/index.js';
import Unscrupulous from './Unscrupulous/index.js';
import useAnnoucements from './useAnnoucements.js';
import useMembers from './useMembers.js';
import useRule from './useRule.js';
import useUnscrupulous from './useUnscrupulous.js';

export { default as useCounter } from './useCounter.js';

interface Props {
  basePath: string;
  className?: string;
}

// TODO Make configurable
const DEFAULT_THRESHOLD = 2 / 3;

function AllianceApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const proposalHashes = useCall<Hash[]>(api.derive.alliance.proposalHashes);
  const { isMember: isVoter, members: voters, prime } = useCollectiveMembers('alliance');
  const accouncements = useAnnoucements();
  const members = useMembers();
  const rule = useRule();
  const unscrupulous = useUnscrupulous();

  const motionFilter = useCallback(
    (section: string) => section === 'alliance',
    []
  );

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Announcements accouncements={accouncements} />
            }
            path='announcements'
          />
          <Route
            element={
              <Motions
                defaultProposal={api.tx.alliance.addUnscrupulousItems}
                defaultThreshold={DEFAULT_THRESHOLD}
                filter={motionFilter}
                isMember={isVoter}
                members={voters}
                prime={prime}
                proposalHashes={proposalHashes}
                type='alliance'
              />
            }
            path='motions'
          />
          <Route
            element={
              <Unscrupulous unscrupulous={unscrupulous} />
            }
            path='unscrupulous'
          />
          <Route
            element={
              <Members
                isVoter={isVoter}
                members={members}
                prime={prime}
                rule={rule}
                unscrupulous={unscrupulous}
                voters={voters}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(AllianceApp);
