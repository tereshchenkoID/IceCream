const getAllStorage = (list) => {
    return localStorage[list] ? JSON.parse(localStorage[list]) : []
};

export default getAllStorage;
