<?php
/*
*OA权限验证器
*后台表单验证
*@author rio
*time 2018/11/15
 */
namespace app\admin\validate;
use think\Validate;

class Permission extends Validate
{
    protected $rule = [
        'rule_name'  =>  'require|max:30',
    ];

    protected $message = [
        'rule_name.require'  =>  '权限名不能为空',
        'rule_name.max'  =>  '权限名不能超过30个字符',   
    ];
}


?>