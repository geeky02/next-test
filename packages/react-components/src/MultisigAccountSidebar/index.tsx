// Copyright 2017-2024 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import { MultisigAccountSidebarCtx } from '@polkadot/react-hooks/ctx/MultisigAccountSidebar';

type AddressContextType = {
  multisigAddress: string | null;
  onUpdateName: (() => void) | null;
};

// Create context with default values
export const AddressContext = React.createContext<AddressContextType>({
  multisigAddress: null,
  onUpdateName: null
});

interface Props {
  children: React.ReactNode;
}

type State = [string | null, (() => void) | null];

const EMPTY_STATE: State = [null, null];

function MultisigAccountSidebar ({ children }: Props): React.ReactElement<Props> {
  const [[multisigAddress, onUpdateName], setAddress] = useState<State>(EMPTY_STATE);

  const contextValue = {
    multisigAddress,
    onUpdateName
  };

  return (
    <MultisigAccountSidebarCtx.Provider value={setAddress}>
      <AddressContext.Provider value={contextValue}>
        {children}
      </AddressContext.Provider>
    </MultisigAccountSidebarCtx.Provider>
  );
}

export default React.memo(MultisigAccountSidebar);
