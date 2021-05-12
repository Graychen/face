<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2020 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: 老猫 <zxxjjforever@163.com>
// +----------------------------------------------------------------------
// [ 应用入口文件 ]
namespace think;

// 调试模式开关 已经移到.env文件中，APP_DEBUG = true
//define('APP_DEBUG', true);

// 定义CMF根目录,可更改此目录
define('CMF_ROOT', dirname(__DIR__) . '/');

// 定义CMF数据目录,可更改此目录
define('CMF_DATA', CMF_ROOT . 'data/');

// 定义应用目录
define('APP_PATH', CMF_ROOT . 'app/');

// 定义网站入口目录
define('WEB_ROOT', __DIR__ . '/');

require CMF_ROOT . 'vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
