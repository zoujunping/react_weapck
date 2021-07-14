import React from "react";
import './header.css'
const sonHeader = (props) =>{
	 const cb = () => {
	        return () => {
	            props.son()
	        }
	    }
	return(
	<div>
	<div className='headerTop'>
	<div onClick = { cb()}>{props.back}</div>
	<div>{props.title}</div>
	<div></div>
	</div>
	</div>
	
	)
}
export default sonHeader;