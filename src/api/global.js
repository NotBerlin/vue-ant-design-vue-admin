import {get, post} from '@/utils/http'

export function getRoute(data={}, otherConfig={}) {
    return get('/getRoute', data, otherConfig)
}