// Copyright 2017-2024 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SettingsStruct } from '@polkadot/ui-settings/types';

import React, { useEffect, useState } from 'react';

import { Button } from '@polkadot/react-components';
import { settings } from '@polkadot/ui-settings';
import { save } from '@polkadot/app-settings/util';


interface Props {
    className?: string;
}

function themeToggle({ className = '' }: Props): React.ReactElement<Props> {
    const [theme, setTheme] = useState<boolean>(false);

    const [state, setSettings] = useState((): SettingsStruct => {
        const values = settings.get();

        return { ...values, uiTheme: values.uiTheme === 'dark' ? 'dark' : 'light' };
    });

    useEffect(() => {
        setTheme(state?.uiTheme === 'dark' ? true : false)
    },[])

    useEffect((): void => {
        save(state);
      }, [state]);

    const _saveMoon = () => {
            setTheme(false)
            setSettings((state) => ({ ...state, [`uiTheme`]: 'light' })),
            save(state);
        }

    const _saveSun = () => {
            setTheme(true)
            setSettings((state) => ({ ...state, [`uiTheme`]: 'dark' })),
            save(state);
        }

    return (
        <div className={className}>
                {theme === true && (
                    <Button
                        label={<svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="inline-block"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                          </svg>}
                        onClick={_saveMoon}
                    />
                )}
                {theme === false && (
                    <Button
                        label={<svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="inline-block"
                            fill="black"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                          </svg>}
                        onClick={_saveSun}
                    />
                )}
        </div>
    );
}

export default React.memo(themeToggle);
