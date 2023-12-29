import './List.css'

export function List({nome,id}){
    
    function deletar(id){


    fetch('http://localhost/lista/src/php/delete.php',{
      method:'POST',
      //configura o cabeçalho como um json
      headers:{
        'Content-Type': 'application/json' 
      },
      body:JSON.stringify({id})
    })
  }
    
    return(
        <div className="lista">
        {nome}
        <a href="#" onClick={() => deletar(id)}>x</a>
        </div>
    )
}
