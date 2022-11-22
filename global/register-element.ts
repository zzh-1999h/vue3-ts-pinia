// 自定义插件,解决main.ts中一直需要写app.use(xxx) 的问题
// 按需引入element-plus组件
import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElTable,
  ElTabPane,
  ElTabs,
  ElInput,
  ElCheckbox,
  ElLink,
  ElHeader,
  ElMain,
  ElAside,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'
const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElHeader,
  ElMain,
  ElAside,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
  }
}
