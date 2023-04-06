import { createContext, useState } from "react";

export const UserInfoContext = createContext()

//* creating a React Component
export function UserInfoProvider({ children }) {

    const [userLogin, setUserLogin] = useState({})

    return (
        <UserInfoContext.Provider value={{ userLogin, setUserLogin }}>
            {children}
        </UserInfoContext.Provider>
    );
}