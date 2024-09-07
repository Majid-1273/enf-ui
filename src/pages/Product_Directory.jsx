import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Product_Directory = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Product Directory / Solar Panels'} />
      <h1>Product Directory</h1>
    </div>
  )
}

export default Product_Directory
