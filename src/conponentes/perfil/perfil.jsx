
const Perfil= ()=>{

    const usuario = {
        nome: 'beion',
        avatar: 'https://github.com/bensfull.png'
    }

    return(
        <>
        <img src={usuario.avatar} alt="" />
        <h1>{usuario.nome}</h1>
        </>
    )
}

export default Perfil