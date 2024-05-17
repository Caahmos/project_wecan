import React, { createContext, useContext, useState, useMemo } from "react";

interface IMenuContext {
    menuIsOpen: boolean;
    changeMenu(): boolean
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

interface IMenuProviderProps {
    children: React.ReactNode;
};

const MenuProvider: React.FC<IMenuProviderProps> = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const changeMenu = () => {
        setMenuIsOpen(!menuIsOpen);
        console.log(menuIsOpen)
        return menuIsOpen;
    };

    return (
        <MenuContext.Provider value={{ menuIsOpen, changeMenu }}>
            {children}
        </MenuContext.Provider>
    )
}

const useMenu = () => {
    const context = useContext(MenuContext);

    return { MenuProvider, context }
}

export default useMenu;