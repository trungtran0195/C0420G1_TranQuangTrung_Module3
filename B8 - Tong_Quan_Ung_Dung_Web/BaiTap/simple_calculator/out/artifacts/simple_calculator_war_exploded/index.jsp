<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Hello</title>
</head>
<body>
<form action="/calServletPath" method="post">
  <input type="text" name="num1" />
  <input type="text" name="num2" />
  <select name="operator">
    <option value="+">Addition</option>
    <option value="-">Subtraction</option>
    <option value="*">Multiplication</option>
    <option value="/">Division</option>
  </select>
  <input type="submit" value="Calculator" />
</form>
</body>
</html>
