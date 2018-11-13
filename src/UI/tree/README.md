#TREE树形图

* ####示例代码：

```bash
<ui-tree
      :checkbox=true
      :treeLists="lists"
      :show=true
      :keys="keys"
      :compare="compare"
      @treeData="treeData"
    />
```


* ###功能介绍
```bash
Tree树提供三大功能，主要如下：
```

* ####复选框

```bash
多选以关键词checkbox控制，默认无复选框，显示复选框以boolean值为true
```

* ####无限制展示
```bash
※无限制展示以关键词treeLists控制，treeLists属于数组，格式如下：
lists: [
          {
            name: '测试',
            id: 0,
            value: 0,
            lists: [
              {
                name: '测试',
                id: 3,
                value: 0,
              },
              {
                name: '测试',
                id: 4,
                value: 0,
              }
            ]
          },
          {
            name: '测试',
            id: 2,
            value: 1
          }
        ]
※树状图控制关键词为keys，keys为一维数组，格式如下：
keys: [0, 1, 2, 4]
```

* ####对比
```bash
※对比控制关键词compare，compare为一维数组，对比实现必须为两个tree树，如果高亮功能，也可以设置此关键词，数据来源为keys的公共数据，格式如下：
compare: [2, 4]
```
