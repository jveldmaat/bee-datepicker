import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\r\n *\r\n * @title 选择日期\r\n * @description 以「日期」为基本单位，基础的日期选择控件\r\n */\r\n\r\nimport React, {Component} from \"react\";\r\n\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Row, Col } from 'tinper-bee';\r\n\r\nconst format = \"YYYY-MM-DD dddd\";\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo1 extends Component {\r\n    onSelect = (d, dataString)  => {\r\n        console.log('select')\r\n        console.log(d, dataString);\r\n    }\r\n    onClick = d => {\r\n        console.log('click')\r\n    }\r\n    onChange = (d, dataString) => {\r\n        console.log('change')\r\n        console.log(d, dataString)\r\n    };\r\n    onDateInputBlur = (e,v) => {\r\n        console.log(e,v);\r\n    }\r\n    render() {\r\n        var self = this;\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            onClick={this.onClick}\r\n                            onDateInputBlur={this.onDateInputBlur}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 禁用日期","code":"/**\n *\n * @title 禁用日期\n * @description 设置 disabled\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Row, Col } from 'tinper-bee';\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD dddd\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo2 extends Component {\n    onSelect = d => {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        console.log(dataString);\n    };\n    render() {\n        var self = this;\n        return (\n            <div>\n                <Row>\n                    <Col md={6}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            disabled\n                            defaultValue={moment()}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 设置 disabled"},{"example":<Demo3 />,"title":" 不可选择日期和时间","code":"/**\r\n *\r\n * @title 不可选择日期和时间\r\n * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\n\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\r\n\r\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\r\nimport moment from \"moment\";\r\n\r\nconst format = \"YYYY-MM-DD\";\r\n\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\n\r\nfunction disabledDate(current) {\r\n  return current && current.valueOf() < Date.now();\r\n}\r\n\r\nclass Demo3 extends Component {\r\n  onSelect = d => {\r\n    console.log(d);\r\n  }\r\n  \r\n  onChange = d => {\r\n    console.log(d);\r\n  }\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Row>\r\n          <Col md={6}>\r\n            <DatePicker\r\n              format={format}\r\n              onSelect={this.onSelect}\r\n              onChange={this.onChange}\r\n              locale={zhCN}\r\n              disabledDate={disabledDate}\r\n              defaultValue={moment()}\r\n              placeholder={dateInputPlaceholder}\r\n            />\r\n          </Col>\r\n        </Row>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。"},{"example":<Demo4 />,"title":" 选择年，年月，周，日期范围","code":"/**\n *\n * @title 选择年，年月，周，日期范围\n * @description 选择年，年月，周，日期范围基本示例\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\nimport moment from \"moment\";\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\nconst { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;\n\n\nclass Demo4 extends Component {\n    onChange = (d, dataString) => {\n        console.log('change')\n        console.log(d);\n        console.log(dataString);\n    };\n    onSelect = d => {\n        console.log('select')\n        console.log(d);\n    }\n    onClear = () => {\n        console.log('clear')\n    }\n    /**\n     *@param e 事件对象\n     *@param startValue 开始时间\n     *@param array 包含开始时间和结束时间的数组\n     */\n    onStartInputBlur = (e,startValue,array) => {\n        console.log('RangePicker面板 左输入框的失焦事件',startValue,array)\n    }\n    /**\n     *@param e 事件对象\n     *@param endValue 结束时间\n     *@param array 包含开始时间和结束时间的数组\n     */\n    onEndInputBlur = (e,endValue,array) => {\n        console.log('RangePicker面板 右输入框的失焦事件',endValue,array)\n    }\n    render() {\n        return (\n            <div>\n                <Row style={{'marginBottom':'10px'}}>\n                    <Col md={6}>\n                        <YearPicker\n                            format=\"YYYY\"\n                            onChange={this.onChange}\n                            onSelect={this.onSelect}\n                            locale={zhCN}\n                            placeholder=\"选择年\"\n                            defaultValue={moment()}\n                            showClose={false}\n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <MonthPicker\n                            format=\"YYYY-MM\"\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            defaultValue={moment()}\n                            placeholder=\"选择年月\"\n                            onClear={this.onClear} showClose={false}\n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <WeekPicker \n                        defaultValue={moment()}\n                        onSelect={this.onSelect}\n                        onChange={this.onChange}\n                        placeholder=\"选择周\" showClose={false}\n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <RangePicker\n                            placeholder={'开始 ~ 结束'}\n                            dateInputPlaceholder={['开始', '结束']}\n                            showClear={true}\n                            onChange={this.onChange}\n                            onPanelChange={(v)=>{console.log('onPanelChange',v)}}\n                            showClose={true}\n                            onStartInputBlur={this.onStartInputBlur}\n                            onEndInputBlur={this.onEndInputBlur}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 选择年，年月，周，日期范围基本示例"},{"example":<Demo5 />,"title":" 动态的改变时间","code":"/**\n *\n * @title 动态的改变时间\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Button,  Row, Col  } from 'tinper-bee';\nimport moment from \"moment\";\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\nconst format = \"YYYY-MM-DD HH:mm:ss\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: moment()\n    };\n  }\n\n  handleChange = value => {\n    this.setState({\n      value: value\n    });\n  };\n  onSelect = d => {\n    console.log(d);\n  };\n\n  handlerChangeDate = () => {\n    this.setState({\n      value: moment(\"2011-11-11 11:11:11\")\n    });\n    console.log(\"click\");\n  };\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={6}>\n            <DatePicker\n              format={format}\n              locale={zhCN}\n              onSelect={this.onSelect}\n              onChange={this.handleChange}\n              value={this.state.value}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n          <Col md={3}>\n            <Button onClick={this.handlerChangeDate}>变</Button>\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo6 />,"title":" 自定义日期渲染父级容器，扩展底边栏\t","code":"/**\r\n *\r\n * @title 自定义日期渲染父级容器，扩展底边栏\t\r\n * @description getCalendarContainer自定义日期渲染父级容器，renderFooter扩展底边栏\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\n\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\r\n\r\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\r\nimport enUS from \"tinper-bee/lib/en_US\";;\r\nimport moment from \"moment\";\r\n\r\nconst format = \"YYYY-MM-DD\";\r\n\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    getCalendarContainer() {\r\n        return this.d || document.getElementById('d');\r\n    }\r\n    onChange = d => {\r\n        console.log(d);\r\n    };\r\n    render() {\r\n        return (\r\n            <div id=\"d\" >\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onChange={this.onChange}\r\n                            locale={zhCN}\r\n                            defaultValue={moment()}\r\n                            placeholder={dateInputPlaceholder}\r\n                            getCalendarContainer={this.getCalendarContainer}\r\n                            showToday={false}//是否显示今天\r\n                            renderFooter={()=>{\r\n                                return (\r\n                                    <span> 我是底部 </span>\r\n                                )\r\n                            }}\r\n                        />\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n","desc":" getCalendarContainer自定义日期渲染父级容器，renderFooter扩展底边栏"},{"example":<Demo7 />,"title":" 自定义展示日期面板，外层输入框可输入","code":"/**\n *\n * @title 自定义展示日期面板，外层输入框可输入\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Icon, Row, Col } from 'tinper-bee';\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\nimport enUS from \"tinper-bee/lib/en_US\";;\nimport moment from \"moment\";\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo7 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '',\n            open: false\n        };\n    }\n    onSelect = d=> {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        this.setState({\n            value:d\n        })\n        console.log('onChange',dataString)\n    };\n    onOpenChange = open => {\n        console.log(open)\n    }\n    open = d => {\n        this.setState({\n            open: !this.state.open\n        })\n    }\n    onClick = (e,d,str) => {\n        console.log(d);\n    }\n    outInputKeydown = ()=>{\n        console.log('keydown')\n    }\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col md={6}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            open={this.state.open}\n                            defaultValue={moment('2018-01-01')}\n                            value={this.state.value}\n                            onOpenChange={this.onOpenChange}\n                            placeholder={dateInputPlaceholder}\n                            className={\"Demo7\"}\n                            onClick={this.onClick}\n                            keyboardInput={true}\n                            showDateInput={false}\n                        />\n                    </Col>\n                    <Col md={3}>\n                        <button className=\"u-button\" onClick={this.open}>展开面板</button>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"},{"example":<Demo8 />,"title":" 自定义展示日期面板，外层输入框可输入，配合form使用","code":"/**\r\n *\r\n * @title 自定义展示日期面板，外层输入框可输入，配合form使用\r\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\r\n */\r\n\r\nimport React, {Component} from \"react\";\r\n\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Form, Row, Col } from 'tinper-bee';\r\nimport zhCN from \"tinper-bee/lib/zh_CN\";;\r\nimport enUS from \"tinper-bee/lib/en_US\";;\r\nimport moment from \"moment\";\r\nimport 'moment/locale/zh-cn';\r\n\n\r\nmoment.locale('zh-cn');\r\n\r\nconst format = \"YYYY-MM-DD\";\r\n\r\nconst dateInputPlaceholder = \"选择日期\";\r\n\r\n\r\nclass Demo8 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: '',\r\n            open: false\r\n        };\r\n    }\r\n    onOpenChange = open => {\r\n        console.log(open)\r\n    }\r\n    open = d => {\r\n        this.setState({\r\n            open: !this.state.open\r\n        })\r\n    }\r\n    onClick = (e,d,str) => {\r\n        console.log(d);\r\n    }\r\n    onSelect(d) {\r\n        console.log(\"select:\"+d);\r\n    }\r\n    outInputKeydown = ()=>{\r\n        console.log('keydown')\r\n    }\r\n    submit = (e) => {\r\n        this.props.form.validateFields((err, values) => {\r\n            if (err) {\r\n                console.log('校验失败', values);\r\n            } else {\r\n                console.log('提交成功', values, moment(values.date).format('YYYY-MM-DD'));\r\n            }\r\n        });\r\n    }\r\n    render() {\r\n        var self = this; \r\n        const { getFieldProps, getFieldError } = this.props.form;\r\n        return (\r\n            <div>\r\n                <Row>\r\n                    <Col md={6}>\r\n                        <DatePicker\r\n                            format={format}\r\n                            onSelect={this.onSelect}\r\n                            onChange={this.onChange}\r\n                            locale={zhCN}\r\n                            open={this.state.open}\r\n                            onOpenChange={this.onOpenChange.bind(this)}\r\n                            placeholder={dateInputPlaceholder}\r\n                            className={\"demo11\"}\r\n                            onClick={this.onClick}\r\n                            keyboardInput={true}\r\n                            showDateInput={false}\r\n                            iconClick={this.open}\r\n                            outInputKeydown={this.outInputKeydown}\r\n                            {...getFieldProps('date', {\r\n                                validateTrigger: 'onBlur',\r\n                                initialValue:moment('2018-01-01'),\r\n                                rules: [{\r\n                                    required: true, message: '请输入日期',\r\n                                }],\r\n                            }) }\r\n                        />\r\n                    </Col>\r\n                    <Col md={3}>\r\n                        <button className=\"u-button\" onClick={this.open}>展开/收起面板</button>\r\n                        <button className=\"u-button\" onClick={this.submit}>获得值</button>\r\n                    </Col>\r\n                </Row>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
