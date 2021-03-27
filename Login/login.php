<?php
session_start();

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "connection successfull";
}else{
    echo "no connection";
}

?>
<html>
<head>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style-login.css">
</head>
<body>
<form action="process.php" method="POST">
<div class="row">
    <div class="col-md-6 mx-auto p-0">
        <div class="card">
            <div class="login-box">
                <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login to Admin Panel</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"></label>
                    <div class="login-space">
                        <div class="login">
                            <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" name="username" placeholder="Enter your username"> </div>
                            <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" name="password" placeholder="Enter your password"> </div>
                            <div class="group"> <input type="submit" class="button" value="submit"> </div>
                            <div class="hr"></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
</body>
</html>

