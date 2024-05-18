import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface IMenuContext {
    menuIsOpen: boolean;
    changeMenu(): void;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

interface IMenuProviderProps {
    children: ReactNode;
}

const MenuProvider: React.FC<IMenuProviderProps> = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        console.log(menuIsOpen);
    }, [menuIsOpen]);

    const changeMenu = () => {
        setMenuIsOpen(prevState => !prevState);
    };

    return (
        <MenuContext.Provider value={{ menuIsOpen, changeMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

const useMenu = (): IMenuContext => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
}

export { MenuProvider, useMenu };
