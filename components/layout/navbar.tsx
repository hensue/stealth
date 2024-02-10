import React from 'react'
import { AiOutlineMenu, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineFolderAdd
  ,AiOutlineAppstore, AiOutlineGroup, AiOutlineGlobal, AiOutlineKey, AiOutlineTag   
} from 'react-icons/ai'
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { BsSliders, BsKey } from "react-icons/bs";
import { useStateContext } from '../../contexts/ContextProvider'
import NavItem from '../common/NavItem';

function Navbar(props: any) {
  const { isSidebar, setIsSidebar, setPreview, preview } = useStateContext()

  return (
    <div className='flex items-center justify-between w-full sticky top-0 py-1 px-3 text-xl text-current-color bg-main-bg dark:bg-main-dark-bg border-b border-solid border-[#343333]'>
      <div className='flex items-center'>
        <NavItem
          type='button'
          className='p-3 hover:text-white'
          onClick={() => {
            setIsSidebar(!isSidebar)
          }}
        >
          <AiOutlineMenu />
        </NavItem>

        <NavItem className='p-3 hover:text-white'>
          <AiOutlineArrowLeft />
        </NavItem>  
        <NavItem className='p-3 hover:text-white'>
          <AiOutlineArrowRight />
        </NavItem>  
        <NavItem className='ml-3 p-3 pt-1 pb-1 hover:text-white flex items-center border border-dashed border-current-color hover:border-white rounded-lg'>
          <AiOutlineFolderAdd /> <label className='text-sm pl-2'>C : \</label>
        </NavItem> 
      </div>

      <div className='flex items-center'>
        <NavItem className='p-2 hover:text-white hover:bg-current-color'>
          <AiOutlineAppstore />
        </NavItem>
        <NavItem className='p-2 mr-3 hover:text-white'>
          <AiOutlineGroup />
        </NavItem>
        <div className='h-[20px] border-l border-solid border-current-color pl-5'></div>
        <NavItem className='p-2 hover:text-white'>
          <AiOutlineGlobal />
        </NavItem>
        <NavItem className='p-2 hover:text-white'>
          <BsKey />
        </NavItem>
        <NavItem className='p-2 mr-3 hover:text-white'>
          <AiOutlineTag />
        </NavItem>
        <div className='h-[20px] border-l border-solid border-current-color pl-5'></div>
        <NavItem className='p-2 hover:text-white'>
          <BsSliders />
        </NavItem>
        <NavItem className='p-2 ml-1 hover:text-white'
          onClick={(e:any) => {
            setPreview(!preview)
          }}
        >
          <BsLayoutSidebarReverse />
        </NavItem>
      </div>
    </div>
  )
}

export default Navbar
