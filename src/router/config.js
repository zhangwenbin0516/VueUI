"use strict"
const config = [
  {
    path: '/',
    name: 'root',
    component: resolve => require(['pages/'], resolve)
  }
];
export default config
