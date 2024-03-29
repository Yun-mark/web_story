$(function(){


    //调用函数，获取用户基本信息
    getUserInfo()

    var layer = layui.layer

     $('#btnLogout').on('click',function(){
       //提示用户是否确认退出
       layer.confirm('确定退出登录？',{ icon: 3, title: '提示'},
       function(index){
        //清空本地存储的token
        localStorage.removeItem('token')
        //重新跳转到登录页面
        location.href = '/login.html'
       //关闭 confirm 询问框
         layer.close(index)
       })     
     })

})

//获取用户的基本信息
function getUserInfo (){
    $.ajax({
         method:'GET',
         url:'/my/userinfo',
         // headers 就是请求头配置对象
         success: function(res){
             if(res.status !== 0){
                 return  layui.layer.msg('获取用户的基本信息失败!')
             }
             renderAvatar(res.data)
         },
         //不论成功与否，都会调用complete回调函数
    })
}

function renderAvatar(user) {
    //获取用户的名称
    var name = user.nickname || user.username
    //设置欢迎的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    //按需渲染用户的头像
    if(user.user_pic !== null){
        //头像
        $('layui-nav-img').attr('src',user.user_pic).show()
        $('text-avatar').hide()
    }else{
        //文本头像
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}

