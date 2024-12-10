import React from 'react';
import "../../../css/pages/Problem/problem.scss"

const Problem = () => {

  const [prob, setProb] = React.useState(1);

  const handleProbClick = () => {
          
          setProb(prev => prev === 3 ? 3 : prev + 1); 
  }
  return (
    <div className='Prob' onMouseEnter={handleProbClick}>
    
         <div className='prob-heading-txt'>
              <p>SOLUTIONS</p>
         </div>

         <div className='prob-image-div'>
              <img className='prob-img-1' 
                   style={{transform:prob === 2 || prob === 3 ? 'translateX(-150%)':''}}
                   src='../../../../public/images/antiq.png' alt=''/>
              <img className='prob-img-2'  
                   style={{opacity:prob === 2 && '1'}}
                   src='../../../../public/images/anti0.png' alt=''/>
              <img className='prob-img-3'  
                   style={{transform:prob === 3 && 'translateX(0)'}}
                   src='../../../../public/images/robo.png' alt=''/>
         </div>

         <img className='prob-quotes' src='../../../../public/images/is.png' alt='' />

          <div className='prob-content-div'
               style={{transform:prob === 1 ? 'translateX(0%)scale(1)': prob === 2 ? "translateX(0%)scale(0.5)" :'translateX(100%)scale(0.8)',
                       opacity:prob === 2 || prob === 3 ? '0':'1', transition:prob === 1 ? '1s ease-out':'0'
                       }}
          >
               <p className='prob-con-para-1'>ANTI.Q</p>
               <div className='prob-con-para-2'>
                    <p>ANTI.Q—a retro-inspired, handcrafted music player by Anti AI, designed for the modern listener craving vintage nostalgia. This Bluetooth-enabled audio device combines classic design with advanced AI-driven features, offering a unique fusion of old-school style and smart technology. Created for those seeking an immersive, nostalgic listening experience, ANTI.Q is set to launch soon, promising to blend timeless aesthetics with the latest innovations in audio.</p>
                </div>
          </div>

          <div className='prob-content-div'
               style={{transform:prob === 2 ? 'translateX(0%)scale(1)': prob === 3 ? "translateX(0%)scale(0.5)":'translateX(100%)scale(0.8)',
                       opacity:prob === 3 ? '0' : '1', transition:prob === 2 ? '1s ease-out':'0'
                       }}
          >
              <p className='prob-con-para-1'>ANTI.0</p>
                <div className='prob-con-para-2'>
                    <p>ANTI.0 is a robust, all-inclusive AI security program designed to safeguard user privacy and deliver state-of-the-art defense against AI-driven cyber threats. Leveraging advanced AI models, this innovative solution identifies, evaluates, and stops unauthorized access while preventing potential security breaches. With adaptive defense mechanisms and real-time threat detection, ANTI.0 recognizes unusual behavior patterns and mitigates risks before they escalate—making it an essential tool in today’s dynamic digital landscape ,  Built with a privacy-first architecture, ANTI.0 integrates seamlessly with modern cybersecurity protocols to ensure strong data protection, digital asset security, and user autonomy. As a next-generation AI cybersecurity solution, ANTI.0 offers a proactive and intelligent approach to combating the complex tactics of evolving cyber threats, positioning itself as the preferred choice for those prioritizing robust, future-ready digital security.</p>
                </div>
          </div>

          <div className='prob-content-div'
               style={{transform:prob === 3 ? 'translateX(0%)scale(1)': prob === 1 ? "translateX(100%)scale(0.5)":'translateX(100%)scale(0.8)',
                       opacity:prob === 1 ? '0':'1', transition:prob === 2 ? '1s ease-out':'0'
                       }}
          >
               <p className='prob-con-para-1'>AI SOLUTIONS</p>
               <div className='prob-con-para-2'>
                    <p> At ANTI.Ai, we understand the critical role that generative AI
            solutions and edge AI solutions play in modern businesses. Our
            mission is to build safe AI solutions, contributing to a world where
            AI is both secure and accessible.
            <li>
              AI Chatbots: Enhance customer service with our sophisticated AI
              chatbots.
            </li>
            <li>
              AI Voice Assistants: Automate and optimize communication channels.
            </li>
            <li>AI Sales Bots: Drive your sales and marketing efforts.</li>
          </p>
                </div>
          </div>  
    
          <div className='prob-num-div' style={{opacity:prob===1 ? '1': '0'}}>1.</div>
          <div className='prob-num-div' style={{opacity:prob===2 ? '1': '0'}}>2.</div>
          <div className='prob-num-div' style={{opacity:prob===3 ? '1': '0'}}>3.</div>

          <div className='prob-nav-div'>

               <img className='prob-arrow-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-1.png' alt=''
                    onClick={() => setProb(prev => prev === 1 ? 3 : prev - 1)}
               />
               <div className='prob-nav-dot-1' style={{scale:prob === 2 && '1.8', backgroundColor:prob === 2 && '#BD1643'}}/>        
               <div className='prob-nav-dot-2' style={{scale:prob === 1 && '1.8', backgroundColor:prob === 1 && '#BD1643'}}/>        
               <div className='prob-nav-dot-3' style={{scale:prob === 3 && '1.8', backgroundColor:prob === 3 && '#BD1643'}}/>  
               <img className='prob-arrow-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-2.png' alt=''
                    onClick={() => setProb(prev => prev === 3 ? 1 : prev + 1)}
               />      

          </div>
    </div>
  )
}

export default Problem