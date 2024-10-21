// Copyright 2017-2024 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';


import Bounties from './Bounties.js';

export { default as useCounter } from './useCounter.js';

interface Props {
  basePath: string;
  className?: string;
}

function BountiesApp ({ className = '' }: Props): React.ReactElement<Props> {

  return (
    <main className={`${className} bounties--App`}>
      <Bounties />
    </main>
  );
}

export default React.memo(BountiesApp);
