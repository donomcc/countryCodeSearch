import React from 'react'
import "./Success.css"

const Success = () => {
    return (
        <div className='alert'>
            <span className='closebtn' onClick="this.parentElement.style.display='none'"></span>
            Copied to clipboard
        </div>
    )
}

export default Success