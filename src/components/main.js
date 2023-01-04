import React, { useEffect, useState } from 'react'
import CenterComponents from './centercomponents/center'
import PagesComponents from './pagecomponents/pages'
import RightComponents from './rightcomponents/right'

const Main = () => {
    // let counter = 0;
    const [currImg, setCurrImg] = useState('');
    const [imgArr, setImgArr] = useState([]);
    const [counter, setCounter] = useState(0);

    function settingCurrImg(str) {
        setCurrImg(str);
        setCounter(counter + 1)
    }
    function settingCurrArr(str) {
        let tempArr = imgArr;
        tempArr.filter((item) => {
            return item != str;
        })
        tempArr.push(str);
        setImgArr(tempArr);
        setCounter(counter + 1)
    }


    useEffect(() => {
        console.log(counter);
    }, [counter])

    return (
        <div className='flex justify-evenly items-center h-screen bg-blue-200'>
            {/* <h1 onClick={() => setCounter(counter + 1)}>sfjhdj</h1>
            <h1>{counter}</h1> */}
            <PagesComponents settingCurrImg={settingCurrImg} imgArr={imgArr} />
            <CenterComponents settingCurrArr={settingCurrArr} currImg={currImg} />
            <RightComponents settingCurrImg={settingCurrImg} />
        </div>
    )
}

export default Main;