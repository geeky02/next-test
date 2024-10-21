// Copyright 2017-2024 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* default buttons, dark gray */
export const colorBtnDefault = '';

export const colorBtnShadow = '';

/* highlighted buttons, orange */
export const colorBtnHighlight = '';

/* primary buttons, blue */
export const colorBtnPrimary = colorBtnDefault; // '#2e86ab';

/* button text color */
export const colorBtnText = '#f9f8f7';

export const colorLink = '#2e86ab';

export default `
  .theme--dark,
  .theme--light {
    a:not(.ui--Tab) {
      color: ${colorLink};

      &:hover,
      a:visited {
        color: ${colorLink};
      }
    }

    .ui--Button {
      &.isIcon:not(.isDisabled):not(.withoutLink):not(:hover) {
        .ui--Icon {
          color: ${colorLink};
        }
      }
    }

    .ui.modal > .header:not(.ui) {
      border-bottom-color: ${colorBtnDefault};
    }

    .ui.negative.button,
    .ui.buttons .negative.button {
      background: #666 !important;
    }
  }
`;
