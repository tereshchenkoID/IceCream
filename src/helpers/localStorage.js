const getAllStorage = () => {
    let archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(key);
    }

    return archive;
};

export default getAllStorage;
