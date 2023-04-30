export default function loadPosts(data: any) {
    const posts = data.posts;

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
        postContentWrapper.setAttribute("class", "posts-content");

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

        const imgComment = document.createElement("img");
        imgComment.src = "https://picsum.photos/50/50";
        imgComment.setAttribute("class", "circular write_field_image");

        const inputComment = document.createElement("input");
        inputComment.setAttribute("class", "input-home");
        inputComment.setAttribute("placeholder", "O que você está pensando?");

        const allComments = document.createElement("p");
        allComments.setAttribute("class", "all-comments");
        allComments.textContent = "Todos os comentários";

        const commentsElement = document.createElement("div");
        commentsElement.appendChild(imgComment);
        commentsElement.appendChild(inputComment);
        commentsElement.appendChild(allComments);

        // Adicionar conteúdo aos elementos HTML
        imgElement.src = `https://picsum.photos/40/40`;
        imgContentElement.src = `https://picsum.photos/710/300`;
        userElement.textContent = `${post.user}`;
        dateElement.textContent = `${post["post date"]}`;
        descriptionElement.textContent = `${post.description}`;
        likesOption.textContent = `Curtir ${post.likes}`;

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
}