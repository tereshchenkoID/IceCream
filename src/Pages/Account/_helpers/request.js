import { server } from '../../../redux/types/types';

import getRole from "../../../helpers/getRole";
import getId from "../../../helpers/getId";

const request = (
    formData,
    setLoader,
    preloader
) => {

    formData.set('id', getId())

    fetch(`${server.PATH}${getRole()}/update`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('user_token')}`
        },
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
