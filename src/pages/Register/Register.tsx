import { Container } from './styles';

export function Register() {
  return (
    <Container>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Neno Ladia</h3>
          <span className="loginDesc">
            Conecte-se com seus amigos e o mundo ao seu redor na NenoLandia
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Usuário" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <input placeholder="Confirme a Senha" className="loginInput" />
            <button className="loginButton">Cadastrar</button>
            <button className="loginRegisterButton">Entrar em um conta</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
