// Copyright 2017-2024 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Route, Routes } from 'react-router';

import { Icon } from '@polkadot/react-components';
import { useSudo } from '@polkadot/react-hooks';

import SetKey from './SetKey.js';
import Sudo from './Sudo.js';
import { useTranslation } from './translate.js';

function SudoApp ({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { allAccounts, hasSudoKey, sudoKey } = useSudo();

  return (
    <main>
      {hasSudoKey
        ? (
          <Routes>
            <Route path={basePath}>
              <Route
                element={
                  <SetKey
                    allAccounts={allAccounts}
                    isMine={hasSudoKey}
                    sudoKey={sudoKey}
                  />
                }
                path='key'
              />
              <Route
                element={
                  <Sudo
                    isMine={hasSudoKey}
                    sudoKey={sudoKey}
                  />
                }
                index
              />
            </Route>
          </Routes>
        )
        : (
          <article className='error padded'>
            <div>
              <Icon icon='ban' />
              {t('You do not have access to the current sudo key')}
            </div>
          </article>
        )
      }
    </main>
  );
}

export default React.memo(SudoApp);
