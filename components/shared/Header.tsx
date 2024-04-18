

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"



const Header = () => {
 

  return (
    <header className="flex justify-between max-w-7xl mx-auto items-center pt-10">
    {/* <Image src='/banner.png' width={150} height={10} alt="" ></Image> */}
    <p className="font-bold text-[18px]">SANTEHVAN</p>
    <nav className="flex items-center gap-10">
        <Link href='/' className="Underline">Головна</Link>
        <Link href='' className="Underline">Каталог</Link>
        <Link href='' className="Underline">Контакти</Link>
        <Link href='' className="Underline">Доставка та оплата</Link>
        <Link href='' className="Underline">Гарантія та сервіси</Link>
        <Link href='/login'><Button>Увійти</Button></Link>
    </nav>
    </header>
  )
}

export default Header