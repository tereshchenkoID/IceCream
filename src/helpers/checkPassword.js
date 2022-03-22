const checkPassword = (password, repeat_password) => {
    const notification = {
       type: null,
       code: 0
    };

    if (password !== repeat_password) {
        notification.type = 'error'
        notification.code = 3

        return notification
    }

    else if (password.length <= 6 || repeat_password.length <= 6) {
        notification.type = 'error'
        notification.code = 4

        return notification
    }

    else {
        return notification
    }
}

export default checkPassword;
