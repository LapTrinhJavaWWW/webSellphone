<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<!--Made with love by Mutiullah Samim -->
<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
	rel="stylesheet" id="bootstrap-css">
<!--Bootsrap 4 CDN-->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
	integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">

<!--Fontawesome CDN-->
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
	integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
	crossorigin="anonymous">

<!--Custom styles-->
<link href="css/login.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div class="container">
		<div class="d-flex justify-content-center h-100">
			<div class="card">
				<div class="card-header">
					<h3>Sign In</h3>
					<div class="d-flex justify-content-end social_icon">
						<span><i class="fab fa-facebook-square"></i></span> <span><i
							class="fab fa-google-plus-square"></i></span> <span><i
							class="fab fa-twitter-square"></i></span>
					</div>
				</div>
				<div class="card-body">
					<form action="login" method="post">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" class="form-control" placeholder="username"
								name="username">

						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" class="form-control"
								placeholder="password" name="password">							
						</div>												
						<div class="row align-items-center remember">
							<input type="checkbox">Remember Me							
						</div>
						<div class="form-group">
							<input type="submit" value="Login"
								class="btn float-right login_btn">
						</div>
					</form>
				</div>
				<div class="card-footer">
					<div class="d-flex justify-content-center links">
						Don't have an account?<a href="#">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script
	src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script
	src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
	$(document).ready(function() {	
		if ("${message}" == "") {
		} else if ("${message}" == "true") {
			Swal.fire(
				{
					title: 'Login successfully!',
					text: '',
					icon: 'success',
					confirmButtonText: 'Next'
				}
			).then(function() {
				location.replace("http://localhost:8080/home");
			});
		} else if ("${message}" == "false") {
			Swal.fire(
				{
					title: 'Login failed!',
					text: 'Username or password is incorrect!',
					icon: 'error',
					confirmButtonText: 'OK'
				}
			).then(function() {
				location.replace("http://localhost:8080/login");
			});		
			// location.replace("http://localhost:8080/login");
		}
	});
</script>
</html>