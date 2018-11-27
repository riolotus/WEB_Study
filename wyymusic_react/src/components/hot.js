import React,{Component} from 'react';
import './css/hot.css';
import $ from 'jquery';

class Hot extends React.Component{
	constructor(){
		super();
		this.state={
			arrText:[],
			className:'text',
			con:'查看完整榜单'
		}
	}
	componentWillMount(){
		this.res=$.get(this.props.dataText,function(res){
			this.setState({
				arrText:res        			
			})
		}.bind(this));
	}
	click(){
		if(this.state.className=='text'){
			this.setState({
				className:'text auto',
				con:'收起'
			})
		}else if(this.state.className=='text auto'){
			this.setState({
				className:'text',
				con:'查看完整榜单'
			})
		}
		
	}
	render(){
		return <div>
			<div className="hottit">
				<div></div>
				<div>更新日期：{new Date().getMonth()+1}月{new Date().getDate()}日</div>
			</div>
			<div className={this.state.className}>
			
			{this.state.arrText.map((item,index)=>{
				index=(Array(2).join('0') + (index+1)).slice(-2);
				return <a className="ali">
					<span>{index}</span>
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
			<div   className="hotall" onClick={this.click.bind(this)}>
				<span>{this.state.con}</span>	
			</div>
		</div>;
	}

}
Hot.defaultProps={
	dataText:'http://localhost:3000/data/textdata2.json'
}

export default Hot;
