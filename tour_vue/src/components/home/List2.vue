<template>
	 <ul class="list">
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list21.jpg"/>
	 		</div>
	 		<div>
	 			<h4>北京温泉排行榜</h4>
	 			<p>细数北京温泉，温暖你的冬天</p>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list22.jpg"/>
	 		</div>
	 		<div>
	 			<h4>北京必游TOP10</h4>
	 			<p>来北京必去的景点非这些地方莫属</p>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list23.jpg"/>
	 		</div>
	 		<div>
	 			<h4>寻找北京的皇城范儿</h4>
	 			<p>数百年的宫廷庙宇，至今依旧威严霸气</p>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list24.jpg"/>
	 		</div>
	 		<div>
	 			<h4>学生最爱的博物馆</h4>
	 			<p>数百年的宫廷庙宇，至今依旧威严霸气</p>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list25.jpg"/>
	 		</div>
	 		<div>
	 			<h4>儿童剧场，孩子的乐园</h4>
	 			<p>带宝贝观看演出，近距离体验艺术的无穷魅力</p>
	 		</div>
	 	</li>
	 </ul>
</template>

<script>	
export default {
  name: 'List',
  methods:{ 
	
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped="scoped">
	@import url("../../assets/css/base.css");

	*{
		padding: 0;
		margin: 0;
	}
	body{
		margin: 0;
	}
	.list{
		
	}
	.list>li{
		list-style: none;
		width: 100%;
		box-sizing: border-box;
	}
	.list>li div:first-child{
		width: 100%;
		margin-bottom: 10px;
	}
	.list>li div:first-child>img{
		width: 100%;
	}
	.list>li div:last-child{
		height:60px;
	}
	.list>li div:last-child>h4{
		font-size: 15px;
		margin-bottom: 5px;
		margin-left: 8px;
		color: #333;
	}
	.list>li div:last-child p{
		color: #ccc;
		font-size: 12px;
		margin-bottom: 13px;
		margin-left: 10px;

	}
	.list>li div:last-child button{
		color: #fff;
		background: #ff9300;
		font-size: 14px;
		border: none;
		border-radius: 6px;
		width: 76px;
		height: 22px;
	}
</style>
