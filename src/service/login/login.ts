import zzhRequest from '..'
import { IAccount, IDataType, ILoginResult } from '@/service/login/type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return zzhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return zzhRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zzhRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
