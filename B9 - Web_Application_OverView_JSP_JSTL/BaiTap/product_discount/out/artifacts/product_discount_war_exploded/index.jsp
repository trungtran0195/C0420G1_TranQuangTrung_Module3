<%--
  Created by IntelliJ IDEA.
  User: ADMIN
  Date: 7/23/2020
  Time: 10:32 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>
  <title>Product Discount Calculator</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<h2>Product Discount Calculator</h2>
<form action="/display-discount" method="post">
  <input type="text" name="description" placeholder="Product Description: "/>
  <input type="text" name="price" placeholder="List Price: "/>
  <input type="text" name="discount" placeholder="Discount Percent: "/>
  <input type = "submit" id = "submit" value = "Calculate Discount"/>
</form>
</body>
</html>