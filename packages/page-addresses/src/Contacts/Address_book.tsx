// Copyright 2017-2024 @polkadot/app-addresses authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type { ActionStatus } from '@polkadot/react-components/Status/types';
// import type { HexString } from '@polkadot/util/types';

import React, { useCallback, useEffect, useState, useRef } from 'react';

// import { Button, ChainLock, Columar, Forget, LinkExternal, Menu, Popup, Tags, TransferModal } from '@polkadot/react-components';
import { useApi, useDeriveAccountInfo } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';
import { isFunction } from '@polkadot/util';

import SidebarEditableSection from '@polkadot/react-components/AccountSidebar_book/SidebarEditableSection';
import { useAccountInfo } from '@polkadot/react-hooks';

interface Props {
  address: string;
  className?: string;
  filter: string;
  isFavorite: boolean;
  toggleFavorite: (address: string) => void;
}


function Address ({ address, filter }: Props): React.ReactElement<Props> | null {
  
  const { accountIndex } = useAccountInfo(address);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const api = useApi();
  const info = useDeriveAccountInfo(address);
  const [tags, setTags] = useState<string[]>([]);
  const [accName, setAccName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const _setTags = useCallback(
    (tags: string[]): void => setTags(tags.sort()),
    []
  );

  useEffect((): void => {
    const { identity, nickname } = info || {};

    if (isFunction(api.apiIdentity.query.identity?.identityOf)) {
      if (identity?.display) {
        setAccName(identity.display);
      }
    } else if (nickname) {
      setAccName(nickname);
    }
  }, [api, info]);

  useEffect((): void => {
    const account = keyring.getAddress(address);

    _setTags(account?.meta?.tags || []);
    setAccName(account?.meta?.name || '');
  }, [_setTags, address]);

  useEffect((): void => {
    if (filter.length === 0) {
      setIsVisible(true);
    } else {
      const _filter = filter.toLowerCase();

      setIsVisible(
        tags.reduce((result: boolean, tag: string): boolean => {
          return result || tag.toLowerCase().includes(_filter);
        }, accName.toLowerCase().includes(_filter))
      );
    }
  }, [accName, filter, tags]);


  if (!isVisible) {
    return null;
  }

  return (
    <>
      <SidebarEditableSection
        accountIndex={accountIndex}
        address={address}
        isBeingEdited={() => {}}
        onUpdateName={() => {}}
        sidebarRef={sidebarRef}
      />
    </>
  );
}

export default React.memo(Address);
