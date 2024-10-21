// Copyright 2017-2024 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Route, TFunction } from './types.js';

import Component from '@polkadot/app-calendar';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: []
    },
    group: 'developer',
    icon: 'users',
    name: 'multisigAccounts',
    text: t('nav.multisig-accounts', 'Multisig Accounts', { ns: 'apps-routing' }),
  };
}
