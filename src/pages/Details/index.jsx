import { Container, Items } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api"; 
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const [data, setData] = useState(null)
  
  const { user } = useAuth()
  const params = useParams()

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  const navigate = useNavigate()

  function handleEdit(id) {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      setData(response.data)
    }

    fetchDish()
  }, [])

  return(
    <Container>
      <Header/>
      { data &&
        <main>
          <Link to="/">
            <MdOutlineKeyboardArrowLeft/>
            voltar
          </Link>

          <div>
            <img src={imageURL} alt="Foto do prato." />

            <Items>
              <h2>{data.name}</h2>

              <p>{data.description}</p>

              <section className="ingredients">
                {
                  data.ingredients.map(ingredient => (
                    <Ingredient 
                      title={ingredient.name}
                      key={String(ingredient.id)}
                    />
                  ))
                }
              </section>

              {
                user.role === USER_ROLE.ADMIN &&
                <Link to={`/edit/${data.id}`}>
                  <Button title="Editar Prato" onClick={() => handleEdit(data.id)}/>
                </Link>
              }

              {
                user.role === USER_ROLE.CUSTOMER &&
                <Link to="#">
                  <Button title={`Incluir - ${data.price}`}/>
                </Link>
              }
            </Items>
          </div>
        </main>
      }

      <Footer/>
    </Container>
  )
}