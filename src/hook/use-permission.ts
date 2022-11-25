import { useUserStore } from '@/store/modules/login'
export function usePermission(pageName: string, handleName: string) {
  const permission = useUserStore().permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permission.find((item: any) => item === verifyPermission)
}
