const getAccess = () => {
    return !!(localStorage.getItem('user_id') && localStorage.getItem('user_token') && localStorage.getItem('user_role'));
}

export default getAccess;
