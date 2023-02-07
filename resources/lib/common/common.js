var api = 'http://127.0.0.1:8080/';


//下次登陆把token带入后台
var token = $.cookie('TOKEN');

//全局ajax前置拦截
//每次ajax请求时把token带过去
$.ajaxSetup({
	headers: {
		'TOKEN': token
	}
});

//如果访问登陆页面之外的页面并且还没有登陆成功之后写入cookie的token,那么需要跳转到登陆页面
if (token == undefined) {
	if (window.location != 'http://127.0.0.1:8848/ERP-WEB/login.html') {
		window.top.location = '/ERP-WEB/login.html';
	}
} else {
	if (window.location != 'http://127.0.0.1:8848/ERP-WEB/login.html') {
		$.ajax({
			url: api + "login/checkLogin",
			type: "post",
			async: true,
			success: function(res) {
				if (res.code == -1) {
					window.top.location = '/ERP-WEB/login.html';
				}
			},
			error: function() {
				window.top.location = '/ERP-WEB/login.html';
			}
		})
	}
}
