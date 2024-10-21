// Copyright 2017-2024 @polkadot/app-referenda authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';


import Referenda from './Referenda/index.js';

export { default as useCounter } from './useCounter.js';

interface Props {
  basePath: string;
  className?: string;
}

function App ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Referenda
        isConvictionVote
        palletReferenda='referenda'
        palletVote='convictionVoting'
      />
    </main>
  );
}

export default React.memo(App);
