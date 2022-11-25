import zzhRequest from '@/service'
import { IDataType } from '@/service/login/type'
export function getPageListData(url: string, queryInfo: any) {
  return zzhRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return zzhRequest.delete<IDataType>({
    url: url
  })
}
