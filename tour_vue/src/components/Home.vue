<template>
  <div id="home">
  	<header>
  		<i></i>
  		<div class="search">
					<form class="finp" method="get" action="#">
						<div class="inputcover" >
							<input id="search" type="text" placeholder="输入城市/景点/游玩主题">
						</div>
					</form>			
		</div>
  		<a class="city" href="http://localhost:8080/#/city">{{city}}</a>
  	</header>
	  <Banner></Banner> 
	  <Nav></Nav>
	  <div class="list">
	  	<h3>热销推荐</h3>
	  	<List></List>
	  </div>  
	  <div class="list2">
	  	<h3><a href="http://localhost:8080/#/scenery">周末去哪儿</a></h3>
	  	<List2></List2>
	  </div> 
  </div>
</template>

<script>
import 	Banner from "./home/Banner";
import 	Nav from "./home/Nav";
import 	List from "./home/List";
import 	List2 from "./home/List2";
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components:{
  	Banner,
  	Nav,
  	List,
  	List2
  },
  computed:{
  	...mapState(['city'])
  },
  methods:{
		changecity(c){
		  this.$store.dispatch('changecity',c);
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped="scoped">
	/*@import url("../assets/css/base.css");*/
	*{
		padding: 0;
		margin: 0;
	}
	body{
		margin: 0;
	}
	header{
		width: 100%;
		height: 46px;
		background: #00bcd4;
		display: flex;
		justify-content: space-around;
	}
	header>i{
		width: 14px;
		height: 18px;
		margin: 13px -9px 13px 12px;
		background: url(../../static/images/left.jpg) no-repeat -1px -1px;
	}
	header .search{
		width: 70%;
		height: 30px;
		margin-top: 6px;
		line-height: 30px;
	}
	#search{
		border: none;
		border-radius: 5px;
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #ccc;
		text-indent: 5px;
	}
	.city{
		display: inline-block;
		cursor: pointer;
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
		cursor: pointer;
	}
	.list2>h3>a{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 13px;
		text-indent: 13px;
		color: #333;
		text-decoration: none;
	}
	.list2>h3>a:active{
		color: #333;		
	}
</style>
