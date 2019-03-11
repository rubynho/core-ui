"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var defaultTheme = _interopRequireWildcard(require("../../style/theme"));

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 10px;\n        left: 0;\n        right: 0;\n        background-color: ", ";\n        transition: 0.5s;\n        height: 4px;\n        border-radius: 4px;\n\n        &:hover {\n          &:before {\n            box-shadow: 0 0 3px ", ";\n          }\n        }\n      }\n\n      .slider:before {\n        position: absolute;\n        content: \"\";\n        height: 24px;\n        width: 24px;\n        top: -10px;\n        background-color: ", ";\n        transition: 0.5s;\n        border-radius: 50%;\n      }\n\n      input:checked + .slider {\n        background-color: ", ";\n        &:hover {\n          &:before {\n            box-shadow: 0 0 3px ", ";\n          }\n        }\n      }\n\n      input:checked + .slider:before {\n        transform: translateX(26px);\n        background-color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin-right: ", ";\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToggleContainer = _styledComponents.default.div(_templateObject());

var Switch = _styledComponents.default.label(_templateObject2(), defaultTheme.padding.small, function (props) {
  var brandingTheme = (0, _utils.mergeTheme)(props.theme, defaultTheme);
  return (0, _styledComponents.css)(_templateObject3(), defaultTheme.grayLight, defaultTheme.grayLight, defaultTheme.grayLight, brandingTheme.primary, brandingTheme.primary, brandingTheme.primary);
});

var StyledSwitchLabel = _styledComponents.default.span(_templateObject4(), defaultTheme.fontSize.large);

function ToggleSwitch(_ref) {
  var toggle = _ref.toggle,
      label = _ref.label,
      _onChange = _ref.onChange;
  return _react.default.createElement(ToggleContainer, null, _react.default.createElement(Switch, {
    className: "switch"
  }, _react.default.createElement("input", {
    type: "checkbox",
    checked: toggle,
    onChange: function onChange() {
      return _onChange(!toggle);
    }
  }), _react.default.createElement("span", {
    className: "slider"
  })), _react.default.createElement(StyledSwitchLabel, {
    className: "text"
  }, label));
}

ToggleSwitch.propTypes = {
  toggle: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  label: _propTypes.default.string
};
var _default = ToggleSwitch;
exports.default = _default;