import __SNOWPACK_ENV__ from '../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import {h, ref} from '../../web_modules/vue/dist/vue.esm-bundler.js'
import { PlusOutlined, BorderInnerOutlined, DownloadOutlined, UploadOutlined, QuestionOutlined } from '../../web_modules/@ant-design/icons-vue.js'
import ScreenStore from "../stores/ScreenStore.js"
import BitmapStore from  "../stores/BitmapStore.js"
import {Help, HelpStore} from "./Help.js"
import {Download, DownloadStore} from "./Download.js"
import { FilesUploadModal } from "./upload/FilesUploadModal.js"
import { UploadStore } from "./upload/UploadStore.js"
const svg = new URL('../mega65.svg', import.meta.url);

const Toolbar = {
    render() {
        return [
            h('div', { class:'toolbarIcon' } , h(PlusOutlined, { onClick: ScreenStore.actionNew }) ),
            h('div', { class:'toolbarIcon' } , h(BorderInnerOutlined, { onClick: ScreenStore.actionGrid }) ),
            h('div', { class:'toolbarIcon' } , h(DownloadOutlined, { onClick: DownloadStore.toggle }) ),
            h('div', { class:'toolbarIcon' } , h(UploadOutlined, { onClick: UploadStore.toggle }) ),
            h('div', { class:'toolbarIcon' } , h(QuestionOutlined, { onClick: HelpStore.toggle }) ),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            h('div', { class:'toolbarIconOff' } , h(QuestionOutlined)),
            // ab hier die ganzen Dialog-Komponenten die potentiell aufgemacht werden können...
            h('div', { } , [h(Help), h(Download), h(FilesUploadModal)])
            //h('img', { class:'mega65-logo', src: svg.href } ),
        ]
    }
}

export { Toolbar }