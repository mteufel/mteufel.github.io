import {h, ref } from "../../../web_modules/vue/dist/vue.esm-bundler.js"
import {Modal } from "../../../web_modules/ant-design-vue.js"
import { UploadStore } from "./UploadStore.js"
import { UploadButton } from "./UploadButton.js"
import BitmapStore from "../../stores/BitmapStore.js"
import ScreenStore from "../../stores/ScreenStore.js"

const FilesUploadModal = {
    setup() {
        const dialogVisible = ref(UploadStore.isVisible())
        UploadStore.subscribe( () => {
            dialogVisible.value = UploadStore.isVisible()
        })

        const okPressed = () => {
            BitmapStore.setBitmap(UploadStore.bitmap)
            BitmapStore.setColorRam(UploadStore.colorRam)
            ScreenStore.refreshAll()
            ScreenStore.setLastAction("uploaded")
            BitmapStore.callSubscribers()
            UploadStore.toggle()
        }


        return { dialogVisible, okPressed }

    },
    render() {
        return h(Modal, { onCancel: () => UploadStore.toggle(),
            visible: this.dialogVisible,
            closable: true,
            destroyOnClose: true,
            onOk: this.okPressed,
            title: 'Upload Bitmap' } , [ h(UploadButton, {  placeholder: 'Select Bitmap file', type: 'bitmap' }),
                                         h("p"),
                                         h(UploadButton, {  placeholder: 'Select Color file', type: 'color-ram' })])
    }
}

export { FilesUploadModal }