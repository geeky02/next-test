// Copyright 2017-2024 @polkadot/app-storage authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParitalQueryTypes, QueryTypes } from '../types.js';

import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router';


import Consts from './Consts.js';
import Modules from './Modules.js';
import Raw from './Raw.js';

interface Props {
  basePath: string;
  onAdd: (query: QueryTypes) => void;
}

let id = -1;

function Selection ({ basePath, onAdd }: Props): React.ReactElement<Props> {

  const _onAdd = useCallback(
    (query: ParitalQueryTypes) => onAdd({ ...query, id: ++id }),
    [onAdd]
  );

  return (
    <>
      <Routes>
        <Route path={basePath}>
          <Route
            element={
              <Consts onAdd={_onAdd} />
            }
            path='constants'
          />
          <Route
            element={
              <Raw onAdd={_onAdd} />
            }
            path='raw'
          />
          <Route
            element={
              <Modules onAdd={_onAdd} />
            }
            index
          />
        </Route>
      </Routes>
    </>
  );
}

export default React.memo(Selection);
