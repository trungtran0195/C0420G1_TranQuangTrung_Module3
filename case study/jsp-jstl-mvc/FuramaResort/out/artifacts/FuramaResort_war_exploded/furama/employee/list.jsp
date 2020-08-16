<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Customer List</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="list.css">
    <script src="https://code.jquery.com/jquery-3.2.1.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.js"></script>

    <script type="text/javascript">
    $(function () {
        var pageSize = 6; // Hiển thị 6 sản phẩm trên 1 trang
        showPage = function (page) {
            $(".contentPage").hide();
            $(".contentPage").each(function (n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        }
        showPage(1);
        ///** Cần truyền giá trị vào đây **///
        var totalRows = 40; // Tổng số sản phẩm hiển thị
        var btnPage = 5; // Số nút bấm hiển thị di chuyển trang
        var iTotalPages = Math.ceil(totalRows / pageSize);
        var obj = $('#pagination').twbsPagination({
            totalPages: iTotalPages,
            visiblePages: btnPage,
            onPageClick: function (event, page) {
                console.info(page);
                showPage(page);
            }
        });
        console.info(obj.data());
    });
</script>
    <style>
        #pagination {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            -webkit-justify-content: center;
        }
    </style>
</head>
<body>
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
                        <h2><b><a href="/employee">Manage Employee</a></b></h2>
                        <h5>
                            <c:if test='${sessionScope["message"] != null}'>
                            <span class="message">${sessionScope["message"]}</span>
                            </c:if>
                        </h5>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Customer</span></a>
                    </div>
                    <div class="col-sm-6"><a><form action="/employee" method="get">Search:
                        <input type="text" name="searchName" id="searchName"><input type="submit" value="Search name">
                        <input type="hidden" name="action" value="searchEmployee">
                    </form></a></div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>ID Card</th>
                    <th>Salary</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Position</th>
                    <th>Education Degree</th>
                    <th>Division</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items='${employees}' var="employee">
                <tr class="contentPage">
                    <td>${employee.fullName}</td>
                    <td>${employee.birthday}</td>
                    <td>${employee.idCard}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.email}</td>
                    <td>${employee.address}</td>
                    <td>${employee.position}</td>
                    <td>${employee.educationDegree}</td>
                    <td>${employee.division}</td>
                    <td>
                        <a href="/employee?action=edit&id=${employee.id}"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="/employee?action=delete&id=${employee.id}"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
                </c:forEach>
                </tbody>
            </table>
            <div class="clearfix">
                <ul id="pagination"></ul>
            </div>
        </div>
    </div>
</div>
<!-- Edit Modal HTML -->
<div id="addEmployeeModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="/employee?action=create" method="post">
                <div class="modal-header">
                    <h4 class="modal-title">Add Employee</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" id="name" required>
                    </div>
                    <div class="form-group">
                        <label>Birthday</label>
                        <input type="date" class="form-control" name="birthday" id="birthday" required>
                    </div>
                    <div class="form-group">
                        <label>Id Card</label>
                        <input type="text" class="form-control" name="idCard" id="idCard" required pattern = "^\d{9}" data-error="idCard is invalid">
                    </div>
                    <div class="form-group">
                        <label>Salary</label>
                        <input type="text" class="form-control" name="salary" id="salary" required pattern = "^([1-9])(\d)$" data-error="salary is invalid">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" name="phone" id="phone" required pattern = "^(090|091|8490|8491)(\d{6})$" data-error="phone is invalid">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="email" required pattern = "^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z]{2,3}" data-error="email address is invalid">
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <textarea class="form-control" name = "address" id="address" required></textarea>
                    </div>
                    <div class="form-group">
                        <label>Position</label>
                        <select name="PositionId" class="form-control" id="PositionId">
                            <option value="1">LeTan</option>
                            <option value="2">PhucVu</option>
                            <option value="3">ChuyenVien</option>
                            <option value="4">GiamSat</option>
                            <option value="5">QuanLy</option>
                            <option value="6">GiamDoc</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>EducationDegree</label>
                        <select name="EducationDegreeId" class="form-control" id="EducationDegreeId">
                            <option value="1">TrungCap</option>
                            <option value="2">CaoDang</option>
                            <option value="3">DaiHoc</option>
                            <option value="4">SauDaiHoc</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Division</label>
                        <select name="DivisionId" class="form-control" id="DivisionId">
                            <option value="1">Sale–Marketing</option>
                            <option value="2">HanhChinh</option>
                            <option value="3">PhucVu</option>
                            <option value="4">QuanLy</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                    <input type="submit" class="btn btn-success" value="Add">
                </div>
            </form>
        </div>
    </div>
</div>
</body>
</html>