import Colaborador from '../Calaborador'
import './Time.css'

const Time = (props) => {
    const bg = { backgroundColor: props.corSecundaria }
    const bc = { borderColor: props.corPrimaria }

    return (
        props.colaboradores.length > 0 ? <section className='time' style={bg}>
            <h3 style={bc}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )
}

export default Time