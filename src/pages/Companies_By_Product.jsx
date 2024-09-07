import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Companies_By_Products = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels / Polycrystalline'} />
      <h1>Companies By Product</h1>
    </div>
  )
}

export default Companies_By_Products
