import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogData from "../../datas/blogData";
import patissieres from "../../assets/blogPatissieres.png";

function AideNumerik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Helmet>
        <title>
          Surprise de Noël : Le Grimoire Numérique offre un site internet à une
          entreprise en difficulté.
        </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Blog/4" />
        <meta
          name="description"
          content="Le Grimoire Numérique crée un site internet gratuitement pour une entreprise en difficulté."
        />
      </Helmet>
      <main className="blog1">
        <h1 className="h1">GRIMOIRE NUMÉRIQUE | BLOG</h1>
        <div>
          <h2>
            Surprise de Noël : Le Grimoire Numérique offre un site internet à
            une entreprise en difficulté.
          </h2>
          <img src={patissieres} alt="pile de dossiers classés et rangés" />
          <small>24 Décembre 2022 à 18h52</small>
          <article>
            <h3>Une entreprise locale dans le besoin</h3>
            <section>
              <p>
                Les Pâtissières, entreprise locale dont la gérante, Mamy, est
                passionnée. Cuisinant avec amour, elle a fait le choix depuis
                ses débuts de cuisiner uniquement avec des fruits et légumes péi
                et de saison. Ainsi, elle marie le savoir-faire de la pâtisserie
                française avec les saveurs de notre île. Tout cela en version
                sucrée comme salée. Malgré toute la volonté du monde, Mamy n’a
                pas su tenir bon face aux difficultés des aléas de la vie. Son
                associée qui a dû se retirer pour raisons médicales, puis la
                pandémie COVID-19 ont laissé notre pâtissière avec de nombreuses
                charges sur les épaules. C’est ainsi que depuis 2019, son
                commerce se retrouve en redressement judiciaire.
              </p>
            </section>
            <section>
              <h4>Un appel à l’aide et à la solidarité</h4>
              <p>
                Échappant de peu à la liquidation judiciaire, Mamy a aujourd’hui
                jusqu’en avril pour prouver aux juges qu’elle est capable de
                surmonter cette crise et générer une trésorerie régulière. Elle
                a ainsi mis en place un système d’abonnement mensuel pour
                assurer à sa clientèle un rendez-vous gourmand. Son appel à
                l’aide a été entendu par les réunionnais et c’est ainsi que nous
                avons décidé de la soutenir également à notre niveau.
              </p>
            </section>
            <section>
              <h4>Un site internet pour gagner en visibilité </h4>
              <p>
                Les petits commerces ont tendance à ne pas se rendre compte de
                l’importance d’un site internet. C’est une vitrine pour leur
                commerce disponible pour tout le monde, 24h/24 et 7j/7. Cet
                outil puissant permet à la fois aux clients actuels d’accéder
                aux dernières nouvelles de leur pâtissière préférée (le menu du
                jour, les desserts du moment etc.). Mais ça permet aussi et
                surtout à de nouveaux clients de la découvrir. Notre objectif
                étant d’aider les très petites entreprises à grandir, nous ne
                pouvions pas rester de marbre face à la situation de Mamy.
              </p>
            </section>
            <section>
              <p>
                Vous aussi, ne restez pas de marbre et agissez à votre échelle.
                Vous pouvez ainsi liker ses pages sur les réseaux sociaux,
                souscrire à un abonnement ou tout simplement parler d’elle et de
                son histoire autour de vous.
              </p>
              <ul className="blog3_contact patissieres">
                <li>
                  <a
                    href="https://lespatissieres.re/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="button_style">
                      Découvrir leur site
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href=" https://lespatissieres.re/soutien"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="button_style pink">
                      Aider Mamy ♥
                    </button>
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <section className="egalement_container">
        <h3>À lire également</h3>
        <div className="mini_blog_container">
          {blogData
            .filter((el) => el.id !== 4)
            .map((blog) => (
              <div className="mini_blog">
                <h4>{blog.title}</h4>
                <img src={blog.src} alt={blog.alt} />
                <Link to={blog.link}>
                  <button type="button">Lire l'article</button>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </section>
  );
}

export default AideNumerik;
