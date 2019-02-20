/**
 *
 * @title 选择年，年月，周，日期范围
 * @description 选择年，年月，周，日期范围基本示例
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import moment from "moment";
import zhCN from "../../src/locale/zh_CN";
const { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;


class Demo4 extends Component {
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d);
        console.log(dataString);
    };
    onSelect = d => {
        console.log('select')
        console.log(d);
    }
    onClear = () => {
        console.log('clear')
    }
    render() {
        return (
            <div>
                <Row style={{'marginBottom':'10px'}}>
                    <Col md={6}>
                        <YearPicker
                            format="YYYY"
                            onChange={this.onChange}
                            onSelect={this.onSelect}
                            locale={zhCN}
                            placeholder="选择年"
                            defaultValue={moment()}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <MonthPicker
                            format="YYYY-MM"
                            onSelect={this.onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            defaultValue={moment()}
                            placeholder="选择年月"
                            onClear={this.onClear}
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <WeekPicker 
                        defaultValue={moment()}
                        onSelect={this.onSelect}
                        onChange={this.onChange}
                        placeholder="选择周" 
                        />
                    </Col>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <RangePicker
                            placeholder={'开始 ~ 结束'}
                            dateInputPlaceholder={['开始', '结束']}
                            showClear={true}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo4;
