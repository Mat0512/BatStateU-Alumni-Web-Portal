import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { client } from "../api/api";

const useRefreshToken = () => {
    const { setAuth } = useContext(AuthContext);
    const refresh = async () => {
        let res = await client.get("/alumni/refresh");
        setAuth((prev) => {
            console.log("response: ", res.data);
            return { ...prev, token: res.data.token };
        });
    };

    return refresh;
};

export { useRefreshToken };
