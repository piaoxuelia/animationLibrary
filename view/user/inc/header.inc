<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title><%=title%></title>
	<link rel="stylesheet" type="text/css" href="/static/css/reset.css">
	<link rel="stylesheet" type="text/css" href="/static/css/user.css">
	<link rel="stylesheet" type="text/css" href="/static/css/form.css">
	<script src="https://s.ssl.qhimg.com/lib/jquery/183.js"></script>
</head>

<body>
<header>
	<div class="wrap inner user-top">
		<a href="/" class="logo">&nbsp;</a>
		<div class="nav1">
			<a href="/user" <%if(page=="user"){%>class="active"<%}%>>工具列表</a>
			<a href="/user/addtool" <%if(page=="addtool"){%>class="active"<%}%>>添加工具</a>
			<a href="/user/validate" <%if(page=="validate"){%>class="active"<%}%>>工具验证</a>
		</div>
		<%if(!!user){%>
		<div class="user-rt">
			<%=user.displayName%>
			<a href="?logout=1">退出</a>
		</div>
		<%}%>
	</div>
</header>