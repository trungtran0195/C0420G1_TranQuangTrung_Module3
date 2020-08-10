<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Delete note</title>
</head>
<body>
<h1>Note details</h1>
<form method="post">
    <h3>Are you sure?</h3>
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
    <tr>
        <td><button><a href="/blog" style="color: black; text-decoration: none;">Cancel</a></button></td>
        <td><input type="submit" value="Delete"></td>
    </tr>
</table>
</form>
</body>
</html>