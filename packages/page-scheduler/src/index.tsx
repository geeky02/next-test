// Copyright 2017-2024 @polkadot/app-scheduler authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useApi } from '@polkadot/react-hooks';

import DispatchQueue from './DispatchQueue.js';
import Scheduler from './Scheduler.js';

interface Props {
  basePath: string;
  className?: string;
}

function App ({ className }: Props): React.ReactElement<Props> {
  const { api } = useApi();

  return (
    <main className={className}>
      {api.query.democracy && (
        <DispatchQueue />
      )}
      {api.query.scheduler && (
        <Scheduler />
      )}
    </main>
  );
}

export default React.memo(App);
