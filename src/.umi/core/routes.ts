// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yongqi/workfile/rz-qadmin/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/umi/plugin/openapi",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-openapi__openapi' */'/Users/yongqi/workfile/rz-qadmin/src/.umi/plugin-openapi/openapi.tsx'), loading: LoadingComponent})
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/yongqi/workfile/rz-qadmin/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/~demos/:uuid",
        "layout": false,
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yongqi/workfile/rz-qadmin/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent})],
        "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/yongqi/workfile/rz-qadmin/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
      },
      {
        "path": "/_demos/:uuid",
        "redirect": "/~demos/:uuid"
      },
      {
        "__dumiRoot": true,
        "layout": false,
        "path": "/~docs",
        "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yongqi/workfile/rz-qadmin/node_modules/@umijs/preset-dumi/lib/theme/layout'), loading: LoadingComponent}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yongqi/workfile/rz-qadmin/node_modules/dumi-theme-default/es/layout.js'), loading: LoadingComponent})],
        "routes": [
          {
            "path": "/~docs",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/yongqi/workfile/rz-qadmin/README.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "locale": "en-US",
              "order": null,
              "filePath": "README.md",
              "updatedTime": 1631087589000,
              "componentName": "rz-qadmin",
              "slugs": [
                {
                  "depth": 1,
                  "value": "Ant Design Pro",
                  "heading": "ant-design-pro"
                },
                {
                  "depth": 2,
                  "value": "Environment Prepare",
                  "heading": "environment-prepare"
                },
                {
                  "depth": 2,
                  "value": "Provided Scripts",
                  "heading": "provided-scripts"
                },
                {
                  "depth": 3,
                  "value": "Start project",
                  "heading": "start-project"
                },
                {
                  "depth": 3,
                  "value": "Build project",
                  "heading": "build-project"
                },
                {
                  "depth": 3,
                  "value": "Check code style",
                  "heading": "check-code-style"
                },
                {
                  "depth": 3,
                  "value": "Test code",
                  "heading": "test-code"
                },
                {
                  "depth": 2,
                  "value": "More",
                  "heading": "more"
                }
              ],
              "title": "Ant Design Pro"
            },
            "title": "Ant Design Pro"
          },
          {
            "path": "/~docs/components",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__index.md' */'/Users/yongqi/workfile/rz-qadmin/src/components/index.md'), loading: LoadingComponent}),
            "exact": true,
            "meta": {
              "group": {
                "path": "/~docs/components",
                "title": "Components"
              },
              "title": "Components"
            },
            "title": "Components"
          }
        ],
        "title": "ant-design-pro",
        "component": (props) => props.children
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "path": "/user/login",
            "layout": false,
            "name": "login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__Login' */'/Users/yongqi/workfile/rz-qadmin/src/pages/user/Login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/yongqi/workfile/rz-qadmin/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [
          {
            "name": "workplace",
            "icon": "smile",
            "path": "/dashboard/workplace",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'/Users/yongqi/workfile/rz-qadmin/src/pages/dashboard/workplace'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/dashboard",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "name": "analysis",
            "icon": "smile",
            "path": "/dashboard/analysis",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'/Users/yongqi/workfile/rz-qadmin/src/pages/dashboard/analysis'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "monitor",
            "icon": "smile",
            "path": "/dashboard/monitor",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'/Users/yongqi/workfile/rz-qadmin/src/pages/dashboard/monitor'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form",
            "redirect": "/form/basic-form",
            "exact": true
          },
          {
            "name": "basic-form",
            "icon": "smile",
            "path": "/form/basic-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/Users/yongqi/workfile/rz-qadmin/src/pages/form/basic-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "step-form",
            "icon": "smile",
            "path": "/form/step-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'/Users/yongqi/workfile/rz-qadmin/src/pages/form/step-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "advanced-form",
            "icon": "smile",
            "path": "/form/advanced-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/Users/yongqi/workfile/rz-qadmin/src/pages/form/advanced-form'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/search",
            "name": "search-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/search'), loading: LoadingComponent}),
            "routes": [
              {
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "name": "articles",
                "icon": "smile",
                "path": "/list/search/articles",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/search/articles'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "projects",
                "icon": "smile",
                "path": "/list/search/projects",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/search/projects'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "applications",
                "icon": "smile",
                "path": "/list/search/applications",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/search/applications'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "redirect": "/list/table-list",
            "exact": true
          },
          {
            "name": "table-list",
            "icon": "smile",
            "path": "/list/table-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/table-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "basic-list",
            "icon": "smile",
            "path": "/list/basic-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/basic-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "card-list",
            "icon": "smile",
            "path": "/list/card-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'/Users/yongqi/workfile/rz-qadmin/src/pages/list/card-list'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile",
            "redirect": "/profile/basic",
            "exact": true
          },
          {
            "name": "basic",
            "icon": "smile",
            "path": "/profile/basic",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'/Users/yongqi/workfile/rz-qadmin/src/pages/profile/basic'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "advanced",
            "icon": "smile",
            "path": "/profile/advanced",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/Users/yongqi/workfile/rz-qadmin/src/pages/profile/advanced'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "result",
        "icon": "CheckCircleOutlined",
        "path": "/result",
        "routes": [
          {
            "path": "/result",
            "redirect": "/result/success",
            "exact": true
          },
          {
            "name": "success",
            "icon": "smile",
            "path": "/result/success",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__success' */'/Users/yongqi/workfile/rz-qadmin/src/pages/result/success'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "fail",
            "icon": "smile",
            "path": "/result/fail",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__fail' */'/Users/yongqi/workfile/rz-qadmin/src/pages/result/fail'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [
          {
            "path": "/exception",
            "redirect": "/exception/403",
            "exact": true
          },
          {
            "name": "403",
            "icon": "smile",
            "path": "/exception/403",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__403' */'/Users/yongqi/workfile/rz-qadmin/src/pages/exception/403'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "404",
            "icon": "smile",
            "path": "/exception/404",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'/Users/yongqi/workfile/rz-qadmin/src/pages/exception/404'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "500",
            "icon": "smile",
            "path": "/exception/500",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__500' */'/Users/yongqi/workfile/rz-qadmin/src/pages/exception/500'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [
          {
            "path": "/account",
            "redirect": "/account/center",
            "exact": true
          },
          {
            "name": "center",
            "icon": "smile",
            "path": "/account/center",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/Users/yongqi/workfile/rz-qadmin/src/pages/account/center'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "settings",
            "icon": "smile",
            "path": "/account/settings",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/yongqi/workfile/rz-qadmin/src/pages/account/settings'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "editor",
        "icon": "highlight",
        "path": "/editor",
        "routes": [
          {
            "path": "/editor",
            "redirect": "/editor/flow",
            "exact": true
          },
          {
            "name": "flow",
            "icon": "smile",
            "path": "/editor/flow",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__flow' */'/Users/yongqi/workfile/rz-qadmin/src/pages/editor/flow'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "mind",
            "icon": "smile",
            "path": "/editor/mind",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__mind' */'/Users/yongqi/workfile/rz-qadmin/src/pages/editor/mind'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "koni",
            "icon": "smile",
            "path": "/editor/koni",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__koni' */'/Users/yongqi/workfile/rz-qadmin/src/pages/editor/koni'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/index.html",
        "redirect": "/dashboard/workplace",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/dashboard/workplace",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/yongqi/workfile/rz-qadmin/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
