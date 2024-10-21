// Copyright 2017-2024 @polkadot/app-collator authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';


import Collators from './Collators.js';

interface Props {
  basePath: string;
  className?: string;
}

function CollatorApp ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <Collators />
    </main>
  );
}

export default React.memo(CollatorApp);
