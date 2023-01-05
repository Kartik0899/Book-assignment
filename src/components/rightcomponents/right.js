import React from 'react';
import { BiSearch } from 'react-icons/bi';
const RightComponents = ({ replaceCurrArr, settingCurrImg, settingCurrentImgType, settingCurrArr, currImg, currentImageType }) => {
    function imgOnClick(imgname) {

        // console.log(currentImageType);
        if (currentImageType == 'left') {
            replaceCurrArr(currImg, imgname);
            settingCurrImg(imgname, 'right');
        }
        else {
            settingCurrImg(imgname, 'right');
        }
    }

    return (
        <div className='h-full w-[23%] flex justify-center items-center'>
            <div className="bg-white shadow-lg rounded-lg">
                <div className='flex justify-between items-center w-[90%] my-3 mx-auto'>
                    <div>Change Background</div>
                    <div className='bg-blue-200 p-1 rounded-lg'><BiSearch /></div>
                </div>
                <div className="relative w-[90%] mx-auto my-2 ">
                    <select className="w-full p-2.5 text-white bg-indigo-900 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                        <option>Imagination</option>
                        <option>Laravel 9 with React</option>
                        <option>React with Tailwind CSS</option>
                        <option>React With Headless UI</option>
                    </select>
                </div>
                <div className="h-full w-[90%] mx-auto my-2">
                    <div className='flex justify-center items-center m-2'>

                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://tinyjpg.com/images/social/website.jpg" alt="" onClick={() => imgOnClick('https://tinyjpg.com/images/social/website.jpg')} />

                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://wallpaperaccess.com/full/4723250.jpg" alt="" onClick={() => imgOnClick('https://wallpaperaccess.com/full/4723250.jpg')} />
                    </div>
                    <div className='flex justify-center items-center m-2'>
                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg" alt="" onClick={() => imgOnClick('https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg')} />
                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="" onClick={() => imgOnClick('https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg')} />
                    </div>
                    <div className='flex justify-center items-center m-2'>
                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://ik.imagekit.io/ikmedia/backlit.jpg" alt="" onClick={() => imgOnClick('https://ik.imagekit.io/ikmedia/backlit.jpg')} />
                        <img className='h-[8rem] w-[8rem] cursor-pointer m-1 border border-black' src="https://picsum.photos/125" alt="" onClick={() => imgOnClick('https://picsum.photos/125')} />
                    </div>
                </div>
                <div className='flex justify-center items-center h-10 w-[90%] my-2 mx-auto bg-green-700 rounded-br-3xl rounded-bl-3xl'>
                    <div className='text-white'>Upload A Custom Image</div>
                </div>
            </div>
        </div>
    )
}

export default RightComponents;