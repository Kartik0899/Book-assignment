import React from 'react';
import { useSelector } from 'react-redux';
import { IMGPUSHARRAY, IMGPUSHID } from "../contants/contants";

let globalData;
// function globalFunction() {
//     globalData = useSelector((state) => state.imageArray)
// }
// globalFunction()

// const globalFunction = () => {
//     globalData = useSelector((state) => state.imageArray)
//     return (
//         <div>globalFunction</div>
//     )
// }

// globalFunction();

let initialState = { currentImgId: '', imageArray: [] }
let imgArray = [];

export const midReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMGPUSHID:
            return { ...state, currentImgId: action.payload }
            break;
        case IMGPUSHARRAY:
            return { ...state, imageArray: [...initialState.imageArray, action.payload] }
            break;
        default:
            return state;
    }
}

export const leftReducer = (state = imgArray, action) => {
    switch (action.type) {
        case IMGPUSHARRAY:
            return imgArray.push(action.payload);
            break;
        default:
            return state;
    }
}

function replaceItem(data) {
    // console.log('upper', initialState.imageArray);
    // let tempArr = globalData.filter((arrEle, index) => {
    //     return arrEle != data;
    // })
    // console.log('mid', tempArr);
    // tempArr.push(data);
    // console.log('last', tempArr);
    // return tempArr;

    // initialState.imageArray
}