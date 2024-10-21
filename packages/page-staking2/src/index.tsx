// Copyright 2017-2024 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router';

import { useApi, useFavorites } from '@polkadot/react-hooks';

import Pools from './Pools/index.js';
import Validators from './Validators/index.js';
import { STORE_FAVS_BASE } from './constants.js';
import { clearCache } from './useCache.js';
import useSessionInfo from './useSessionInfo.js';

function StakingApp ({ basePath }: Props): React.ReactElement<Props> {
  const { api } = useApi();

  // on unmount anything else, ensure that for the next round we
  // are starting with a fresh cache (there could be large delays)
  // between opening up staking (excuted inline, not via effect)
  useEffect((): () => void => {
    return (): void => {
      clearCache();
    };
  }, []);

  const [favorites, toggleFavorite] = useFavorites(STORE_FAVS_BASE);
  const sessionInfo = useSessionInfo();

  const isRelay = useMemo(
    () => !!(api.query.parasShared || api.query.shared)?.activeValidatorIndices,
    [api]
  );

  return (
    <main className='staking--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Pools />
            }
            path='pools'
          />
          <Route
            element={
              <Validators
                favorites={favorites}
                isRelay={isRelay}
                sessionInfo={sessionInfo}
                toggleFavorite={toggleFavorite}
              />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export default React.memo(StakingApp);
