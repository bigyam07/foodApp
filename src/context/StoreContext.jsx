import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const contextValue = { food_list }
    return (
        <>
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        </>
    );
}
export default StoreContextProvider