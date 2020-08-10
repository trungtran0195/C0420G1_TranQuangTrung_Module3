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
<h1>Edit note</h1>
<p>
    <c:if test='${requestScope["message"] != null}'>
        <span class="message">${requestScope["message"]}</span>
    </c:if>
</p>
<form method="post">
    <input type="hidden" name="id" id="id" value="${requestScope["notes"].getId()}">
    <fieldset>
        <legend>Note information</legend>
        <table>
            <tr>
                <td>Title: </td>
                <td><input type="text" name="title" id="title" value="${requestScope["notes"].getTitle()}"></td>
            </tr>
            <tr>
                <td>Content: </td>
                <td><textarea type="text" name="content" id="content">${requestScope["notes"].getContent()}</textarea></td>
            </tr>
            <tr>
                <td>Type: </td>
                <td><select name="typeID" id="typeID">
                    <option value="${requestScope["notes"].getTypeId()}" selected disabled hidden>${requestScope["notes"].getType()}</option>
                    <c:forEach items='${requestScope["noteType"]}' var="type">
                        <option value="${type.getTypeId()}">${type.getType()}</option>
                    </c:forEach>
                </select></td>
            </tr>
            <tr>
                <td><button><a href="/blog" style="color: black; text-decoration: none;">Cancel</a></button></td>
                <td><input type="submit" value="Edit"></td>
            </tr>
        </table>
    </fieldset>
</form>
</body>
</html>