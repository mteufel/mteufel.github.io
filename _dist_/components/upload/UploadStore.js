import { createBasicDialogStore } from "../../stores/BasicDialogStore.js"

const UploadStore = createBasicDialogStore()

UploadStore.bitmap = []
UploadStore.colorRam = []

export { UploadStore }