// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'components-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/yongqi/workfile/rz-qadmin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _react = _interopRequireDefault(await import("react"));

    var _Footer = _interopRequireDefault(await import("@/components/Footer"));

    var _default = function _default() {
      return /*#__PURE__*/_react.default.createElement(_Footer.default, null);
    };

    return _default;
  }
}),
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport Footer from '@/components/Footer';\n\nexport default () => <Footer />;"}},"dependencies":{"react":{"version":"17.0.2"}},"background":"#f0f2f5","identifier":"components-demo"},
  },
  'components-demo-1': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/yongqi/workfile/rz-qadmin/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _antd = await import("antd");

    var _react = _interopRequireDefault(await import("react"));

    var _HeaderDropdown = _interopRequireDefault(await import("@/components/HeaderDropdown"));

    var _default = function _default() {
      var menuHeaderDropdown = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
        selectedKeys: []
      }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "center"
      }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "settings"
      }, "\u4E2A\u4EBA\u8BBE\u7F6E"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: "logout"
      }, "\u9000\u51FA\u767B\u5F55"));

      return /*#__PURE__*/_react.default.createElement(_HeaderDropdown.default, {
        overlay: menuHeaderDropdown
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, "hover \u5C55\u793A\u83DC\u5355"));
    };

    return _default;
  }
}),
    previewerProps: {"sources":{"_":{"tsx":"import { Button, Menu } from 'antd';\nimport React from 'react';\nimport HeaderDropdown from '@/components/HeaderDropdown';\n\nexport default () => {\n  const menuHeaderDropdown = (\n    <Menu selectedKeys={[]}>\n      <Menu.Item key=\"center\">个人中心</Menu.Item>\n      <Menu.Item key=\"settings\">个人设置</Menu.Item>\n      <Menu.Divider />\n      <Menu.Item key=\"logout\">退出登录</Menu.Item>\n    </Menu>\n  );\n  return (\n    <HeaderDropdown overlay={menuHeaderDropdown}>\n      <Button>hover 展示菜单</Button>\n    </HeaderDropdown>\n  );\n};"}},"dependencies":{"antd":{"version":"4.16.13","css":"antd/dist/antd.css"},"react":{"version":">=16.9.0"},"react-dom":{"version":">=16.9.0"}},"background":"#f0f2f5","identifier":"components-demo-1"},
  },
};
