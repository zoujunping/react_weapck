import React, { Component } from 'react'
import './goodsdetails.css'
import { Carousel, WingBlank} from 'antd-mobile';
 class GoodsDetail extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      goodsid: this.props.location.query, // 获取商品的id
	      swiperdata: {}, // 轮播图数据
		  detalislist:[
			  {name:'详情',id:1},
			  {name:'外观',id:2},
			  {name:'内饰',id:3},
		  ],
		  carParmeter:[
			 {name:'奔驰',color:'红色',size:'2米*5米*1.5米',id:1}, 
		  ],
		  carlistw:[
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/1621922400421310972d.JPG@!thumbnail',id:1},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/16219224031588584440.jpg@!thumbnail',id:2},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/16219224046218ca3b7e.JPG@!thumbnail',id:3},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/162192240635837aee8d.JPG@!thumbnail',id:4},
		  ],
		  carlistN:[
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/162192243862907b9da6.JPG@!thumbnail',id:1},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/162192243992471801e3.JPG@!thumbnail',id:2},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/16219224424653deeb6f.JPG@!thumbnail',id:3},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/84465a1b411c4253963f0f80e107cced/16219224424653deeb6f.JPG@!thumbnail',id:4},
		  ],
		  activeIndex:0,
	      imgHeight: 375,
	      goodsDetail: {}, // 商品详情数据
		  domShow:''
	    }
	  }
	componentDidMount() {
		this.setState({
			 swiperdata:this.props.location.query.productionId
		})
		console.log(this.props.location.query) //接收参数
	}
	goback(){
	  // 返回首页
	    this.props.history.push('/')
	  }
	  handleshow(index){
		  console.log(index)
		  this.setState({
			 activeIndex:index 
		  })
	  }
	 nowShopCar(item){
		this.props.history.push({pathname:'/carts',query:{productionId:item}}) //传参数 
	 }
	render(){
		return(
		<div>
		<div className="details">
		<span onClick={() => this.goback()}>返回</span>
		<span>详情</span>
		<span></span>
		</div>
		<div>
			<div className="swiper">
			  <img src={this.state.swiperdata.imgs} alt="" className="swiperimg"/>
			</div>
		</div>
		<div className="tName">
		<div className="tops">{this.state.swiperdata.name}</div>
		<div>指导价:{this.state.swiperdata.price}</div>
		</div>
			<ul className="border-r">
			{this.state.detalislist.map((item,index) =>(
			<li className={this.state.activeIndex === index?'active':''} key={item.id} onClick={()=> this.handleshow(index)}>{item.name}</li>
			))}
			</ul>
			<div className="detalis_img">
			<div className={ this.state.activeIndex === 0? 'activeIndexShow': 'activeIndexHide'}>
			<ul className="carul">
			{this.state.carParmeter.map((item,index) =>(
			<li key={item.id}>
			<div>名称:&nbsp;&nbsp;{item.name}</div>
			<div>车身颜色:&nbsp;&nbsp;{item.color}</div>
			<div>车身尺寸:&nbsp;&nbsp;{item.size}</div>
			</li>
			))}
			</ul>
			</div>
			<div className={ this.state.activeIndex === 1? 'activeIndexShow': 'activeIndexHide'}>
			<div className="grids">
			 {this.state.carlistw.map(item =>(
			 // 外观
				<div className="as">
				<div>
					<img
					key={item.id}
					src={item.imgs}
					alt=""
					className="imf"
					/>
					</div>
				</div>	
				 ))}			
			 </div>
			</div>
			<div className={ this.state.activeIndex === 2? 'activeIndexShow': 'activeIndexHide'}>
			<div className="grids">
			 {this.state.carlistN.map(item =>(
			 // 内饰
				<div className="as">
				<div>
					<img
					key={item.id}
					src={item.imgs}
					alt=""
					className="imf"
					/>
					</div>
				</div>	
				 ))}			
			 </div>
			</div>
		</div>
		<div className="carshop">
		<div className="addcar">添加购物车</div>
		<div className="nowcar" onClick={()=>this.nowShopCar(this.state.swiperdata)}>立即购买</div>
		</div>
		</div>
		)
	}
}
export default GoodsDetail