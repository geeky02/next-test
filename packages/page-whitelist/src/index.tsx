// Copyright 2017-2024 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';


import Hashes from './Hashes/index.js';

interface Props {
  basePath: string;
  className?: string;
}

function App ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Hashes />
    </main>
  );
}

export default React.memo(App);
