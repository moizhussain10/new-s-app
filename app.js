let input = document.getElementById("inp");
let content = document.getElementById("content");

function searchNews() {
  let query = input.value.trim();

  if (!query) {
    alert("Please enter a keyword");
    return;
  }

  content.innerHTML = ""; 

  fetch(`https://newsapi.org/v2/everything?q=tesla${query}&from=2025-06-10&sortBy=publishedAt&apiKey=30f352c4573e444cb57d78e3f865e538`)
    .then((data) => data.json())
    .then((data) => {
      data.articles.map((a) => {
        content.innerHTML += `
          <div class="product-card">
            <span class="badge">NEW</span>
            <img src="${a.urlToImage}" alt="News Image">
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

