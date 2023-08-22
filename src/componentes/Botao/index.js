import './Botao.css'

const Botao = (props) => {
  return (
    //<button className='botao'>{ props.texto}</button> ou po de ser assim
    <button  className='botao'>
      {props.children}
    </button>
  )
}

export default Botao