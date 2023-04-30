export default function loadFriends(data: any) {
  const users = data.users;

  users.forEach((user: { [x: string]: any; name: any }) => {
    const friendsList = document.createElement("div");
    friendsList.setAttribute("class", "friends-div");

    const userImg = document.createElement("img");
    userImg.src = "https://picsum.photos/40/40";
    userImg.setAttribute("class", "circular friends-img");

    const userName = document.createElement("p");
    userName.textContent = `${user.name}`;

    friendsList.appendChild(userImg);
    friendsList.appendChild(userName);

    // Adicionar elemento HTML de post à página
    document.body.appendChild(friendsList);

    // Criar elemento que será usado como portal
    const portalContainer = document.createElement("div");
    portalContainer.id = "portal-container";
    document.body.appendChild(portalContainer);

    // Renderizar post dentro do portal
    portalContainer.appendChild(friendsList);

    const container = document.getElementById("td1");

    container?.appendChild(friendsList);
  });
}
