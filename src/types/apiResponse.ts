export type ApiResponse<T> = {
  success: boolean
  data: T | string // Data can be an array/object or an error string
}
