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
    <script src="http://1892.yn.lt/blogger/JQuery/Pagging/js/jquery.twbsPagination.js" type="text/javascript"></script>

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
                        <h2><b><a href="/customer">Manage Customer</a></b></h2>
                        <h5>
                            <c:if test='${sessionScope["message"] != null}'>
                            <span class="message">${sessionScope["message"]}</span>
                            </c:if>
                        </h5>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Customer</span></a>
                    </div>
                    <div class="col-sm-6"><a><form action="/customer" method="get">Search:
                        <input type="text" name="searchName" id="searchName"><input type="submit" value="Search name">
                        <input type="hidden" name="action" value="searchCustomer">
                    </form></a></div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>ID Card</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Customer Type</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items='${customers}' var="customer">
                <tr class="contentPage">
                    <td>${customer.getFullName()}</td>
                    <td>${customer.getBirthday()}</td>
                    <td>${customer.getGender()}</td>
                    <td>${customer.getIdCard()}</td>
                    <td>${customer.getPhone()}</td>
                    <td>${customer.getEmail()}</td>
                    <c:forEach var="type" items="${customerTypes}">
                        <c:if test="${customer.customerTypeId == type.customer_type_id}">
                            <td><c:out value="${type.customer_type}"/></td>
                        </c:if>
                    </c:forEach>
                    <td>${customer.getAddress()}</td>
                    <td>
                        <a href="/customer?action=edit&id=${customer.getCustomerId()}"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="/customer?action=delete&id=${customer.getCustomerId()}"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
            <form action="/customer?action=create" method="post">
                <div class="modal-header">
                    <h4 class="modal-title">Add Customer</h4>
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
                        <input type="text" class="form-control" name="idCard" id="idCard" required>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" name="phone" id="phone" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" name="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label>Customer Type</label>
                        <select name="typeID" class="form-control" id="typeID">
                            <c:forEach var="type" items="${customerTypes}">
                                <option value="${type.customer_type_id}">${type.customer_type}</option>
                            </c:forEach>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <textarea class="form-control" name = "address" id="address" required></textarea>
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