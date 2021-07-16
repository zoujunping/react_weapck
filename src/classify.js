import React, {Component} from 'react'
import Navbar from './components/navbar.js'
import './classify.css'
class classify extends Component{
	 constructor(props) {
		 super(props)
		 this.state = {
			leftTabIndex:15,
			categoryId:15,
			  site:[
			           {
			               "categoryId":15,
			               "categoryName":"女装 男装 穿搭",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":15,
			                       "parentId":16,
			                       "categoryLevel":2,
			                       "categoryName":"女装",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":76,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/08d56af2adb943bdaa3bff3941b08516/1610939105329411f531.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			           {
			               "categoryId":16,
			               "categoryLevel":1,
			               "categoryName":"家具 家饰 家纺",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":16,
			                       "parentId":61,
			                       "categoryLevel":2,
			                       "categoryName":"家具",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":77,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/08d56af2adb943bdaa3bff3941b08516/16109391076328c05049.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			           {
			               "categoryId":59,
			               "categoryLevel":1,
			               "categoryName":"运动 户外 乐器",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":73,
			                       "parentId":59,
			                       "categoryLevel":2,
			                       "categoryName":"运动",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":78,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/53aaa39d36d54d9e8a72cd1b37dfc6f8/16152762237890266694.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			           {
			               "categoryId":60,
			               "categoryLevel":1,
			               "categoryName":"游戏 动漫 影视",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":79,
			                       "parentId":60,
			                       "categoryLevel":2,
			                       "categoryName":"游戏",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":82,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/53aaa39d36d54d9e8a72cd1b37dfc6f8/16152762248222afc7b4.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			        
					   
					   
			           {
			               "categoryId":63,
			               "categoryLevel":1,
			               "categoryName":"工具 装修 建材",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":87,
			                       "parentId":63,
			                       "categoryLevel":2,
			                       "categoryName":"工具",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":90,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/53aaa39d36d54d9e8a72cd1b37dfc6f8/161527622777855170ab.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			           {
			               "categoryId":66,
			               "categoryLevel":1,
			               "categoryName":"鞋靴 箱包 配件",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":95,
			                       "parentId":66,
			                       "categoryLevel":2,
			                       "categoryName":"鞋靴",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":98,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/9260cdcec8004a6e8142d56ee9d2adb3/1620713691726921c05c.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           },
			           {
			               "categoryId":65,
			               "categoryLevel":1,
			               "categoryName":"玩具 孕产 用品",
			               "secondLevelCategoryVOS":[
			                   {
			                       "categoryId":115,
			                       "parentId":65,
			                       "categoryLevel":2,
			                       "categoryName":"玩具",
			                       "thirdLevelCategoryVOS":[
			                           {
			                               "categoryId":116,
			                               "categoryLevel":3,
			                               "categoryName":"https://youjia-image.cdn.bcebos.com/modelImage/53aaa39d36d54d9e8a72cd1b37dfc6f8/1615276232141787661f.jpg@!thumbnail"
			                           }
			                       ]
			                   }
			               ]
			           }
			       ],
			arrays:[]
		 }
	 }
	 leftActive(index){
	 	this.setState({
	 		leftTabIndex:index
	 	})
	 }
	
	componentDidMount() {
		
	}
	render(){
		return(
		<div>
		<div className="classifyBox">
		
		<ul className="left_ul">
		{this.state.site.map((item,index) =>(
		<li key={index} className={this.state.leftTabIndex === item.categoryId?'actives':''} onClick={() =>this.leftActive(item.categoryId)}>{item.categoryName}</li>
		))}
		</ul>
	
		<div className="classRight">
			{this.state.site.map((i,index) =>(
				<div className={ this.state.leftTabIndex === i.categoryId?'activeshow':'activehide' } key={index}>
				
				{i.secondLevelCategoryVOS.map((pro,index)=>(
					
				  <div className="category-list" key={index}>
					<p className="catogory-title">{pro.categoryName}</p>
					
					 {pro.thirdLevelCategoryVOS.map((product,index)=>(
						<div className="product-item" key={index}>
						  <div  className="product-title">
						  <img src={product.categoryName}/>
						  </div>
						</div>
					 ))}
					 
				  </div>
				  ))}
				  
				</div>
			))}
		
		
		
		</div>
		</div>
		<Navbar/>
		</div>
		)
	}
}
export default classify
