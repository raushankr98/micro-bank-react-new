import { axiosInstance } from "../../../core/network";

export async function handleLogin(email: string) {
    return await axiosInstance.get(`registerAccount?email=${email}`)
}

function loadData(key: any) {
    try {
        let data: any = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch (err) {
        return undefined;
    }
}

function saveData(key: any, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData }