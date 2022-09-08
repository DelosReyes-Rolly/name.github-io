import React from 'react';
import ReactDOM from 'react-dom/client';
 
function Site() {
  return ( 
    <div className='containerAboutSite'>
      <div className='titleAbout'>
        About this Website!
      </div>
      <div className='detailsAbout'>
        Author: <span className='details'>Rolly A. Delos Reyes </span> 
        Posted: <span className='details'>September 9, 2022</span>
      </div>
      <div className='contentAbout'>
          This website is made using ReactJS.<br/><br/>
          This is a personal website that I created to introduce myself to other people using
          new technology.<br/><br/>
          I hope you like it.<br/><br/>
          Thank you!
      </div>
    </div>
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
export default Site;