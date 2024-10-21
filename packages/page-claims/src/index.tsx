// Copyright 2017-2024 @polkadot/app-claims authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { Trans } from 'react-i18next';


export { default as useCounter } from './useCounter.js';


function ClaimsApp ({ }: Props): React.ReactElement<Props> {

  return (
    <main>
      <h1>
        <Trans>Create <em>new</em> Multisig</Trans>
      </h1>
    </main>
  );
}

export default React.memo(ClaimsApp);
