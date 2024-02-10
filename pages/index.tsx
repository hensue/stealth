import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../contexts/ContextProvider'
import styles from '../styles/Home.module.css'
import { Drive1, Drive2, file } from '../data/data'
const Home: NextPage = () => {
  const {preview, setPreview} = useStateContext()
  return (
    <div className='flex'>
      <div className={`flex min-h-[90vh] ${preview ? "w-[75%]": "w-full"}`}>
        <div className='inline w-full min-w-[600px] '>
          {
            // console.log(item)
            Drive2.map((item: file, index:Number) => {
              if (item.type == "text") {
                // console.log(item)
                return (
                  <div className='inline-block text-center w-[90px] h-[90px] m-[10px] '>
                    <Image height={90} width={90} key ={`${item.name}+${index}+${item.type}`} src="/icon-file.png" className='w-[100%]' />
                    <p className='text-sm'>{item.name}</p>
                  </div>
                )
              }
              if (item.type == "movie") {
                // console.log(item)
                return (
                  <div className='text-center inline-block w-[90px] m-[10px]  h-[90px]'>
                    <Image height={90} width={90} key = {`${item.name}+${index}+${item.type}`} src="/icon-movie.png" className='w-[100%]' />
                    <p className='text-sm'>{item.name}</p>
                  </div>
                )
              }
              if (item.type == "json") {
                // console.log(item)
                return (
                  <div className='text-center w-[90px] inline-block m-[10px]  h-[90px]'>
                    <Image height={90}width={90} key = {`${item.name}+${index}+${item.type}`} src="/icon-json.png" className='w-[100%]' />
                    <p className='text-sm'>{item.name}</p>
                  </div>
                )
              }
              if (item.type == "folder") {
                // console.log(item)
                return (
                  <div className='text-center w-[90px] m-[10px] inline-block h-[90px]'>
                    <Image  height={90} width={90} key = {`${item.name}+${index}+${item.type}`} src="/icon-folder.png" className='w-[100%]' />
                    <p className='text-sm'>{item.name}</p>
                  </div>
                )
              }
            })
          }
        </div>
        <div className='fixed bottom-0 w-full h-[30px] flex items-center pl-[20px] border-t border-solid border-1 border-gray-500'>
          <Image  width={15} height={15} key = "forDevelopment1" src="/icon-folder.png" className='w-[15px] mr-[10px]' />
          <p className='text-sm text-[gray]'>{`E : >`}</p>
        </div>
      </div>
      <div className={`min-h-[90vh] ${preview ? "w-[25%]": "hidden"}`}>
        <Image  width="100%" height="100%" key = "forDevelopment" src='/preview_img.png' className='w-full p-5 h-[35%]'/>
        <div className='preview_content rounded-xl bg-[#3f4563] h-[65%] flex items-center justify-center'>
          <p>Nothing selected</p>
        </div>
      </div>
    </div>
  )
}

export default Home
