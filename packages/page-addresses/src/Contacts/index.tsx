// Copyright 2017-2024 @polkadot/app-addresses authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ActionStatus } from '@polkadot/react-components/Status/types';

import React, { useEffect, useState } from 'react';

import { Button, styled, SummaryBox, TableBook } from '@polkadot/react-components';
import { useAddresses, useFavorites, useNextTick, useToggle } from '@polkadot/react-hooks';

// import CreateModal from '../modals/Create.js';
import CreateModal from '../modals_book/Create.js';
import { useTranslation } from '../translate.js';
import Address from './Address_book.js';

interface SortedAddress { address: string; isFavorite: boolean }

interface Props {
  className?: string;
  onStatusChange: (status: ActionStatus) => void;
}

const STORE_FAVS = 'accounts:favorites';

function Overview ({ className = '', onStatusChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { allAddresses } = useAddresses();
  const [isCreateOpen, toggleCreate] = useToggle(false);
  const [favorites, toggleFavorite] = useFavorites(STORE_FAVS);
  const [sortedAddresses, setSortedAddresses] = useState<SortedAddress[] | undefined>();
  const isNextTick = useNextTick();

  useEffect((): void => {
    setSortedAddresses(
      allAddresses
        .map((address): SortedAddress => ({ address, isFavorite: favorites.includes(address) }))
        .sort((a, b): number =>
          a.isFavorite === b.isFavorite
            ? 0
            : b.isFavorite
              ? 1
              : -1
        )
    );
  }, [allAddresses, favorites]);

  return (
    <StyledDiv className={className}>
      {isCreateOpen && (
        <CreateModal
          onClose={toggleCreate}
          onStatusChange={onStatusChange}
        />
      )}
      <SummaryBox className='summary-box-contacts'>
        <Button.Group>
          <Button
            className='add-contact-button'
            icon='plus'
            label={t('Add contact')}
            onClick={toggleCreate}
          />
        </Button.Group>
      </SummaryBox>
      <TableBook
        className='address-book-table'
        empty={isNextTick && sortedAddresses && t('no saved addresses!')}
        isSplit
      >
        {isNextTick && sortedAddresses?.map(({ address, isFavorite }): React.ReactNode => (
          <Address
            address={address}
            filter={''}
            isFavorite={isFavorite}
            key={address}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </TableBook>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .summary-box-contacts {
    align-items: center;
  }
  .add-contact-button {
    border: 1px solid var(--bg-toggle);
    border-radius: 5px;
    color: var(--color-text) !important;
    background: var(--bg-page) !important;
  }
  .add-contact-button:hover {
    color: var(--color-text-hover) !important;
  }
  .ui--Icon {
    color: var(--color-text) !important;
    background: var(--bg-page) !important;
  }
  .address-book-table {
    border: 1px solid var(--bg-toggle);
    border-radius: 5px;
    padding: 0 3rem 1rem;
    table {
      margin-bottom: 0 !important;
      border-radius: 5px;
    }
    .ui--Table-Split {
      margin-bottom: 0 !important;
    }
    td {
      background: var(--bg-page) !important;
      div.empty {
        opacity: 1 !important;
      }
    }
    th {
      background: var(--bg-page) !important;
    }
  }
`;

export default React.memo(Overview);
