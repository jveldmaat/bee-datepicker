"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rcCalendar = require("rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Picker = require("rc-calendar/lib/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Panel = require("rc-time-picker/lib/Panel");

var _Panel2 = _interopRequireDefault(_Panel);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chief on 17/4/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var timePickerElement = _react2["default"].createElement(_Panel2["default"], { defaultValue: (0, _moment2["default"])("00:00:00", "HH:mm:ss") });

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props, context) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false
    };
    return _this;
  }

  DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  DatePicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;
    var value = state.value;

    var pickerChangeHandler = {};
    var calendarHandler = {};
    if (props.showTime) {
      calendarHandler = {
        // fix https://github.com/ant-design/ant-design/issues/1902
        onSelect: this.handleChange
      };
    } else {
      pickerChangeHandler = {
        onChange: this.handleChange
      };
    }

    var calendar = _react2["default"].createElement(_rcCalendar2["default"], _extends({
      timePicker: props.showTime ? timePickerElement : null
    }, props));

    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({}, props, pickerChangeHandler, {
          onOpenChange: this.onOpenChange,
          animation: "slide-up",
          calendar: calendar,
          open: this.state.open,
          defaultValue: state.value,
          onChange: this.onChange
        }),
        function () {
          return _react2["default"].createElement(_beeFormControl2["default"], {
            disabled: props.disabled,
            readOnly: true,
            placeholder: _this2.props.placeholder,
            className: _this2.props.className,
            value: value && value.format(props.format) || ""
          });
        }
      )
    );
  };

  return DatePicker;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (value) {
    var props = _this3.props;
    // // if (!('value' in props)) {
    // //   this.setState({ value });
    // // }
    _this3.setState({
      value: value
    });
    props.onChange(value, value && value.format(props.format) || "");
  };

  this.onOpenChange = function (open) {
    _this3.setState({
      open: open
    });
  };

  this.handleChange = function (value) {
    var props = _this3.props;
    if (!("value" in props)) {
      _this3.setState({ value: value });
    }
    props.onChange(value, value && value.format(props.format) || "");
  };
};

exports["default"] = DatePicker;
module.exports = exports["default"];