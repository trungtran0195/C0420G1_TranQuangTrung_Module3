<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Note List</title>
</head>
<body>
<h1>Note</h1>
<p>
    <c:if test='${sessionScope["message"] != null}'>
        <span class="message">${sessionScope["message"]}</span>
    </c:if>
</p>
<p>
    <a href="/blog?action=create">Create new blog</a>
    <a><form action="/blog" method="get">Search:
        <select name="searchType" id="searchType">
            <c:forEach items='${requestScope["noteType"]}' var="type">
                <option value="${type.getTypeId()}">${type.getType()}</option>
            </c:forEach>
        </select>
        <input type="text" name="searchTitle" id="searchTitle"><input type="submit" value="Search blog">
        <input type="hidden" name="action" value="searchBlog">
    </form></a>
</p>
<table border="1">
    <tr>
        <td>STT</td>
        <td>Tiêu đè</td>
        <td>Phân loại</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <c:forEach items='${requestScope["notes"]}' var="note">
        <tr>
            <td><a href="/blog?action=view&id=${note.getId()}">${note.getId()}</a></td>
            <td>${note.getTitle()}</td>
            <td>${note.getType()}</td>
            <td><a href="/blog?action=edit&id=${note.getId()}">edit</a></td>
            <td><a href="/blog?action=delete&id=${note.getId()}">delete</a></td>
            <td><a href="/blog?action=deleteFile&id=${note.getId()}">deleteFromFile</a></td>
        </tr>
    </c:forEach>
</table>
<%--&lt;%&ndash;For displaying Previous link except for the 1st page &ndash;%&gt;--%>
<%--<c:if test="${currentPage != 1}">--%>
<%--    <td><a href="/blog?page=${currentPage - 1}">Previous</a></td>--%>
<%--</c:if>--%>

<%--&lt;%&ndash;For displaying Page numbers.--%>
<%--The when condition does not display a link for the current page&ndash;%&gt;--%>
<%--<table border="1" cellpadding="5" cellspacing="5">--%>
<%--    <tr>--%>
<%--        <c:forEach begin="1" end="${noOfPages}" var="i">--%>
<%--            <c:choose>--%>
<%--                <c:when test="${currentPage eq i}">--%>
<%--                    <td>${i}</td>--%>
<%--                </c:when>--%>
<%--                <c:otherwise>--%>
<%--                    <td><a href="/blog?page=${i}">${i}</a></td>--%>
<%--                </c:otherwise>--%>
<%--            </c:choose>--%>
<%--        </c:forEach>--%>
<%--    </tr>--%>
<%--</table>--%>

<%--&lt;%&ndash;For displaying Next link &ndash;%&gt;--%>
<%--<c:if test="${currentPage lt noOfPages}">--%>
<%--    <td><a href="/blog?page=${currentPage + 1}">Next</a></td>--%>
<%--</c:if>--%>
</body>
</html>