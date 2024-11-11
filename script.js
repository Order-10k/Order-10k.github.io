// Biến lưu các lựa chọn và phản hồi
let choices = [];
let feedbacks = [];

// Hàm thêm lựa chọn mới (dành cho chủ trang web)
function addChoice() {
  const choiceInput = document.getElementById("newChoice");
  const choiceText = choiceInput.value.trim();

  if (choiceText) {
    choices.push(choiceText);
    displayChoices();
    choiceInput.value = "";  // Xóa ô nhập sau khi thêm
  } else {
    alert("Vui lòng nhập lựa chọn.");
  }
}

// Hàm hiển thị các lựa chọn
function displayChoices() {
  const choicesList = document.getElementById("choicesList");
  choicesList.innerHTML = "";  // Xóa các lựa chọn cũ

  choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${choice}`;
    choicesList.appendChild(li);
  });
}

// Hàm gửi phản hồi (dành cho người dùng)
function submitFeedback() {
  const feedbackInput = document.getElementById("feedback");
  const feedbackText = feedbackInput.value.trim();

  if (feedbackText) {
    feedbacks.push(feedbackText);
    displayFeedbacks();
    feedbackInput.value = "";  // Xóa ô nhập sau khi gửi
  } else {
    alert("Vui lòng nhập phản hồi.");
  }
}

// Hàm hiển thị các phản hồi
function displayFeedbacks() {
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = "";  // Xóa các phản hồi cũ

  feedbacks.forEach((feedback, index) => {
    const li = document.createElement("li");
    li.textContent = `Phản hồi ${index + 1}: ${feedback}`;
    feedbackList.appendChild(li);
  });
}

// Hiển thị các lựa chọn và phản hồi khi tải trang
displayChoices();
displayFeedbacks();
