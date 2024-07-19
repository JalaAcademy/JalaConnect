/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
function HowWorksElement({text,description,classname="",...props}) {
    return (
        <>
        <div className={`element rounded-md px-[20px] py-[10px] hover:cursor-pointer  ${classname} `}>
            <h1 className="font-bold">{text}</h1>
            <p>{description}</p>
        </div>
        </>
    )
}

export default HowWorksElement
