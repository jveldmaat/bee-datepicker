# datepicker



react datepicker component for tinper-bee

可定制的日期组件

## 使用

### 使用单独的datepicker包
#### 组件引入
先进行下载bee-datepicker包
```
npm install --save bee-datepicker
```
组件调用
```js
import DatePicker from 'bee-datepicker';
ReactDOM.render(
        <DatePicker></DatePicker>
        , document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入build目录下DatePicker.css
```
<link rel="stylesheet" href="./node_modules/bee-datepicker/build/DatePicker.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-datepicker/src/DatePicker.scss"
//或是
import "./node_modules/bee-datepicker/build/DatePicker.css"
```




## API

### DatePicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String|-|
|className|添加节点的样式|String||
|style|添加内联样式| Object||
|dateRender|日期表格|(current, value) => React.Node||
|renderSidebar|侧边栏|() => React.Node||
|renderFooter|扩展底边栏|() => React.Node||
| value |当前值，如输入框的值|moment||
| defaultValue|默认值，输入框的默认值| moment||
| locale|日历的语言 | Object |en_US |
| format|日期格式化| String ||
| disabledDate |禁用的日期|Function(current:moment):Boolean||
| disabledTime |禁用的时间|Function(current:moment):Object||
| showDateInput|显示日期输入康|Boolean| true |
| showWeekNumber|是否显示周数| Boolean| false|
| showToday|是否显示今天| Boolean| true|
| showOk|底边栏是否显示ok按钮| Boolean | auto |
| onSelect|选择日期的回调函数|Function(date: moment)||
| onChange|日期改变的回调函数|Function(date: moment)||
| dateInputPlaceholder|日期的placeholder| String ||
| showTime | 是否显示时间选择面板 | Boolean ||

### MonthPicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String||
|className|添加节点的样式|String||
|style|添加内联样式| Object||
| value |当前值，如输入框的值|moment||
| defaultValue|默认值，输入框的默认值| moment||
| locale|语言 | Object |en_US |
| disabledDate |禁用的日期|Function(current:moment):Boolean||
| onSelect|选择日期的回调函数|Function(date: moment)||
| onChange|日期改变的回调函数|Function(date: moment)||
| monthCellRender |月份的渲染方法| function ||
| dateCellRender|日期的渲染方法|function||
| monthCellContentRender|自定义月份的渲染方法，将被添加渲染内容中| function||

### RangePicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String||
|className|添加节点的样式|String||
|style|添加内联样式| Object||
|dateRender|日期表格|(current, value) => React.Node||
|renderSidebar|侧边栏|() => React.Node||
|renderFooter|扩展底边栏|() => React.Node||
| selectedValue|当前选中的区间|moment[]||
| defaultSelectedValue|默认选中的区间|	moment[]||
| locale|日历的语言 | Object |en_US |
| format|日期格式化| String ||
| disabledDate |禁用的日期|Function(current:moment):Boolean||
| disabledTime |禁用的时间|Function(current:moment):Object||
| showDateInput|显示日期输入康|Boolean| true |
| showWeekNumber|是否显示周数| Boolean| false|
| showToday|是否显示今天| Boolean| true|
| showOk|底边栏是否显示ok按钮| Boolean | auto |
|showClear|是否显示清除按钮| Boolean|false|
| onSelect|选择日期的回调函数|Function(date: moment)||
| onChange|日期改变的回调函数|Function(date: moment)||
| dateInputPlaceholder|日期的placeholder| String ||
| type|是否固定开始或结束选定的值|enum('both','start', 'end')||

### WeekPicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|placeholder|输入框placeholder|String||


#### setup develop environment

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-datepicker.git
$ cd bee-datepicker
$ npm install
$ npm run dev
```

