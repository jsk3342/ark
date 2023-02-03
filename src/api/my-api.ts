import { authInstance } from './api';


export const getUserData = async () => {
    return await authInstance.get("news/events")
}

export const userApi = {
    fetchIDs : () => authInstance.get("news/events").then(res => console.log(res))
}

