import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const getCookie = async (name) => {
    let retryCount = 0;
    const maxRetries = 10;
    const retryDelay = 200; // 밀리초

    // await delay(retryDelay); // 첫딜레이 설정

    while (retryCount < maxRetries) {
        const cookieValue = Cookies.get(name);

        // console.log('getCookie retry count : ' + retryCount);

        if (cookieValue) {
            return cookieValue;
        } else {
            retryCount++;
            await delay(retryDelay);
        }
    }

    console.log(`getCookie: Cookie '${name}' not found after ${maxRetries} retries`);
    return null;
};

export const setCookie = (name, token) => {
    // console.log('setCookie call');
    Cookies.set(name, token);
};

export const removeCookie = (name) => {
    Cookies.remove(name);
};

export const isAdmin = async (name) => {
    const cookieValue = await getCookie(name);

    if (cookieValue) {
        const decodedToken = jwtDecode(cookieValue);
        const roles = decodedToken.realm_access.roles.map((role) => role.toLowerCase());
        return roles.includes('admin');
    } else {
        console.log('isAdmin: Token not found');
        return false;
    }
};

export const getUserIdFromToken = async (name) => {
    try {
        const cookieValue = await getCookie(name);

        if (cookieValue) {
            const decodedToken = jwtDecode(cookieValue);

            // 디코딩된 토큰에서 사용자 ID 추출
            const userId = decodedToken ? decodedToken.preferred_username : null;

            return userId;
        } else {
            console.log('isAdmin: Token not found');
            return null;
        }
    } catch (error) {
        console.error('Error getUserIdFromToken:', error);
        return null;
    }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
