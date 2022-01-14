const getAge = (data) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthday = new Date(data.split('-')[0], data.split('-')[1], data.split('-')[2]);
    const isDate = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    let age = today.getFullYear() - birthday.getFullYear();

    if (today < isDate) {
        age = age - 1;
    }

    return age;
}

export default getAge;
