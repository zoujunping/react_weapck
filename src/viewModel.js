import React, {Component} from 'react'
import { Carousel, WingBlank,Grid} from 'antd-mobile';
import './viewModel.css'
import {withRouter} from 'react-router-dom'

class View extends Component{
	 constructor(props) {
	    super(props)
		this.state = {
		  Gridlist:[
			  {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/7e6a-knvsnuf5870869.jpg',id:1,name:'Grid'},
			  {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/a6a4-knvsnuf5950596.jpg',id:2,name:'Grid'},
			  {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3,name:'Grid'},
			  {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3,name:'Grid'},
			  {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3,name:'Grid'},
			  {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3,name:'Grid'}
		  ],
		  swiperdata: [
			  {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/7e6a-knvsnuf5870869.jpg',id:1},
			  {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/a6a4-knvsnuf5950596.jpg',id:2},
			  {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3}
		  ],
		  viewlist:[
			 {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/7e6a-knvsnuf5870869.jpg',id:1,name:'豪华奔驰汽车1',price:10000},
			 {imgs:'http://n.sinaimg.cn/photo/400/w200h200/20210416/a6a4-knvsnuf5950596.jpg',id:2,name:'豪华奔驰汽车2',price:20000},
			 {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:3,name:'豪华奔驰汽车3',price:30000},
			 {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:4,name:'豪华奔驰汽车4',price:40000},
			 {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:5,name:'豪华奔驰汽车5',price:50000},
			 {imgs:'http://n.sinaimg.cn/news/transform/w150h150/20180223/xbJU-fyrswmv2029131.jpg',id:6,name:'豪华奔驰汽车6',price:60000} 
		  ],
		  tabber:[
			  {icon:1,name:'首页'},
			  {icon:1,name:'分类'},
			  {icon:1,name:'我的'}
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
			   		<div>
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
			   
			 <div className="tab">
			 {this.state.tabber.map((k,index) =>(
			 // 底部tab栏
			 	<div className="as">
			 	<div>{k.icon}</div>
			 	<div>{k.name}</div>
			 	</div>	
			 ))}
			 </div>
			
		</div>
		
		)
	}
}

export default withRouter(View);
