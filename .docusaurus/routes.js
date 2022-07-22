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
    component: ComponentCreator('/', 'e50'),
    routes: [
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
