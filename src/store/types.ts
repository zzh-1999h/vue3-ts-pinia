export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

export interface IUserList {
  cellphone?: number
  createAt?: string
  departmentId: number
  enable: number
  id: number
  name: string
  realname: string
  roleId: number
  updateAt: string
}

export interface Children {
  children?: any
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}

export interface MenuList {
  children: Children[]
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}

export interface IRootList {
  createAt: string
  id: number
  intro: string
  menuList: MenuList[]
  name: string
  updateAt: string
}

export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
}

export interface IPropList {
  prop: string
  label: string
  minWidwh: string
  slotName?: string
}

export interface IContentTableConfig<IPropList> {
  showIndexColumn: boolean
  showSelectColumn: boolean
  title: string
  propList: IPropList
}

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
