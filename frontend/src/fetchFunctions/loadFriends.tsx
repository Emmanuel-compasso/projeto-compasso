export default function loadFriends(data: any) {
  const users = data.users;

  users.forEach((user: { [x: string]: any; name: any }) => {
    
    const friendsList = document.createElement("div");
    friendsList.setAttribute("class", "friends-div");

    const friendImg = document.createElement("img");
    friendImg.src = "https://picsum.photos/40/40";
    friendImg.setAttribute("class", "circular friends-img");

    const friendName = document.createElement("p");
    friendName.textContent = `${user.name}`;

    friendsList.appendChild(friendImg);
    friendsList.appendChild(friendName);

    document.body.appendChild(friendsList);

    const portalContainer = document.createElement("div");
    portalContainer.id = "portal-container";
    document.body.appendChild(portalContainer);
    portalContainer.appendChild(friendsList);

    const container = document.getElementById("td1");
    container?.appendChild(friendsList);
  });
}
