// Copyright 2017-2024 @polkadot/app-assets authors & contributors
// SPDX-License-Identifier: Apache-2.0

// augment package
import '@polkadot/api-augment/substrate';

import type { BN } from '@polkadot/util';

import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router';

import { BN_ONE } from '@polkadot/util';

import Balances from './Balances/index.js';
import Overview from './Overview/index.js';
import useAssetIds from './useAssetIds.js';
import useAssetInfos from './useAssetInfos.js';

interface Props {
  basePath: string;
  className?: string;
}

function findOpenId (ids?: BN[]): BN {
  if (!ids?.length) {
    return BN_ONE;
  }

  const lastTaken = ids.find((id, index) =>
    index === 0
      ? !id.eq(BN_ONE)
      : !id.sub(BN_ONE).eq(ids[index - 1])
  );

  return lastTaken
    ? lastTaken.sub(BN_ONE)
    : ids[ids.length - 1].add(BN_ONE);
}

function AssetApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const ids = useAssetIds();
  const infos = useAssetInfos(ids);

  const openId = useMemo(
    () => findOpenId(ids),
    [ids]
  );

  return (
    <main className={className}>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Balances infos={infos} />
            }
            path='balances'
          />
          <Route
            element={
              <Overview
                ids={ids}
                infos={infos}
                openId={openId}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(AssetApp);
