/**
 *
 * @title 选择日期时间
 * @description 以「日期时间」为基本单位，基础的日期时间选择控件
 */


function onSelect(d) {
    console.log(d)
}


function onChange(d) {
    console.log(d)
}


class Demo4 extends Component {
    render() {

        return (
            <div>
                <Row>
                    <Col md={12}>
                        <DatePicker

                            format={"YYYY-MM-DD HH:mm:ss"}

                            onSelect={onSelect}

                            onChange={onChange}

                            locale={zhCN}

                            placeholder = {'选择日期时间'}

                        />
                    </Col>
                </Row>
            </div>
        )
    }
}