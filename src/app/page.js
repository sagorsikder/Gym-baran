import { Inter } from '@next/font/google'
import Header from 'Components/Header/Header'
import Body from 'Components/Body/Body'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    </main>
  )
}
