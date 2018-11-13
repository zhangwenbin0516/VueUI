#Input输入框

* ###代码示例：

```bash
<ui-input
      v-model="value"               //获取输入框中的值
      type="text"                   //确定输入框类型
      :placeholder="placeholder"    //显示输入框提示语
      :reg="reg"                    //输入信息正则验证，失去焦点触发
      :maxlength="length"           //限制输入框信息长度
      @getInput="getData"           //获取数据事件
    />
```

* ###数据类型说明：

```bash
value: '',
length: 11,
reg: {
  name: '您输入的手机号码错误',       //触发后错误提示语
  code: '^1[34578]+[0-9]{4,8}$'    //触发后的验证正则
},
placeholder: '请输入企业关键词',
```

* ###数据调用事件说明：

getData(data) { //data为返回的值
  
}
