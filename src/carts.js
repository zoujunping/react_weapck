import React, { Component } from 'react'
import SonHeader from './components/header.js'
import 'antd-mobile/dist/antd-mobile.css';
import './carts.css'
class carts extends Component {
    state = {
        datalist:[
            {
                "imgUrl":"https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/1621922400421310972d.JPG@!thumbnail",
                "name": "奔驰豪华汽车",
                "newprice" : "45",
                "oldprice" : "49",
                "checked" :false,
                "count" :1
            },
        
            {
                "imgUrl":"https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/1621922400421310972d.JPG@!thumbnail",
                "name": "比亚迪suv",
                "newprice" : "159",
                "oldprice" : "399",
                "checked" :false,
                "count" :1
        
            },
            {
                "imgUrl":"https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/1621922400421310972d.JPG@!thumbnail",
                "name": "丰田凯美瑞",
                "newprice" : "45",
                "oldprice" : "49",
                "checked" :false,
                "count" :1
        
            },
        ],
        all : false,
        sumprice :0,
        one : false,
        sumcount:0
    }
	// 单选
	handleChange(index){
	    var list = [...this.state.datalist]
	    list[index].checked = !list[index].checked
	    var every=list.every((item,index)=>{
	    return item.checked===true;
	    })
	    // 单选框中如果有一个是 checked的是true就可以
	    var some = list.some((item,index)=>{
	        return list[index].checked
	    })
	 
	    this.setState({
	        datalist :list,
	        all : every,
	        one : some  //设定结算框的样式是哪个，根据list[index].checked
	    })
	    this.SumPrice()
	}
	
	// 全选
	handleAll(){
	    var list = [...this.state.datalist]
	    var all = this.state.all
	    all = ! all
	    for(var i = 0 ; i < list.length ;i++){
	        list[i].checked = all
	    }      
	    this.setState({
	        all : all,
	        one : all //全选的状态直接影响结算框的样式
	    })
	    this.SumPrice()
	}
	
	
	handleAdd(index){
	    // 设定的value= {this.state.datalist[index].count}
	    var list = [...this.state.datalist]
	    list[index].count++;
	    this.setState({
	        datalist : list,
	    })
	    this.SumPrice()
	}
	
	handleMinus(index){
	    // 设定的value= {this.state.datalist[index].count}
	    var list = [...this.state.datalist];
	    list[index].count--
	    list[index].count=list[index].count<1?1:list[index].count; 
	    this.setState({
	        datalist : list
	    })
	    this.SumPrice()
	}
	handleDel(index){
		var list = [...this.state.datalist];
		if(list[index].checked){
			list[index].checked = !list[index].checked
		}
		list.splice(index,1)
		this.setState({
			 datalist : list
		})
		this.SumPrice()
	}
	SumPrice(){
	    var sum=0
	    var count = 0;
	    var list = [...this.state.datalist]
	    for(var i =0; i< list.length ;i++){
	        if(list[i].checked=== true){
	            sum += list[i].newprice *list[i].count
	            count += list[i].count
	        }
	    }
	    this.setState({
	        sumprice : sum,
	        sumcount : count //结算个数
	    })
	}
	son(){
	    this.props.history.push('/') 
	 }
    render() {
        return (
			<div>
			<SonHeader back="返回"  title="购物车" son = { this.son.bind(this) }/>
			<ul className='shopList'>
			{
			this.state.datalist.map((item,index)=>
			<li key={index}>
			
			{/* 左边 */}
			<div className="lisLeft">
			<input type="checkbox"
			onChange={()=>{this.handleChange(index)}} checked={item.checked} value={this.state.datalist[index].checked||''}
			/>
			<div className="shopImgShow">
			<img src={item.imgUrl} alt=""/>
			</div>
			<div className='shopTitle'>{item.name}</div>
			</div>
			{/* 右边边 */}
			<div className='shopInfo'>
			
			<div className='price'>
			<span>￥{item.newprice}</span>
			<del>￥{item.oldprice}</del>
			</div>
			
			<div className='shopSelect'>
			<button className='minus' onClick={()=>{this.handleMinus(index)}}>-</button>
			<input type="text" value={this.state.datalist[index].count||''} className='numinput'/>
			<button className='add' onClick={()=>{this.handleAdd(index)}}>+</button>
			</div>
			<div className="dellist">
			<button className='del' onClick={()=>{this.handleDel(index)}}>删除</button>
			</div>
			</div>
			
			</li>
			)}
			</ul>
			<div className='sum'>
			   <input type="checkbox" onChange={()=>{this.handleAll()}} checked={this.state.all}/>
			    <div className='checkPrice'>
			        {/* 合算 */}
			    <div className='totalPrice'>
			      <span className='allsum'>合计</span>
			       <span>￥{this.state.sumprice}</span>
			    </div>
			      {/* 不含运费 */}
			     <div className='fee'>(不含运费)</div>
				</div>
			     {/* 结算按钮 */}
			    <div className="jes">结算
			     <span>({this.state.sumcount})</span>
			    </div>
			  </div>
			</div>
      
        )
    }


  

    
    
    
}


export default carts