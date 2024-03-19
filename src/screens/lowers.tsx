import { useState, useEffect } from "react"
import ProductIcon from "../components/productIcon"
import PageNumbers from "../components/pageNumbers"
import ProductDiv from "../components/productDiv"

let Lowers = () => {

  const [products, setProducts] = useState<any> ([])
  //console.log(products)
  const [page, setPage] = useState<number> (1)
  //console.log(page)
    useEffect(() => {
      const fetchLowers = async (): Promise<any> => {
          const response = await fetch('http://localhost:5000/lowers')
          setProducts(await response.json())
          //console.log(products)
      }
          fetchLowers();
          
      }, [])
      
      //const mapLowers = () =>{
        //return(
          //products.map((product: string[])=> {
            //return(
            //<ProductIcon key={product[0]} prod={product}/>)
          //})
        //)
      //}

      //const displayPageContent = () => {
      //  let pageContent = chunkArray[Number(page)]
      //  console.log(chunkArray)
      //  console.log(page)
      //return(
      //    <ProductDiv key={page} pageContent={pageContent}/>
      //    )
      //}
         

      
      const buildChunkArray = (()=> {
        let chunkSize = 10;
        let chunkArr: any[] = []
        for (let i = 0; i < products.length; i += chunkSize) {
          const chunk: [] = products.slice(i, i + chunkSize);
          chunkArr.push(chunk)
          //console.log(chunkArr)
        }
        let pageIndex: number = Number(page-1)
        //console.log(pageIndex)
        //console.log(chunkArr)
        let pageContent: [] = chunkArr[pageIndex]
        //console.log(pageContent)
        return(
          <ProductDiv key={page} pageContent={pageContent}/>
          )
      }) 
      
      return (
      <div id='lowerScreen'>
        {buildChunkArray()}
        <PageNumbers prodCount={products.length} setPage={setPage} page={page}/>
      </div>
      );
    }
    
    export default Lowers