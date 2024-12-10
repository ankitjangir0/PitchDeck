import  { useState } from 'react';
import "../../../css/pages/Score/score.scss"

const Score = () => {

  const[p7hover,setP7hover]=useState(false);
  const handleMouseEnter=(id)=>{
        if(id === 1)
          setP7hover(true);
        if(id === 0)
          setP7hover(false);
      }

  return (
    <div className='Score' 
         onMouseEnter={()=>handleMouseEnter(1)}>

    <div className="score-heading">
             <p style={{fontSize:'3vw'}}><span style={{color:'white'}}>Generative AI Market</span></p>
        </div>

        <div className="score-detail-box">

             <div className="score-detail-div-1">
                 <p className="score-detail-txt-1">Open AI</p>
                 <p className='score-small-txt-1'>39%.</p>
                 <div className="score-prog-child-1"
                      style={{width: p7hover ? '39%' : ""}}
                      // style={{width:clickState === 6 && '90%'}}
                 />
             </div>

             <div className="score-detail-div-2">
                  <p className="score-detail-txt-2">MicroSoft.</p>
                  <p className='score-small-txt-2'>30%</p>
                  <div className="score-prog-child-2"
                      style={{width:p7hover && '30%'}}/>
             </div>

             <div className="score-detail-div-3">
                  <p className="score-detail-txt-3">AWS</p>
                  <p className='score-small-txt-3'>8%.</p>
                  <div className="score-prog-child-3"
                      style={{width:p7hover && '8%'}}/>
             </div>

             <div className="score-detail-div-4">
                  <p className="score-detail-txt-4">Google</p>
                  <p className='score-small-txt-4'>7%</p>
                  <div className="score-prog-child-4"
                      style={{width:p7hover && '7%'}}/>
             </div>
             <div className="score-detail-div-5">
                  <p className="score-detail-txt-5">Others</p>
                  <p className='score-small-txt-5'>16%</p>
                  <div className="score-prog-child-5"
                      style={{width:p7hover && '16%'}}/>
             </div>
             {/* ---------------------------------------------------------------------- */}

             {/* <div className="score-circle-1"></div>
             <div className="score-circle-1-5"></div>
             <div className="score-circle-2"
                  style={{transform:p7hover ? 'translate(265%,63%) scale(1.65)' : 'translate(270%,75%)'}}
             ></div>
             <div className='score-circle-2-5'
                  style={{transform:p7hover ? 'translate(218%,61.5%) scale(1.3)' : 'translate(237%,77.5%)'}}
             ></div>
             <div className="score-circle-3"
                  style={{transform:p7hover ? 'translate(255%,47%) scale(2.1)' : 'translate(270%,75%)'}}
             ></div>
             <div className="score-circle-3-5"
                  style={{transform:p7hover ? 'translate(259%,52%) scale(2.1)' : 'translate(270%,75%)'}}
             ></div> */}

             <img className='s-circle-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-1.png' alt=''/>
             <img className='s-circle-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-2.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'scale(0.8)'}}/>
             <img className='s-circle-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,20%)scale(0.6)'}}/>
             <img className='s-circle-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,20%)scale(0.6)'}}/>
             <img className='s-circle-4' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-4.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,30%)scale(0.6)'}}/>
             <img className='s-circle-5' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-5.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,35%)scale(0.6)'}}/>
             <img className='s-circle-6' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-6.png' alt=''
                  style={{transform:p7hover ? 'scale(1)' : 'translate(20%,35%)scale(0.6)'}}/>

              {/* <img className="score-line" src='../images/score-line.png' alt='' style={{opacity:p7hover ? '0.7':0, transition:'1.5s ease-out'}}/> */}

        </div>

        <div className='score-line-detail-box-tam'style={{opacity:p7hover && '1'}}>
          <p style={{position:'absolute', fontSize:'1.5vw',top:'-62%', right:'17%',fontWeight:'100'}}>GEN-AI MARKET</p>
          {/* <p style={{position:'absolute', left:'6.5%',top:'10%'}}>TOTAL AVAILABLE <span style={{color:'white'}}>MARKET</span></p> */}
          
          <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'43%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'10%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>$43</p></div>
                              <div className='bm-m-s-money'><p>$52</p></div>
                              <div className='bm-m-s-money'><p>$61</p></div>
                              <div className='bm-m-s-money'><p>$69</p></div>
                              <div className='bm-m-s-money'><p>$70</p></div>
                    </div>
          </div>
          

          <p style={{color:'white',right:'21%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'44%'}}>B</p>
        </div>


        <div className='score-line-detail-box-sam'style={{opacity:p7hover && '1'}}>
        <p style={{position:'absolute', fontSize:'1.2vw',top:'-70%', right:'17%',fontWeight:'1000'}}>INVESTMENT</p>
        {/* <p style={{position:'absolute', left:'2.5%',top:'3%',textAlign:'right',width:'80%'}}>SERVICEABLE AVAILABLE <span>MARKET</span></p> */}
        
        <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'54%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'19%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>10</p></div>
                              <div className='bm-m-s-money'><p>15</p></div>
                              <div className='bm-m-s-money'><p>30</p></div>
                              <div className='bm-m-s-money'><p>35</p></div>
                              <div className='bm-m-s-money'><p>40</p></div>
                    </div>
          </div>

        <p style={{right:'21%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'51%'}}>%</p>
        </div>


        <div className='score-line-detail-box-som'style={{opacity:p7hover && '1'}}>
        <p style={{position:'absolute', fontSize:'2.2vw',top:'-68%', right:'17%',fontWeight:'1000'}}>CAGR</p>
        {/* <p style={{position:'absolute', left:'3.5%',top:'3%',textAlign:'right',width:'80%'}}>SERVICEABLE OBTAINABLE <span style={{color:'white'}}>MARKET</span></p> */}
        
        <div className='scroll-tam-money'
               style={{position:'absolute', height:'50%', width:'35%',left:'36%', top:'56%', overflow:'hidden'}}>
                    <div style={{position:'absolute', fontSize:'1.5vw', right:'3%',bottom:'10%', transition:'3s ease-out 1s', transform:p7hover ? "translateY(0%)":'translateY(79%)'}}> 
          
                              <div className='bm-m-s-money'><p>34.6</p></div>
                              <div className='bm-m-s-money'><p>34.6</p></div>
                              <div className='bm-m-s-money'><p>34.6</p></div>
                              <div className='bm-m-s-money'><p>34.6</p></div>
                              <div className='bm-m-s-money'><p>34.6</p></div>
                    </div>
          </div>

        <p style={{color:'white',right:'18%',position:'absolute',fontSize:'1.7vw',fontWeight:'100', top:'55%'}}>%</p>
        </div>

       

        

        
    </div>
  )
}

export default Score

