import NavBar from "../components/NavBar"
import headerImage from '../assets/Company Directory/headerImgAll.png';
import Locals from '../components/Locals'
import CrystallinePanels from '../components/CrystallinePanels'
import EfficiencyPanels from '../components/EfficiencyPanels'
import PanelDeals from '../components/PanelDeals'
import ADS from '../components/ADS'

const Company_Directory = () => {
  return (
    <div>
      <NavBar bgImage={headerImage}  main_head={'Solar Panel Manufacturer'} sub_head={'Company Directory / Solar Panels'} />
      <Locals/>
      <CrystallinePanels/>
      <ADS/>
      <EfficiencyPanels/>
      <PanelDeals/>
    </div>
  )
}

export default Company_Directory
