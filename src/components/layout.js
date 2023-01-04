import React, { useEffect, useState } from 'react'
import CenterComponents from './centercomponents/center'
import PagesComponents from './pagecomponents/pages'
import RightComponents from './rightcomponents/right'

const Layout = () => {
    let counter = 0;
    const [currImg, setCurrImg] = useState('');
    const [imgArr, setImgArr] = useState([]);

    function settingCurrImg(str) {
        counter++;
        setCurrImg(str);
    }
    function settingCurrArr(str) {
        let tempArr = imgArr;
        tempArr.push(str);
        counter++;
        setImgArr(tempArr);
        // console.log(imgArr);
    }


    useEffect(() => {
        console.log(counter);
    }, [counter])

    return (
        <div className='flex justify-evenly items-center h-screen bg-blue-200'>
            <h1 onClick={() => counter++}>sfjhdj</h1>
            <h1>{counter}</h1>
            <PagesComponents imgArr={imgArr} />
            <CenterComponents settingCurrArr={settingCurrArr} currImg={currImg} />
            <RightComponents settingCurrImg={settingCurrImg} />
        </div>
    )
}

export default Layout;