<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Deleting product</title>
</head>
<body>
<h1>Delete product</h1>
<p>
    <a href="/product">Back to customer list</a>
</p>
<form method="post">
    <h3>Are you sure?</h3>
    <fieldset>
        <legend>Customer information</legend>
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
            <tr>
                <td><input type="submit" value="Delete product"></td>
                <td><a href="/product">Back to customer list</a></td>
            </tr>
        </table>
    </fieldset>
</body>
</html>