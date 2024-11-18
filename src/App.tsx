import { useState } from "react"
import './App.css'

import logo from './assets/logo.png'

export default function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        "Acredite em si mesmo e todo o resto se encaixará. O primeiro passo é sempre acreditar.",
        "O sucesso não é sobre o que você tem, mas sobre o que você faz com o que tem.",
        "A maior motivação vem de dentro de você. Não espere pelo momento perfeito, crie-o.",
        "Se você quer algo que nunca teve, precisa estar disposto a fazer algo que nunca fez.",
        "Não espere por uma oportunidade, crie-a. O melhor momento para começar é agora.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "Sua atitude determina sua direção. Mantenha a mente positiva e tudo fluirá.",
        "Cada pequeno passo dado com coragem te aproxima do seu objetivo. Continue caminhando.",
        "A jornada pode ser difícil, mas o resultado valerá cada esforço. Persista!",
        "A única limitação que você tem é a que você coloca em si mesmo. Liberte-se!",
        "Acredite no seu potencial e lembre-se: grandes coisas começam com uma ideia ousada.",
        "Desafios existem para que você possa superar e crescer. Encare-os com confiança!",
        "Nada que vale a pena vem fácil. Lute, insista e nunca desista de seus sonhos.",
        "O sucesso não é definitivo, o fracasso não é fatal: o que conta é a coragem de continuar.",
        "O medo de falhar é a maior barreira para o sucesso. Acredite em si mesmo e arrisque-se.",
        "O maior erro que você pode cometer é não tentar. A única falha real é desistir.",
        "Se você quer mudar o mundo, comece mudando a si mesmo. O poder está dentro de você.",
        "Grandes coisas nunca vêm da zona de conforto. Saia dela e veja sua vida transformar.",
        "Não importa o quão devagar você vá, desde que não pare. Continue seguindo em frente.",
        "Não tenha medo de começar de novo. Cada novo começo é uma nova chance de fazer melhor.",
      ]
    },
    {
      id: 2,
      nome: 'Bom Dia',
      frases: [
        "Bom dia! Que este novo dia seja repleto de oportunidades e conquistas para você.",
        "Acorde com gratidão, pois o dia de hoje é uma nova chance para realizar seus sonhos.",
        "Bom dia! Que sua jornada hoje seja iluminada por sorrisos e boas energias.",
        "Cada amanhecer é uma nova chance de ser feliz. Bom dia e aproveite cada momento!",
        "Bom dia! Que o sol aqueça sua alma e o sorriso ilumine seu caminho.",
        "Que o dia de hoje traga tudo o que você mais deseja e mais um pouco. Bom dia!",
        "Bom dia! Que a esperança se renove em cada passo que você der hoje.",
        "Que o dia de hoje seja mais um capítulo incrível da sua história. Bom dia!",
        "Bom dia! Que sua manhã seja tão radiante quanto a sua energia.",
        "Aproveite o dia que nasce com o coração aberto para as novas possibilidades. Bom dia!",
        "Bom dia! Que a paz e a felicidade te acompanhem em cada passo hoje.",
        "O sol brilha para todos, mas especialmente para aqueles que acreditam em seus sonhos. Bom dia!",
        "Bom dia! Que este novo dia seja uma página em branco, pronta para ser escrita com alegria.",
        "Cada novo dia é uma oportunidade para ser melhor. Aproveite ao máximo! Bom dia!",
        "Bom dia! Hoje é o dia perfeito para dar o primeiro passo em direção aos seus objetivos.",
        "Que o dia de hoje seja leve, alegre e cheio de energia positiva. Bom dia!",
        "Bom dia! Que a luz do sol te inspire a buscar tudo o que é bom e justo.",
        "Hoje é o dia perfeito para começar de novo. Bom dia e que você tenha um dia maravilhoso!",
        "Bom dia! Que sua mente esteja tranquila e seu coração cheio de gratidão pelo novo dia.",
        "Bom dia! Que você tenha um dia produtivo, mas também cheio de paz e harmonia.",
      ]
    },
    {
      id: 3,
      nome: 'Boa Noite',
      frases: [
          "Boa noite! Que o silêncio da noite acalme sua mente e encha seu coração de paz.",
          "Que a noite traga a serenidade necessária para que você acorde renovado para um novo dia de conquistas.",
          "Durma tranquilo, pois amanhã será um novo capítulo repleto de oportunidades.",
          "Que os sonhos dessa noite sejam a motivação para os passos que você dará amanhã.",
          "Que o descanso de hoje te prepare para as vitórias de amanhã. Boa noite!",
          "A noite é um convite ao descanso, mas também à reflexão sobre tudo o que se conquistou até aqui.",
          "Boa noite! Que a lua ilumine seus pensamentos e traga sabedoria para o novo dia.",
          "Que o sono seja suave, e que ao amanhecer, você se sinta renovado e cheio de energia positiva.",
          "Boa noite! Que cada estrela no céu te lembre que os sonhos mais lindos estão ao seu alcance.",
          "Que a paz da noite envolva você e traga calma ao seu coração. Durma bem!",
          "A noite não é o fim, mas o começo de novos sonhos. Boa noite e bons sonhos!",
          "Que a tranquilidade da noite faça com que você acorde com mais coragem para enfrentar os desafios.",
          "Boa noite! Que os anjos te acompanhem e que você tenha um sono profundo e reparador.",
          "Que a noite seja leve como uma pluma, e que ao amanhecer você sinta a energia de um novo começo.",
          "Dormir é uma arte, e que sua noite seja cheia de paz, para que seu amanhecer seja grandioso.",
          "Boa noite! Deixe que a serenidade da noite invada seu espírito e prepare você para o dia seguinte.",
          "Enquanto o mundo dorme, que seus sonhos sejam a fonte de inspiração para as conquistas de amanhã.",
          "Boa noite! Que a calma da noite acalme seus pensamentos e te prepare para uma jornada de sucesso.",
          "Que a noite seja um abraço acolhedor, e que ao despertar, você se sinta forte e pronto para vencer.",
          "Boa noite! Que cada estrela no céu seja um lembrete de que seus sonhos estão mais perto do que imagina.",
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    let frase = allFrases[categoriaSelecionada].frases[numeroAleatorio];

    setTextoFrase(frase);
  }


  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button 
            key={item.id} 
            className="category-button"
            style={{ 
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
             }}
            onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ))}
    
      </section>

      <button className="button-frase" onClick={() => gerarFrase()}>Gerar Frase</button>

      {textoFrase !== '' && (<h3 className="text-frase">{textoFrase}</h3>)}
    </div>
  )
}
