import React, { useState } from 'react'
import { useStateContext } from '../../contexts/ContextProvider'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { FiSettings } from 'react-icons/fi'
import { CSSProperties } from 'react'

type Style = CSSProperties & {
  '--currentColor': string
}

function Layout({ children }: any) {
  const {
    isSidebar,
    setIsSidebar,
    isSettingbar,
    setIsSettingbar,
    currentMode,
    currentColor,
  } = useStateContext()

  const cssVariables = {
    '--currentColor': currentColor,
  }

  return (
    <div
      style={cssVariables as Style}
      className={`relative bg-main-bg dark:bg-main-dark-bg ${currentMode}`}
    >
      <Sidebar />
      <div
        className={`h-screen w-full flex flex-col transition-width duration-300 ease-in-out ${isSidebar && 'sm:pl-52'
          }`}
      >
        <Navbar />
        <div className='h-full w-full bg-main-bg dark:bg-main-dark-bg dark:text-white'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
