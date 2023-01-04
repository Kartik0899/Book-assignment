import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { pushArray } from '../../actions/action';
// import { useDispatch } from 'react-redux';

const CenterComponents = ({ currImg, settingCurrArr }) => {
    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.currentImgId)
    // console.log(data);

    const addNew = () => {
        // console.log(data1);
        if (currImg) settingCurrArr(currImg);
        console.log(currImg);
    }
    useEffect(() => {

    }, [currImg])


    return (
        <div className='h-full w-[23%] flex flex-col justify-center items-center border'>
            {
                currImg == null || currImg == undefined ? null :
                    <div className='h-[50%] w-full flex justify-center items-center border-2 bg-auto bg-no-repeat bg-center'>
                        <img src={currImg} alt="" />
                    </div>
            }
            <div className='h-[20%] w-full border flex flex-row-reverse justify-evenly items-center'>
                <div className='border cursor-pointer' onClick={() => addNew()}>Add New</div>
                <div className='border cursor-pointer'>Book Review</div>
                <div className='border cursor-pointer'>Help Me</div>
            </div>
        </div>
    )
}

export default CenterComponents;