import { useState, useEffect } from "react"
import ProductIcon from "./productIcon"


let ProductSpotlight = () =>{
    const [products, setProducts] = useState<any> ([])

    useEffect(() => {
        const fetchProducts = async (): Promise<any> => {
          const response = await fetch('http://localhost:5000/products')
          setProducts(await response.json())
        }
        fetchProducts();
      }, [])
      
      const mapProducts = () =>{
        return(
          products.map((product: string[])=> {
            return(
            <ProductIcon key={product[0]} prod={product}/>)
          })
        )
      }
    

    return(
      <div id='carosel'>
        <div id='productSpotlight'>
          {mapProducts()}
        </div>
      </div>
    )
}
export default ProductSpotlight