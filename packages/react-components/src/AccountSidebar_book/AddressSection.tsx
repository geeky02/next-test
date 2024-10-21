// Copyright 2017-2024 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AddressFlags } from '@polkadot/react-hooks/types';

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { useToggle } from '@polkadot/react-hooks';

import AccountName from '../AccountName.js';
import Button from '../Button/index.js';
import IdentityIcon from '../IdentityIcon/index.js';
import Input from '../Input.js';
import { useTranslation } from '../translate.js';
import { styled } from '@polkadot/react-components';

interface Props {
  value: string,
  editingName: boolean,
  defaultValue: string,
  onChange: (value: string) => void,
  flags: AddressFlags,
  accountIndex: string | undefined,
}

function AddressSection ({ accountIndex, defaultValue, editingName, flags, onChange, value }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [isCopyShown, toggleIsCopyShown] = useToggle();
  const NOOP = () => undefined;

  return (
    <StyledAddressSection>
      <div className='ui--AddressBook-Icon-Name'>
        <IdentityIcon
          className='ui--IdentityIcon-RightPadding'
          size={40}
          value={value}
        />
        <AccountName
          className='ui--AccountName-LeftPadding'
          override={
            editingName
              ? (
                <Input
                  className='name--input'
                  defaultValue={defaultValue}
                  label='name-input'
                  onChange={onChange}
                  withLabel={false}
                />
              )
              : flags.isEditable
                ? (defaultValue.toUpperCase() || t('<unknown>'))
                : undefined
          }
          value={value}
          withSidebar={false}
        />
        {accountIndex && (
          <div className='ui--AddressMenu-index'>
            <label>{t('index')}:</label> {accountIndex}
          </div>
        )}
      </div>
      <div className='ui--AddressBook-Address-Copy'>
        <div className='ui--AddressMenu-addr'>
          {value}
        </div>
        <div className='ui--AddressMenu-copyaddr'>
          <CopyToClipboard
            text={value}
          >
            <span>
              <Button.Group>
                <Button
                  icon={isCopyShown ? 'check' : 'copy'}
                  label={isCopyShown ? t('Copied') : t('Copy')}
                  onClick={isCopyShown ? NOOP : toggleIsCopyShown }
                  onMouseLeave={isCopyShown ? toggleIsCopyShown : NOOP }
                />
              </Button.Group>
            </span>
          </CopyToClipboard>
        </div>
      </div>
    </StyledAddressSection>
  );
}

const StyledAddressSection = styled.div`
  display: flex;
  width: 70%;
  .ui--AddressMenu-copyaddr {
    .ui--Button:hover {
      background: transparent !important;
      color: var(--color-text-hover) !important;
    }
  }
  .ui--AddressBook-Icon-Name {
    display: flex;
    align-items: center;
    width: 30%;
  }
  .ui--AddressBook-Address-Copy {
    display: flex;
    align-items: center;
    width: 70%;
    padding-right: 3rem;
    justify-content: space-between;
  }  
  .ui--AccountName-LeftPadding {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .ui--IdentityIcon-RightPadding {
    padding-right: 1rem;
    border: none;
  }
  @media screen and (min-width: 1440px) and (max-width: 1919px) {
    .ui--AddressBook-Icon-Name {
      width: 20%;
    }
    .ui--AddressBook-Address-Copy {
      width: 80%;
    }
  }
`

export default React.memo(AddressSection);
