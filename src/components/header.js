import React from "react";
import './header.css'
// 父传子
const sonHeader = (props) =>{
	// 子传父
	 const emit = () => {
	        return () => {
	            props.son()
	        }
	    }
	return(
	<div>
	<div className='headerTop'>
	{/* 子传父*/}
	<div onClick = { emit()}>{props.back}</div>
	{/* 父传子*/}
	<div>{props.title}</div>
	<div></div>
	</div>
	</div>
	
	)
}
export default sonHeader;