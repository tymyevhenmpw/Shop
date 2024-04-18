import Image from "next/image"
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import ProductCard from "../cards/ProductCard"

const Latest = () => {
  
  return (
    <section className="max-w-screen-2xl">
        <h2 className="text-heading2-semibold mb-20 text-center drop-shadow-text-blue">Новинки</h2>
        <Carousel className="w-ful mx-auto">
          <CarouselContent className="-ml-1 flex flex-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 max-md:basis-1/4 lg:basis-1/3">
                <div className="p-1">
                      <ProductCard/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </section>
  )
}

export default Latest