import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import { createApp } from '../web_modules/vue/dist/vue.esm-bundler.js'
import { Screen } from './components/Screen.js';
import Antd from '../web_modules/ant-design-vue.js'

import './justpixel.css.proxy.js'
import './justpixel.antd.dark.css.proxy.js'

console.log(' start !!! ')


const app = createApp({})

app.component('screen', Screen)
app.use(Antd)
app.mount('#app')

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}
