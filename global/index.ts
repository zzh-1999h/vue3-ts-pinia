import { App } from 'vue'
import registerElement from './register-element'
import elementIcons from './element-icons'
import registerProperties from './register-properties'
export function registerApp(app: App): void {
  registerElement(app)
  elementIcons(app)
  app.use(registerProperties)
}
