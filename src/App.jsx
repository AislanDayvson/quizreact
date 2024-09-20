import React from 'react'
import Radio from './Form/Radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
  {
    pergunta: 'Qual hook é usado para gerenciar estados em componentes funcionais?',
    options: ['useState()', 'useEffect()', 'useContext()'],
    resposta: 'useState()',
    id: 'p5',
  },
  {
    pergunta: 'Qual hook é utilizado para realizar efeitos colaterais em componentes?',
    options: ['useState()', 'useEffect()', 'useMemo()'],
    resposta: 'useEffect()',
    id: 'p6',
  },
  {
    pergunta: 'Qual hook permite memoizar valores derivados de cálculos pesados?',
    options: ['useCallback()', 'useMemo()', 'useReducer()'],
    resposta: 'useMemo()',
    id: 'p7',
  },
  {
    pergunta: 'Qual método podemos usar para renderizar listas em JSX?',
    options: ['[].forEach()', '[].map()', '[].filter()'],
    resposta: '[].map()',
    id: 'p8',
  },
  {
    pergunta: 'O que é necessário para passar dados de um componente pai para um filho?',
    options: ['Hooks', 'Props', 'State'],
    resposta: 'Props',
    id: 'p9',
  },
  {
    pergunta: 'Qual hook é usado para acessar o valor de referências diretamente no DOM?',
    options: ['useRef()', 'useReducer()', 'useContext()'],
    resposta: 'useRef()',
    id: 'p10',
  },
];


const App = () => {

  const [responses, setResponses] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: ''
  })

  const [slide, setSlide] = React.useState(0)
  const [finalResult, setFinalResult] = React.useState(null)

  const handleChange = ({target}) => {
    setResponses({...responses, [target.id]: target.value})
  }

  const result = () =>{
    const corrects = perguntas.filter(({id, resposta}) => responses[id] === resposta)
    setFinalResult(`Você acertou ${corrects.length} de ${perguntas.length}`)
    console.log(corrects)
  }

  const handleClick =  () =>{
    if(slide < perguntas.length - 1){
      setSlide(slide + 1)
    } else{
      setSlide(slide + 1)
      result()
    }

  }


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas.map((response, index) => (
        <Radio active={slide === index} key={response.id} value={responses[response.id]} onChange={handleChange} {...response}/>
      ))}
      {finalResult ? <p>{finalResult}</p> : <button onClick={handleClick}>Próxima</button>}
    </form>
  )
}

export default App