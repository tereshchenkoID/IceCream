const request = (
    formData,
    setLoader,
    preloader
) => {

    formData.set('id', localStorage.getItem('user_id'))

    fetch('http://localhost:8888/user/update', {
        method: 'POST',
        body: formData
    })
        .then(success => {
            preloader &&
            setTimeout(() => {
                success.ok && setLoader(false)
            }, 3000);
        })
        .catch(error => console.log("Error", error));
}

export default request;
