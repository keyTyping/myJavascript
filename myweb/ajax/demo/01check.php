<?php
    $uname = $_GET['username'];
    $pw = $_GET['password'];
    if ($uname=='admin' && $pw=='123') {
        # code...
        echo "1";
    }else {
        # code...
        echo "2";
    }
 ?>
