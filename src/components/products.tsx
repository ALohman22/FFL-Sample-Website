import {Link} from 'react-router-dom'

let Products = () => {

    let upperStyle ={
        backgroundImage: "url('https://image.primaryarms.com/production/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Mont%20Blanc/Development/img/BCM4-UR-M4_00.jpg?resizeid=3&resizeh=280&resizew=320')",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }

    let lowerStyle ={
        backgroundImage: "url('https://davidsondefense.com/cdn-cgi/image/quality%3D85/assets/images/CO-84072.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }

    let barrelStyle ={
        backgroundImage: "url('https://www.pewpewtactical.com/wp-content/uploads/2017/12/Assorted-barrels-by-Ballistic-Advantage-e1513017999551.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }

    let partsStyle ={
        backgroundImage: "url('https://cdn11.bigcommerce.com/s-z44cuhyv4y/images/stencil/1280x1280/products/1141/10594/mil-spec-ar15-lower-parts-kit-hammer-and-trigger-1__21301.1635997457.jpg?c=1')",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <div id='products'>
            <div id='productButton' style={upperStyle}>
                <Link to="/uppers">
                    <p id='productPTag'>Uppers</p>\
                </Link>
            </div>
            <div id='productButton' style={lowerStyle}>
                <Link to="lowers">
                    <p id='productPTag'>Lowers</p>
                </Link>
            </div>
            <div id='productButton' style={barrelStyle}>
                <Link to="/barrels">
                    <p id='productPTag'>Barrels</p>
                </Link>
            </div>
            <div id='productButton' style={partsStyle}>
                <Link to="/parts">
                    <p id='productPTag'>Parts</p>
                </Link>
            </div>
        </div>
    )
}

export default Products