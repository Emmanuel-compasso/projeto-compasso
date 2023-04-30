export default function handleSubmitPost(event: any, setInputValue: React.Dispatch<React.SetStateAction<string>>, inputValue: string, nameUser: string) {
  event.preventDefault();

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

  imgElement.src = `https://picsum.photos/50/50`;
  //imgContentElement.src = `https://picsum.photos/80/80`;
  userElement.textContent = `${nameUser}`;
  dateElement.textContent = `Agora mesmo...`;
  descriptionElement.textContent = `${inputValue}`;
  likesOption.textContent = `Curtir`;

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

  const postsDiv = document.getElementById("posts-div")!;
  const firstChild = postsDiv.firstChild;

  postsDiv.insertBefore(postElement, firstChild);

  // Limpar o valor do input
  setInputValue("");
}
