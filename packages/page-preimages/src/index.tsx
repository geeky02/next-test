// Copyright 2017-2024 @polkadot/app-preimages authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';


import Preimages from './Preimages/index.js';

interface Props {
  basePath: string;
  className?: string;
}

function App ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Preimages />
    </main>
  );
}

export default React.memo(App);
