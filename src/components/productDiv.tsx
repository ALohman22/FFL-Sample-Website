import ProductIcon from "./productIcon"

let ProductDiv = ({pageContent}: {pageContent:[]}) => {
//console.log(pageContent)
    const mapLowers = () =>{
        return(
          pageContent?.map((product: string[])=> {
            return(
            <ProductIcon key={product[0]} prod={product}/>)
          })
        )
      }

    return (
        <div id='pageContent'>
            {mapLowers()}
        </div>
    )
}

export default ProductDiv