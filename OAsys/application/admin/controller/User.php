<?php
/*
*OA用户
*用户增删改查
*@author rio
*@time 2018/11/19
 */
namespace app\admin\controller;
use think\Controller;
use think\Db;

class User extends Base
{
    protected $model;
    public  function _initialize(){
            parent::_initialize();
            $this->model = model('Users');
    }
    public function index(){
        $info=$this->model->getAllPage();
        $groups=Db::name('group')->column('name','id');
        //id成为key，name是相对应的值
        // dump($groups);die;
    	return $this->fetch('user/index',['info'=>$info,'groups'=>$groups]);
    }
    public function add(){
    	$r=request();

    	if($r->isGet()){
            $groups=model('Groups')->getAll(['status'=>1]);
    		return $this->fetch('user/add',['groups'=>$groups]);

    	}elseif ($r->isPost()) {
            $data=input("post.");
            $data['ctime']=time();

            // dump($data);
            
            //上传文件
            $file = request()->file('photo');
            
            if($file){
                $info = $file->move(ROOT_PATH . 'public/uploads');
                $data['photo'] = $info->getSaveName();//创建带有日期文件夹的格式
            }else{
                $data['photo'] = null;
            }

            //密码加密
            $data['user_pwd']=md5($data['user_pwd']);
            $res=$this->model->save($data);
            if($res){
                    return $this->success('用户添加成功！',url('admin/user/index'));
            }else{
                if($file){
                    unlink(ROOT_PATH . 'public/uploads/'.$data['photo']);
                }
                return $this->error("用户添加失败！");
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
    	$res=Db::name('user')->delete($id);
    	if($res){
            if($file){
                unlink(ROOT_PATH . 'public/uploads/'.$data['photo']);
            }
    		return $this->success('删除成功！',url('admin/user/index'));
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

    		return $this->fetch('group/edit',['info'=>$info]);
    	}elseif ($r->isPost()) {
    		// echo "post";die;
    		$arr=input('post.');//id是通过get方式获取，所以$arr里没有id,要通过input hidden这种方式获取

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
