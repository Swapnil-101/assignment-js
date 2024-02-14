import { h, init } from 'snabbdom';


let patch = init([]);

function createApp(selector, template) {
  let state = {};
  let vnode = template(state);
  let container = document.querySelector(selector);
  patch(container, vnode);

  document.addEventListener('DOMContentLoaded', () => {
    console.log('Component mounted');
  });

  return {
    updateState(newState) {
      state = { ...state, ...newState };
      vnode = template(state);
      patch(container, vnode);
    },
  };
}

window.uiLibrary = {
  createApp: createApp
};
