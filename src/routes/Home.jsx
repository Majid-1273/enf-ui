import React from "react";
import NavHome from "../components/NavHome";
import headerImage from '../assets/Home Page/homePageImg.png';

function App() {
  return (
    <div>
      <NavHome 
        bgImage={headerImage} 
        main_head=""
        sub_head=""
      />
      Home
    </div>
  );
}

export default App;