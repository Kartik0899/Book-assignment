import React, { useEffect, useState } from 'react'
import CenterComponents from './centercomponents/center'
import PagesComponents from './pagecomponents/pages'
import RightComponents from './rightcomponents/right'

const Main = () => {
    const [currImg, setCurrImg] = useState('');
    const [imgArr, setImgArr] = useState([]);
    const [counter, setCounter] = useState(0);

    const [currentImageType, setcurrentImageType] = useState("");

    function settingCurrentImgType(type) {
        setcurrentImageType(type);
        setCounter(counter + 1);
    }

    function settingCurrImg(str, type) {
        setCurrImg(str);
        setcurrentImageType(type);
        setCounter(counter + 1)
    }



    function settingCurrArr(str) {
        console.log("setting curr img");
        let tempArr = imgArr;

        let fl = [];
        if (tempArr.length == 0) {

        } else {
            fl = tempArr.filter(notEquals);
        }
        function notEquals(val) {
            return val != str;
        }

        fl.push(str);
        setImgArr(fl);
        setCounter(counter + 1);
    }

    function replaceCurrArr(currImg, imgname) {

        let tempArr = imgArr;

        let fl = [];
        if (tempArr.length == 0) {

        } else {
            fl = tempArr.filter(notEquals);
        }
        function notEquals(val) {
            return val != currImg;
            // return val != currImg && val != imgname;
            // if we want unique values in left section the uncomment the line
        }

        fl.push(imgname);
        setImgArr(fl);
        setCounter(counter + 1);
    }


    useEffect(() => {
    }, [counter])


    return (
        <div className='flex justify-evenly items-center h-screen bg-blue-200'>
            <PagesComponents settingCurrImg={settingCurrImg} imgArr={imgArr} settingCurrentImgType={settingCurrentImgType} />
            <CenterComponents settingCurrArr={settingCurrArr} currImg={currImg} />
            <RightComponents settingCurrImg={settingCurrImg} settingCurrentImgType={settingCurrentImgType} settingCurrArr={settingCurrArr} currImg={currImg} currentImageType={currentImageType} replaceCurrArr={replaceCurrArr} />
        </div>
    )
}

export default Main;