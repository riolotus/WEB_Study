import React,{Component} from 'react';
import './css/home.css';
import $ from 'jquery';

class Home extends React.Component{
	constructor(){
		super();
		this.state={
			arrImg:[],
			arrText:[]
		}
	}
	componentWillMount(){
		this.res=$.get(this.props.dataImg,function(res){
//			console.log(res);
			this.setState({
				arrImg:res        			
			})
		}.bind(this));
		this.res2=$.get(this.props.dataText,function(res2){
//			console.log(res);
			this.setState({
				arrText:res2        			
			})
		}.bind(this));
	}
	render(){
		return <div>
			<h2>推荐歌单</h2>
			<div className="img">
			{this.state.arrImg.map((item)=>{
				return <dl>
			 			<dd><img src={item.imgsrc}/></dd>
    					<dt>{item.title}</dt>
						</dl>
			})}
			</div>
			<h2>最新音乐</h2>
			<div className="htext">
			{this.state.arrText.map((item)=>{
				return <a className="ali">
					<div className="fbox">
						<div className='tit'>
							{item.title}
							<span>{item.desc}</span>
						</div>
						<div className="singer">
							<i></i>
							{item.singer}-{item.cd}
						</div>
						<span  className="lbox"></span>
					</div>
				</a>
			})}
			</div>
			<div  className="foot">
				<p><img src="http://localhost:3000/resource/images/wyylogo.png"/></p>
				<div className="openapp">打开APP，发现更多好音乐 &gt;</div>
				<p className="copyright">网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>
			</div>
		</div>;
	}
}
Home.defaultProps={
	dataImg:'http://localhost:3000/data/imgdata.json',
	dataText:'http://localhost:3000/data/textdata.json'
}

export default Home;