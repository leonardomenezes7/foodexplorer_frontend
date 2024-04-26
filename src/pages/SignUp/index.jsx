import { Container, Form } from "./styles";
import logo from "../../assets/favicon.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>
      <div>
        <img src={logo} alt="" />
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
          />
        </label>

        <label htmlFor="email">
          Email
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            id="email"
          />
        </label>

        <label htmlFor="password">
          Senha
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
          />
        </label>

        <Button
          title="Criar conta"
        />

        <a href="/">
          Já tenho uma conta
        </a>
      </Form>
    </Container>
  )
}