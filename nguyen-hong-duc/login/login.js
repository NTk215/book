document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định của form

    // Lấy giá trị của các trường nhập
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Kiểm tra thông tin đăng nhập
    if (username === "123@gmail.com" && password === "123456") {
      // Nếu thông tin đúng, chuyển hướng tới URL mong muốn
      window.location.href = "../../logout.html";
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác.");
    }
  });
