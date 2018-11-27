import React,{Component} from 'react';
import './css/search.css';
import './css/jquery-weui.min.css';
import './css/weui.min.css';
import $ from 'jquery';

class Search extends React.Component{
	constructor(){
		super();
		this.state={
			arrText:[],
			con:'搜索歌曲、歌手、专辑'
		}
	}
	click(){
		this.setState({
			con:''
		})
//		var val = event.target.value;
//
//		
		
	}
	keyup(event){
		if(event.keyCode =="13"){
		   
		   	console.log(event.target.value);  
			this.setState({
				con:event.target.value
			})
	   }
	}
	change(event){
		var arr=[];  
		var val = event.target.value;
		arr.push(val);
		event.target.value=arr.join('');
		
	}
        

	componentWillMount(){
		this.res=$.get(this.props.dataText,function(res){
			this.setState({
				arrText:res        			
			})
		}.bind(this));
		$(function(){
		  var searchBox = $("#search");
		  searchBox.focus(function(){
		   	if(searchBox.val() == this.title){
		    	searchBox.val("").css({'font-style':'normal','color':'#000'});
		   	}
		  });
		  //光标离开搜索框时
		  searchBox.blur(function(){
		   	if(searchBox.val() == ""){
		    	searchBox.val(this.title).css({'font-style':'italic','color':'#ccc'});
		   	}
		  });
		  searchBox.blur();
		});
	}
	render(){
		return <div>
			<form className="finp" method="get" action="#">
				<i></i>
				<div className="inputcover" >
					<input id="search" type="text" onkeyup={this.keyup.bind(this)} onChange={this.change.bind(this)} onClick={this.click.bind(this)} value={this.state.con}/>
				</div>
			</form>
			<h3 className="h3">热门搜索</h3>
			<div className="content">
    			{this.state.arrText.map((item)=>{
    				return  <div><a href="javascript:;">{item.title}</a></div>
    				})}
				</div>
		</div>;
	}

}
Search.defaultProps={
	dataText:'http://localhost:3000/data/text.json'
}

export default Search;
