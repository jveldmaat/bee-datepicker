'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DateInput = require('../date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ROW = 4;
var COL = 3;

function goYear(direction) {
  var value = this.state.value.clone();
  value.add(direction, 'year');
  this.setState({
    value: value
  });
}

function chooseYear(year) {
  var value = this.state.value.clone();
  value.year(year);
  value.month(this.state.value.month());
  this.props.onSelect(value);
}

var YearPanel = function (_React$Component) {
  _inherits(YearPanel, _React$Component);

  function YearPanel(props) {
    _classCallCheck(this, YearPanel);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onInputChange = function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear,
          onSelect = _this$props.onSelect;

      if (value) {
        _this.setState({
          value: value
        });
        onChange && onChange(value, value.format('YYYY'));
      }
    };

    _this.prefixCls = props.rootPrefixCls + '-year-panel';
    _this.state = {
      value: props.value || props.defaultValue
    };
    _this.nextDecade = goYear.bind(_this, 10);
    _this.previousDecade = goYear.bind(_this, -10);
    return _this;
  }

  YearPanel.prototype.years = function years() {
    var value = this.state.value;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var previousYear = startYear - 1;
    var years = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      years[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var year = previousYear + index;
        var content = String(year);
        years[rowIndex][colIndex] = {
          content: content,
          year: year,
          title: content
        };
        index++;
      }
    }
    return years;
  };

  YearPanel.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var _state = this.state,
        value = _state.value,
        str = _state.str;
    var locale = props.locale,
        renderFooter = props.renderFooter,
        format = props.format,
        onClear = props.onClear;

    var years = this.years();
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var endYear = startYear + 9;
    var prefixCls = this.prefixCls;

    var yeasEls = years.map(function (row, index) {
      var tds = row.map(function (yearData) {
        var _classNameMap;

        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', yearData.year === currentYear), _defineProperty(_classNameMap, prefixCls + '-last-decade-cell', yearData.year < startYear), _defineProperty(_classNameMap, prefixCls + '-next-decade-cell', yearData.year > endYear), _classNameMap);
        var clickHandler = void 0;
        if (yearData.year < startYear) {
          clickHandler = _this2.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this2.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this2, yearData.year);
        }
        return _react2["default"].createElement(
          'td',
          {
            role: 'gridcell',
            title: yearData.title,
            key: yearData.content,
            onClick: clickHandler,
            className: (0, _classnames2["default"])(classNameMap)
          },
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-year'
            },
            yearData.content
          )
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    var footer = renderFooter && renderFooter('year');

    return _react2["default"].createElement(
      'div',
      { className: this.prefixCls },
      _react2["default"].createElement(_DateInput2["default"], {
        value: value,
        prefixCls: this.props.rootPrefixCls,
        showClear: true,
        locale: locale,
        format: format,
        onChange: this.onInputChange,
        selectedValue: value,
        onClear: onClear
      }),
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2["default"].createElement('a', {
            className: prefixCls + '-prev-decade-btn',
            role: 'button',
            onClick: this.previousDecade,
            title: locale.previousDecade
          }),
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-decade-select',
              role: 'button',
              onClick: props.onDecadePanelShow,
              title: locale.decadeSelect
            },
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-decade-select-content' },
              startYear,
              '-',
              endYear
            ),
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-decade-select-arrow' },
              'x'
            )
          ),
          _react2["default"].createElement('a', {
            className: prefixCls + '-next-decade-btn',
            role: 'button',
            onClick: this.nextDecade,
            title: locale.nextDecade
          })
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            _react2["default"].createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              yeasEls
            )
          )
        ),
        footer && _react2["default"].createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      )
    );
  };

  return YearPanel;
}(_react2["default"].Component);

exports["default"] = YearPanel;


YearPanel.propTypes = {
  rootPrefixCls: _propTypes2["default"].string,
  value: _propTypes2["default"].object,
  defaultValue: _propTypes2["default"].object,
  renderFooter: _propTypes2["default"].func
};

YearPanel.defaultProps = {
  onSelect: function onSelect() {},

  format: 'YYYY'
};
module.exports = exports['default'];