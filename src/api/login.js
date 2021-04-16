import { get, post } from '@/utils/http'

export const login = (data = {}, otherConfig = {}) => {
    return post('/login', data, otherConfig)
}