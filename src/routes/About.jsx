import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const About_Us = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'About Us'} sub_head={'About Us / Home'} />
      <h1>About</h1>
    </div>
  )
}

export default About_Us
