<?php
/*
*OA验证器
*后台表单验证
*@author rio
*time 2018/11/14
 */
namespace app\admin\validate;
use think\Validate;

class Group extends Validate
{
    protected $rule = [
        'name'  =>  'require|max:30',
    ];

    protected $message = [
        'name.require'  =>  '用户名不能为空',
        'name.max'  =>  '用户名不能超过30个字符',   
    ];
}


?>