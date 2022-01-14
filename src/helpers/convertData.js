const convertData = (data) => {
    const arr = data.split('-');

    return `${arr[2]}.${arr[1]}.${arr[0]}`
}

export default convertData;
