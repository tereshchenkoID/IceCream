import getToken from "./getToken";

const getAccess = () => {
    const token = localStorage.getItem('user_token') && getToken(localStorage.getItem('user_token'))['data']['role']

    return !!(
        localStorage.getItem('user_id') &&
        localStorage.getItem('user_token') &&
        localStorage.getItem('user_role') &&
        localStorage.getItem('user_role') === token
    );
}

export default getAccess;
