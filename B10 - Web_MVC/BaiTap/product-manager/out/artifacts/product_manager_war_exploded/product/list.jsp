<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Product List</title>
</head>
<body>
<h1>Product</h1>
<p>
    <a href="/product?action=create">Create new product</a>
    <a><form action="/product" method="get">Search:
        <input type="text" name="search" id="search"><input type="submit" value="Search product">
        <input type="hidden" name="action" value="searchProduct">
    </form></a>
</p>
<table border="1">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Price</td>
        <td>Manufacturer</td>
        <td>Detail</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
    <c:forEach items='${requestScope["products"]}' var="product">
        <tr>
            <td><a href="/product?action=view&id=${product.getId()}">${product.getId()}</a></td>
            <td>${product.getProductName()}</td>
            <td>${product.getProductPrice()}</td>
            <td>${product.getProductManufacturer()}</td>
            <td>${product.getProductDetail()}</td>
            <td><a href="/product?action=edit&id=${product.getId()}">edit</a></td>
            <td><a href="/product?action=delete&id=${product.getId()}">delete</a></td>
        </tr>
    </c:forEach>
</table>
</body>
</html>