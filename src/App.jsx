import { useState,useEffect } from 'react'
import './App.css'
import { List } from './components/List'

function App() {
  const [item, setItem] = useState('')
  const [itens, setItems] = useState([])

  //pega o nome do item
  function pegaNome(e){
    setItem(e.target.value)
    
  }

  //Envia para o banco de dados
  function enviar (){
    fetch('http://localhost/lista/src/php/insert.php',{
      method:'POST',
      //configura o cabeçalho como um json
      headers:{
        'Content-Type': 'application/json' 
      },
      //converte o item para uma string para o ser incorporada no json
      body:JSON.stringify({item})
    })
    alert('item adicionado')
    document.querySelector('#input').value = ''

  }

  async function select (){
    const resposta = await fetch('http://localhost/lista/src/php/select.php');
  // Aguarda a conclusão da requisição e converte a resposta para o formato JSON
  const resultado = await resposta.json();

  //Atribui os retornos 
  setItems(resultado);

  } 

  useEffect(()=>{
    const intervalId = setInterval(select, 100);

    return () => clearInterval(intervalId);
  },[]);


  return (
    <div className='container'>
   
    <div className="form">
    <h2>Lista de compra</h2>
      <label htmlFor="">Nome</label>
      <input type="text" name="" id="input" onChange={pegaNome}/>
      <button onClick={enviar}>Cadastrar</button>
      <p>*cadastre itens a lista de compras</p>
    </div>

    <div className='cont_list'>
      <h2>itens adicionados</h2>
      
        {itens.map((item)=>(
          <List key={item.id} id={item.id} nome={item.nome}/>
        ))}
    </div>
    </div>
  )
}

export default App
