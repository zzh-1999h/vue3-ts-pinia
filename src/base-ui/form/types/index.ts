type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IformItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IformItem[]
  itemStyles?: any
  labelWidth?: string
  colLayout?: any
}
