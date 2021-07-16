import React, {Component} from 'react'
import { Carousel, WingBlank,Grid} from 'antd-mobile';
import Navbar from './components/navbar.js'
import './viewModel.css'
import {withRouter} from 'react-router-dom'

class View extends Component{
	 constructor(props) {
	    super(props)
		this.state = {
		  Gridlist:[
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/342db9cc395d4d89ab1e05db68b21a2e/16208098766305266694.jpg@!thumbnail',id:1,name:'Grid'},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/342db9cc395d4d89ab1e05db68b21a2e/1620809882814487661f.jpg@!thumbnail',id:2,name:'Grid'},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/7bb139c1614641f1a7d6c0b9b3c86914/161215689144469d7ec4.JPG@!thumbnail',id:3,name:'Grid'},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/7bb139c1614641f1a7d6c0b9b3c86914/161215689365074b5fef.JPG@!thumbnail',id:3,name:'Grid'},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/cc3004bccf27436bb27c9c5927701af8/15951370307475a017e0.jpg@!thumbnail',id:3,name:'Grid'},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/cc3004bccf27436bb27c9c5927701af8/1595137034890711f531.jpg@!thumbnail',id:3,name:'Grid'}
		  ],
		  swiperdata: [
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/a3028518bdac405cb646de2e0859307b/16153838743101584440.jpg@!thumbnail',id:1},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/6fe8c561cf284e3b9a1b24673d54aad8/16237439708520584440.jpg@!thumbnail',id:2},
			  {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/a3028518bdac405cb646de2e0859307b/1615383882221787661f.jpg@!thumbnail',id:3}
		  ],
		  viewlist:[
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/ba0fb98946724d218114d7ab8891b1ab/15989428572744a017e0.jpg@!thumbnail',id:1,name:'豪华奔驰汽车1',price:10000},
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/ba0fb98946724d218114d7ab8891b1ab/159894286057293955b0.jpg@!thumbnail',id:2,name:'豪华奔驰汽车2',price:20000},
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/a3028518bdac405cb646de2e0859307b/1615383882221787661f.jpg@!thumbnail',id:3,name:'豪华奔驰汽车3',price:30000},
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/ee051a9cf20a4cb6839eb5afa791526a/15979029111623106791.jpg@!thumbnail',id:4,name:'豪华奔驰汽车4',price:40000},
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/6fe8c561cf284e3b9a1b24673d54aad8/16237439687774266694.jpg@!thumbnail',id:5,name:'豪华奔驰汽车5',price:50000},
			 {imgs:'https://youjia-image.cdn.bcebos.com/modelImage/6fe8c561cf284e3b9a1b24673d54aad8/16237439708520584440.jpg@!thumbnail',id:6,name:'豪华奔驰汽车6',price:60000} 
		  ],
		  imgHeight: 176,
		  selectedTab: 'redTab',
		  hidden: false,
		  fullScreen: false,
		}
		
		}
		
	    
	  // orderlist = this.state
	componentDidMount() {
		setTimeout(() => {
		      this.setState({
		        data:this.state.data,
		      });
		    }, 100);
	}
	jumpToDetail(item){
		this.props.history.push({pathname:'/goodsdetail',query:{productionId:item}}) //传参数
	}
	
	render(){
		return(
		<div>
		<div>
		
		 <WingBlank>
		        <Carousel
		          autoplay={true}
				  dotStyle={{color:'red'}}
		          infinite
				  dots
				  >
		          {this.state.swiperdata.map(val => (
				  // 轮播图
				   <div className="swiper">
		              <img
						key={val.id}
		                src={val.imgs}
		                alt=""
		                className="swiperimg"
		              />
					</div>
		          ))}
				 
		        </Carousel>
		      </WingBlank>
			  </div>
			 
			  <div className="grids">
			   {this.state.Gridlist.map(item =>(
			   // 宫格
			  	<div className="as">
			  	<div>
				<img
					key={item.id}
					src={item.imgs}
					alt=""
					className="imf"
					/>
				</div>
			  	<div>{item.name}</div>
			  	</div>	
			  	 ))}			
			   </div>
			   <div className="viewlist">
			    {this.state.viewlist.map(item =>(
			   	<div className="as">
			   		<div className="ima">
			   			<img
			   				key={item.id}
			   				src={item.imgs}
			   				alt=""
			   				className="imflist"
			   				onClick={() => this.jumpToDetail(item)}
			   				/>
			   			</div>
			   		<div>{item.name}</div>
			   		</div>	
			   	 ))}			
			    </div>
			   <Navbar/>
			
			
		</div>
		
		)
	}
}

export default withRouter(View);
