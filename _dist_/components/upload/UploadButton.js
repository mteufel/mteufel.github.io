import {h, toRefs} from "../../../web_modules/vue/dist/vue.esm-bundler.js"
import {Button, Upload} from "../../../web_modules/ant-design-vue.js"
import {UploadOutlined} from "../../../web_modules/@ant-design/icons-vue.js"
import {useUpload} from "./UseUpload.js"

const UploadButton = {
    props: {
        type: String,
        placeholder: String,
    },
    setup(props) {
        const {placeholder} = toRefs(props)
        return {placeholder, ...useUpload(props)}
    },
    render() {
        return h(Upload, { modelValue: this.fileList,
            multiple: false,
            showUploadList: true,
            listType: 'picture',
            transformFile: (file) => this.transformFile(file),
            beforeUpload: (file, fileList) => this.beforeUpload(file, fileList)
        }, h(Button, null, [h(UploadOutlined), this.placeholder] ) )
    }

}

export { UploadButton }
