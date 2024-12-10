import React from "react";
import "../../../css/pages/BusinessModelNew/BM.scss";
import Stickyroll from "@stickyroll/react/stickyroll";

export const BM = () => {

    const [bmData, setBmData] = React.useState(0);
    const [bmScroll, setBmScroll] = React.useState(0);
    const [pageProgress, setPageProgress] = React.useState(0);



    const handleBMData = (id1) => {
     if(id1 === 0)
        setBmData(prev => (prev + 1)%2);
     setBmData(prev => prev === 0 ? 0 : prev - 1);
     if(id1 === 1)
        setBmData(prev => (prev - 1)%2);
     setBmData(prev => prev === 2 ? 2 : prev + 1);
    }

    const handleBmScroll = (id) =>{
       
       setBmScroll(id);
    }

  return (
    
     <div className="bm-sr-cover">
          <Stickyroll
               className="bm-stickyroll"
               pages={1}
               factor={3}
               onProgress={({ progress }) => {
                    console.log(progress);
                    setPageProgress(progress);
                    }}
               >

               {/* {console.log(pageProgress)} */}
               {/* <div className="inner-section">
                    
               </div> */}
                    <div className="BM" 
                    // onClick={handleBMData}
                    // onClick={()=>handleBMData(1)}
                    >

                    <div className="bm-heading">
                         <p>Business Model</p>   
                    </div>

                    <div className="bm-anim-bttns">
                         <div 
                         onClick={()=>handleBMData(0)}
                         >
                              <img className="bm-anim-bttn-img" src="../images/look-left-bttn.png" alt=""  style={{left:'0%'}}/>
                         </div>
                         
                         <div onClick={()=>handleBMData(1)}>
                              <img className="bm-anim-bttn-img" src="../images/look-right-bttn.png" alt="" style={{right:'0%'}}/>
                         </div>
                         
                         <div className="bm-anim-btn-bars">
                              <div className="bm-anim-btn-bar-1" style={{width: bmData === 0 ? '40%' : '', backgroundColor: bmData === 0 && '#eb114bb8'}}/>
                              <div className="bm-anim-btn-bar-2" style={{width: bmData === 1 ? '40%' : '', backgroundColor: bmData === 1 && '#eb114bb8'}}/>
                              {/* <div className="bm-anim-btn-bar-3" style={{width: bmData === 2 ? '40%' : '', backgroundColor: bmData === 2 && '#eb114bb8'}}/> */}
                         </div>
                    </div>

                    <div className="bm-menu-design" style={{transform:bmData === 1  ? 'rotate(-23deg)':bmData === 2 ? 'rotate(-41deg)':''}}>
                    <div className="bm-menu-dot1"/>
                    <div className="bm-menu-dot2"/>
                    <div className="bm-menu-dot3"/>
                    <div className="bm-menu-dot4"/>
                    <div className="bm-menu-dot5"/>   
                    <div className="bm-menu-dot6"/>   
                    <div className="bm-menu-dot7"/>   
                    </div>


                    <div className="bm-menu-red-dot"
                         // style={{transform:bmData === 0 ? 'translate(-35%,-300%)' : bmData === 1 ? 'translateX(10%)' : 'translate(-35%,250%)'}}
                    />

                    <div className="bm-main-div" style={{transform:bmData >= 1 && 'translateY(-106%) rotate(-27deg)'}}
                         onMouseEnter={()=>handleBmScroll(1)}
                    >
                         <div className="bm-main-left-div">

                              <div className="bm-main-l-top">
                                   <p className="bm-main-l-t-text-1">Anti.0</p>
                                   <p className="bm-main-l-t-text-2">ANTI.0 is a robust, all-inclusive AI security program designed to safeguard user privacy and deliver state-of-the-art defense against AI-driven cyber threats. Leveraging advanced AI models, this innovative solution identifies, evaluates, and stops unauthorized access while preventing potential security breaches. With adaptive defense mechanisms and real-time threat detection, ANTI.0 recognizes unusual behavior patterns and mitigates risks before they escalate—making it an essential tool in today’s dynamic digital landscape ,  Built with a privacy-first architecture, ANTI.0 integrates seamlessly with modern cybersecurity protocols to ensure strong data protection, digital asset security, and user autonomy. As a next-generation AI cybersecurity solution, ANTI.0 offers a proactive and intelligent approach to combating the complex tactics of evolving cyber threats, positioning itself as the preferred choice for those prioritizing robust, future-ready digital security</p>
                              </div>

                              <div className="bm-main-l-bottom">

                              </div>
                         </div>

                         <div className="bm-main-right-div">
                              
                              <img className="bm-right-img-1" src="/images/anti0.png" alt=""/>
                              {/* <img className="bm-right-img-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-2.png" alt=""/>
                              <img className="bm-right-img-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-3.png" alt=""/>
                              <img className="bm-right-img-4" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-4.png" alt=""/>
                              <img className="bm-right-img-5" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-5.png" alt=""/> */}
                         </div>

                         <img className="bm-button-1" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>

                         <div className="bm-button-i-div">
                         
                         <p className="bm-bttn-txt"> <h2>Subscripition Model</h2></p>
                         {/* <div className="bm-money" style={{transform:bmScroll === 1 && 'translateY(-45%)'}}>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$20</p></div>
                                        <div className='bm-m-s-money'><p>$30</p></div>
                                        <div className='bm-m-s-money'><p>$40</p></div>
                                        <div className='bm-m-s-money'><p>$50</p></div>
                         
                         </div> */}
                         </div>

                         <div className="bm-button-i-div-2">
                         <p className="bm-bttn-txt">Monthly</p>
                         <div className="bm-money"  style={{transform:bmScroll === 1 && 'translateY(-45%)'}}>
                         
                                        <div className='bm-m-s-money'><p>$9</p></div>
                                        <div className='bm-m-s-money'><p>$9</p></div>
                                        <div className='bm-m-s-money'><p>$9</p></div>
                                        <div className='bm-m-s-money'><p>$9</p></div>
                                        <div className='bm-m-s-money'><p>$9</p></div>
                         </div>
                         </div>

                         <div className="bm-button-i-div-3">
                         <p className="bm-bttn-txt">Yearly</p>
                         <div className="bm-money"  style={{transform:bmScroll === 1 && 'translateY(-45%)'}}>
                              
                                        <div className='bm-m-s-money'><p>$99</p></div>
                                        <div className='bm-m-s-money'><p>$99</p></div>
                                        <div className='bm-m-s-money'><p>$99</p></div>
                                        <div className='bm-m-s-money'><p>$99</p></div>
                                        <div className='bm-m-s-money'><p>$99</p></div>
                         </div>
                         </div>
                    </div>


                    {/* <div className="bm-main-div-2" style={{transform:bmData >= 2 ? 'translateY(-106%)rotate(-27deg)' : '' || bmData >= 1 ? 'translate(0%,0)rotate(0deg)' : 'translateY(110%) rotate(27deg)'}}
                         onMouseEnter={()=>handleBmScroll(1)}
                    >
                         <div className="bm-main-left-div">

                              <div className="bm-main-l-top">
                                   <p className="bm-main-l-t-text-1">Revenue Stream</p>
                                   <p className="bm-main-l-t-text-2">The fashion event business model encompasses multiple revenue streams
                                        to ensure financial success and attendee satisfaction. Ticket sales serve
                                        as a primary source of income, attracting fashion enthusiasts eager to 
                                        witness runway shows or actively participate in the event.</p>
                              </div>

                              <div className="bm-main-l-bottom">

                              </div>
                         </div>

                         <div className="bm-main-right-div">
                              
                              <img className="bm-right-img-1" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-1.png" alt=""/>
                              <img className="bm-right-img-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-2.png" alt=""/>
                              <img className="bm-right-img-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-3.png" alt=""/>
                              <img className="bm-right-img-4" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-4.png" alt=""/>
                              <img className="bm-right-img-5" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-5.png" alt=""/>
                         </div>
                         
                         <img className="bm-button-1" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>

                         <div className="bm-button-i-div">
                         <p className="bm-bttn-txt">Ticket SALES</p>
                         <div className="bm-money" style={{transform:bmScroll === 2 && 'translateY(-45%)'}}>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$20</p></div>
                                        <div className='bm-m-s-money'><p>$30</p></div>
                                        <div className='bm-m-s-money'><p>$40</p></div>
                                        <div className='bm-m-s-money'><p>$50</p></div>
                         
                         </div>
                         </div>

                         <div className="bm-button-i-div-2">
                         <p className="bm-bttn-txt">Sponsership</p>
                         <div className="bm-money"  style={{transform:bmScroll === 2 && 'translateY(-45%)'}}>
                         
                                        <div className='bm-m-s-money'><p>+100</p></div>
                                        <div className='bm-m-s-money'><p>+200</p></div>
                                        <div className='bm-m-s-money'><p>+300</p></div>
                                        <div className='bm-m-s-money'><p>+400</p></div>
                                        <div className='bm-m-s-money'><p>+500</p></div>
                         </div>
                         </div>

                    <div className="bm-button-i-div-3">
                    <p className="bm-bttn-txt">Merchandise SALES</p>
                    <div className="bm-money"  style={{transform:bmScroll === 2 && 'translateY(-45%)'}}>
                              
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$20</p></div>
                                        <div className='bm-m-s-money'><p>$30</p></div>
                                        <div className='bm-m-s-money'><p>$40</p></div>
                                        <div className='bm-m-s-money'><p>$50</p></div>
                         </div>
                    </div>
                    </div> */}

                    <div className="bm-main-div-3" style={{transform:bmData >= 1 ? 'translate(0%,0)rotate(0deg)' : 'translateY(210%) rotate(27deg)'}}
                         onMouseEnter={()=>handleBmScroll(1)}
                    >
                         <div className="bm-main-left-div">

                              <div className="bm-main-l-top">
                                   <p className="bm-main-l-t-text-1">Anti.Q</p>
                                   <p className="bm-main-l-t-text-2">ANTI.Q a retro-inspired, handcrafted music player by Anti AI, designed for the modern listener craving vintage nostalgia. This Bluetooth-enabled audio device combines classic design with advanced AI-driven features, offering a unique fusion of old-school style and smart technology. Created for those seeking an immersive, nostalgic listening experience, ANTI.Q is set to launch soon, promising to blend timeless aesthetics with the latest innovations in audio..</p>
                              </div>

                              <div className="bm-main-l-bottom">

                              </div>
                         </div>

                         <div className="bm-main-right-div">
                              
                              <img className="bm-right-img-1" src="/images/antiq.png" alt=""/>
                              {/* <img className="bm-right-img-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-2.png" alt=""/>
                              <img className="bm-right-img-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-3.png" alt=""/>
                              <img className="bm-right-img-4" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-4.png" alt=""/>
                              <img className="bm-right-img-5" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-right-img-5.png" alt=""/> */}
                         </div>
                         
                         <img className="bm-button-1" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-2" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>
                         <img className="bm-button-3" src="https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-button.png" alt=""/>

                         <div className="bm-button-i-div">
                         <p className="bm-bttn-txt">Pricing</p>
                         {/* <div className="bm-money" style={{transform:bmScroll === 3 && 'translateY(-45%)'}}>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$10</p></div>
                                        <div className='bm-m-s-money'><p>$20</p></div>
                                        <div className='bm-m-s-money'><p>$30</p></div>
                                        <div className='bm-m-s-money'><p>$40</p></div>
                                        <div className='bm-m-s-money'><p>$50</p></div>
                         
                         </div> */}
                         </div>

                    <div className="bm-button-i-div-2">
                    <p className="bm-bttn-txt">Anti.Q 1</p>
                    <div className="bm-money"  style={{transform:bmScroll === 3 && 'translateY(-45%)'}}>
                         
                                        <div className='bm-m-s-money'><p>₹600</p></div>
                                        <div className='bm-m-s-money'><p>₹600</p></div>
                                        <div className='bm-m-s-money'><p>₹600</p></div>
                                        <div className='bm-m-s-money'><p>₹600</p></div>
                                        <div className='bm-m-s-money'><p>₹600</p></div>
                         </div>
                    </div>

                    <div className="bm-button-i-div-3">
                    <p className="bm-bttn-txt">Anti.Q 2</p>
                    <div className="bm-money"  style={{transform:bmScroll === 3 && 'translateY(-45%)'}}>
                              
                                        <div className='bm-m-s-money'><p>₹3500</p></div>
                                        <div className='bm-m-s-money'><p>₹3500</p></div>
                                        <div className='bm-m-s-money'><p>₹3500</p></div>
                                        <div className='bm-m-s-money'><p>₹3500</p></div>
                                        <div className='bm-m-s-money'><p>₹3500</p></div>
                         </div>
                    </div>
                    </div>


                    </div>
     </Stickyroll>
     </div>

     

  );
};