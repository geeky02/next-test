// Copyright 2017-2024 @polkadot/app-files authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyedEvent } from '@polkadot/react-hooks/ctx/types';

import React from 'react';
import CrustFiles from './CrustFiles.js';

interface Props {
  basePath: string;
  className?: string;
  newEvents?: KeyedEvent[];
}

function FilesApp ({ className }: Props): React.ReactElement<Props> {

  return (
    <main className={className}>
      <CrustFiles />
    </main>
  );
}

export default React.memo(FilesApp);
