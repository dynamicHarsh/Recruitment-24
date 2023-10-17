import React from 'react'
import {PulseLoader} from 'react-spinners'
import "../App.css";
const Spinner = () => {
  return (
    <div class="spinner">
  {/* <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> */}
  
<PulseLoader color="#36d7b7" />
</div>
  )
}

export default Spinner