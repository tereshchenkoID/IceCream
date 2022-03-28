const getRole = () => {
    return localStorage.getItem('user_role') === '1' ? 'employer' : 'worker';
}

export default getRole;
