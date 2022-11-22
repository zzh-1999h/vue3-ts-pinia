export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface IUserMenuChildren {
  parentId: number
  permission: string
  children?: string[]
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}
export interface IUserMenu<T = IUserMenuChildren> {
  userMenus: Array<T>
}
