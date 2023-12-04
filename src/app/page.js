import Banner from '@/Components/Banner'
import MenuBar from '@/Components/MenuBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className='h-screen bg-neutral-100'>
        <MenuBar />
        <Banner />
      </header>
    </main>
  )
}
