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
                        <h2><b><a href="/blog">Note List</a></b></h2>
                        <h5>
                            <c:if test='${sessionScope["message"] != null}'>
                                <span class="message">${sessionScope["message"]}</span>
                            </c:if>
                        </h5>
                    </div>
                    <div class="col-sm-6">
                        <a href="/blog?action=create"><i class="material-icons">&#xE147;</i> <span>Add New Note</span></a>
                    </div>
                    <div class="col-sm-6"><a>
                        <form action="/blog" method="get">Search:
                        <select name="searchType" id="searchType">
                            <c:forEach items='${noteType}' var="type">
                                <option value="${type.getTypeId()}">${type.getType()}</option>
                            </c:forEach>
                        </select>
                        <input type="text" name="searchTitle" id="searchTitle"><input type="submit" value="Search blog">
                        <input type="hidden" name="action" value="searchBlog">
                    </form>
                    </a></div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tiêu đè</th>
                    <th>Phân loại</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items='${notes}' var="note">
                    <tr class="contentPage">
                        <td><a href="/blog?action=view&id=${note.getId()}">${note.getId()}</a></td>
                        <td>${note.getTitle()}</td>
                        <td>${note.getType()}</td>
                        <td>
                            <a href="/blog?action=edit&id=${note.getId()}"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="/blog?action=delete&id=${note.getId()}"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
</body>
</html>