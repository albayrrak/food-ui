"use client"
import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
    tabIndex: number;
    setTabIndex: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('useTabsContext must be used within a TabsProvider');
    }
    return context;
};

export const TabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <TabsContext.Provider value={{ tabIndex, setTabIndex }}>
            {children}
        </TabsContext.Provider>
    );
};
