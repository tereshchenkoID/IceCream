import { server } from '../../../redux/types/types';

const request = (
    formData,
    setLoader,
    preloader
) => {

    formData.set('id', localStorage.getItem('user_id'))

    fetch(`${server.PATH}user/update`, {
        method: 'POST',
        body: formData
    })
        .then(success => {
            preloader &&
            setTimeout(() => {
                success.ok && setLoader(false)
            }, 2000);
        })
        .catch(error => console.log("Error", error));
}

export default request;
