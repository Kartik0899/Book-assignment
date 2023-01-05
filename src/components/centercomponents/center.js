import React, { useEffect } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineEye } from 'react-icons/ai';
import { GiVintageRobot } from 'react-icons/gi';

const CenterComponents = ({ currImg, settingCurrArr }) => {

    const addNew = () => {
        if (currImg) settingCurrArr(currImg);
        console.log(currImg);
    }
    useEffect(() => {

    }, [currImg])


    return (
        <div className='h-full w-[33%] flex flex-col justify-center items-center'>
            {
                currImg == null || currImg == undefined ? null :
                    <div className='h-[50%] w-full flex justify-center items-center bg-auto bg-no-repeat bg-center border border-black'>
                        <img src={currImg} alt="" />
                    </div>
            }
            <div className='h-[20%] w-full flex flex-row-reverse justify-between items-center flex-wrap'>
                <div className='border cursor-pointer flex justify-center items-center px-4 py-2 bg-green-700 text-white rounded-full' onClick={() => addNew()}> <GrAddCircle className='mr-2' />Add New Page</div>
                <div className='border-2 cursor-pointer flex justify-center items-center px-4 py-2 border-green-700 bg-white text-green-600 rounded-full font-semibold'> <AiOutlineEye className='mr-2' />Book Review</div>
                <div className='border cursor-pointer flex justify-center items-center px-4 py-2 bg-yellow-600 text-white rounded-full'><GiVintageRobot className='mr-2' />Help Me</div>
            </div>
        </div>
    )
}

export default CenterComponents;