let input = document.getElementById("inp");
let content = document.getElementById("content");

function searchNews() {
  let query = input.value.trim();

  if (!query) {
    alert("Please enter a keyword");
    return;
  }

  content.innerHTML = "Loading...";

  fetch(`https://newsapi.org/v2/everything?q=${query}&from=2025-06-10&sortBy=publishedAt&apiKey=30f352c4573e444cb57d78e3f865e538`)
    .then((res) => res.json())
    .then((data) => {
      content.innerHTML = ""; // clear loading text
      
      data.articles.forEach((a) => {
        content.innerHTML += `
          <div class="product-card">
            <span class="badge">NEW</span>
            <img src="${a.urlToImage || 'https://via.placeholder.com/300x180'}" alt="News Image">
            <div class="product-info">
              <h3>${a.author || "Unknown Author"}</h3>
              <p>${a.description || "No description available."}</p>
            </div>
          </div>`;
      });
    })
    .catch((err) => {
      console.error("Error fetching news:", err);
      content.innerHTML = `<p style="color:red">Something went wrong. Please try again.</p>`;
    });
}
