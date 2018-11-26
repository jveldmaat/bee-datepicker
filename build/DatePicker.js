"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rcCalendar = require("rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tinperBeeCore = require("tinper-bee-core");

var _Picker = require("rc-calendar/lib/Picker");

var _Picker2 = _interopRequireDefault(_Picker);

var _beeFormControl = require("bee-form-control");

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _Panel = require("rc-time-picker/lib/Panel");

var _Panel2 = _interopRequireDefault(_Panel);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeInputGroup = require("bee-input-group");

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

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
      value: props.value || props.defaultValue || _moment2["default"].Moment,
      open: props.open || false
    };
    return _this;
  }

  DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
    this.setState({
      renderIcon: nextProps.renderIcon,
      open: nextProps.open || false
    });
  };

  DatePicker.prototype.render = function render() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;
    var value = state.value;

    var pickerChangeHandler = {};
    var calendarHandler = {};
    var autofocus = this.props.autofocus ? { autofocus: 'autofocus' } : null;

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
    }, props, {
      onChange: this.handleCalendarChange,
      value: this.state.value
    }));

    return _react2["default"].createElement(
      "div",
      { className: props.className },
      _react2["default"].createElement(
        _Picker2["default"],
        _extends({}, props, pickerChangeHandler, {
          onOpenChange: this.onOpenChange,
          animation: "slide-up",
          calendar: calendar,
          mode: 'year',
          open: this.state.open,
          value: state.value
        }),
        function () {
          return _react2["default"].createElement(
            _beeInputGroup2["default"],
            { simple: true, className: "datepicker-input-group" },
            _react2["default"].createElement(_beeFormControl2["default"], _extends({
              disabled: props.disabled,
              readOnly: true,
              placeholder: _this2.props.placeholder,
              value: value && value.format(props.format) || "",
              onClick: function onClick(event) {
                _this2.onClick(event);
              }
            }, autofocus, {
              focusSelect: props.defaultSelected
            })),
            _react2["default"].createElement(
              _beeInputGroup2["default"].Button,
              { shape: "border" },
              props.renderIcon()
            )
          );
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

    _this3.setState({ value: value });
  };

  this.inputFocus = function () {
    var input = document.querySelector('.rc-calendar-input');
    if (input) {
      if (input.value) {
        input.select();
      } else {
        input.focus();
      }
      input.onkeydown = function (e) {
        if (e.keyCode == _tinperBeeCore.KeyCode.DELETE) {
          input.value = '';
          _this3.props.onChange('', '');
        } else if (e.keyCode == _tinperBeeCore.KeyCode.ESC) {
          _this3.setState({
            open: false
          });
          var v = _this3.state.value;
          _this3.props.onOpenChange(false, v, v && v.format(props.format) || '');
        }
      };
    }
  };

  this.onOpenChange = function (open) {
    var props = _this3.props;
    var self = _this3;
    _this3.setState({
      open: open
    });
    setTimeout(function () {
      var value = self.state.value;
      props.onOpenChange(open, value, value && value.format(props.format) || '');
      self.inputFocus();
    }, 200);
  };

  this.handleCalendarChange = function (value) {
    var props = _this3.props;
    _this3.setState({ value: value });
    //props.onChange(value, (value && value.format(props.format)) || '');
  };

  this.handleChange = function (value) {
    var props = _this3.props;
    _this3.setState({ value: value });
    props.onChange(value, value && value.format(props.format) || '');
  };

  this.onClick = function (e) {
    var props = _this3.props;
    var value = _this3.state.value;
    props.onClick && props.onClick(e.nativeEvent, value || null, value && value.format(props.format) || '');
  };
};

DatePicker.defaultProps = {
  renderIcon: function renderIcon() {
    return _react2["default"].createElement(_beeIcon2["default"], { type: "uf-calendar" });
  },
  focusOnOpen: true,
  defultSelect: false,
  onOpenChange: function onOpenChange() {}
};

exports["default"] = DatePicker;
module.exports = exports["default"];