<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Edit product</title>
    <style>
        .message{
            color:green;
        }
    </style>
</head>
<body>
<h1>Update product</h1>
<p>
    <c:if test='${requestScope["message"] != null}'>
        <span class="message">${requestScope["message"]}</span>
    </c:if>
</p>
<p>
    <a href="/product">Back to customer list</a>
</p>
<form method="post">
    <fieldset>
        <legend>Product information</legend>
        <table>
            <tr>
                <td>Product ID: </td>
                <td><input type="text" name="id" id="id" value="${requestScope["product"].getId()}"></td>
            </tr>
            <tr>
                <td>Product Name: </td>
                <td><input type="text" name="name" id="name" value="${requestScope["product"].getProductName()}"></td>
            </tr>
            <tr>
                <td>Price: </td>
                <td><input type="text" name="price" id="price" value="${requestScope["product"].getProductPrice()}"></td>
            </tr>
            <tr>
                <td>Manufaturer: </td>
                <td><input type="text" name="manufaturer" id="manufaturer" value="${requestScope["product"].getProductManufacturer()}"></td>
            </tr>
            <tr>
                <td>Detail: </td>
                <td><input type="text" name="detail" id="detail" value="${requestScope["product"].getProductDetail()}"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Update product"></td>
            </tr>
        </table>
    </fieldset>
</form>
</body>
</html>