
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="min-h-80 bg-black mt-20 text-white ">
       <div className="max-w-7xl mx-auto">
            <div className="flex pt-10 justify-between">
                <div className="flex gap-20">
                    <ul>
                        <li className="mb-3">Фіз. особам</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Контакти</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Установка</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Доставка та оплата</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Гарантія та сервіс</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Вакансії</Link></li>
                    </ul>
                    <ul>
                        <li>Юр. особам</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Виробники</Link></li>
                    </ul>
                    <ul>
                        <li>Каталоги</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Брошура</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Juventa</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Botticelli</Link></li>
                    </ul>
                </div>

                <div className="flex gap-20">
                    <div className="font-thin">
                        <p>Телефон:(000) 000-00-00,<br></br>(111) 111-11-11,(222) 222-22-22</p>
                        <br />
                        <p>Email:randomemail@gmail.com</p>
                        <br />
                        <p>Адреса: тут має бути адреса</p>
                    </div>
                    <div>
                        <p>Ми в соцмережах</p>
                        <div className="flex gap-5 mt-20">
                            <Image alt="" width={30} height={30} src="/icons8-telegram-app.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-instagram.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-facebook.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-twitter.svg"></Image>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-16 flex justify-between font-thin">
                <div>Меблі для ванної інтернет магазин <span className="font-normal">SANTEHVAN</span> ©2024</div>
                <div>Представник українських виробників меблів для ванної:</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer