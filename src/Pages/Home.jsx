import { Link } from 'react-router-dom';
import Menu from '../Componentes/Menu'

const Home = ()=>{
    return (
      <div>
          <Menu/>
          <h1>Home</h1>
          <p>Eu sou Arine Daltro, sou pedagoga, sou apaixonada por educação.</p>
          <p>Recentemenete descobri uma nova paixão: a tecnologia e o quanto ela pode mudar a vida das pessoas. Desde então tenho me esforçado para aprender a programar.</p>

          {/* <Link class="redes-sociais__link" to="https://www.facebook.com/arine.santana.3">
            Facebook
          </Link>
          <Link class="redes-sociais__link" to="https://www.linkedin.com/in/arine-daltro-b02606170/">
            LinkedIn
          </Link>
          <Link class="redes-sociais__link" to="https://twitter.com.br">
            Twitter
          </Link>
          <Link class="redes-sociais__link" to="https://github.com/arine-daltro">
            Github
          </Link> */}
     </div>
    );
  }
  
  export default Home;