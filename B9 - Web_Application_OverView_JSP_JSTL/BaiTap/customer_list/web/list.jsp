<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table border="1" border-collapse="collapse">
<tr>
    <th>Tên</th>
    <th>Ngày Sinh</th>
    <th>Địa Chỉ</th>
    <th>Ảnh</th>
</tr>
<c:forEach var="customer" items="${customerServlet}">
    <tr>
        <th><c:out value="${customer.name}"></c:out></th>
        <th><c:out value="${customer.dateOfBirth}"></c:out></th>
        <th><c:out value="${customer.address}"></c:out></th>
        <th><img src="<c:out value="${customer.image}"></c:out>" width="100" height="100"></th>
    </tr>
</c:forEach>
</table>
</body>
</html>
