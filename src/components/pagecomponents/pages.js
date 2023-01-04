import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

const PagesComponents = ({ imgArr, settingCurrImg }) => {

    // console.log(imgArr);

    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.imageArray)
    // console.log(data);
    useEffect(() => {
        // console.log(imgArr);
    }, [imgArr])


    return (
        <div className='h-full w-[13%] flex justify-center items-center border'>
            <div className='h-[70%] w-full flex flex-col justify-start items-center border-2'>
                {
                    imgArr == null || imgArr == undefined || imgArr.length == 0 ? null :
                        imgArr.map((item, index) => {
                            return (
                                <div className='flex justify-start items-start m-2' key={index}>
                                    <img src={item} alt="" onClick={() => { settingCurrImg(item) }} />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default PagesComponents;