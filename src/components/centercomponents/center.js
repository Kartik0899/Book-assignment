import React, { useEffect, useRef, useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineEye } from 'react-icons/ai';
import { GiVintageRobot } from 'react-icons/gi';
import EmojiPicker from "emoji-picker-react";

const CenterComponents = ({ currImg, settingCurrArr }) => {

    const ref = useRef()
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [input, setInput] = useState();

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the emoji menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    const addNew = () => {
        if (currImg) settingCurrArr(currImg);
        console.log(currImg);
    }
    useEffect(() => {

    }, [currImg])

    function onClick(emojiData, event) {
        setSelectedEmoji(emojiData.emoji);
    }

    return (
        <div className='h-full w-[33%] flex flex-col justify-center items-center relative'>
            <div className='w-full flex justify-start items-start' ref={ref}>
                <input
                    className=" bg-transparent border-black border-b-2 w-[33%] py-1 px-4 leading-tight absolute top-[25%] left-6 z-20" type="text" placeholder="Start typing here"
                    value={selectedEmoji}
                    onChange={(e) => setSelectedEmoji(e.target.value)}
                    onClick={() => setIsMenuOpen(oldState => !oldState)}
                />
                {
                    isMenuOpen && (
                        <EmojiPicker onEmojiClick={onClick}
                            height={350} width={350}
                            // autoFocusSearch={true}
                        />
                    )
                }
            </div>
            {
                currImg == null || currImg == undefined ? null :
                    <div className='h-[50%] w-full flex justify-center items-center bg-auto bg-no-repeat bg-center border border-black z-10'>
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
