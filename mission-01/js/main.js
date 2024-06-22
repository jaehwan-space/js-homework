const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};


function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

const loginForm = document.querySelector(".login-form");

const validateEmail = (inputElement) => {
  if (!emailReg(inputElement.value)) {
    inputElement.classList.add("is--invalid");
    inputElement.setAttribute("aria-invalid", "true");
  } else {
    inputElement.classList.remove("is--invalid");
    inputElement.setAttribute("aria-invalid", "false");
  }
};

const validatePassword = (inputElement) => {
  if (!pwReg(inputElement.value)) {
    inputElement.classList.add("is--invalid");
    inputElement.setAttribute("aria-invalid", "true");
  } else {
    inputElement.classList.remove("is--invalid");
    inputElement.setAttribute("aria-invalid", "false");
  }
};

const validateLogin = (event) => {
  const inputElement = event.target;

  if (inputElement.type === "checkbox") {
    return;
  }

  if (inputElement.id === "userEmail") validateEmail(inputElement);
  else if (inputElement.id === "userPassword") validatePassword(inputElement);
};

function handleLogin(event) {
  const userEmail = loginForm.querySelector("#userEmail").value;
  const userPassword = loginForm.querySelector("#userPassword").value;

  if (emailReg(userEmail) && pwReg(userPassword)) {
    if (user.id === userEmail && user.pw === userPassword) {
      alert("로그인에 성공했습니다.");
      window.location.href = "welcome.html";
      event.preventDefault(); // 폼 제출을 막음
    } else {
      alert("로그인에 실패했습니다.");
      event.preventDefault(); // 폼 제출을 막음
    }
  } else {
    event.preventDefault(); // 폼 제출을 막음
    alert("아이디, 비밀번호를 확인해주세요.");
  }
}

loginForm.addEventListener("input", debounce(validateLogin));
loginForm.addEventListener("submit", handleLogin);
