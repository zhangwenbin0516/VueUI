#Message消息框

* ###全局配置：

```bash
import message from 'ui/message/'   //引入文件地址
Vue.prototype.$message = message    //添加到全局配置中
```

* ###示例代码：

```bash
1. 示例一：
this.$message({
  message: '这是一条信息',  //消息框显示内容或html代码
  type: 'info',           //显示类型，默认类型info，其他类型分为：warning（警示）、success（成功）、error（错误）
  time: 3000             //消息框显示时间
});
2. 示例二：
this.$message('这是一条消息', 'success');
第一个参数表示显示内容
第二个参数表示显示类型  
默认显示时间为3s
```
