import React from "react";
import './header.css'
const sonHeader = (props) =>{
	 const emit = () => {
	        return () => {
	            props.son()
	        }
	    }
	return(
	<div>
	<div className='headerTop'>
	<div onClick = { emit()}>{props.back}</div>
	<div>{props.title}</div>
	<div></div>
	</div>
	</div>
	
	)
}
export default sonHeader;