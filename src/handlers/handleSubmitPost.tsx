export default function handleSubmitPost(event: any, setInputValue: React.Dispatch<React.SetStateAction<string>>, inputValue: string, nameUser: string) {
  event.preventDefault();

  const postElement = document.createElement("div");
        postElement.setAttribute("class", "post");

        const userImg = document.createElement("img");
        userImg.setAttribute("class", "circular posts-img");
        userImg.src = `https://picsum.photos/40/40`;

        const userElement = document.createElement("p");
        userElement.textContent = `${nameUser}`;

        const dateElement = document.createElement("p");
        dateElement.textContent = `Agora mesmo...`;

        const userInfo = document.createElement("div");
        userInfo.setAttribute("class", "posts-info");
        userInfo.appendChild(userImg);
        userInfo.appendChild(userElement);
        userInfo.appendChild(dateElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = `${inputValue}`;

        const imgContentElement = document.createElement("img");
        imgContentElement.src = `https://picsum.photos/710/300`;

        const postContent = document.createElement("div");
        postContent.setAttribute("class", "posts-content");
        postContent.appendChild(descriptionElement);
        postContent.appendChild(imgContentElement);

        const likesOption = document.createElement("p");
        likesOption.textContent = `Curtir`;

        const commentsOption = document.createElement("p");
        commentsOption.textContent = "Comentários";

        const shareOption = document.createElement("p");
        shareOption.textContent = "Compartilhar";

        const optionsInfo = document.createElement("div");
        optionsInfo.setAttribute("class", "post-options");
        optionsInfo.appendChild(likesOption);
        optionsInfo.appendChild(commentsOption);
        optionsInfo.appendChild(shareOption);

        const imgComment = document.createElement("img");
        imgComment.src = "https://picsum.photos/50/50";
        imgComment.setAttribute("class", "circular write_field_image");

        const inputComment = document.createElement("input");
        inputComment.setAttribute("class", "input-home");
        inputComment.setAttribute("placeholder", "O que você está pensando?");

        const allComments = document.createElement("p");
        allComments.setAttribute("class", "all-comments");
        allComments.textContent = "Todos os comentários";

        const commentsInfo = document.createElement("div");
        commentsInfo.appendChild(imgComment);
        commentsInfo.appendChild(inputComment);
        commentsInfo.appendChild(allComments);

        postElement.appendChild(userInfo);
        postElement.appendChild(postContent);
        postElement.appendChild(optionsInfo);
        postElement.appendChild(commentsInfo);

  const postsDiv = document.getElementById("posts-div")!;
  const firstChild = postsDiv.firstChild;

  postsDiv.insertBefore(postElement, firstChild);

  setInputValue("");
}
