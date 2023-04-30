export default function loadPosts(data: any) {
    const posts = data.posts;

    posts.forEach(
      (post: {
        [x: string]: any;
        user: any;
        description: any;
        likes: any;
        comments: any;
      }) => {

        const postElement = document.createElement("div");
        postElement.setAttribute("class", "post");

        const userImg = document.createElement("img");
        userImg.setAttribute("class", "circular posts-img");
        userImg.src = `https://picsum.photos/40/40`;

        const userElement = document.createElement("p");
        userElement.textContent = `${post.user}`;

        const dateElement = document.createElement("p");
        dateElement.textContent = `${post["post date"]}`;

        const userInfo = document.createElement("div");
        userInfo.setAttribute("class", "posts-info");
        userInfo.appendChild(userImg);
        userInfo.appendChild(userElement);
        userInfo.appendChild(dateElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = `${post.description}`;

        const imgContentElement = document.createElement("img");
        imgContentElement.src = `https://picsum.photos/710/300`;

        const postContent = document.createElement("div");
        postContent.setAttribute("class", "posts-content");
        postContent.appendChild(descriptionElement);
        postContent.appendChild(imgContentElement);

        const likesOption = document.createElement("p");
        likesOption.textContent = `Curtir ${post.likes}`;

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


        if("comments" in post) {
        const comments = post.comments;
        comments.forEach((comment: { user: any; comment: any }) => {

          const commentInfo = document.createElement("div");

          const userCommentImg = document.createElement("img");
          userCommentImg.setAttribute("class", "circular posts-comments-img");
          userCommentImg.src = "https://picsum.photos/40/40";

          const userCommentName = document.createElement("p");
          userCommentName.textContent = `${comment.user}`;

          const userCommentContent = document.createElement("p");
          userCommentContent.textContent = `${comment.comment}`;

          commentInfo.appendChild(userCommentImg);
          commentInfo.appendChild(userCommentName);
          commentInfo.appendChild(userCommentContent);

          commentsInfo.appendChild(commentInfo);
        });
      }

        postElement.appendChild(userInfo);
        postElement.appendChild(postContent);
        postElement.appendChild(optionsInfo);
        postElement.appendChild(commentsInfo);

        document.body.appendChild(postElement);

        const portalContainer = document.createElement("div");
        portalContainer.id = "portal-container";
        document.body.appendChild(portalContainer);
        portalContainer.appendChild(postElement);

        const container = document.getElementById("posts-div");
        container?.appendChild(postElement);
      }
    );
}