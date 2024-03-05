import { Link } from 'react-router-dom'

let Margin = () => {
  return (
      <div id='opMargin'>
        <Link to="/">
          <p id='title'>
            Lohman Precision
          </p>
        </Link>
        <div id='dropDown'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
  )
}


export default Margin