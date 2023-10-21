import UserContext from "./index.js";
import {useEffect, useState} from "react";
import {getMe} from "../../services/api/bookmarks.js";

const UserProvider = ({children}) =>
{
    const [userData, setUserData] = useState(undefined);

    useEffect(() => {
        getMe().then((user) => setUserData(user)).catch(() => setUserData(null));
    }, [])

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;