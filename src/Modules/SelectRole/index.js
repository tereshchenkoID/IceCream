import React, {useState} from "react";
import {useDispatch} from "react-redux";

import classes from "classnames";

import {setUserData} from "../../redux/actions/userActions";

import {translateString} from "../../i18n/translate";

import styles from './index.module.scss';

const getRole = () => {
    return parseInt(localStorage.getItem('user_role'), 10)
}

const SelectRole = () => {
    const dispatch = useDispatch();

    const [role, setRole] = useState(getRole() ? getRole() : 0)
    const [hide, setHide] = useState(role !== 0)

    const handleSubmit = (data) => {
        setRole(data)
        setHide(true)

        dispatch(setUserData(data))

        localStorage.setItem('user_role', data)
    }

    return (
        <div className={classes(
            styles.block,
            hide && styles.hide
        )}>
            <div className={styles.check}>
                <input
                    type={'radio'}
                    name={'role'}
                    id={'role-1'}
                    value={1}
                    className={styles.radio}
                    checked={role === 1}
                    onChange={() => handleSubmit(1)}
                />
                <label
                    className={styles.label}
                    htmlFor={'role-1'}
                    title={translateString('role-1')}
                >
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 470 470">
                            <path d="M403.204,336.001c-0.46-0.485-0.984-0.907-1.558-1.256c-12.934-10.356-27.465-18.792-43.163-24.872 c-0.406-0.199-0.832-0.363-1.276-0.486c-16.135-6.094-33.475-9.705-51.556-10.369c-1.362-1.89-3.576-3.125-6.083-3.125 s-4.722,1.235-6.083,3.125c-18.082,0.665-35.422,4.275-51.556,10.369c-0.445,0.124-0.872,0.288-1.279,0.487 c-15.697,6.081-30.228,14.516-43.161,24.871c-0.575,0.349-1.099,0.771-1.56,1.257c-36.586,30.029-59.967,75.583-59.967,126.498 c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5c0-40.628,16.395-77.495,42.908-104.348v102.727c0,0.557,0.065,1.099,0.18,1.621 c0.741,3.362,3.734,5.879,7.32,5.879s6.578-2.517,7.32-5.879c0.115-0.522,0.18-1.064,0.18-1.621V344.867 c8.509-6.575,17.746-12.249,27.57-16.878v63.088c0,4.143,3.357,7.5,7.5,7.5h111.255c4.143,0,7.5-3.357,7.5-7.5v-63.088 c9.824,4.629,19.062,10.302,27.57,16.878v116.012c0,0.557,0.065,1.099,0.18,1.621c0.741,3.362,3.734,5.879,7.32,5.879 s6.578-2.517,7.32-5.879c0.115-0.522,0.18-1.064,0.18-1.621V358.151c26.514,26.853,42.908,63.72,42.908,104.349 c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5C463.172,411.585,439.79,366.031,403.204,336.001z M251.438,383.577v-61.68 c12.845-4.409,26.478-7.108,40.628-7.815v19.313c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-19.313 c14.149,0.707,27.782,3.406,40.627,7.814v61.681H251.438z"/>
                            <path d="M157.678,143.304V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v128.304h-30.283V7.5c0-4.143-3.357-7.5-7.5-7.5 s-7.5,3.357-7.5,7.5v128.304H67.111V7.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v128.304H21.828V7.5 c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v135.804c0,21.384,17.396,38.78,38.78,38.78h29.145V462.5c0,4.143,3.357,7.5,7.5,7.5 s7.5-3.357,7.5-7.5V182.084h29.145C140.281,182.084,157.678,164.688,157.678,143.304z M23.047,150.804h118.412 c-3.149,9.447-12.07,16.28-22.561,16.28H45.608C35.117,167.084,26.196,160.251,23.047,150.804z"/>
                            <path d="M180.893,182.084h33.527c-0.265,2.752-0.407,5.521-0.407,8.291c0,47.175,38.379,85.554,85.554,85.554 c47.174,0,85.553-38.379,85.553-85.554c0-2.77-0.143-5.539-0.408-8.291h33.248c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5 h-36.028l-17.409-72.345c-1.72-7.146-6.124-13.07-12.4-16.68c-6.278-3.609-13.61-4.437-20.655-2.328l-31.107,9.313l-31.106-9.313 c-7.021-2.104-14.37-1.294-20.691,2.278c-6.322,3.571-10.808,9.446-12.631,16.545l-18.632,72.529h-36.405 c-4.143,0-7.5,3.357-7.5,7.5S176.75,182.084,180.893,182.084z M255.938,91.069c2.734-1.545,5.934-1.89,9.011-0.969l33.258,9.958 c1.404,0.42,2.898,0.42,4.303,0l33.259-9.958c3.055-0.914,6.207-0.572,8.874,0.962c2.669,1.535,4.549,4.087,5.295,7.187 l16.565,68.835H232.784l17.673-68.797C251.256,95.178,253.202,92.615,255.938,91.069z M370.119,190.375 c0,38.903-31.649,70.554-70.553,70.554s-70.554-31.65-70.554-70.554c0-2.776,0.181-5.545,0.502-8.291h140.103 C369.938,184.831,370.119,187.601,370.119,190.375z"/>
                            <path d="M355.19,413.58h-61.25c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h61.25c4.143,0,7.5-3.357,7.5-7.5 S359.333,413.58,355.19,413.58z"/>
                            <path d="M263.94,413.58h-20c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h20c4.143,0,7.5-3.357,7.5-7.5 S268.083,413.58,263.94,413.58z"/>
                        </svg>
                    </div>
                </label>
            </div>

            <div className={styles.check}>
                <input
                    type={'radio'}
                    name={'role'}
                    id={'role-2'}
                    value={2}
                    className={styles.radio}
                    checked={role === 2}
                    onChange={() => handleSubmit(2)}
                />
                <label
                    className={styles.label}
                    htmlFor={'role-2'}
                    title={translateString('role-2')}
                >
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511 511">
                            <path d="M203.608,284.629c-0.179-0.227-0.37-0.448-0.579-0.657c-0.209-0.21-0.431-0.4-0.657-0.579 C185.13,266.461,161.516,256,135.5,256s-49.63,10.461-66.871,27.392c-0.227,0.179-0.448,0.37-0.657,0.579 c-0.209,0.209-0.4,0.43-0.579,0.657C50.461,301.87,40,325.484,40,351.5s10.461,49.63,27.392,66.871 c0.179,0.227,0.37,0.448,0.579,0.657c0.209,0.21,0.431,0.4,0.657,0.58C85.87,436.539,109.484,447,135.5,447 c26.015,0,49.63-10.461,66.871-27.392c0.227-0.18,0.448-0.37,0.657-0.58c0.209-0.209,0.4-0.431,0.579-0.657 C220.539,401.13,231,377.516,231,351.5S220.539,301.87,203.608,284.629z M207.5,359h8.138 c-1.539,16.574-8.113,31.707-18.188,43.843l-5.735-5.735c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.607 l5.735,5.735c-12.136,10.076-27.27,16.65-43.843,18.189V423.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v8.138 c-16.574-1.539-31.707-8.113-43.843-18.189l5.735-5.735c2.929-2.929,2.929-7.678,0-10.607c-2.928-2.929-7.677-2.929-10.606,0 l-5.735,5.735C63.475,390.707,56.901,375.574,55.362,359H63.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-8.138 c1.539-16.574,8.113-31.707,18.188-43.843l5.735,5.735c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197 c2.929-2.929,2.929-7.678,0-10.607l-5.735-5.735c12.136-10.076,27.27-16.65,43.843-18.189v8.138c0,4.142,3.358,7.5,7.5,7.5 s7.5-3.358,7.5-7.5v-8.138c16.574,1.539,31.707,8.113,43.843,18.189l-5.735,5.735c-2.929,2.929-2.929,7.678,0,10.607 c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.197l5.735-5.735c10.075,12.136,16.649,27.27,18.188,43.843 H207.5c-4.142,0-7.5,3.358-7.5,7.5S203.358,359,207.5,359z"/>
                            <path d="M169.19,328.659c-3.797,1.655-5.534,6.075-3.879,9.872c1.784,4.094,2.689,8.458,2.689,12.969 c0,17.921-14.58,32.5-32.5,32.5S103,369.421,103,351.5s14.58-32.5,32.5-32.5c4.51,0,8.873,0.904,12.966,2.688 c3.798,1.654,8.217-0.083,9.872-3.881s-0.083-8.217-3.88-9.871C148.462,305.324,142.084,304,135.5,304 c-26.191,0-47.5,21.308-47.5,47.5s21.309,47.5,47.5,47.5s47.5-21.308,47.5-47.5c0-6.586-1.325-12.966-3.938-18.962 C177.407,328.741,172.989,327.004,169.19,328.659z"/>
                            <path d="M135.5,336c-8.547,0-15.5,6.953-15.5,15.5s6.953,15.5,15.5,15.5s15.5-6.953,15.5-15.5S144.047,336,135.5,336z M135.5,352 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5S135.776,352,135.5,352z"/>
                            <path d="M455.5,416c-4.142,0-7.5,3.358-7.5,7.5c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5s7.402-16.5,16.5-16.5 c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5c-17.369,0-31.5,14.131-31.5,31.5s14.131,31.5,31.5,31.5s31.5-14.131,31.5-31.5 C463,419.358,459.642,416,455.5,416z"/>
                            <path d="M495,329.234v-55.709c0-27.735-22.013-51.389-51.279-55.031l-53.232-6.086l-31.284-137.65 c-1.264-5.562,0.389-11.291,4.422-15.324l15.903-15.904c2.929-2.929,2.929-7.678,0-10.607c-2.929-2.929-7.678-2.929-10.606,0 l-15.903,15.903c-7.7,7.7-10.856,18.636-8.443,29.255l30.118,132.521l-17.061-1.95L319.078,39h0.422c4.142,0,7.5-3.358,7.5-7.5 s-3.358-7.5-7.5-7.5H87.548c-0.01,0-0.02,0-0.03,0H79.5c-4.142,0-7.5,3.358-7.5,7.5c0,3.725,2.719,6.808,6.279,7.392 L48.161,181.955c-0.145,0.689-0.183,1.375-0.138,2.045H15.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H32v64.5 c0,0.208,0.014,0.413,0.031,0.617C12.061,287.726,0,318.229,0,351.5C0,426.215,60.785,487,135.5,487 c58.041,0,107.669-36.686,126.932-88.085c0.35,0.05,0.705,0.085,1.068,0.085H288v0.5c0,8.547,6.953,15.5,15.5,15.5h65.085 c-0.374,2.783-0.585,5.616-0.585,8.5c0,35.014,28.486,63.5,63.5,63.5s63.5-28.486,63.5-63.5c0-3.229-0.246-6.402-0.713-9.503 C503.946,411.077,511,402.099,511,391.5v-40C511,341.164,504.29,332.372,495,329.234z M480,296h-8.5c-0.257,0-0.5-0.243-0.5-0.5v-8 c0-0.257,0.243-0.5,0.5-0.5h8.5V296z M479.961,272H471.5c-8.547,0-15.5,6.953-15.5,15.5v8c0,8.547,6.953,15.5,15.5,15.5h8.5v17 H301.344c-5.92-41.979-27.454-79.006-58.528-105h108.257l90.87,10.388C463.09,236.02,479.161,252.481,479.961,272z M135.5,184H119 l12.232-91.738C132.848,80.141,143.288,71,155.517,71H192v122.816C174.34,187.469,155.318,184,135.5,184z M207,199.5V71h103.968 l31.136,137H223.5c-0.496,0-0.98,0.051-1.449,0.143c-4.869-2.95-9.903-5.654-15.078-8.106C206.986,199.859,207,199.681,207,199.5z M93.586,39h210.433c-0.047,0.708,0.003,1.435,0.168,2.162L307.559,56H155.517c-19.715,0-36.548,14.737-39.153,34.28 l-12.297,92.229c-0.067,0.504-0.081,1.003-0.049,1.491H63.059L93.586,39z M135.5,472C69.056,472,15,417.944,15,351.5 S69.056,231,135.5,231S256,285.056,256,351.5S201.944,472,135.5,472z M267.051,384c2.574-10.416,3.949-21.3,3.949-32.5 c0-74.715-60.785-135.5-135.5-135.5c-33.796,0-64.741,12.438-88.5,32.976V199h88.5c84.089,0,152.5,68.411,152.5,152.5V384H267.051z M431.5,472c-26.743,0-48.5-21.757-48.5-48.5c0-26.743,21.757-48.5,48.5-48.5s48.5,21.757,48.5,48.5 C480,450.243,458.243,472,431.5,472z M496,391.5c0,3.711-2.394,6.865-5.715,8.022C480.803,376.363,458.032,360,431.5,360 c-26.714,0-49.611,16.589-58.973,40H303.5c-0.276,0-0.5-0.224-0.5-0.5v-48c0-2.85-0.073-5.684-0.214-8.5H487.5 c4.687,0,8.5,3.813,8.5,8.5V391.5z"/>
                        </svg>

                    </div>
                </label>
            </div>
        </div>
    )
}

export default SelectRole;
