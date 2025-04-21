//Primary button, This button is a black styled button used in submit on the LoginPage form
import React from 'react'

type PrimaryButtonProps = {
    type?: 'button' | 'submit'
    onClick?: () => void
    disabled?: boolean
    children: React.ReactNode
}
const PrimaryButton = ({type = 'button', onClick, disabled, children}: PrimaryButtonProps) =>{

    return(
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
        w-full py-2 rounded border-2 transition duration-300
        bg-gray-800 text-white border-gray-800
        hover:bg-white hover:text-gray-800 hover:border-gray-800 hover:border-2
        disabled:opacity-60
        `}
        >
            {children}
        </button>
    )
}
export default PrimaryButton