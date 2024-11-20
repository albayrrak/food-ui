"use client"
import { useTabsContext } from '@/context/TabsProvider';
import React from 'react';

import "./style.scss"

export const TabContainer: React.FC<{ children: React.ReactNode, classNames?: string }> = ({ children, classNames }) => {
    return (
        <div className={`tab-container ${classNames || ''}`}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { index });
                }
                return child;
            })}
        </div>
    );
};

export const TabContent: React.FC<{ index?: number; children: React.ReactNode, classNames?: string }> = ({ index, children, classNames }) => {
    const { tabIndex } = useTabsContext();
    console.log(children);


    return <div className={`tab-content ${classNames || ''}  ${tabIndex === index ? "active" : ""}`} >{children}</div>;
};
