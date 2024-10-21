// Copyright 2017-2024 @polkadot/app-calendar authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { styled } from '@polkadot/react-components';


interface Props {
  basePath: string;
  className?: string;
}


function CalendarApp ({ className }: Props): React.ReactElement<Props> {


  return (
    <StyledMain className={className}>
      This is Multisig account page
    </StyledMain>
  );
}

const StyledMain = styled.main`
  .calendarFlex {
    align-items: flex-start;
    display: flex;
    flex-wrap: nowrap;

    .wrapper-style {
      flex: 1;

      .upcoming-events {
        position: relative;
        max-width: 100%;
      }
    }

    > div {
      background-color: var(--bg-table);
      border: 1px solid var(--border-table);
      border-radius: 0.25rem;

      &+div {
        margin-left: 1.5rem;
      }

      .ui--Button-Group {
        margin: 0;
      }
    }

    h1 {
      align-items: center;
      border-bottom: 0.25rem solid var(--bg-page);
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0.5rem 0.5rem 1rem;

      > div:first-child {
        align-items: center;
        display: inline-flex;
      }

      .all-events-button {
        margin-right: 1rem;
      }

      .ui--Button {
        font-size: var(--font-size-small);
      }
    }
  }
`;

export default React.memo(CalendarApp);
