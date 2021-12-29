const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const confirmDelete = function (event) {
  event.preventDefault();
  document.querySelector("#danger-btn").setAttribute("class", "btn btn-danger");
  document.querySelector("#delete-btn").setAttribute("class", "hidden");
};
const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editFormHandler);

document
    .querySelector("#delete-btn")
    .addEventListener("click", confirmDelete);
    
document
  .querySelector("#danger-btn")
  .addEventListener("click", deleteClickHandler);