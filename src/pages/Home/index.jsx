import { Container, Dishes } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import homeImg from "../../assets/home.png"
import { DishCard } from "../../components/DishCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { MobileMenu } from "../../components/MobileMenu";
import { FiSearch } from "react-icons/fi";

register()
import "swiper/css"
import "swiper/css/navigation"
import { api } from "../../services/api";
import { Input } from "../../components/Input";

export function Home() {
  const [slidesPerView, setSlidesPerView] = useState(4)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [dishes, setDishes] = useState({ snacks: [], drinks: [], desserts: [] })
  const [search, setSearch] = useState("")

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

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?name=${search}`)
      const snacks = response.data.filter(dish => dish.category === "snack")
      const drinks = response.data.filter(dish => dish.category === "drink")
      const desserts = response.data.filter(dish => dish.category === "dessert")

      setDishes({ snacks, drinks, desserts })
    }

    fetchDishes()
  }, [search])

  return(
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)}>
        <Input 
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={e => setSearch(e.target.value)}
        />
      </Header>
      

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
              {
                dishes.snacks.map(dish => (
                  <SwiperSlide>
                    <DishCard
                      data={dish}
                      key={dish.id}
                    />
                  </SwiperSlide>
                ))
              }
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
               {
                dishes.desserts.map(dish => (
                  <SwiperSlide>
                    <DishCard
                      data={dish}
                      key={dish.id}
                    />
                  </SwiperSlide>
                ))
              }
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
               {
                dishes.drinks.map(dish => (
                  <SwiperSlide>
                    <DishCard
                      data={dish}
                      key={dish.id}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Dishes>
      </main>

      <Footer/>
    </Container>
  )
}