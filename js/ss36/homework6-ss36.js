// Lấy các phần tử DOM
const stars = document.querySelectorAll(".stars");
const selectedRating = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");

let currentRating = 0;

// Sự kiện chọn sao
stars.forEach((star) => {
  star.addEventListener("click", function () {
    currentRating = this.getAttribute("data-value");
    selectedRating.textContent = `Bạn đã đánh giá: ${currentRating} sao`;
    highlightStars(currentRating);
  });
});

// Làm nổi bật sao được chọn
function highlightStars(rating) {
  stars.forEach((star) => {
    star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "gray";
  });
}

// Nạp đánh giá từ Local Storage
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  commentList.innerHTML = "";
  reviews.forEach((review) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${"★".repeat(review.rating)}</span> <b>${review.comment}</b>`;
    commentList.appendChild(li);
  });
}

// Gửi đánh giá
function submitReview() {
  const comment = commentInput.value.trim();
  if (currentRating === 0 || comment === "") {
    alert("Vui lòng chọn số sao và nhập bình luận!");
    return;
  }

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({ rating: currentRating, comment });
  localStorage.setItem("reviews", JSON.stringify(reviews));

  commentInput.value = "";
  selectedRating.textContent = "Bạn chưa đánh giá.";
  currentRating = 0;
  highlightStars(0);
  loadReviews();
}

// Tải đánh giá khi mở trang
window.onload = loadReviews;
