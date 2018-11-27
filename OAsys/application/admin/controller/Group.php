<?php
/*
*OA用户组
*用户组增删改查
*@author rio
*@time 2018/11/14
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;

class Group extends Base
{
    protected $model;
    public  function _initialize(){
            parent::_initialize();
            $this->model = model('Groups');
    }
    public function index(){
    	// $info=Db::name('group')->select();
    	// $info = $this->model->getAllPage([],"*",4); 
        $info = $this->model->getAll([],"*"); 

        return $this->fetch('group/index',['info'=>$info]);
    }
    public function add(){
    	$r=request();
    	if($r->isGet()){
            //获取正常启用的权限
            $rule = model('Rule')->getAll(['status'=>1],['id','rule_name','pid']);
            // var_dump($rule);die;
            $rule = getTree($rule);
            // echo "<pre>";
            // print_r($rule);die;
    		return $this->fetch('group/add',['rule'=>$rule]);

    	}elseif ($r->isPost()) {
    		$data=$r->param();
    		// dump($data);
            
    		$data['rule'] =  implode($data['rule'], ',');
    		$result = $this->validate($data,'Group');

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
    	// echo 1;
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

            $rule = model('Rule')->getAll(['status'=>1],['id','rule_name','pid']);
            // var_dump($rule);die;
            $rule = getTree($rule);
            //获取本身拥有的权限 变成数组形式
            $ruleArr  = explode(',', $info['rule']);
            // dump($ruleArr);die;
           
            // ===========修改时，获取权限列表数据=====================
            $rule = model('Rule')->getAll(['status'=>1],['id','rule_name','pid']);
            
            //循环权限表所有的权限，依次判断每一个权限是否在当前用户组所拥有的权限内
            //如果在的话，给当前权限数组加k下标 值为1 
            // //如果不在，给当前权限数组加k下标，值为2
            foreach ($rule as $key => $value) {
                if(in_array($value['id'],$ruleArr)){
                    // echo  1;
                    $rule[$key]['k'] = 1;  //已拥有的权限
                }else{
                     $rule[$key]['k'] = 2; //没有的权限
                }
            // die;
            }
            $rule = getTree($rule);

    		return $this->fetch('group/edit',['info'=>$info,'rule'=>$rule]);
    	}elseif ($r->isPost()) {
    		// echo "post";die;
    		$arr=input('post.');//id是通过get方式获取，所以$arr里没有id,要通过input hidden这种方式获取
    		// var_dump($arr);
            $arr['rule'] = implode($arr['rule'], ',');

    		$res=Db::name('group')->where('id',$arr['id'])->update($arr);

    		//只有做了修改才为真
    		if($res){
    			return $this->success('修改成功！',url('admin/group/index'));
    		}else{
                return  $this->error('修改失败！');
            }

    	}

    }
}
