import React, { useEffect, useState } from "react";

const quotes = [
'Podróżować to żyć. Hans Christian Andersen',
'Życia nie mierzy się ilością oddechów, ale ilością chwil, które zapierają dech w piersiach. Maya Angelou',
'Podróżowanie to jedyna rzecz, którą kupujesz i sprawia, że stajesz się bogatszy. Anonim',
'Podróżujemy nie po to, by uciec przed życiem, ale by życie nam nie uciekło. Anonim',
'Przygoda warta jest każdego trudu. Arystoteles',
'Świat jest jak książka. Ci, którzy nie podróżują, czytają jedynie pierwszą stronę. Św. Augustyn',
'Poznałem mnóstwo ludzi w Europie, odnalazłem siebie. James Baldwin',
'Podróżowanie sprawi, że zaniemówisz z wrażenia, a potem zamienisz się w gawędziarza. Ibn Battuta',
'Prawdziwi podróżnicy to ci tylko, którzy wyruszają, aby wyruszyć. Charles Baudelaire'

]

const InspiringQuote = (props) => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random()*quotes.length)])
  }, [])
  return <p className="text-light text-center bg-dark p-1">{quote}</p>;
};

export default InspiringQuote;
