

//在发请求之前，先调用这个函数，可以拿到我们给ajax提供的配置对象

$.ajaxPrefilter(function (options){
   //在发起真正的ajax请求之前，统一拼接请求的根路径
   options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})
