const checkForm = (data) => {
    const notification = {
       type: null,
       code: 0
    };

    data.map((item) => {
      if(item === '' || item === null) {
          notification.type = 'error'
          notification.code = 10
      }

      return true
    })

    return notification
}

export default checkForm;
