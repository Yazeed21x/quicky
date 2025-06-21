// ✅ بيانات المستخدمين (تقدر تغير الرصيد والباسورد هنا)
const users = {
  yazeed: { password: "999999", balance: 1234 },
  ali: { password: "newpass", balance: 9080 },
  Q202521: { password: "AaBbCc21", balance: 7777 }
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  if (users[username] && users[username].password === password) {
    localStorage.setItem("loggedUser", username);
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password.");
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}

function showBalance(balanceAmount, username) {
  let visible = false;
  const balanceBtn = document.getElementById("balanceBtn");

  balanceBtn.addEventListener("click", () => {
    if (!visible) {
      balanceAmount.textContent = users[username].balance.toLocaleString() + " USDT ";
      balanceBtn.textContent = "Hide Balance";
    } else {
      balanceAmount.textContent = "xxxxx";
      balanceBtn.textContent = "Show Balance";
    }
    visible = !visible;
  });
}

// ✅ عند دخول صفحة home.html
if (window.location.pathname.endsWith("home.html")) {
  const currentUser = localStorage.getItem("loggedUser");
  if (!currentUser || !users[currentUser]) {
    alert("Please login first.");
    window.location.href = "login.html";
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      const balanceAmount = document.getElementById("balanceAmount");
      showBalance(balanceAmount, currentUser);
    });
  }
}
