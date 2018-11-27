<template>
	 <ul class="list">
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list1.jpg"/>
	 		</div>
	 		<div>
	 			<h4>故宫</h4>
	 			<p>东方宫殿建筑代表，世界宫殿建筑典范</p>
				<button>查看详情</button>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list2.jpg"/>
	 		</div>
	 		<div>
	 			<h4>南山滑雪场</h4>
	 			<p>北京专业级滑雪圣地，世界宫殿建筑典范</p>
				<button>查看详情</button>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list3.jpg"/>
	 		</div>
	 		<div>
	 			<h4>天安门广场</h4>
	 			<p>我爱北京天安门，天安门上太阳升</p>
				<button>查看详情</button>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list4.jpg"/>
	 		</div>
	 		<div>
	 			<h4>水立方</h4>
	 			<p>中国的荣耀，阳光下的晶莹水滴</p>
				<button>查看详情</button>
	 		</div>
	 	</li>
	 	<li>
	 		<div>
	 			<img src="../../../static/images/list5.jpg"/>
	 		</div>
	 		<div>
	 			<h4>温都水城养生馆</h4>
	 			<p>各种亚热带植物掩映其间仿佛置身热带雨林</p>
				<button>查看详情</button>
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
		display: flex;
		list-style: none;
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}
	.list>li div:first-child{
		width: 23%;
		margin: 7px 6px;
	}
	.list>li div:first-child>img{
		width: 100%;
	}
	.list>li div:last-child{
		height:60px;
		margin-top: 11px;
	}
	.list>li div:last-child>h4{
		font-size: 15px;
		margin-bottom: 5px;
	}
	.list>li div:last-child p{
		color: #ccc;
		font-size: 12px;
		margin-bottom: 13px;

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
