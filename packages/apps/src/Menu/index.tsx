// Copyright 2017-2024 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React from 'react';
import { styled } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

import ChainInfo from './ChainInfo.js';
import LogoInfo from './LogoInfo.js';
import ThemeToggle from './themeToggle.js';

interface Props {
  className?: string;
}

function Menu({ className = '' }: Props): React.ReactElement<Props> {
  const apiProps = useApi();

  return (
    <StyledDiv className={`${className}${(!apiProps.isApiReady || !apiProps.isApiConnected) ? ' isLoading' : ''}`}>
      <div className='menuContainer'>
        <div className='menuSection'>
          <LogoInfo />
          <h1 className='menuItems'>Multisig</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}>
          <ThemeToggle />
          <ChainInfo />
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  padding: 0;
  z-index: 220;
  position: relative;

  .smallShow {
    display: none;
  }

  & .menuContainer {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    width: 100%;
    max-width: var(--width-full);
    margin: 0 auto;
  }

  &.isLoading {
    .menuActive {
      background: var(--bg-page);
    }

    &:before {
      filter: grayscale(1);
    }

    .menuItems {
      filter: grayscale(1);
    }
  }

  .menuSection {
    align-items: center;
    display: flex;
  }

  .menuActive {
    background: var(--bg-tabs);
    border-bottom: none;
    border-radius: 0.25rem 0.25rem 0 0;
    color: var(--color-text);
    padding: 1rem 1.5rem;
    margin: 0 1rem -1px;
    z-index: 1;

    .ui--Icon {
      margin-right: 0.5rem;
    }
  }

  .menuItems {
    list-style: none;
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--font-size-h2);
    color: var(--color-text);

  }

  .ui--NodeInfo {
    align-self: center;
  }

  @media only screen and (max-width: 800px) {
    .groupHdr {
      padding: 0.857rem 0.75rem;
    }

    .smallShow {
      display: initial;
    }

    .smallHide {
      display: none;
    }

    .menuItems {
      margin-right: 0;

      > li + li {
        margin-left: 0.25rem;
      }
    }
  }
`;

export default React.memo(Menu);
