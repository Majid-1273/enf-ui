import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Company = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels / Polycrystalline / Horay Solar'} />
      <h1>Single Company</h1>
    </div>
  )
}

export default Company
