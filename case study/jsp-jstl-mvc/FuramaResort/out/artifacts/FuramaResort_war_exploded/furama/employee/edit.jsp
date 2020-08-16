<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSS only -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <style>
        body {
            color: #fff;
            background: #19aa8d;
            font-family: 'Roboto', sans-serif;
        }
        .form-control {
            font-size: 15px;
        }
        .form-control, .form-control:focus, .input-group-text {
            border-color: #e1e1e1;
        }
        .form-control, .btn {
            border-radius: 3px;
        }
        .signup-form {
            width: 400px;
            margin: 0 auto;
            padding: 30px 0;
        }
        .signup-form form {
            color: #999;
            border-radius: 3px;
            margin-bottom: 15px;
            background: #fff;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
            padding: 30px;
        }
        .signup-form h2 {
            color: #333;
            font-weight: bold;
            margin-top: 0;
        }
        .signup-form hr {
            margin: 0 -30px 20px;
        }
        .signup-form .form-group {
            margin-bottom: 20px;
        }
        .signup-form label {
            font-weight: normal;
            font-size: 15px;
        }
        .signup-form .form-control {
            min-height: 38px;
            box-shadow: none !important;
        }
        .signup-form .input-group-addon {
            max-width: 42px;
            text-align: center;
        }
        .signup-form .btn, .signup-form .btn:active {
            font-size: 16px;
            font-weight: bold;
            background: #19aa8d !important;
            border: none;
            min-width: 140px;
        }
        .signup-form .btn:hover, .signup-form .btn:focus {
            background: #179b81 !important;
        }
        .signup-form a {
            color: #fff;
            text-decoration: underline;
        }
        .signup-form a:hover {
            text-decoration: none;
        }
        .signup-form form a {
            color: #19aa8d;
            text-decoration: none;
        }
        .signup-form form a:hover {
            text-decoration: underline;
        }
        .signup-form .fa {
            font-size: 21px;
        }
        .signup-form .fa-paper-plane {
            font-size: 18px;
        }
        .signup-form .fa-check {
            color: #fff;
            left: 17px;
            top: 18px;
            font-size: 7px;
            position: absolute;
        }
    </style>
</head>
<body>
<div class="signup-form">
    <form method="post">
        <h2>Edit</h2>
        <hr>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                </div>
                <input type="text" class="form-control" name="name" id="name" value="${employee.fullName}" required>
            </div>
        </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                    </div>
                    <input type="date" class="form-control" name="birthday" id="birthday" value="${employee.birthday}" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                    </div>
                    <input type="text" class="form-control" name="idCard" id="idCard" value="${employee.idCard}" required>
                </div>
            </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                </div>
                <input type="text" class="form-control" name="salary" id="salary" value="${employee.salary}" required>
            </div>
        </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                    </div>
                    <input type="text" class="form-control" name="phone" id="phone" value="${employee.phone}" required>
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                    </div>
                    <input type="text" class="form-control" name="email" id="email" value="${employee.email}" required>
                </div>
            </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                </div>
                <textarea class="form-control" name = "address" id="address" required>${employee.address}</textarea>
            </div>
        </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                    </div>
                    <select name="PositionId" class="form-control" id="PositionId">
                        <option value="${employee.positionId}" selected disabled hidden>${employee.position}</option>
                        <option value="1">LeTan</option>
                        <option value="2">PhucVu</option>
                        <option value="3">ChuyenVien</option>
                        <option value="4">GiamSat</option>
                        <option value="5">QuanLy</option>
                        <option value="6">GiamDoc</option>
                    </select>
                </div>
            </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                </div>
                <select name="EducationDegreeId" class="form-control" id="EducationDegreeId">
                    <option value="${employee.educationDegreeId}" selected disabled hidden>${employee.educationDegree}</option>
                    <option value="1">TrungCap</option>
                    <option value="2">CaoDang</option>
                    <option value="3">DaiHoc</option>
                    <option value="4">SauDaiHoc</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
                </div>
                <select name="DivisionId" class="form-control" id="DivisionId">
                    <option value="${employee.divisionId}" selected disabled hidden>${employee.division}</option>
                    <option value="1">Sale–Marketing</option>
                    <option value="2">HanhChinh</option>
                    <option value="3">PhucVu</option>
                    <option value="4">QuanLy</option>
                </select>
            </div>
        </div>
            <input type="hidden" name="EditId" id="EditId" value="${employee.id}">
        <div class="form-group">
            <button type="button" class="btn btn-primary btn-lg"><a href="/employee" style="color: white; text-decoration: none;">Cancel</a></button>
            <button type="submit" class="btn btn-primary btn-lg">Edit employee</button>
        </div>
    </form>
</div>
</body>
</html>