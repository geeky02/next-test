// Copyright 2017-2024 @polkadot/app-broker authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React from 'react';


import Overview from './Overview/index.js';

interface Props {
  basePath: string;
  className?: string;
}

function BrokerApp ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Overview />
    </main>
  );
}

export default React.memo(BrokerApp);
