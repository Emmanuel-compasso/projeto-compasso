export default async function loadComments(id: number) {

  const response = await fetch(`http://localhost:3002/api/v1/posts/${id}/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return {
    status: response.status,
    data: data,
  };
}
