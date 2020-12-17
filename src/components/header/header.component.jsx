import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crwns.svg'
//this spectial syntax allows react to know that it is a logo
//import {ReactComponent as Logo}
//The ReactComponent import name is special and tells create react app that you want a react component
// that renders and SVG, rather than its filename. 
//Read more about it here, but keep in mind that this is React library special syntax:
// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </div>
)
export default Header