import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo2.svg';
// import { GlobalContext } from '../contexts/GlobalContext';
import './Navbar.css'
import { Widgets } from '@mui/icons-material';
function Navbar({ getInputValue }) {

    const [searchText, setSearchText] = useState("");
    const cartProducts = useSelector((store) => store.cart.value);
    // const { cart } = useContext(GlobalContext);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        getInputValue(searchText);
    }

    // const handleSearchButtonClick = () => {
    //     getInputValue(searchText);
    // }

    let nCartItems = 0;
    cartProducts.forEach((productObj) => {
        nCartItems += productObj.qty;
    });

    return (
        <div     className='mm' >
            <div>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            </div>

            <div style={{ marginLeft: "20px"    }}>
                <input 

                style={{marginLeft:"470px"}}
                    placeholder='Search any item...' 
                    value={searchText} 
                    onChange={handleInputChange} 
                />
                {/* <button onClick={handleSearchButtonClick}>Search</button> */}
            </div>
       
            <div  className='flexx' >
            <div style={{ marginLeft: "20px" }}>
                <Link to="/products">
                    <p>Products Page</p>
                </Link>
            </div>
            <div style={{ marginLeft: "30px" }}>
                <Link to='/cart'>
                    <p>Cart ({nCartItems})</p>
                </Link>
            </div>
            <div style={{ marginLeft: "30px" }}>
                <Link to='/login'>
                    <p>LOG IN </p>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;
