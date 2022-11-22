import { App } from 'vue'
import registerElement from './register-element'
import elementIcons from './element-icons'

export function registerApp(app: App): void {
  registerElement(app)
  elementIcons(app)
}
