import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
//import compassLogo from "./logo.png";

const Home = () => {
  const [nameUser, setNameUser] = useState("Guest");

  useEffect(() => {
    const user = localStorage.getItem("userName");
    if (user) {
      setNameUser(user);
    }
  }, []);

  fetch("http://localhost:3002/api/post")
    .then((response) => response.json())
    .then((data) => {
      const posts = data.posts;
      let num = 1;

      // Loop pelos posts
      posts.forEach(
        (post: {
          [x: string]: any;
          user: any;
          description: any;
          likes: any;
          comments: any;
        }) => {
          // Criar elementos HTML para cada post
          const postElement = document.createElement("div");
          postElement.setAttribute("class", "post");

          const imgElement = document.createElement("img");
          imgElement.setAttribute("class", "circular posts-img");

          const postWrapper = document.createElement("div");
          postWrapper.setAttribute("class", "posts-info");

          const userElement = document.createElement("p");
          const dateElement = document.createElement("p");

          const postContentWrapper = document.createElement("div");
          postContentWrapper.setAttribute("class", "posts-content")

          const descriptionElement = document.createElement("p");
          const imgContentElement = document.createElement("img");

          const likesOption = document.createElement("p");
          const commentsOption = document.createElement("p");
          commentsOption.textContent = "Comentários";
          const shareOption = document.createElement("p");
          shareOption.textContent = "Compartilhar";

          const optionsElement = document.createElement("div");
          optionsElement.setAttribute("class", "post-options");
          optionsElement.appendChild(likesOption);
          optionsElement.appendChild(commentsOption);
          optionsElement.appendChild(shareOption);

          

          const allComments = document.createElement("p");
          allComments.setAttribute("class", "all-comments");
          allComments.textContent = "Todos os comentários";

          const commentsElement = document.createElement("div");
          commentsElement.appendChild(allComments);

          // Adicionar conteúdo aos elementos HTML
          imgElement.src = `https://picsum.photos/50/50?random=${num}`;
          imgContentElement.src = `https://picsum.photos/710/300?random=${num}`;
          console.log(num);
          userElement.textContent = `${post.user}`;
          dateElement.textContent = `${post["post date"]}`;
          descriptionElement.textContent = `${post.description}`;
          likesOption.textContent = `Curtiu ${post.likes}`;

          num++;

          // Loop pelos comentários
          const comments = post.comments;
          comments.forEach((comment: { user: any; comment: any }) => {
            // Criar elementos HTML para cada comentário
            const commentElement = document.createElement("div");
            const commentImg = document.createElement("img");
            commentImg.setAttribute("class", "circular posts-comments-img");
            const userCommentElement = document.createElement("p");
            const commentContentElement = document.createElement("p");

            // Adicionar conteúdo aos elementos HTML
            commentImg.src = "https://picsum.photos/40/40";
            userCommentElement.textContent = `${comment.user}`;
            commentContentElement.textContent = `${comment.comment}`;

            // Adicionar elementos HTML de comentário ao elemento HTML de comentários
            commentElement.appendChild(commentImg);
            commentElement.appendChild(userCommentElement);
            commentElement.appendChild(commentContentElement);
            commentsElement.appendChild(commentElement);
          });

          // adicionar ao wrapper
          postWrapper.appendChild(imgElement);
          postWrapper.appendChild(userElement);
          postWrapper.appendChild(dateElement);

          postContentWrapper.appendChild(descriptionElement);
          postContentWrapper.appendChild(imgContentElement);

          // Adicionar elementos HTML de post ao elemento HTML de post
          postElement.appendChild(postWrapper);
          postElement.appendChild(postContentWrapper);
          postElement.appendChild(optionsElement);
          postElement.appendChild(commentsElement);

          // Adicionar elemento HTML de post à página
          document.body.appendChild(postElement);

          // Criar elemento que será usado como portal
          const portalContainer = document.createElement("div");
          portalContainer.id = "portal-container";
          document.body.appendChild(portalContainer);

          // Renderizar post dentro do portal
          portalContainer.appendChild(postElement);

          const container = document.getElementById("posts-div");

          container?.appendChild(postElement);
        }
      );
    });

  return (
    <div className="container home">
      <section className="nav">
        {/*<img src={compassLogo} alt="compass logo" />*/}
      </section>

      <section>
        <header className="main_header">
          <span className="header_home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            HOME
          </span>
          <span className="header_user">
            {nameUser}
            <img
              src="https://picsum.photos/50/50"
              alt="Foto de perfil do usuário"
              className="circular"
            />
          </span>
        </header>

        <div className="main_body">
          <article className="posts">
            <div className="write_field">
              <form>
                <div>
                  <img
                    src="https://picsum.photos/50/50"
                    alt="Foto de perfil do usuário"
                    className="circular write_field_image"
                  />
                  <input
                    className="input-home"
                    type="text"
                    placeholder="No que você está pensando?"
                  />
                </div>
                <br />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <input className="submit-post" type="submit" value="Postar" />
              </form>
            </div>

            <div id="posts-div"></div>
          </article>

          <article className="topics">
            <div className="topics-div">MEUS Amigos</div>

            <div className="topics-div"></div>

            <div className="topics-div"></div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
