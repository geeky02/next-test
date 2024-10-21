// Copyright 2017-2024 @polkadot/app-nfts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/api-augment/substrate';

import React from 'react';
import { Route, Routes } from 'react-router';


import AccountItems from './AccountItems/index.js';
import Overview from './Overview/index.js';
import useCollectionIds from './useCollectionIds.js';
import useCollectionInfos from './useCollectionInfos.js';

interface Props {
  basePath: string;
  className?: string;
}

function NftApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const ids = useCollectionIds();
  const infos = useCollectionInfos(ids);

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <AccountItems infos={infos} />
            }
            path='my-nfts'
          />
          <Route
            element={
              <Overview
                ids={ids}
                infos={infos}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(NftApp);
