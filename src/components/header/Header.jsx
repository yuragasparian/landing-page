import GetStartButton from "../getStartButton/GetStartButton"
import Logo from "../logo/Logo"
import MenuItems from "../menuItems/MenuItems"
import "./Header.css"

export default () => (
    <div className="header">
        <Logo></Logo>
        <MenuItems></MenuItems>
        <GetStartButton></GetStartButton>
    </div>
)