<?php 
	namespace app\admin\model;

	/**
	 * 规则权限模型类
	 * 处理权限规则数据相关功能  增删改查
	 * @author rio
	 * @time 2018-11-15
	 */
	use think\Model;
	use think\Db;
	use app\admin\model\Base;
	class Rule extends Base{

		protected $name="permission";

	}
?>