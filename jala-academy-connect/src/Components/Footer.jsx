

function Footer() {
    return (
        <footer
        className="bg-[#29323F] text-center text-neutral-600  lg:text-left">

         
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-10 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW Elements section --> */}
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold text-[30px] font-poppins text-white uppercase md:justify-start">
                Jala Academy
              </h6>
            </div>
            {/* <!-- My account section --> */}
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                My Account
              </h6>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Sign in</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Dashboard</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Monitor Progress</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Compare success</a>
              </p>
              <p>
                <a className="text-neutral-200"
                >My topics</a>
              </p>
            </div>
            {/* <!-- About jala section --> */}
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                About JALA
              </h6>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Company information</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Resources</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-200"
                >Our Sucess</a>
              </p>
              <p>
                <a className="text-neutral-200"
                >Meet the experts</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Support us
              </h6>
              <p className="mb-5">
                <a href="" className="text-neutral-200 ">
                    Contact us
                </a>
              </p>
              <h6
                className="mb-2 flex justify-center font-semibold uppercase md:justify-start">
                NewsLetter
              </h6>
              <p className="text-neutral-200 ">
              Join our mailing list to stay up to date with world
              </p>
            </div>
          </div>
        </div>
  
        {/* <!--Copyright section--> */}
        <div className=" p-6 text-center bg-neutral-700 text-neutral-200">
          <span>© 2024 Single Best Answer | All Rights Reserved</span>

        </div>
      </footer>
    )
}

export default Footer
