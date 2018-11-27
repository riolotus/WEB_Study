<?php  
	/**
	 * 控制器基础类
	 * 编辑所有控制器公共功能实现
	 * @author rio 
	 * @time(2018-11-16)
	 */
	namespace  app\admin\controller;
	use think\Controller;
	use think\Db;

	class Base extends Controller
	{
		//获取所有左侧显示及开启状态的权限
		public  function _initialize(){
				//实例化当前权限表类
				$model = model('Rule');

				//获取所有数据
				$condition = [
					'status'=>1,
					'is_show'=>1
				];
				$array = $model->getAll($condition);
				
				$array = getTree($array);
				
			
				// 将数据分配到模板上
				$this->assign('array',$array);
				
		}
		// public  function  getRule($pid=0){
		// 	$model = model('Rule');
		// 	$info = $model->getAll(['pid'=>$pid]);

		// 	foreach($info as $k=>$v){
		// 		if($v['pid']==$pid)
		// 		{
		// 			$info[$k]['list'] = $this->getRule($v['id']);
		// 		}
				 
		// 	}
			
			
		// 	return $info;
		// }
		

		
	}
?>

