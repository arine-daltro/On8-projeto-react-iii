
import filmes from '../Services/dados'
import Menu from '../Componentes/Menu'

function Filmes(){
    return(
        <div>
            <Menu/>
             {filmes.map(filme =>
                <div key={filme.id}>
    
                    <img width="100" src={filme.capa} alt="capa do filme"/>
                    <h1>{filme.nome}</h1>
                    <h2>{filme.genero}</h2>
                </div>
            
            )} 
        </div>
    )
}


export default Filmes;