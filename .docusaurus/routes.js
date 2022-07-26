import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
