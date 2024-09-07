import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';

const Cart = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'My Cart'} sub_head={'My Cart / Home'} />
      <h1>Cart</h1>
    </div>
  )
}

export default Cart
