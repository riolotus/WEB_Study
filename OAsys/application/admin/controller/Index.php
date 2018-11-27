<?php
/*
*OA首页
*加载首页
*@author rio
*time 2018/11/14
 */
namespace app\admin\controller;
use think\Controller;

class Index extends Base
{
    public function index()
    {
       return $this->fetch('index/index');
    }
}
