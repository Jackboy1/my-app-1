import Navbar from '../components/seller/Navbar.jsx'
import SideBar from '../components/seller/SideBar.jsx'

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideBar />
      {children}
    </div>
  )
}

export default layout
