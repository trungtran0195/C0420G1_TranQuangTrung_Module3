<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>View note detail</title>
</head>
<body>
<h1>Note details</h1>
<p>
    <a href="/blog">Back to blog</a>
</p>
<table>
    <tr>
        <td>Note ID: </td>
        <td>${requestScope["notes"].getId()}</td>
    </tr>
    <tr>
        <td>Type: </td>
        <td>${requestScope["notes"].getType()}</td>
    </tr>
    <tr>
        <td>Title: </td>
        <td>${requestScope["notes"].getTitle()}</td>
    </tr>
    <tr>
        <td>Content: </td>
        <td>${requestScope["notes"].getContent()}</td>
    </tr>
</table>
</body>
</html>