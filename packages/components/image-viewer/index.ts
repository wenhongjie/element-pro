import { withInstall } from '@element-pro/utils/with-install'

import ImageViewer from './src/image-viewer.vue'

export const ElImageViewer = withInstall(ImageViewer)
export default ElImageViewer

export * from './src/image-viewer'
