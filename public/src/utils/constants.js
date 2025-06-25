// src/utils/constants.js

export const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};

export const host = process.env.REACT_APP_API_URL;
export const REGISTER_ROUTE = `${host}/api/auth/register`;
export const LOGIN_ROUTE = `${host}/api/auth/login`;
export const MESSAGE_ROUTE = `${host}/api/messages`;
export const CHAT_ROUTE = `${host}/api/chats`;
