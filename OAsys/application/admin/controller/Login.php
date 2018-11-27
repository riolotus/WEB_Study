<?php
/*
*OA用户组
*用户组增删改查
*@author rio
*@time 2018/11/19
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;

class Login extends Base
{
    protected $model;
    public  function _initialize(){
            parent::_initialize();
            $this->model = model('users');
    }
    public function index(){
    	
        return $this->fetch('group/index');
    }
    public function add(){
    	$r=request();
    	if($r->isGet()){
           
    		return $this->fetch('group/add',['rule'=>$rule]);

    	}elseif ($r->isPost()) {
    		$data=$r->param();
    		
			if($result == true){
				$id=Db::name('group')->insertGetId($data);//Db::table('tp_group')
				if($id){
					return $this->success("用户组添加成功！");
				}else{
					return $this->error("用户组添加失败！");
				}
			    
			}else{
				return $this->error($result);	
			}	
    	}
        
    }
    public function delete(){
    	
    	$r=request();
    	$id=$r->param('gid');
    	if(!$id){
    		//return 1;
    		return $this->error('参数不能为空！');
    	}
    	// $res=Db::name('group')->where('id',$id)->delete($id);
    	$res=Db::name('group')->delete($id);
    	if($res){
    		return $this->success('删除成功！',url('admin/group/index'));
    	}
    	return $this->error('删除失败！');	
    }
    public function edit(){
    	$r=request();
    	$data=$r->param();
    	$gid=$data['id'];
    	// var_dump($data);
    	if($r->isGet()){
    		// $info=Db::name('group')->find($gid);
            $info = $this->model->getOne(['id'=>$gid]);

    		return $this->fetch('group/edit',['info'=>$info,'rule'=>$rule]);
    	}elseif ($r->isPost()) {
    		if($res){
    			return $this->success('修改成功！',url('admin/group/index'));
    		}else{
                return  $this->error('修改失败！');
            }

    	}

    }
}
