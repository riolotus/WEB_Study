<template>
  <div id="scenery">
  	<a href="#" @click="first=!first">
  		<div id="first" v-if="first">
  			<img  src="../../static/images/scenery1.jpg"/>
  			<a  @click="first" href="http://localhost:8080/#/home" class="up">
  				<img src="../../static/images/left1.jpg"/>
  			</a>
  			<h3>大连圣亚海洋世界(AAAA景区)</h3>
  			<b>
  				<img src="../../static/images/more.jpg"/>
  			</b>
  		</div>	
  		<ul v-else>
  			<li>
  				<img src="../../static/images/scenery11.jpg"/>
  			</li>
  			<li>
  				<img src="../../static/images/scenery12.jpg"/>
  			</li>
  		</ul>
  	</a>
  	<Ticket v-if="first"></Ticket>
  </div>
</template>

<script>
import 	Ticket from "./scenery/Ticket";
export default {
  name: 'Scenery',
  components:{
  	Ticket
  },
  data(){
  	return {
  		first:true
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
	#scenery{
		width: 100%;
	}
	#scenery>a{
		width: 100%;
		height: width*.5;
	}
	#scenery>a #first{
		position: relative;
	}		
	#scenery>a #first img{
		width: 100%;
	}
	#scenery>a #first a{
		display: inline-block;
		width: 20px;
		height: 20px;
		position: absolute;
		left: 3px;
		top: 5px;
	}
	#scenery>a #first a img{
		width: 100%;
	}
	#scenery>a #first h3{
		position: absolute;
		bottom: 5px;
		left: 10px;
		color: #fff;
	}
	#scenery>a #first b{
    position: absolute;
    bottom: 8px;
    right: 5px;
    width: 42px;
    height: 10.1px;		
	}
	#scenery>a ul{
		display: flex;
	}
	#scenery>a ul li{
		list-style: none;
		width: 50%;
		height: width*1;
	}
	#scenery>a ul li>img{
		width: 90%;
		margin: 5%;
	}
</style>
