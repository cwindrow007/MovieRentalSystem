//Secondary Button, opposite of primary button
import React from 'react'

type SecondaryButtonProps = {
    type?: 'button' | 'submit'
    onClick?: () => void
    disabled?: boolean
    className?: string
    children: React.ReactNode
}

const SecondaryButton=({type ='button', onClick, disabled, className='', children }: SecondaryButtonProps) =>{

    return(
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
        w-full py-2 rounded border-2 transition duration-300
        bg-white text-gray-800 border-gray-800 
        hover:bg-gray-800 hover:text-white hover:border-gray-800 hover:border-2
        disabled:opacity-60 ${className}`}
        >
            {children}
        </button>
    )
}
export default SecondaryButton