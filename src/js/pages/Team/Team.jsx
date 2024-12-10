import React from 'react';
import '../../../css/pages/Team/Team.scss';

function Team() {

    const [teamData, setTeamData] = React.useState(0);

    const handleTeamMouseEnter = (id) => {
          setTeamData(id);
    }
  return (
    <div className='Team' >

         <div className='team-heading'>
              <p className='team-head-txt-1'>TEAM</p>
              <p className='team-head-txt-2'>Building The Future Together.</p>
         </div>
         
         <div className='team-center-div'>

              <div className='team-c-content-1' 
               //     onMouseEnter={()=>handleTeamMouseEnter(1)}
                   onClick={()=>handleTeamMouseEnter(1)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                   >

                   <div className='team-c-person-img-container'
                        style={{
                                height : teamData === 1 ? '60%':'',
                                // transform: teamData === 1 && 'scale(1,0.5)',
                                transition: teamData === 1 && 'height 1.5s ease-out'
                        }}
                   >
                        <img className='team-c-person-img' src='../../../../public/images/Screenshot 2024-12-07 125750.png' alt=''/>
                        <img className='team-plus-logo'    src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                        
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 1 && 'translateY(-650%)',
                                transition: teamData === 1 && 'transform 1.5s ease-out'
                                }}>
                      <p>Tanishq Sharma</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 1 && 'transform 0s ease-out'
                                }}>
                      <p>FOUNDER</p>
                   </div>

                   <div className='team-c-person-profile-1' 
                        style={{
                                transition: teamData === 1 && ' 0.2s ease-out ',
                                opacity: teamData === 1 ? 0 : ''
                                }}>
                      <p>FOUNDER</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 1 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>Marketing</li>
                          <li>Sales</li>
                          <li>AI prompt Engineerring</li>
                          <li>Business Analytics </li>
                          <li>Business Management</li>
                      </ul>
                   </div>
              </div>

              <div className='team-c-content-2' 
               //     onMouseEnter={()=>handleTeamMouseEnter(2)}
                   onClick={()=>handleTeamMouseEnter(2)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >

                  <div className='team-c-person-img-container' 
                       style={{height : teamData === 2 ? '60%':'',
                               transition: teamData === 2 && 'height 1.5s ease-out'}}>
                      <img className='team-c-person-img' src='../../../../public/images/971503de-f4da-4314-869a-3d5c60e09563.jpg' alt=''/>
                        <img className='team-plus-logo' src=' https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                  </div>

                  <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 2 && 'translateY(-650%)',
                                transition: teamData === 2 && 'transform 1.5s ease-out'
                                }}>
                      <p>Divya Sharma</p>
                  </div>

                  <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 2 && 'transform 0s ease-out'
                                }}>
                      <p>Chief Manager</p>
                  </div>

                  <div className='team-c-person-profile-1'
                        style={{
                                // transform: teamData === 2 ?"": 'translateY(590%)',
                                transition: teamData === 2 && 'transform 1.5s ease-out',
                                opacity: teamData === 2 ? 0 : ''
                                }}>
                      <p>Cheif Manager</p>
                  </div>

                  <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 2 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>Managment</li>
                          <li>Business Managment</li>
                          <li>Hiring Expert </li>
                          
                      </ul>
                  </div>
               </div>

              {/* <div className='team-c-content-3' 
                   onMouseEnter={()=>handleTeamMouseEnter(3)}
                   onClick={()=>handleTeamMouseEnter(3)}
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >

                   <div className='team-c-person-img-container' 
                        style={{height : teamData === 3 ? '60%':'',
                               transition: teamData === 3 && 'height 1.5s ease-out'}}>
                       <img className='team-c-person-img' src='../../../../public/images/8a04af9d-c658-4746-ac98-2f2c53158df4.jpg' alt=''/>
                        <img className='team-plus-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 3 && 'translateY(-650%)',
                                transition: teamData === 3 && 'transform 1.5s ease-out'
                                }}>
                       <p>Ankit Jangir</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 3 && 'transform 0s ease-out'
                                }}>
                       <p>Developer</p>
                   </div>

                   <div className='team-c-person-profile-1'
                        style={{
                                transform: teamData === 3 ?"": 'translateY(590%)',
                                transition: teamData === 3 && 'transform 1.5s ease-out',
                                opacity: teamData === 3 ? 0 : 0.7
                                }}>
                       <p>Developer</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 3 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>years of experience in developement</li>
                          <li>Certified Developer </li>
                          <li>Computer Science</li>
                        
                      </ul>
                   </div>
              </div>

              <div className='team-c-content-4' 
                   onMouseEnter={()=>handleTeamMouseEnter(4)}
                   onClick={()=>handleTeamMouseEnter(4)}
               
                   onMouseLeave={()=>handleTeamMouseEnter(0)}
                  >
                   
                   <div className='team-c-person-img-container' 
                        style={{height : teamData === 4 ? '60%':'',
                               transition: teamData === 4 && 'height 1.5s ease-out'}}>
                        <img className='team-c-person-img' src='../../../../public/images/98225902-78d6-4365-b97a-ecde57ac2832.jpg' alt=''/>
                        <img className='team-plus-logo' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-plus-logo.png' alt=''/>
                   </div>

                   <div className='team-c-person-name' 
                        style={{
                                transform: teamData === 4 && 'translateY(-650%)',
                                transition: teamData === 4 && 'transform 1.5s ease-out'
                                }}>
                       <p>Gaurav Kumar Sharma</p>
                   </div>

                   <div className='team-c-person-profile-0'
                        style={{
                                transition: teamData === 4 && 'transform 0s ease-out'
                                }}>
                       <p>Developer</p>
                   </div>

                   <div className='team-c-person-profile-1'
                        style={{
                                transform: teamData === 4 ?"": 'translateY(590%)',
                                transition: teamData === 4 && 'transform 1.5s ease-out',
                                opacity: teamData === 4 ? 0 : 0.7
                                }}>
                       <p>Developer</p>
                   </div>

                   <div className='team-c-person-details'
                        style={{
                                opacity: teamData === 4 ? 0.5 : 0
                                }}
                   >
                      <ul>
                          <li>years of experience in Machine Learning</li>
                          <li>Certified Ai/ml developer</li>
                          <li>Computer Science</li>
                         
                      </ul>
                   </div>
              </div> */}


         </div>

         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'36%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         {/* <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{             opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/> */}
         <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'73%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
         {/* <img className='team-cursor' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png' alt='' style={{ left:'82%', opacity: teamData === 1 ||  teamData === 2 || teamData === 3 || teamData === 4 ? '0':''}}/>
          */}

    </div>
  )
}

export default Team