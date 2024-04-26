import { Container, Form } from "./styles";
import logo from "../../assets/favicon.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn }= useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>
      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h2>Faça login</h2>

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
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma Conta
        </Link>
      </Form>
    </Container>
  )
}