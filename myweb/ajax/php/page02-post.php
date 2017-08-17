<?php 
	$userName = $_POST['name'];
	$pw = $_POST['password'];

	if ($userName == 'admin' &&$pw=="123") {
		# code...
		echo "登录成功";
	}
	else {
		echo "用户名或者密码错误";
	}
 ?>