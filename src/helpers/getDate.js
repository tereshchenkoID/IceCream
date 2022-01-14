const getDate = (data) => {
    const now = new Date();
    now.setHours(+24);
    return new Date(now.getFullYear(), now.getMonth() + data, now.getDate());
}

export default getDate;
