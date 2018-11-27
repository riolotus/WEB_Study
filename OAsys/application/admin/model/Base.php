<?php  
	namespace app\admin\model;
	/**
	 * 数据库模型基础类
	 * 书写模型中公共代码部分
	 * @author rio
	 * @time 2018-11-15
	 */
	use  think\Db;
	use  think\Model;

	class Base extends  Model{
		
		//获取信息（不带分页）
		public  function getAll($where=array(),$field="*"){
			//id =1；
			$info = Db::name($this->name)->where($where)->field($field)->strict(true)->select();

			return $info;
		}

		//获取信息（分页）
		public function getAllPage($where=array(),$field="*",$num='10'){
			$info = Db::name($this->name)->where($where)->field($field)->paginate($num);

			return $info;
		}

		//获取单条数据方法
		public  function getOne($where=array(),$field="*"){
			$info = Db::name($this->name)->where($where)->field($field)->find();
			return $info;
		}
	}


?>