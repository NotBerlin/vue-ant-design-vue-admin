import { createStore } from 'vuex'

import getters from './getter'

const moduleFiles = require.context("./modules", true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const storeName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  modules[storeName] = moduleFiles(modulePath).default;
  return modules;
}, {});

export default createStore({
  getters,
  modules
})
