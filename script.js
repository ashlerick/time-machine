const form = document.getElementById("uploadForm");
const resultImg = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const file = document.getElementById("imageInput").files[0];
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    "https://time-machine-backend.vercel.app/api/grayscale",
    {
      method: "POST",
      body: formData
    }
  );

  const data = await response.json();
  resultImg.src = "data:image/png;base64," + data.image;
});
