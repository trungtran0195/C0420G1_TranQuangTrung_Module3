<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>View customer</title>
</head>
<body>
<h1>Customer details</h1>
<p>
    <a href="/product">Back to customer list</a>
</p>
<table>
    <tr>
        <td>Product ID: </td>
        <td>${requestScope["product"].getId()}</td>
    </tr>
    <tr>
        <td>Product Name: </td>
        <td>${requestScope["product"].getProductName()}</td>
    </tr>
    <tr>
        <td>Price: </td>
        <td>${requestScope["product"].getProductPrice()}</td>
    </tr>
    <tr>
        <td>Manufacturer: </td>
        <td>${requestScope["product"].getProductManufacturer()}</td>
    </tr>
    <tr>
        <td>Detail: </td>
        <td>${requestScope["product"].getProductDetail()}</td>
    </tr>
</table>
</body>
</html>