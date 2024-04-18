import Link from "next/link"
import Image from "next/image"
import CategoryCard from "../cards/CategoryCard"

const Categories = () => {
  return (
    <section className="mt-56">
        <div className="flex justify-between items-center">
          <div className="flex flex-1 items-center gap-2">
            <h2 className="text-heading2-semibold">Категорії товарів</h2>
            <Image src="/assets/thin-right-arrow.svg" width={32} height={32} alt="arrow-right" className="mt-1"/>
          </div>
            <Link href='' className="Underline drop-shadow-text-blue">Показати всі</Link>
        </div>
        <div className="flex gap-5 bordermt-10 mt-10">
            <CategoryCard label="Меблі для ванної" pageLink=" " imageSrc="/tymba.png"/>
            <CategoryCard label="Житлові меблі" pageLink=" " imageSrc="/komod.png"/>
            <CategoryCard label="Дитячі меблі" pageLink=" " imageSrc="/krovatka.png"/>
        </div>
    </section>
  )
}

export default Categories