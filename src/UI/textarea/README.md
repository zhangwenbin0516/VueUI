## Textarea文本域

* ### 示例代码：

```bash
<ui-textarea
  v-model="value1"              //获取数据
  :placeholder="placeholder"    //显示提示信息
  :reg="reg"                    //正则验证
  :maxlength="length"           //限制输入长度
  @getTextarea="getData"        //回车触发文本域事件
/>
```

* ### 数据类型：

```bash
value1: '',                        //显示数据
length: 20,                        //限制长度
reg: {
  name: '您输入的手机号码错误',      //错误提示信息
  code: '^1[34578]+[0-9]{4,8}$'    //验证正则
},
placeholder: '请输入显示内容',       //文本域提示信息
```

* ### 触发事件：

```bash
getData(data) {}    //data为返回数据，等于this.value1
```
