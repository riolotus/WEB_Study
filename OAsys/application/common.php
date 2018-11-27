<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

//显示权限--递归函数
function getLevel($data,$pid=0,$level=0,$left=""){
	static $tree=[];
	foreach ($data as $key => $value) {
		$value['level']=$level+1;


		$value['rule_name'] = $value['pid'] !=0 ? str_repeat("&nbsp;&nbsp;",$value['level']-1). "┗".str_repeat('━', $value['level']-1).$value['rule_name'] : $value['rule_name'];
		if($value['pid']==$pid){
			
			$tree[]=$value;
			getLevel($data,$value['id'],$value['level']);
			
		}
		
	}

	return $tree;
}
function    getTree($data,$pid=0){
	 $tree = [];  

	 //循环所有的权限 
	 foreach ($data as $key => $val) {
	 	
	 	  //是否有子类
	 	  if($val['pid']  == $pid){
	 	  		//利用递归获取自己的子类权限
	 	  		$val['list'] = getTree($data,$val['id']);
	 	  		//将结果付给$tree;
	 	  		$tree[] = $val;
	 	  }
	 }


	 return $tree;  //返回值
}