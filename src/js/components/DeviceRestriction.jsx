import  { useEffect, useState } from 'react';

const DeviceRestriction = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile) {
    // Render restriction message for mobile users
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Access Restricted</h1>
        <p style={{ fontSize: '18px' }}>
          This website is not accessible on mobile devices. Please open it on a desktop browser.
        </p>
      </div>
    );
  }

  // Render the main website content for desktop users
  return <>{children}</>;
};

export default DeviceRestriction;
