const list = (
    data,
    action,
    id
) => {
    const result = [...data]
    const find = result.find((e) => {return e === id})
    find ? result.splice(result.indexOf(find), 1) : result.push(id)
    action(result)

    return result
}

export default list;
