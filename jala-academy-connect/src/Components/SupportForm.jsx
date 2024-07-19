
import { useState } from "react"
import Button from "./Button"


function SupportForm() {
    const [formData,setFormData]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "query":""
    })

    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
    return (
        <div className="form  flex flex-col bg-white p-[30px] rounded-md font-poppins mr-[50px] max-md:m-0 max-sm:text-center max-sm:w-full max-sm:mx-[20px]">
            <h1 className="text-[42px] font-semibold mr-[80px] max-sm:m-0 max-sm:text-[20px]">Need Support</h1>
            <p className="max-sm:text-[14px] ">Contact professionals for guidance</p>
            <form className="flex flex-col gap-[10px] mt-4 " onSubmit={handleSubmit} >
                <input 
                type="text"
                name="name"
                placeholder='Your Name' 
                className="p-[10px] outline outline-1 rounded-sm"
                value={formData.name}
                onChange={handleInputChange}
                required
                />
                <input type="email"
                name="email"
                 placeholder='Email address' 
                 className="p-[10px] outline outline-1 rounded-sm"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 />
                <input type="phone" 
                name="phone"
                placeholder='Phone' 
                className="p-[10px] outline outline-1 rounded-sm"
                value={formData.phone}
                onChange={handleInputChange}
                required
                />
                <textarea 
                name="query"
                id="query" 
                placeholder="Enter your Query" 
                className="p-[10px] outline outline-1 rounded-sm" 
                rows="3"
                value={formData.query}
                onChange={handleInputChange} 
                required> 
                
                </textarea>
                <Button text="Submit" type="submit" />
            </form>
        </div>
    )
}

export default SupportForm
