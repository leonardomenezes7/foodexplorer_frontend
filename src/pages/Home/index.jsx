import { Container, Dishes } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import homeImg from "../../assets/home.png"
import { DishCard } from "../../components/DishCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { MobileMenu } from "../../components/MobileMenu";

register()
import "swiper/css"
import "swiper/css/navigation"

export function Home() {
  const [slidesPerView, setSlidesPerView] = useState(4)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const data = [
    {
      id: "1", 
      image: "https://github.com/leonardomenezes7.png", 
      description: "descrição 1",
      price: "R$ 8,00",
      title: "Prato"
    },
    {
      id: "2", 
      image: "https://github.com/leonardomenezes7.png", 
      description: "descrição 2",
      price: "R$ 78,00",
      title: "Prato"
    },
    {
      id: "3", 
      image: "https://github.com/leonardomenezes7.png", 
      description: "descrição 3",
      price: "R$ 7,00",
      title: "Prato"
    },
    {
      id: "4", 
      image: "https://github.com/leonardomenezes7.png", 
      description: "descrição 4saddddddddddddddddddddddddddddddddddddddddd",
      price: "R$ 78,00",
      title: "Prato"
    },
    {
      id: "5", 
      image: "https://github.com/leonardomenezes7.png", 
      description: "descrição 5",
      price: "R$ 78,00",
      title: "Prato"
    },
  ]

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 300 && window.innerWidth < 340) {
        setSlidesPerView(1.2)
      }

      if(window.innerWidth > 370 && window.innerWidth < 420) {
        setSlidesPerView(1.4)
      }

      if(window.innerWidth > 425 && window.innerWidth < 700) {
        setSlidesPerView(1.6)
      }

      if(window.innerWidth > 750 && window.innerWidth < 1000) {
        setSlidesPerView(2.2)
      }

      if(window.innerWidth > 1020 && window.innerWidth < 1280) {
        setSlidesPerView(3.1)
      }

      if(window.innerWidth > 1400) {
        setSlidesPerView(3.8)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return(
    <Container>
      <Header 
        onOpenMenu={() => setMenuIsOpen(true)}
      />

      <MobileMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <main>
        <div className="hero">
          <img src={homeImg} alt="Foto de doces coloridos." />

          <div>
            <h2>Sabores inigualáveis</h2>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </div>

        <Dishes>
          <h3>Refeições</h3>

          <div>
            <Swiper
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {data.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <DishCard
                    image={dish.image}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dishes>

        <Dishes>
          <h3>Sobremesas</h3>

          <div>
            <Swiper
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {data.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <DishCard
                    image={dish.image}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dishes>

        <Dishes>
          <h3>Bebidas</h3>

          <div>
            <Swiper
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {data.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <DishCard
                    image={dish.image}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dishes>
      </main>

      <Footer/>
    </Container>
  )
}