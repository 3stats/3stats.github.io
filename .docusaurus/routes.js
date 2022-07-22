import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '249'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f0f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fe1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '407'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '365'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c81'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '66d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '714'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '75c'),
    routes: [
      {
        path: '/Dashboard/intro',
        component: ComponentCreator('/Dashboard/intro', '698'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Decentraland/Introduction',
        component: ComponentCreator('/Decentraland/Introduction', '659'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Decentraland/SDK',
        component: ComponentCreator('/Decentraland/SDK', '885'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Decentraland/SmartItem',
        component: ComponentCreator('/Decentraland/SmartItem', '939'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro',
        component: ComponentCreator('/intro', '283'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
