
import "../../../css/pages/Home/home.scss"
import Typewriter from "react-typewriter-effect";

const Home = () => {
  return (
    <div className='Home'>
         
         <img className='home-img-1' src='../../../../public/images/moon.jpeg' alt=''/>
         {/* <img className='home-img-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/home-img-2.png' alt=''/> */}
         {/* <img className='home-img-2' src='/images/sheild.png' alt=''/> */}

         <div className="home-style-txt">
        <Typewriter
          text="Presenting You"
          typeSpeed={50}
          startDelay={100}
          cursorColor="black"
        />
      </div>
         <div className='home-txt-container'>
              <p>ANTI&nbsp; &nbsp;</p>
              <p className='h-txt-c-span'>AI</p>
         </div>

         <div className='home-desc-txt'>
                 <p>Artificial Nuances Tactical Infiltretion</p>
         </div>

         <div className='home-date-div'>
              <p>15 JAN 2024</p>
         </div>
          
    </div>
  )
}

export default Home