import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Product = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels / PNGNH54-B8 415-440W Full Black'} />
      <h1>Single Product</h1>
    </div>
  )
}

export default Product
