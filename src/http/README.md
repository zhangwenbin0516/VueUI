#HTTP数据请求参数配置说明
~~~

this.$axios({  
  url: '',                    //请求地址
  type: 'get/post',           //请求类型get/post
  data: {},                   //发送的请求数据
  success: function(res) {    //请求成功后返回的数据
  
  },
  error: function(err) {      //请求失败后返回的错误信息
  
  }
})
~~~

* http数据请求使用Promise异步实现
