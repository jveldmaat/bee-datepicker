import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 选择日期","code":"/**\n *\n * @title 选择日期\n * @description 以「日期」为基本单位，基础的日期选择控件\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Row, Col } from 'tinper-bee';\n\nconst format = \"YYYY-MM-DD dddd\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo1 extends Component {\n    onSelect = d => {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        console.log(dataString);\n    };\n    render() {\n        var self = this;\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 以「日期」为基本单位，基础的日期选择控件"},{"example":<Demo2 />,"title":" 禁用日期","code":"/**\n *\n * @title 禁用日期\n * @description 设置 disabled\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Row, Col } from 'tinper-bee';\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD dddd\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo2 extends Component {\n    onSelect = d => {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        console.log(dataString);\n    };\n    render() {\n        var self = this;\n        return (\n            <div>\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            disabled\n                            defaultValue={moment()}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 设置 disabled"},{"example":<Demo3 />,"title":" 不可选择日期和时间","code":"/**\n *\n * @title 不可选择日期和时间\n * @description 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\n\nfunction disabledDate(current) {\n  return current && current.valueOf() < Date.now();\n}\n\nclass Demo3 extends Component {\n  onSelect = d => {\n    console.log(d);\n  }\n  \n  onChange = d => {\n    console.log(d);\n  }\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={12}>\n            <DatePicker\n              format={format}\n              onSelect={this.onSelect}\n              onChange={this.onChange}\n              locale={zhCN}\n              disabledDate={disabledDate}\n              defaultValue={moment()}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。"},{"example":<Demo4 />,"title":" 选择年，年月，周，日期范围","code":"/**\n *\n * @title 选择年，年月，周，日期范围\n * @description 选择年，年月，周，日期范围基本示例\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\nimport moment from \"moment\";\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nconst { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;\n\n\nclass Demo4 extends Component {\n    onChange = (d, dataString) => {\n        console.log(d);\n        console.log(dataString);\n    };\n    onSelect = d => {\n        console.log(d);\n    }\n    render() {\n        return (\n            <div>\n                <Row style={{'marginBottom':'10px'}}>\n                    <Col md={6}>\n                        <YearPicker\n                            format=\"YYYY\"\n                            onChange={this.onChange}\n                            onSelect={this.onSelect}\n                            locale={zhCN}\n                            placeholder=\"选择年\"\n                            defaultValue={moment()}\n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <MonthPicker\n                            format=\"YYYY-MM\"\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            defaultValue={moment()}\n                            placeholder=\"选择年月\"\n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <WeekPicker \n                        defaultValue={moment()}\n                        onSelect={this.onSelect}\n                        onChange={this.onChange}\n                        placeholder=\"选择周\" \n                        />\n                    </Col>\n                    <Col md={6} style={{'marginBottom':'10px'}}>\n                        <RangePicker\n                            placeholder={'开始 ~ 结束'}\n                            dateInputPlaceholder={['开始', '结束']}\n                            showClear={true}\n                            onChange={this.onChange}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 选择年，年月，周，日期范围基本示例"},{"example":<Demo5 />,"title":" 动态的改变时间","code":"/**\n *\n * @title 动态的改变时间\n * @description 以「日期时间」为基本单位，基础的日期时间选择控件\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Button,  Row, Col  } from 'tinper-bee';\nimport moment from \"moment\";\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nconst format = \"YYYY-MM-DD HH:mm:ss\";\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: moment()\n    };\n  }\n\n  handleChange = value => {\n    this.setState({\n      value: value\n    });\n  };\n  onSelect = d => {\n    console.log(d);\n  };\n\n  handlerChangeDate = () => {\n    this.setState({\n      value: moment(\"2011-11-11 11:11:11\")\n    });\n    console.log(\"click\");\n  };\n  render() {\n    return (\n      <div>\n        <Row>\n          <Col md={8}>\n            <DatePicker\n              format={format}\n              locale={zhCN}\n              onSelect={this.onSelect}\n              onChange={this.handleChange}\n              value={this.state.value}\n              placeholder={dateInputPlaceholder}\n            />\n          </Col>\n          <Col md={3}>\n            <Button onClick={this.handlerChangeDate}>变</Button>\n          </Col>\n        </Row>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 以「日期时间」为基本单位，基础的日期时间选择控件"},{"example":<Demo6 />,"title":" 自定义日期渲染父级容器，扩展底边栏\t","code":"/**\n *\n * @title 自定义日期渲染父级容器，扩展底边栏\t\n * @description getCalendarContainer自定义日期渲染父级容器，renderFooter扩展底边栏\n */\n\nimport React, { Component } from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport {  Row, Col  } from 'tinper-bee';\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo6 extends Component {\n    constructor(props) {\n        super(props);\n    }\n    getCalendarContainer() {\n        return this.d || document.getElementById('d');\n    }\n    onChange = d => {\n        console.log(d);\n    };\n    render() {\n        return (\n            <div id=\"d\" >\n                <Row>\n                    <Col md={12}>\n                        <DatePicker\n                            format={format}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            defaultValue={moment()}\n                            placeholder={dateInputPlaceholder}\n                            getCalendarContainer={this.getCalendarContainer}\n                            showToday={false}//是否显示今天\n                            renderFooter={()=>{\n                                return (\n                                    <span> 我是底部 </span>\n                                )\n                            }}\n                        />\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" getCalendarContainer自定义日期渲染父级容器，renderFooter扩展底边栏"},{"example":<Demo7 />,"title":" 自定义展示日期面板，外层输入框可输入","code":"/**\n *\n * @title 自定义展示日期面板，外层输入框可输入\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Icon, Row, Col } from 'tinper-bee';\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nclass Demo11 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '',\n            open: false\n        };\n    }\n    onSelect = d=> {\n        console.log(d);\n    }\n    onChange = (d, dataString) => {\n        this.setState({\n            value:d\n        })\n        console.log('onChange',dataString)\n    };\n    onOpenChange = open => {\n        console.log(open)\n    }\n    open = d => {\n        this.setState({\n            open: !this.state.open\n        })\n    }\n    onClick = (e,d,str) => {\n        console.log(d);\n    }\n    outInputKeydown = ()=>{\n        console.log('keydown')\n    }\n    render() {\n        return (\n            <div>\n                <Row>\n                    <Col md={8}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            open={this.state.open}\n                            defaultValue={moment('2018-01-01')}\n                            value={this.state.value}\n                            onOpenChange={this.onOpenChange}\n                            placeholder={dateInputPlaceholder}\n                            className={\"demo11\"}\n                            onClick={this.onClick}\n                            keyboardInput={true}\n                            showDateInput={false}\n                        />\n                    </Col>\n                    <Col md={3}>\n                        <button className=\"u-button\" onClick={this.open}>展开面板</button>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"},{"example":<Demo8 />,"title":" 自定义展示日期面板，外层输入框可输入，配合form使用","code":"/**\n *\n * @title 自定义展示日期面板，外层输入框可输入，配合form使用\n * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input\n */\n\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Form, Icon, Row, Col } from 'tinper-bee';\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n\nconst format = \"YYYY-MM-DD\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\n\nclass Demo12 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '',\n            open: false\n        };\n    }\n    renderIcon = d => {\n        return (<Icon type=\"uf-search\"></Icon>)\n    }\n    onOpenChange = open => {\n        console.log(open)\n    }\n    open = d => {\n        this.setState({\n            open: !this.state.open\n        })\n    }\n    onClick = (e,d,str) => {\n        console.log(d);\n    }\n    onSelect(d) {\n        console.log(\"select:\"+d);\n    }\n    outInputKeydown = ()=>{\n        console.log('keydown')\n    }\n    submit = (e) => {\n        this.props.form.validateFields((err, values) => {\n            if (err) {\n                console.log('校验失败', values);\n            } else {\n                console.log('提交成功', values, moment(values.date).format('YYYY-MM-DD'));\n            }\n        });\n    }\n    render() {\n        var self = this; \n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div>\n                <Row>\n                    <Col md={8}>\n                        <DatePicker\n                            format={format}\n                            onSelect={this.onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            open={this.state.open}\n                            onOpenChange={this.onOpenChange.bind(this)}\n                            placeholder={dateInputPlaceholder}\n                            className={\"demo11\"}\n                            onClick={this.onClick}\n                            keyboardInput={true}\n                            showDateInput={false}\n                            iconClick={this.open}\n                            outInputKeydown={this.outInputKeydown}\n                            {...getFieldProps('date', {\n                                validateTrigger: 'onBlur',\n                                initialValue:moment('2018-01-01'),\n                                rules: [{\n                                    required: true, message: '请输入日期',\n                                }],\n                            }) }\n                        />\n                    </Col>\n                    <Col md={3}>\n                        <button className=\"u-button\" onClick={this.open}>展开/收起面板</button>\n                        <button className=\"u-button\" onClick={this.submit}>获得值</button>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n\n","desc":" open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
            {example}
            <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
        {caret}
        {text}
    </Button>
        </div>
    );
        return (
            <Col md={12}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
        footerStyle={{padding: 0}}>
    <pre><code className="hljs javascript">{code}</code></pre>
        {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
    </Panel>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
            {DemoArray.map((child, index) => {

                return (
            <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
        desc={child.desc} key={index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));