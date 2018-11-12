"use strict"
import Vue from 'vue'
import message from './message'

const messagebox = Vue.extend(message);
message.install = function(options, type) {
  if (options === null || options === undefined) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
    if (type !== null && options !== undefined) {
      options.type = type;
    }
  }

  let instance = new messagebox({
    data: options
  }).$mount();

  document.body.appendChild(instance.$el);
}
export default message.install
