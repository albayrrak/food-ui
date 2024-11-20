"use client"
import { useTabsContext } from '@/context/TabsProvider';
import React from 'react';

import "./style.scss"

export const TabMenu: React.FC<{ children: React.ReactNode, classNames?: string }> = ({ children, classNames }) => {
    return (
        <div className={`tabmenu ${classNames || ''}`}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { index });
                }
                return child;
            })}
        </div>
    );
};

export const TabMenuItem: React.FC<{ index?: number; children: React.ReactNode, classNames?: string }> = ({ index, children, classNames }) => {
    const { tabIndex, setTabIndex } = useTabsContext();

    const isActive = tabIndex === index;

    return (
        <div
            className={`tabmenu-item ${classNames || ''} ${isActive ? 'active' : ''}`}
            onClick={() => setTabIndex(index || 0)}
        >
            {children}
        </div>
    );
};
