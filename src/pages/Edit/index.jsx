import { Container, Form, Section, Ingredients, Description } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { DishItem } from "../../components/DishItem";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Edit() {
  const [data, setData] = useState(null)

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  function handleAddIngredient() {
    if(newIngredient ==="") {
      return
    }

    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleDishEdit() {
    try {
      const editedDish = {
        name: name,
        category: category,
        ingredients: ingredients,
        price: price,
        description: description
      }

      await api.put(`/dishes/${params.id}`, editedDish)
      
      if(fileName) {
        const formData = new FormData()
        formData.append("image", image)

        await api.put(`/dishes/${params.id}`, formData)
      } 

      alert("Prato editado com sucesso!")
      navigate("/")

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível editar o prato.")
      }
    }
  }

  function handleChangeImage(e) {
    const file = e.target.files[0]
    setImage(file)
    setUpdatedImage(file)
    setFileName(file.name)
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente excluir o prato?")

    if(confirm) {
      try {
        await api.delete(`dishes/${params.id}`)
        navigate("/")
      } catch(error) {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível excluir o prato.")
        }
      } 
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)
        console.log(response.data)
      } catch(error) {
        console.error(error)
      }
    }

    fetchDish()
  }, [])

  useEffect(() => {
    if(data) {
      setFileName(data.image)
      setName(data.name)
      setCategory(data.category)
      setPrice(data.price)
      setDescription(data.description)

      const allIngredients = data.ingredients.map(ingredient => ingredient.name)
      setIngredients(allIngredients)
    }
  }, [data]) 

  return(
    <Container>
      <Header/>
       
       <main>
        <Link to="/">
          <MdOutlineKeyboardArrowLeft/>
          voltar
        </Link>

        <h2>Editar Prato</h2>

        <Form>
          <Section>
            <div>
              <span>Imagem do prato</span>
              <label htmlFor="">
                <FiUpload/>
                Selecione imagem
                <input
                  type="file"
                  onChange={handleChangeImage}
                />
              </label>
            </div>

            <div>
              <span>Nome</span>

              <input
                type="text"
                placeholder="Ex: Salada"
                className="large"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <span>Categoria</span>

              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="lunch">Refeição</option>
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
                />
              </div>
            </div>

            <div>
              <span>Preço</span>
              <input
                type="text"
                placeholder="R$ 10,99"
                className="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </Ingredients>

          <Description>
            <span>Descrição</span>

            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Description>

          <div className="buttons">
            <Button
              title="Salvar"
              onClick={handleDishEdit}
            />

            <Button
              title="Excluir Prato"
              className="delete"
              onClick={handleRemoveDish}
            />
          </div>
        </Form>
       </main>

      <Footer/>
    </Container>
  )
}