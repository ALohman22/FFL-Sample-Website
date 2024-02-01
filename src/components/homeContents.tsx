import Products from "./products";
import ProductSpotlight from "./productSpotlight";
import Footer from "./footer";

let HomeContents = () => {
    return (
        <div id='homeContents'>
            <Products></Products>
            <ProductSpotlight></ProductSpotlight>
            <Footer></Footer>
        </div>
    )
}

export default HomeContents