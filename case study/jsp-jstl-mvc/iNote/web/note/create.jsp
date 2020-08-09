<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Create new note</title>
    <style>
        .message{
            color:green;
        }
    </style>
</head>
<body>
<h1>Create new note</h1>
<p>
    <c:if test='${requestScope["message"] != null}'>
        <span class="message">${requestScope["message"]}</span>
    </c:if>
</p>
<p>
    <a href="/blog">Back to note list</a>
</p>
<form method="post">
    <fieldset>
        <legend>Note information</legend>
        <table>
            <tr>
                <td>Title: </td>
                <td><input type="text" name="title" id="title"></td>
            </tr>
            <tr>
                <td>Content: </td>
                <td><textarea type="text" name="content" id="content"></textarea></td>
            </tr>
            <tr>
                <td>Type: </td>
                <td><select name="typeID" id="typeID">
                    <c:forEach items='${requestScope["noteType"]}' var="type">
                        <option value="${type.getTypeId()}">${type.getType()}</option>
                    </c:forEach>
                </select></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Create note"></td>
            </tr>
        </table>
    </fieldset>
</form>
</body>
</html>