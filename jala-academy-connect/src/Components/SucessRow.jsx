
import  SucessItem  from './SucessItem'


function SucessRow() {
    const successItems=[{
        "mainText":"15K+",
        "text":"Number Of Students",
        "icon":"images/icon1.png"
    },
    {
        "mainText":"15K+",
        "text":"Number Of Students",
        "icon":"images/icon2.png"
    },
    {
        "mainText":"15K+",
        "text":"Number Of Students",
        "icon":"images/icon3.png"
    }
    ,{
        "mainText":"15K+",
        "text":"Number Of Students",
        "icon":"images/icon4.png"
    },
    {
        "mainText":"15K+",
        "text":"Number Of Students",
        "icon":"images/icon5.png"
    }
]
    return (
        <>
        <div className="heading text-center text-[42px] font-semibold font-poppins">
            <h1>Our Sucess</h1>
        </div>
        <div className="successRow  flex justify-center gap-[100px] mt-8 flex-wrap max-xl:gap-[60px] max-lg:gap-[40px]  max-[872px]:gap-[20px] max-sm:flex-col">
            {successItems.map((item)=>(
                <SucessItem key={item.mainText} mainText={item.mainText} text={item.text} icon={item.icon}/>
            ))}
        </div>
        </>
    )
}

export default SucessRow
