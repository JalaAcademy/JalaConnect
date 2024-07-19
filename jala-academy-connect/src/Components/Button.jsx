/* eslint-disable react/prop-types */

function Button({text,className="",...props}) {
    return (
        <button className={`bg-[#2C66B8] px-8 py-2 rounded-lg text-white font-poppins ${className}` } {...props}>
        {text}
        </button>
    )
}

export default Button
