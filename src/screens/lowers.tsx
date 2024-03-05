import { useState, useEffect } from "react"
import ProductIcon from "../components/productIcon"
import PageNumbers from "../components/pageNumbers"

let Lowers = () => {

  const [products, setProducts] = useState<any> ([])
  const [prodCount, setProdCount] = useState<number>(0)

    useEffect(() => {
        const fetchProducts = async (): Promise<any> => {
          const response = await fetch('http://localhost:5000/lowers')
          setProducts(await response.json())
        }
        fetchProducts();
      }, [])
      
      const mapProducts = () =>{
        setProdCount(products.length)
        return(
          products.map((product: string[])=> {
            return(
            <ProductIcon key={product[0]} prod={product}/>)
          })
        )
      }
      
      return (
      <div id='lowerScreen'>
        <div id='pageContent'>
          {mapProducts()}
        </div>
        <PageNumbers count={prodCount}/>
      </div>
      );
    }
    
    export default Lowers