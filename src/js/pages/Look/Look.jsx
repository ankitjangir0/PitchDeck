import React from 'react';
import "../../../css/pages/Look/look.scss"

const Look = () => {

  const [lookData, setLookData] = React.useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Increment lookData, reset to 1 if it reaches 3
  //     setLookData(prev => (prev === 3 ? 1 : prev + 1));
  //   }, 3000); 

  //   return () => clearInterval(interval); // Cleanup interval 
  // }, []);

  const handleLookRightClick = () => {
    setLookData(prev => prev === 3 ? 1 : prev + 1);
  }
  const handleLookLeftClick = () => {
    setLookData(prev => prev === 1 ? 3 : prev - 1);
  }

  return (
    <div className='Look'>

      <img className='look-main-img' src='../../../../public/images/unnamed.png' alt='' />
      <img className='look-left-button' src='../images/look-left-bttn.png' alt=''
           onClick={handleLookLeftClick}
       />
      <img className='look-right-button' src='../images/look-right-bttn.png' alt=''
           onClick={handleLookRightClick}
        />

      <div className='look-caro-div'>

        <div className='look-content-div'
          style={{
            transform: lookData === 1 ? 'translateX(0%) scale(1)' :
              lookData === 2 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 1 ? 3 : 1, // Highest zIndex for the active card
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='../../../../public/images/chiti2.0.png' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Our Mission</p>
            <p className='look-content-para-2'
               style={{ left:'12%' }}
            >Our mission is to protect humanity from AI , induced threats by creating AntiAi Softwares and making our own Ai safe products.</p>
          </div>

        </div>

        <div className='look-content-div'
          style={{
            transform: lookData === 2 ? 'translateX(0%) scale(1)' :
              lookData === 3 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 2 ? 3 : 1,
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='../../../../public/images/value.png' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Our Values</p>
            <p className='look-content-para-2'>Our values introducing old school entertanmemt to the mordern world . Giving users an experince that has been missin through out generations.</p>
          </div>

        </div>

        <div className='look-content-div'
          style={{
            transform: lookData === 3 ? 'translateX(0%) scale(1)' :
              lookData === 1 ? 'translateX(-80%) scale(0.7)' :
                'translateX(80%) scale(0.7)',
            zIndex: lookData === 3 ? 3 : 1,
            transition: '1s ease-out'
          }}
        >

          <img className='look-content-div-img' src='../../../../public/images/Gemini_Generated_Image_g28hdtg28hdtg28h.jpg' alt='' />
          <div className='look-content-txt-div'>
            <p className='look-content-para-1'>Our Motto</p>
            <p className='look-content-para-2'
               style={{ left:'12%' }}
            >|| अन्ते सत्यं विजयते || is our slogen which translate to in the end truth triumphs in the end . which is the core foundation of our ethic and work .</p>
          </div>

        </div>

      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 1 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>Our Mission</p>
        <p className='look-bottom-p-2'>Our mission is to protect humanity from AI , induced threats by creating AntiAi Softwares and making our own Ai safe products.</p>
      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 2 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>Our Vision</p>
        <p className='look-bottom-p-2'>Pushing the boundries of innovations in AI space through are revolutionary products and developement </p>
      </div>

      <div className='look-bottom-div'
        style={{ opacity: lookData === 3 ? '1' : '0', }}
      >
        <p className='look-bottom-p-1'>Our Motto</p>
        <p className='look-bottom-p-2'>|| अन्ते सत्यं विजयते || is our slogen which translate to in the end truth triumphs in the end . which is the core foundation of our ethic and work .</p>
      </div>

    </div>
  )
}

export default Look;
