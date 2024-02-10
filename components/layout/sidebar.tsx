import Link from 'next/link'
import React, { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import ActiveLink from '../common/ActiveLink'
import { TbWorld } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";
import { IoDesktopOutline } from "react-icons/io5";
import { BsFolderPlus } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { CgHeart } from "react-icons/cg";;
import { CgTime } from "react-icons/cg";
import { CgStopwatch } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUnlockAlt } from "react-icons/fa";

interface Button {
  id: number;
  icon: JSX.Element;
  label: string;
}

function Sidebar(props: any) {
  const { isSidebar, setIsSidebar } = useStateContext()
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const selectButton = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const buttons: Button[] = [
    {
      id: 1,
      icon: <TbWorld color={selectedButton === 1 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Network',
    },
    {
      id: 2,
      icon: <FaRegFolder color={selectedButton === 2 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Home',
    },
    {
      id: 3,
      icon: <FiHardDrive color={selectedButton === 3 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Local Disk (C:)',
    },
    {
      id: 4,
      icon: <FiHardDrive color={selectedButton === 4 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Local Disk (D:)',
    },
    {
      id: 5,
      icon: <FiHardDrive color={selectedButton === 5 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Local Disk (E:)',
    },
    {
      id: 6,
      icon: <FiHardDrive color={selectedButton === 6 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />,
      label: 'Local Disk (F:)',
    },
  ];

  return (
    <div
      className={`sidebar dark:bg-secondary-dark-bg bg-white h-screen fixed top-0 left-0 overflow-auto shadow-xl transition-width duration-300 ease-in-out z-[1]  ${isSidebar ? 'w-full sm:w-52 opacity-100' : 'w-0 opacity-0'
        }`}
    >
      <div className='px-2 py-2'>
        <div className="relative">
          <select className="block text-white appearance-none w-full bg-[#242430] border border-gray-700 hover:border-gray-400 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="DS">DS</option>
            <option value="New Library">New Library</option>
            <option value="Manage Library">Manage Library</option>
            <option value="Lock">Lock</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 7l3-3 3 3z" /></svg>
          </div>
        </div>
        <div key={14} className={`pl-4 py-1 mt-2 rounded flex items-center ${selectedButton === 14 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
          {<CgStopwatch color={selectedButton === 14 ? '#37A3FE' : '#434761'} fontSize={18} className='mr-2' />}
          <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(14)}>
            {"Overview"}
          </button>
        </div>
        <div key={13} className={`pl-4 py-1 rounded flex items-center ${selectedButton === 13 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
          {<CgTime color={selectedButton === 13 ? '#37A3FE' : '#434761'} fontSize={18} className='mr-2' />}
          <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(13)}>
            {"Recents"}
          </button>
        </div>
        <div key={11} className={`pl-4 py-1 rounded flex items-center ${selectedButton === 11 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
          {<CgHeart color={selectedButton === 11 ? '#37A3FE' : '#434761'} fontSize={18} className='mr-2' />}
          <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(11)}>
            {"Favorites"}
          </button>
        </div>
        <div className={`justify-between flex items-center ${selectedButton === 12 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
          <div key={12} className={`pl-4 py-1 rounded flex items-center`}>
            {<FiPenTool color={selectedButton === 12 ? '#37A3FE' : '#434761'} fontSize={18} className='mr-2' />}
            <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(12)}>
              {"Labels"}
            </button>
          </div>
          <div className='text-[#A8A8B0] text-[10px] mr-[3px] border rounded-full px-1'>0</div>
        </div>

        <div className='mt-3'>
          <div>
            <span className='text-sm text-gray-400 font-semibold'>Local</span>
          </div>
          {buttons.map((button) => (
            <div key={button.id} className={`pl-4 py-1 rounded flex items-center ${selectedButton === button.id ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
              {button.icon}
              <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(button.id)}>
                {button.label}
              </button>
            </div>
          ))}
          <div className='pt-2'>
            <button className='text-sm w-full text-gray-500 font-semibold'>See less</button>
          </div>
        </div>
        <div className='mt-2'>
          <div>
            <span className='text-sm text-gray-400 font-semibold'>Devices</span>
          </div>
          <div key={7} className={`pl-4 py-1 rounded flex items-center ${selectedButton === 7 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
            {<IoDesktopOutline color={selectedButton === 7 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />}
            <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(7)}>
              {"DESKTOP-PN1CE"}
            </button>
          </div>

          <div className='pt-3'>
            <div key={9} className={`${selectedButton === 9 ? 'bg-[#20232A]' : ''}`}>
              <button className={`className='text-sm py-1 border border-dashed border-gray-600 rounded-sm w-full text-gray-500 font-semibold`} onClick={() => selectButton(9)}>
                {"Add Device"}
              </button>
            </div>
            {/* <button className='text-sm py-1 border border-dashed border-gray-600 rounded-sm w-full text-gray-500 font-semibold'>Add Device</button> */}
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <span className='text-sm text-gray-400 font-semibold'>Locations</span>
          </div>
          <div key={8} className={`pl-4 py-1 rounded flex items-center ${selectedButton === 8 ? 'bg-[#20232A] border border-[#2499FF]' : ''}`}>
            {<BsFolderPlus color={selectedButton === 8 ? '#37A3FE' : '#434761'} fontSize={20} className='mr-2' />}
            <button className={`text-sm text-gray-400 font-semibold`} onClick={() => selectButton(8)}>
              {"Pictures"}
            </button>
          </div>
          <div className='pt-3'>
            <div key={10} className={`${selectedButton === 10 ? 'bg-[#20232A]' : ''}`}>
              <button className={`className='text-sm py-1 border border-dashed border-gray-600 rounded-sm w-full text-gray-500 font-semibold`} onClick={() => selectButton(10)}>
                {"Add Location"}
              </button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <span className='text-sm text-gray-400 font-semibold'>Tags</span>
          </div>
          <div className='pl-4 pt-1 flex items-center'>
            <FaCircle color='#DB1495' fontSize={15} className='mr-2' />
            <span className='text-sm text-gray-400 font-semibold'>Keepsafe</span>
          </div>
          <div className='pl-4 pt-1 flex items-center'>
            <FaCircle color='#545267' fontSize={15} className='mr-2' />
            <span className='text-sm text-gray-400 font-semibold'>Hidden</span>
          </div>
          <div className='pl-4 pt-1 flex items-center'>
            <FaCircle color='#234D41' fontSize={15} className='mr-2' />
            <span className='text-sm text-gray-400 font-semibold'>Projects</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
