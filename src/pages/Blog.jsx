import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogData from "../datas/blogData";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="blog">
      <Helmet>
        <title> Grimoire Numérique | Blog </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Blog" />
        <meta
          name="description"
          content="Notre blog vous permet d'avoir des informations sur divers sujets tels que le kap numérik, les membres du Grimoire Numérique, la situation numérique réunionnaise."
        />
      </Helmet>
      <h1 className="h1">GRIMOIRE NUMÉRIQUE | BLOG</h1>
      <div className="blog_container">
        {blogData.map((blog) => (
          <div>
            <Link to={`/Blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={blog.src} alt={blog.alt} />
              <button type="button">Lire l'article</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
