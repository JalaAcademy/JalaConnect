import HowWorksElement from "./HowWorksElement"


function HowWorks() {
    const elements=[
        {
            "text":"Signup",
            "description":"Click here to signup"
        },{
            "text":"Get Access",
            "description":"Montes vivamus curve quisque et primis pretium nullam."
        },
        {
            "text":"Assignments",
            "description":"Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised dashboard"
        },
        {
            "text":"Live Interactions",
            "description":"compare your results with your peers' with advanced analytics"
        },
    ]
    return (
        <div className='p-10 max-sm:p-[10px] max-sm:mb-2'>
            <h1 className="font-poppins text-[42px] font-semibold text-center max-sm:text-[30px]">How it works</h1>
            <div className="content flex justify-center p-[50px] font-poppins max-xl:p-[30px] max-[872px]:flex-col max-[872px]:items-center max-sm:p-0 ">
            <div className="elements flex flex-col w-[30%] bg-white p-[10px] rounded-md gap-3 max-lg:w-[40%] max-[872px]:w-[70%] max-sm:w-[90%] ">
                {elements.map((element)=>(
                    <HowWorksElement 
                    key={element.text} 
                    text={element.text} 
                    description={element.description}
                    classname={element.text === 'Signup' ? 'bg-blue-500 text-white' : ''}
                    />
                ))} 
            </div>
                <div className="banner  flex-grow bg-cover bg-howWorksImage">
                </div>
    
            </div>
        </div>
    )
}

export default HowWorks
