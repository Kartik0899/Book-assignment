import { IMGPUSHARRAY, IMGPUSHID } from "../contants/contants"

export const pushId = (data) => {
    return {
        type: IMGPUSHID,
        payload: data
    }
}
export const pushArray = (data) => {
    return {
        type: IMGPUSHARRAY,
        payload: data
    }
}