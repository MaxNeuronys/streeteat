import api from './api'

export default {
    initMap(Pos, type, radius){
        return api().get(`${Pos.lat},${Pos.lng}&type=${type}&radius=${radius * 1000}`)
    }
}