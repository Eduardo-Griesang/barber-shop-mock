import Banner from '@/Components/Banner'
import MenuBar from '@/Components/MenuBar'

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
