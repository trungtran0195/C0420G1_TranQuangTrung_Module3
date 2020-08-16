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
                        <h2><b><a href="/services">Manage Services</a></b></h2>
                        <h5>
                            <c:if test='${sessionScope["message"] != null}'>
                            <span class="message">${sessionScope["message"]}</span>
                            </c:if>
                        </h5>
                    </div>
                    <div class="col-sm-6">
                        <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Service</span></a>
                    </div>
                    <div class="col-sm-6"><a><form action="/services" method="get">Search:
                        <input type="text" name="searchName" id="searchName"><input type="submit" value="Search name">
                        <input type="hidden" name="action" value="searchService">
                    </form></a></div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>serviceName</th>
                    <th>areaUsed</th>
                    <th>floors</th>
                    <th>maxPax</th>
                    <th>rentCost</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items='${servicesList}' var="service">
                <tr class="contentPage">
                    <td>${service.serviceName}</td>
                    <td>${service.areaUsed}</td>
                    <td>${service.floors}</td>
                    <td>${service.rentalCosts}</td>
                    <td>${service.maxNumberOfPeople}</td>
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
            <form action="/services?action=create" method="post">
                <div class="modal-header">
                    <h4 class="modal-title">Add Customer</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>serviceName</label>
                        <input type="text" class="form-control" name="serviceName" id="serviceName" required>
                    </div>
                    <div class="form-group">
                        <label>areaUsed</label>
                        <input type="text" class="form-control" name="areaUsed" id="areaUsed" required>
                    </div>
                    <div class="form-group">
                        <label>floors</label>
                        <input type="text" class="form-control" name="floors" id="floors" required>
                    </div>
                    <div class="form-group">
                        <label>maxPax</label>
                        <input type="text" class="form-control" name="maxPax" id="maxPax" required>
                    </div>
                    <div class="form-group">
                        <label>rentCost</label>
                        <input type="text" class="form-control" name="rentCost" id="rentCost" required>
                    </div>
                    <div class="form-group">
                        <label>rentTypeId</label>
                        <select name="rentTypeId" class="form-control" id="rentTypeId">
                            <option value="1">Year</option>
                            <option value="2">Month</option>
                            <option value="3">Day</option>
                            <option value="4">Hour</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>serviceTypeId</label>
                        <select name="serviceTypeId" class="form-control" id="serviceTypeId">
                            <option value="1">Villa</option>
                            <option value="2">House</option>
                            <option value="3">Room</option>
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