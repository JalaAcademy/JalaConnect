import Button from "./Button"


function HeroSection() {
    return (
        <>
        <div className="heroSection min-h-screen-72 flex max-[872px]:flex-col max-[872px]:mt-4 max-[872px]:gap-[20px]">
            <div className="content flex flex-col justify-center w-[50%] ml-[140px] mr-[100px] font-poppins max-lg:mx-[50px] max-[872px]:m-0 max-[872px]:w-full max-[872px]:text-center max-[872px]:px-[20px] " >
                <h1 className="text-[48px] font-semibold leading-[50px]">Take <span className="text-[#2C66B8] ">student experience</span> to the next level</h1>
                <p className="mt-[10px] pr-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
                <div className="button mt-5">
                    <Button text="JOIN NOW"/>
                </div>
            </div>
            <div className="banner w-[60%] h-full m-auto max-lg:w-[80%]">
                <img src="images/HeroImage.png" alt="HeroImage" />
            </div>
        </div>
        </>
    )
}

export default HeroSection
