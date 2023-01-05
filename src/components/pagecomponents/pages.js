import React, { useEffect } from 'react';

const PagesComponents = ({ imgArr, settingCurrImg, settingCurrentImgType }) => {

    useEffect(() => {
    }, [imgArr])


    return (
        <div className='h-full w-[13%] flex justify-center items-center'>
            <div className='h-[70%] w-full flex flex-col justify-start items-center scrollbar overflow-auto border border-black'>
                {
                    imgArr == null || imgArr == undefined || imgArr.length == 0 ? null :
                        imgArr.map((item, index) => {
                            return (
                                <div className='flex justify-start items-start m-2' key={index}>
                                    <img src={item} alt="" onClick={() => {
                                        settingCurrImg(item, 'left');
                                    }} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default PagesComponents;


{/* imgArr == null || imgArr == undefined || imgArr.length == 0 ? null :
                        imgArr.map((item, index) => {
                            return (
                                <div className='flex justify-start items-start m-2' key={index}>
                                    <img src={item} alt="" onClick={() => { settingCurrImg(item) }} />
                                </div>
                            )
                        }) */}