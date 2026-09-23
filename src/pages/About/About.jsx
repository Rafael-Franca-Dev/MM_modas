import { Link } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import './About.css'

const timeline = [
  {
    year: 'O apelido',
    text: 'Na turma, sempre teve aquele amigo com ideia fora da caixa e sorriso de quem aprontou. Virou o "Menino Mau".',
  },
  {
    year: 'A ideia',
    text: 'Entre um trabalho e outro da faculdade, surgiu a vontade de criar roupas que tivessem a mesma energia: autênticas, leves e cheias de personalidade.',
  },
  {
    year: 'A marca',
    text: 'MM MODAS nasceu das iniciais do apelido. O mascote é uma homenagem direta — cachos, sobrancelha arqueada e aquele sorrisão.',
  },
  {
    year: 'Hoje',
    text: 'Drops pequenos, peças confortáveis e uma comunidade de gente que não pede licença pra ser quem é.',
  },
]

const values = [
  { title: 'Sem filtro', text: 'A gente fala do jeito que é. Preço justo, informação clara e zero enrolação.' },
  { title: 'Feito com calma', text: 'Tiragens pequenas, fornecedores locais e cuidado em cada costura.' },
  { title: 'Pra todo mundo', text: 'Modelagens pensadas pra corpos reais e estilos que não cabem em caixinha.' },
]

function About() {
  return (
    <div className="about">
      <section className="container about__hero">
        <div>
          <span className="eyebrow">Nossa história</span>
          <h1>
            Todo mundo tem um lado <span className="about__accent">Menino Mau</span>.
          </h1>
          <p className="about__lead">
            A gente só resolveu vestir o nosso. A MM MODAS é uma marca feita por amigos, pra quem quer se
            expressar pela roupa sem precisar gritar.
          </p>
        </div>
        <div className="about__portrait" aria-hidden="true">
          <Mascot size={260} title="" />
          <span className="about__caption">o próprio, em versão desenho</span>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Como tudo começou</h2>
        <ol className="timeline">
          {timeline.map((item, i) => (
            <li key={item.year} className="timeline__item">
              <span className="timeline__dot">{i + 1}</span>
              <div>
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">No que a gente acredita</h2>
          <div className="values__grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container about__cta">
        <h2>Pronto pra mostrar o seu lado Menino Mau?</h2>
        <Link to="/loja" className="btn btn--primary">
          Ver a coleção
        </Link>
      </section>
    </div>
  )
}

export default About
