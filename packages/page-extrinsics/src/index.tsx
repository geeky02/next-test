// Copyright 2017-2024 @polkadot/app-extrinsics authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';
import type { DecodedExtrinsic } from './types.js';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router';


import Decoder from './Decoder.js';
import Submission from './Submission.js';


function ExtrinsicsApp ({ basePath }: Props): React.ReactElement<Props> {
  const [decoded, setDecoded] = useState<DecodedExtrinsic | null>(null);

  return (
    <main className='extrinsics--App'>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Decoder
                defaultValue={decoded?.hex}
                setLast={setDecoded}
              />
            }
            path='decode/:encoded?'
          />
          <Route
            element={
              <Submission defaultValue={decoded} />
            }
            index
          />
        </Route>
      </Routes>
    </main>
  );
}

export { ExtrinsicsApp };

export default React.memo(ExtrinsicsApp);
