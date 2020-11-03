ZScrollbar 自定义滚动条

===

<a href="https://www.npmjs.com/package/ZScrollbar"><img src="https://img.shields.io/npm/dm/ZScrollbar.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/ZScrollbar"><img src="https://img.shields.io/npm/v/ZScrollbar.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/ZScrollbar"><img src="https://img.shields.io/github/issues-raw/tangdaohai/ZScrollbar.svg" alt="open issues"></a>
<a href="https://www.npmjs.com/package/ZScrollbar"><img src="https://img.shields.io/github/issues-closed-raw/tangdaohai/ZScrollbar.svg" alt="closed issues"></a>
<a href="https://www.npmjs.com/package/ZScrollbar"><img src="https://img.shields.io/npm/l/ZScrollbar.svg" alt="License"></a>
![欢迎PR](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

| Chrome | Firefox | Safari | Edge |              IE               |
| :----: | :-----: | :----: | :--: | :---------------------------: |
|   √    |    √    |   √    |  √   | `9` √<br />`10` √<br />`11` √ |

> 当前版本不支持移动端(还未在移动端进行过测试)。The current version not support SP(I haven't tested it on the smartphone yet).

## Feature:

- [x] 保留原生滚动条功能
- [x] 支持动态设置滚动条颜色
- [x] 支持设置滚动条的位置。左右(竖向滚动条)、上下(横向滚动)方向
- [x] 支持隐藏滚动条
- [x] 支持 hover 显示滚动条
- [x] 支持动态设定滚动位置，并支持 top 与 left 值同步
- [x] 支持动态数据 resize，滚动条自动隐藏与显示
- [x] 支持设置 resize 滚动条变化规则(e. 在 chart 应用中，来新消息时，滚动条始终在最底部)
- [ ] 支持设置滚动速度
- [ ] 支持设置隐藏滚动条，hover 时显示

## ZScrollbar 是干嘛的

`ZScrollbar`是一款基于 vue2.0 的滚动条插件。

此插件致力**解决原生滚动条在不同系统、不同浏览器中的丑陋表现**，在保证原生滚动条功能可用的基础上实现了更丰富的功能、保证在所支持的浏览器下展现出风格一致、交互体验一致的滚动条。

它可以让你无需关心滚动条的兼容性问题，无需关心`内容区域`的宽高，当设定`resize`属性后，可以根据内容大小`自动显示或隐藏滚动条`。

## 安装

```
npm i  ZScrollbar

or

yarn add ZScrollbar
```

## 注册组件

1. 全局注册

   ```vue
   <template>
     <z-scrollbar>
       <!-- 你的内容 -->
     </z-scrollbar>
   </template>
   <script>
   import Vue from 'vue'

   import ZScrollbar from 'ZScrollbar'

   Vue.use(ZScrollbar)
   </script>
   ```

2. 局部注册

   ```vue
   <template>
     <z-scrollbar>
       <!-- 你的内容 -->
     </z-scrollbar>
   </template>
   <script>
   import ZScrollbar from 'ZScrollbar'
   // 引入css，推荐将css放入main入口中引入一次即可。
   import 'ZScrollbar/docs/z-scrollbar.css'
   export default {
     name: '',
     components: { [ZScrollbar.name]: ZScrollbar } //在组件内注册
   }
   </script>
   ```

## 属性

### color

- 类型`String`

- 默认值`rgba(51,51,51,0.2)`

- 用法:

  ```html
  <z-scrollbar color="rgba(51,51,51,0.2)">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  设置滚动条的颜色

  > 建议使用`rgba`，这样可以为滚动条设置透明度，当然，如果你需要设置透明度的话。

### size

- 类型`Number|String`

- 默认值`4`

- 用法:

  ```html
  <z-scrollbar size="8">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  设置滚动条的大小。

  > 对于竖向滚动条表示宽度，横向滚动条表示高度

### min-length-h (\*new)

- 类型`Number`

- 默认值`40`

- 单位`px`

- 用法

  ```html
  <z-scrollbar :min-length-h="20">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  设置`横向`滚动条最小的长度，**当元素无限长或者宽的时候，会导致滚动条无限小**，这种情况可以使用该属性。来设置最小的长度。

  ```html
  <z-scrollbar :min-length-h="0.2">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  也可以设置`百分比`来限制最小长度(可视区域 \* min-length-h)。假设可视区域的宽度为`300px`，那么滚动条为`60px`。

  当`min-length-h`小于`1`的时候，会将其当作`百分比`来处理。

### min-length-v (\*new)

- 类型`NUmber`

- 默认值`40`

- 单位`px`

- 用法

  ```html
  <z-scrollbar :min-length-v="20">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  设置`竖向`滚动条最小的长度，**当元素无限长或者宽的时候，会导致滚动条无限小**，这种情况可以使用该属性。来设置最小的长度。

  ```html
  <z-scrollbar :min-length-v="0.2">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  也可以设置`百分比`来限制最小长度(可视区域 \* min-length-v)。假设可视区域的高度为`200px`，那么滚动条为`40px`。

  当`min-length-h`小于`1`的时候，会将其当作`百分比`来处理。

### scroll-top

- 类型`Number|String`

- 默认值`0`

- 修饰符`sync`

- 用法:

  ```html
  <z-scrollbar scroll-top="20">
    <!-- 你的内容 -->
  </z-scrollbar>
  <!-- 也可以增加 .sync 保持scroll-top同步 -->
  <z-scrollbar scroll-top.sync="20"></z-scrollbar>
  ```

  在组件`mounted`之后，设置`容器`距离顶部的距离。

  > 相当于`element.scrollTop` 一致。

  `scroll-top`的值会自动转换为数字，所以当值为固定的数字时(使用`+`转换的)，你无需增加`:(v-bind)`，直接写为`scroll-top="20"`即可。

### scroll-left

- 类型`Number|String`

- 默认值`0`

- 修饰符`sync`

- 用法:

  ```html
  <z-scrollbar scroll-left="20">
    <!-- 你的内容 -->
  </z-scrollbar>
  <!-- 也可以增加 .sync 保持scroll-left -->
  <z-scrollbar scroll-top.left="20"></z-scrollbar>
  ```

  在组件`mounted`之后，设置`容器`距离左边的距离。

  > 相当于`element.scrollLeft` 一致。

### hide-vertical

- 类型 `Boolean`

- 默认值 `false`

- 用法:

  ```html
  <!-- 表示隐藏竖向滚动条 -->
  <z-scrollbar hide-vertical>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  隐藏`竖向`滚动条

### hide-horizontal

- 类型 `Boolean`

- 默认值 `false`

- 用法:

  ```html
  <!-- 表示隐藏横向滚动条 -->
  <z-scrollbar hide-horizontal>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  隐藏`横向`滚动条

  > 如果你不需要横向出现滚动条，可以设置 hide-horizontal 来提高性能。

### hoverScroll

- 类型 `Boolean`

- 默认值 `false`

- 用法:

  ```html
  <!-- 表示隐藏横向滚动条 -->
  <z-scrollbar hover-scroll>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  hover 时显示滚动条

### resize

- 类型`Boolean`

- 默认值`false`

- 用法:

  ```html
  <!-- 表示开启监听容器大小变化 -->
  <z-scrollbar resize>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  如果`你的容器`大小是变化的(`高度`或者`宽度`可能随时发生变化的情况)，可使用`resize`来开启对容器大小变化的监听，当`容器`的`宽高`大于你设定的`宽高`时，会自动出现滚动条，反正会自动隐藏滚动条。

  > 此功能当前版本依赖 [element-resize-detector](https://github.com/wnr/element-resize-detector)，目前正在寻找性能更高的办法，当然此插件的性能还是可以肯定的

### smaller-move-h、smaller-move-v

- 类型`String`

- 默认值`''`

- 可选值:

  1. `start`
  2. `end`
  3. 除`1、2`的值之外，其他所有值都认为是`默认值`

- 用法:

  ```html
  <z-scrollbar smaller-move-v="start">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  > 当`resize=true`时，此配置才有效。

  该属性表示当容器`变小`时，滚动条移动的方向。

  - smaller-move-h 内容变小时，`横向`滚动条移动的方向
  - smaller-move-v 内容变小时，`竖向`滚动条移动的方向

  当设置为`start`时，表示变小之后，滚动条会移动到`头部`(对`竖向`滚动条来说是`最上边`，对`横向`滚动条来说是`最左边`)

  当设置为`end`时，表示变小之后，滚动条会移动到`尾部`(对`竖向`滚动条来说是`最下边`，对`横向`滚动条来说是`最右边`)

  当设置为`''`(默认值)时，表示在变小时，滚动条的位置不发生变化。

### bigger-move-h、bigger-move-v

- 类型`String`

- 默认值`''`

- 可选值:

  1. `start`
  2. `end`
  3. 除`1、2`的值之外，其他所有值都认为是`默认值`

- 用法:

  ```html
  <z-scrollbar bigger-move-h="start">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  > 当`resize=true`时，此配置才有效。

  该属性表示当容器大小`变大`时，滚动条移动的方向。

  属性值与`smaller-move-h`原理一致。

### left

- 类型`Boolean`

- 默认值`false`

- 用法:

  ```html
  <z-scrollbar left>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  表示设置`竖向`滚动条依靠在`左`边。默认竖向滚动条在右边。

### top

- 类型`Boolean`

- 默认值`false`

- 用法:

  ```html
  <z-scrollbar top>
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

  表示设置`横向`滚动条依靠在`上`边。默认横向滚动条在下边。v

### throttle

- 类型`Number`

- 默认值`14`

- 单位`毫秒`

- 说明:

  设置鼠标拖动滚动条的节流时间，如果没有特殊的要求不建议修改此值。

## 事件

### horizontal-start

- 参数`scrollLeft`

  > 在`horizontal-start`事件下，`scrollLeft`始终为`0`。

- 说明
  监听横向滚动条滚动到`头部`的事件。当`scroll-left = 0`时会触发该事件。

  ```html
  <z-scrollbar @horizontal-start="yourHandler">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

### horizontal-end

- 参数`scrollLeft`

- 说明
  监听横向滚动条滚动到`尾部`的事件。

  ```html
  <z-scrollbar @horizontal-end="yourHandler">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

### vertical-start

- 参数`scrollTop`

  > 在`vertical-start`事件下，`scrollTop`始终为`0`

- 说明
  监听竖向滚动条滚动到`头部`的事件。当`scroll-top = 0`时会触发该事件。

  ```html
  <z-scrollbar @vertical-start="yourHandler">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

### vertical-end

- 参数`scrollTop`

- 说明
  监听竖向滚动条滚动到`尾部`的事件。

  ```html
  <z-scrollbar @vertical-end="yourHandler">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```

### scroll

- 参数`scroll`

  > 在`scroll`事件下，返回的结果是滚动的数据。

- 说明
  监听滚动条滚动事件。

  ```html
  <z-scrollbar @scroll="yourHandler">
    <!-- 你的内容 -->
  </z-scrollbar>
  ```
