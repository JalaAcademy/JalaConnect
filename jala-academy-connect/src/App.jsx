import { Nav,HeroSection, SucessRow, HowWorks, Support, Footer } from "./Components"




function App() {

  return (
    <>
    <section className="min-h-[100vh] bg-[#EDF2F8] scroll-smooth">
    <Nav/>
    <HeroSection/>
    </section>
    <section className="success m-[50px] max-lg:m-[20px]">
      <SucessRow/>
    </section>
    <section id="info" className="bg-[#EDF2F8]">
      <HowWorks/>
    </section>
    <section className="p-[50px] max-sm:p-[10px]">
      <Support/>
    </section>
    <Footer/>

    </>
  )
}

export default App
