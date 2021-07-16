import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './navbar.css'
class Navbar extends Component{
	constructor(props) {
	   super(props)
	   this.state = {
		   tabber:[
		   	{icon:1,name:'首页'},
		   	{icon:1,name:'分类'},
		   	{icon:1,name:'我的'}
		   ],
		activeIndex:0
	   }
	   }
	   handleshow(index){
	   	if(index === 1){
	   		this.props.history.push('/classify')
	   	}else if (index === 2){
			
		}else{
			this.props.history.push('/')
		}
	   	this.setState({
			activeIndex:index
	   	}) 	
	   }
	   render(){
		   return(
			<div className="tab">
			{this.state.tabber.map((k,index) =>(
			// 底部tab栏
			<ul className="as">
				<li className={this.state.activeIndex === index?'active':''} key={index} onClick={()=> this.handleshow(index)}>
				<div>{k.icon}</div>
				<div>{k.name}</div>
				</li>
			</ul>
			))}
			</div>
		   )
	   }
}
export default withRouter(Navbar)