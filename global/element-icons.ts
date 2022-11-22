import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { App } from 'vue'
import 'element-plus/dist/index.css'
export default function (app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
