import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'

function Toast() {
    const Information = () => {
        toast.info('error occured', {
            position: 'bottom-center',
            theme:'light'
        })
    }
    const error = () => {
        toast.error('error occured', {
            position: 'top-left'
        })
    }
    const success = () => {
        toast.success('error occured', {
            position: 'top-right',
            theme:'colored'
        })
    }
    const warning = () => {
        toast.warning('error occured', {
            position: 'bottom-right',
            theme:'dark'
        })
    }
    const def = () => {
        toast.defalut('error occured', {
            position: 'bottom-left'
        })
    }

    return (
        <div className='toast'>
            <div className="toast-con">
                <button className='toast-btn' onClick={Information}>Info</button>
                <button className='toast-btn' onClick={success}>succss</button>
                <button className='toast-btn' onClick={warning}>warning</button>
                <button className='toast-btn' onClick={def}>default</button>
                <button className='toast-btn' onClick={error}>error</button>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Toast