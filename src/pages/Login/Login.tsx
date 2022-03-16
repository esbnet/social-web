import { Container } from './styles';

export function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <button className="loginButton">Entrar</button>
            <span className='loginForgot'>Esqueci a senha</span>
            <button className="loginRegisterButton">Criar conta de acesso</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
