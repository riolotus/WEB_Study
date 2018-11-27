<template>
	 <div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide page1">
	        	<div>
	        		<img src="../../../static/images/01.png" />
	        		<p>景点门票</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/02.png" />
	        		<p>滑雪季</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/03.png" />
	        		<p>泡温泉</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/04.png" />
	        		<p>动植园</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/05.png" />
	        		<p>游乐园</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/06.png" />
	        		<p>必游榜单</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/07.png" />
	        		<p>演出</p>
	        	</div>
	        	<div>
	        		<img src="../../../static/images/08.png" />
	        		<p>城市观光</p>
	        	</div>
	        </div>
	        <div class="swiper-slide page2">
	        	<div>
	        		<img src="../../../static/images/09.png" />
	        		<p>一日游</p>
	        	</div>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';	
export default {
  name: 'Banner',
  mounted(){
  	this.slider();
  },
  methods:{ 
	slider(){
		var mySwiper2 = new Swiper('.swiper-container', {
			
       	})
	  }
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
	.cont{
		width: 100%;
		height:130px;
	}
	.page1{
		display: flex;
		width: 100%;
		height: 150px;
		justify-content: space-between;
		flex-wrap: wrap;		
	}
	.page1>div{
		width: 25%;
		height: 33%;
	}
	.page1>div>img{
		width: 65%;
		margin: 10% 19.5%;
	}
	.page1>div p{
		margin: 0 17.5%;
		font-size: 14px;
		text-align: center;
	}
	.page2{
		width: 100%;
		height: 150px;
		justify-content: space-between;
		flex-wrap: wrap;		
	}
	.page2>div{
		width: 25%;
		height: 33%;
	}
	.page2>div>img{
		width: 65%;
		margin: 10% 19.5%;
	}
	.page2>div p{
		margin: 0 17.5%;
		font-size: 14px;
		text-align: center;
	}
	.swiper-container {
	  margin: 0 auto;
	  position: relative;
	  overflow: hidden;
	  list-style: none;
	  padding: 0;
	  /* Fix of Webkit flickering */
	  z-index: 1;
	  margin-bottom: 20px;
	}
	.swiper-wrapper {
	  position: relative;
	  width: 100%;
	  height: 100%;
	  z-index: 1;
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-transition-property: -webkit-transform;
	  transition-property: -webkit-transform;
	  -o-transition-property: transform;
	  transition-property: transform;
	  transition-property: transform, -webkit-transform;
	  -webkit-box-sizing: content-box;
	  box-sizing: content-box;
	}
	.swiper-slide {
	  -webkit-flex-shrink: 0;
	  -ms-flex-negative: 0;
	  flex-shrink: 0;
	  width: 100%;
	  height: 100%;
	  position: relative;
	  -webkit-transition-property: -webkit-transform;
	  transition-property: -webkit-transform;
	  -o-transition-property: transform;
	  transition-property: transform;
	  transition-property: transform, -webkit-transform;
	}
	.swiper-slide img{
		width: 100%;
	}
	.swiper-pagination-bullet-active {
	  opacity: 1;
	  background: #007aff;
	}
	.swiper-pagination-bullet {
	  width: 8px;
	  height: 8px;
	  display: inline-block;
	  border-radius: 100%;
	  background: #000;
	  opacity: 0.2;
	}
</style>
