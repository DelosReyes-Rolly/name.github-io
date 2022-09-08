import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

 
function MainPage() {
  let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
  let iconStyles = { fontSize: "4em" };
  return ( 
    <div className='container'>
      <img className='profile' src={require('./../../../assets/img/shapes.png')} />
      <div className='name'>
        Rolly A. Delos Reyes
      </div><br/>
      <div className='position'>
        Student - PUP Taguig
      </div><br/>
      <div className='logo'>
        <a href="#" className={circleClasses}><FaLinkedin style={iconStyles}/></a>
        <a href="https://github.com/DelosReyes-Rolly/" target="_blank" rel="noreferrer" className={circleClasses}><FaGithubSquare style={iconStyles}/></a>
        <a href="https://m.me/delosreyesrolly" target="_blank" rel="noreferrer" className={circleClasses}><FaFacebookSquare style={iconStyles}/></a>
      </div>
    </div>
  );
}
 
export default MainPage;