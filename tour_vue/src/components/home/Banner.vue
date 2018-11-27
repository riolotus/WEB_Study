<template>
	 <div class="swiper-container cont">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide">
	            <img src="../../../static/images/ban1.jpg" alt="">
	        </div>
	        <div class="swiper-slide">
	            <img src="../../../static/images/ban2.jpg" alt="">
	        </div>
	        <div class="swiper-slide">
	            <img src="../../../static/images/ban3.jpg" alt="">
	        </div>
	        <div class="swiper-slide">
	            <img src="../../../static/images/ban4.jpg" alt="">
	        </div>    
	    </div>
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
			var mySwiper1 = new Swiper('.swiper-container', {
            onInit: function(swiper) {
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
            },
           	loop:true,
            autoplay : true,
            speed:1000,
            paginationClickable :true,
            onSlideChangeEnd: function(swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }

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
		height:124px;
	}
	.swiper-container {
	  margin: 0 auto;
	  position: relative;
	  overflow: hidden;
	  list-style: none;
	  padding: 0;
	  /* Fix of Webkit flickering */
	  z-index: 1;
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
	.swiper-pagination {
	    position: absolute;
	    z-index: 20;
	    bottom: 10px;
	    width: 100%;
	    text-align: center;
	}
	.swiper-pagination-clickable .swiper-pagination-bullet {
	    cursor: pointer;
	}
	.swiper-pagination-bullet {
	    display: inline-block;
	    width: 8px;
	    height: 8px;
	    border-radius: 8px;
	    background: #555;
	    margin: 0 5px;
	    opacity: 0.8;
	}
	.swiper-pagination-bullet-active {
	    background: #fff;
	}
</style>
