<template>
	<div id="City">
		<header id="tops">
	  		<a href="http://localhost:8080/#/home"></a>
	  		<span id="tit">
	  			城市选择
	  		</span>
	  		<div class="search">
				<form class="finp" method="get" action="#">
					<div class="inputcover" >
						<input id="search" type="text" value="输入城市名或拼音">
					</div>
				</form>			
			</div>
		</header>
	  	<nav class="nav">
	  		<span v-for="item,key,index in cities" :class="key"  @click="click(index)">{{key}}</span>
	  	</nav>
		<div class="now">
		  	<h2>当前城市</h2>
		  	<div id="now">{{city}}</div>
		</div>
		<div class="hot">
		  	<h2>热门城市</h2>
		  	<div id="hot">
	 			<div v-for="item in hotCities" @click="changecity(item.name)">{{item.name}}</div>
	 		</div>
		</div>
	  	<div id="lists">
			<div class='list' v-for="item,key,index in cities">
				<h2>{{key}}</h2>
				<ul>
					<li v-for="i in item" @click="changecity(i.name)">{{i.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';	
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components:{
 
  },
  computed:{
  	...mapState(['city'])
  },
  data(){
  	return {
  		cities:{},
  		hotCities:[{
			"id": 1,
			"spell": "beijing",
			"name": "北京"
		}, {
			"id": 3,
			"spell": "shanghai",
			"name": "上海"
		}, {
			"id": 47,
			"spell": "xian",
			"name": "西安"
		}, {
			"id": 239,
			"spell": "sanya",
			"name": "三亚"
		}, {
			"id": 188,
			"spell": "lijiang",
			"name": "丽江"
		}, {
			"id": 125,
			"spell": "guilin",
			"name": "桂林"
		}]
  	}
  },
  mounted(){
  	axios.get('./../../static/data/city.json').then((req)=> {
					    console.log(req.data.data.cities);
					    this.cities=req.data.data.cities;
					 })
  },
  methods:{ 
	click(i){
		var top=document.getElementById('lists').children[i].offsetTop-parseFloat(window.getComputedStyle(document.getElementById("tops")).height);
		document.documentElement.scrollTop=top;
//		console.log(lists.children[i].offsetTop-parseFloat(window.getComputedStyle(document.getElementById("tops")).height))
	},
  	changecity(c){
  		this.$store.dispatch('changecity',c);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped="scoped">
/*	@import url("../assets/css/base.css");*/
	*{
		padding: 0;
		margin: 0;
	}
	body{
		margin: 0;
	}
	header{
		width: 100%;
		height: 78px;
		background: #00bcd4;
		justify-content: space-around;
		position: fixed;
	}
	header>a{
		width: 14px;
    	display: inline-block;		
    	margin: -3px -9px -4px 12px;
    	cursor: pointer;
		height: 18px;
		background: url(../../static/images/left.jpg) no-repeat -1px -1px;
	}
	header #tit{    
		color: #fff;
	    font-size: 16px;
	    display: inline-block;
	    margin-top: 8px;
	    margin-left: 38%;
	}
	header .search{    
		width: 96%;
	    height: 30px;
	    margin-left: 2%;
	    margin-top: 6px;
	    line-height: 30px;
	}
	#now{
	    width: 27%;
		height: 26px;
		line-height: 26px;
		font-size: 14px;
		text-align: center;
		color: #555;
		box-sizing: border-box;
		border: 1px solid #ccc;
		margin: 10px 11px;
		border-radius: 4px;
	}
	#hot{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	#hot div{
	    width: 27%;
		height: 26px;
		line-height: 26px;
		font-size: 14px;
		text-align: center;
		color: #555;
		box-sizing: border-box;
		border: 1px solid #ccc;
		margin: 10px 11px;
		border-radius: 4px;
	}
	.inputcover{
		width: 100%;
		background: #fff;
		border-radius: 5px;
	}
	#search{
		border: none;
		text-align: center;
		border-radius: 5px;
		width: 60%;
		height: 30px;
		margin: 0 20%;
		line-height: 30px;
		color: #ccc;
		text-indent: 5px;
	}
	.city{
		display: inline-block;
		margin-top: 12px;
		width: 13%;
		height:16px;
		line-height: 16px;
		color: #fff;
		font-size: 16px;
		background: url(../../static/images/down.jpg) no-repeat -1px -1px;
		background-position: right;
	}
	.list>h3{
		background: #eee;
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		text-indent: 13px;
	}
	.list2>h3{
		background: #eee;
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		text-indent: 13px;
	}
	.nav{
		position: fixed;
		top: 14%;
		right: 2%;
	}
	.nav span{
		display: block;
		cursor: pointer;
		color: #00bcd4;
		text-align: center;
	}
	.now{
		padding-top: 5rem;
	}
	.now>h2{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #666;
		text-indent: 5px;
		background: #eee;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}
	.hot>h2{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #666;
		text-indent: 5px;
		background: #eee;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}
	#lists{
		width: 100%;
		height: 100px;
	}
	#lists>div>h2{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 12px;
		color: #666;
		text-indent: 5px;
		background: #eee;
		border-top: 1px solid #ccc;
	}
	ul{
		
	}
	ul li{
		height: 37px;
		line-height: 37px;
		text-indent: 10px;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	ul li:first-child{
		border-top: 1px solid #ccc;
	}
</style>
