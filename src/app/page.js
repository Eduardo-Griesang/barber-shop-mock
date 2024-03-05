import Banner from '@/Components/Banner'
import MenuBar from '@/Components/MenuBar'

export default function Home() {

  for( let i = 1; i <= 100; i++ ){
        if( i%3 === 0 && i%5 === 0 ){
          console.log("fizzbuzz" + i)
        } else if( i%5 === 0 ){
          console.log("buzz" + i)
        } else if ( i%3 === 0 ){
          console.log("fizz" + i)
        }
  }

  return (
    <main>
      <header className='h-screen bg-neutral-100'>
        <MenuBar />
        <Banner />
      </header>
    </main>
  )
}
