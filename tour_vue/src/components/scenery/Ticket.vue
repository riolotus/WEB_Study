<template>
	<div id="ticket">
		<ul class="blist">
			<li>成人票</li>
			<ul class="mlist">
				<li>成人三馆联票</li>
				<ul class="slist">
					<li>成人三馆联票 - 某一连锁店销售</li>
				</ul>
				<li>成人五馆联票</li>
			</ul>
			<li>学生票</li>
			<li>儿童票</li>
			<li>特惠票</li>
		</ul>
	</div>
</template>

<script>	
export default {
  name: 'Ticket',
  mounted(){
  	
  },
  methods:{ 
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped="scoped">

	*{
		padding: 0;
		margin: 0;
	}
	#ticket{
		width: 100%;
	}
	.blist li{
		border-bottom: 1px #eee solid;
		background: url(../../../static/images/point.jpg) no-repeat 7px 12px;
		height: 36px;
		line-height: 36px;
		font-size: 16px;
		text-indent: 25px;
	}
	.mlist li{
		text-indent: 40px;
		background-position-x: 20px;
	}
	.slist li{
		text-indent: 60px;
		background-position-x: 40px;
	}
</style>
