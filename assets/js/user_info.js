$(function(){
    var form = layui.form

    var layer = layui.layer

    form.verify({
        nickname: function(value){
            if(value.length>6){
                return '昵称的长度必须在1~6个字符之间！'
            }
        }
    })
    initUserInfo()

    //初始化用户的基本信息
     function initUserInfo(){
         $.ajax({
             method:'GET',
             url:'/my/userinfo',
             success: function(res){
                 if(res.status !== 0){
                     return layer.msg('获取用户信息失败！')
                 }
                 console.log(res)
                 //为表单快速赋值
                 form.val('formUserInfo',res.data)
             }
         })
     }


   //重置表单的数据
   $('#btnReset').on('click',function(e){
       //阻止默认重置
       e.preventDefault()
       initUserInfo()
   })
})
