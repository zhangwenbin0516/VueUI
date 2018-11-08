"use strict"
const config = [
  {
    path: '/',
    name: 'root',
    component: resolve => require(['pages/'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['pages/home/'], resolve)
      }
    ]
  }
];
export default config
