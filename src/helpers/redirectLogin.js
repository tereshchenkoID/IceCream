const redirectLogin = () => {
    localStorage.clear()
    window.location = '/login'
};

export default redirectLogin;
