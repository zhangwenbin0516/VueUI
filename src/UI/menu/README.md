#头部菜单说明

* ### 示例代码：
 
 ```bash
 <ui-nav 
     :menuLists="menuLists"
  />
  ```


* ### 数据类型：

```bash
menuLists: [
  {
    name: '主页',
    path: '/home',
    children: [
      {
        name: '主页',
        path: '/home',
      }
    ]
  }
],
```
