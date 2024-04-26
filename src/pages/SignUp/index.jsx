import { Container, Form } from "./styles";
import logo from "../../assets/favicon.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos.")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

  return(
    <Container>
      <div>
        <img src={logo} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h2>Crie uma conta</h2>

        <label htmlFor="name">
          Nome
          <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id="name"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}