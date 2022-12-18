import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

 const Logo = () => {
  return(
    <Tilt className='ma4 mt0 br2 shadow-2' style={{ height: '150px', width: '150px' }}>
      <div style={{ backgroundColor: '#DBD5A4', height: 'inherit' }}>
        <h1>
          <img alt='brain' src={ brain } style={{ paddingTop: '10px'}}/>
        </h1>
      </div>
    </Tilt>
  )
 }
 export default Logo;