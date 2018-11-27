<?php
/*
*OA权限
*权限增删改查
*@author rio
*@time 2018/11/15
 */
namespace app\admin\controller;

use think\Controller;
use think\Db;
class Permission extends Base
{
	protected $model; 
	public function _initialize(){
		parent::_initialize();
		$this->model = model('Rule');
	}
    public function index()
    {
    	$info = $this->model->getAll([],"*"); 
    	$info=getLevel($info);
    	// var_dump($info);die;
       	return $this->fetch('permission/index',['info'=>$info]);
    }
    public function add(){
    	
    	$r=request();
    	if($r->isGet()){
    		// $info = $this->model->getAllPage([],"*");
    		$info = $this->model->getAll(['status'=>1,'is_show'=>1],'id,rule_name,pid');

			$info = getLevel($info);

    		return $this->fetch('permission/add',['info'=>$info]);

    	}elseif ($r->isPost()) {
    		// echo 'post';
    		// die;
    		$data=input('post.');
    		$array=array(
    			"pid"=>$data['pid'],
    			"rule_name"=>$data['name'],
    			"address"=>$data['address'],
    			"icon"=>$data['icon'],
    			"sort"=>$data['sort'],
    			"is_show"=>$data['is_show'],
    			"status"=>$data['status']
    		);
    		// var_dump($array['is_show']);die;
    		$res = $this->validate($array,'Permission');

    		$res=$this->model->save($array);

    		if($res){
    			$id=Db::name('permission')->insertGetId($array);
				return $this->success("权限添加成功！",'/admin/permission/index');
			}else{
				return $this->error("权限添加失败！");
			}
    	}
    }
    public function delete(){
    	// echo 1;
    	$r=request();
    	$id=$r->param('gid');
    	// var_dump($id);die;
    	if(!$id){
    		//return 1;
    		return $this->error('参数不能为空！');
    		// die;
    	}
    	$res = $this->model->destroy(["id"=>$id]);
    	if($res){
    		return $this->success('删除成功！',url('admin/permission/index'));
    	}
    	return $this->error('删除失败！');	
    }

    public  function edit(){
	    	$r = request();

	    	if($r->isGet()){

	    		$id = $r->param('id');

	    		$list = $this->model->getOne(['id'=>$id]);

	    		// dump($info);die;
	    		// 获取所有权限
	    		$where = array(
	    				"id"=>array('<>',$id),   //自己的上级权限不能是自己
	    				"pid"=>array('<>',$id),//自己的上级权限不能是自己的子权限
	    				"status"=>1,
	    				"is_show"=>1   
	    				
	    			);	
	    		$info = $this->model->getAll($where,'id,rule_name,pid');
	    		$info=getLevel($info);

	    		// dump($info);die;
	    		return $this->fetch('permission/edit',['list'=>$list,'info'=>$info]);
	    	}elseif($r->isPost()){
	    		//执行修改操作
	    		$data = input('post.');
	    		// dump($data);
	    		// echo  
	    		$array = array(
					"pid"=>$data['pid'],
					'rule_name'=>$data['rule_name'],
					"address"=>$data['address'],
					"icon"=>$data['icon'],
					"sort"=>$data['sort'],
					"is_show"=>$data['is_show'],
					"status"=>$data['status']
					);
	    		$res = $this->validate($array,'Permission');

	    		if($res !== true){
	    			return $this->error($res);
	    		}

	    		//执行修改  
	    		$num = $this->model->save($array,['id'=>$data['id']]);
	    		// var_dump($num);die;
	    		if($num){
	    				return $this->success('修改成功！',url('admin/permission/index'));
	    		}else{
	    			return $this->error('修改失败！');
	    		}

	    	}
	    }
}
