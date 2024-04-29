import { Container, Form, Section, Ingredients, Description } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { DishItem } from "../../components/DishItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
  const [image, setImage] = useState(null)

  const [name, setName] = useState("")

  const [category, setCategory] = useState("snack")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [price, setPrice] = useState("")

  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])

    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {
    if(!image) {
      return alert("Você não inseriu uma imagem para o prato.")
    }

    if(!name) {
      return("Informe um nome para o prato.")
    }

    if(ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente.")
    }

    if(newIngredient) {
      return alert(" Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar.");
    }

    if(!price) {
      return alert("Adicione o preço do prato.")
    }

    if(!description) {
      return alert("Adicione uma descrição para o prato.")
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", name)
    formData.append("category", category)
    formData.append("ingredients", JSON.stringify(ingredients))
    formData.append("price", price)
    formData.append("description", description)

    try {
      await api.post("/dishes", formData)
      alert("Prato criado com sucesso!")
      handleBack()
    } catch {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o prato.");
      }
    }
  }

  return(
    <Container>
      <Header/>
       
       <main>
        <Link to="/">
          <MdOutlineKeyboardArrowLeft/>
          voltar
        </Link>

        <h2>Adicionar Prato</h2>

        <Form>
          <Section>
            <div>
              <span>Imagem do prato</span>
              <label htmlFor="">
                <FiUpload/>
                Selecione imagem
                <input
                  type="file"
                  onChange={e => setImage(e.target.files[0])}
                />
              </label>
            </div>

            <div>
              <span>Nome</span>

              <input
                type="text"
                placeholder="Ex: Salada"
                className="large"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <span>Categoria</span>

              <select defaultValue="snack" onChange={e => setCategory(e.target.value)}>
                <option value="snack">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Drink</option>
              </select>
            </div>
          </Section>

          <Ingredients>
            <div>
              <span>Ingredientes</span>
              <div>
                {
                  ingredients.map((ingredient, index) => (
                    <DishItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <DishItem 
                  isnew 
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                  value={newIngredient}
                />
              </div>
            </div>

            <div>
              <span>Preço</span>
              <input
                type="text"
                placeholder="R$ 10,99"
                className="price"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </Ingredients>

          <Description>
            <span>Descrição</span>

            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </Description>

          <Button
            title="Salvar"
            onClick={handleNewDish}
          />
        </Form>
       </main>

      <Footer/>
    </Container>
  )
}