let PageNumbers = ( {prodCount, setPage, page} : {prodCount: number, setPage: any, page: number}) => {

const changeHighlight = (e: any) => {
const old: HTMLElement = document.getElementById('numbersHighlighted')!
e.target.id = 'numbersHighlighted'
old?.removeAttribute('id')
let pageNum = e.target.innerHTML
setPage(pageNum)
}    


const mapCount = () => {
    const pages = Math.round(prodCount/10)
    return(
        [...Array(pages)].map((e, i) => {
           // console.log(i+1)
           return(
               <p className='numbers' key={i+1} onClick={changeHighlight}>{i+1}</p>
               )
        })
    )
}
   
    
    
    return(
        <div id='pageNumbers'>
           {mapCount()}
        </div>
    )
}
export default PageNumbers