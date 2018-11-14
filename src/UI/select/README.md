## Select下拉框

* ### 代码示例：

```bash
<ui-select
  :options="options"          //下拉框内容
  v-model="value2"            //接受选择数据
  :checked=true               //是否为多选
  :disable=true               //是否禁止选择
  :clear=true                 //可清除
  :readonly=true              //是否可输入并搜索
  :placeholder="placeholder"  //提示信息，默认请选择
  @getOption="getData"        //点击后触发事件
/>
```

* ### 数据类型：

```bash
options: [
  {
    id: 0,
    name: '测试',         //必须参数，显示下拉框列表名称
    value: 'ceshi'
  },
  {
    id: 0,
    name: '测试',
    value: 'ceshi'
  }
]
```

* ### 返回值类型：

```bash
{
  id: 0,
  name: '测试',
  value: 'ceshi'
}
```
