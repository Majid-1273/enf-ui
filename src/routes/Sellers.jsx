import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Sellers = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Seller'} sub_head={'Company Directory / Seller'} />
      <h1>Sellers</h1>
    </div>
  )
}

export default Sellers
