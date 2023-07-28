import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [sidebarState, setSidebarState] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebarState, setSidebarState }}>
            {children}
        </SidebarContext.Provider>
    );
};