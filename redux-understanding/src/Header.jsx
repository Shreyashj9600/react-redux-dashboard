import AddToCart from './AddToCard'
import './app.css'

const Header = () => {
    return (

        <header>
            <div className="logo">MyShop</div>
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Products">Products</a></li>
                </ul>
            </nav>
            <AddToCart />
        </header>
    )
}

export default Header