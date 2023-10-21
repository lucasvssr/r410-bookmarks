export const BASE_URL = "https://iut-rcc-infoapi.univ-reims.fr/bookmarks";

export default function fetchAllBookmarks(page)
{
    return fetch(`${BASE_URL}/bookmarks?${page}`).then((response) => response.json());
}

export function avatarUrl(id)
{
    return `${BASE_URL}/users/${id}/avatar/`;
}

export function getMe()
{
    const response = fetch(`${BASE_URL}/me`, {method: "GET", credentials: "include"}).then((response) => response.json());

    if (response.status === 401)
    {
        return null;
    }
    else
    {
        return response;
    }
}

export function loginUrl()
{
    const redirect = window.location.href
    const encode = encodeURIComponent(redirect);
    return`${BASE_URL}/login?redirect=${encode}`;
}

export function logoutURL()
{
    return `${BASE_URL}/logout`;
}