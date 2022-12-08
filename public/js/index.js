// 이름 변경 변수
const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.name');
const localUserName = localStorage.getItem('userName');
const userNameBtn = document.querySelector('#user-name');

// 학번 메일 변수
const localUserNum = localStorage.getItem('userNum');
const localUserMail = localStorage.getItem('userMail');
const userNumBtn = document.querySelector('#number');
const userMailBtn = document.querySelector('#email');


// 이름 변경
const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span> 님</span>`;
  userNameBtn.textContent = name;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameBtn.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  // todo: userName에 대한 유효성 검사
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

// 학번 메일 변경
userNumBtn.onclick = () => {
  const userNum = prompt('학번을 입력해 주세요');
  localStorage.setItem('userNum', userNum);
  userNumBtn.innerHTML = userNum;
};

if (localUserNum) {
  userNumBtn.innerHTML = localUserName;
}

userMailBtn.onclick = () => {
  const userMail = prompt('이메일을 입력해 주세요');
  // todo: userName에 대한 유효성 검사
  localStorage.setItem('userMail', userMail);
  userMailBtn.innerHTML = userMail;
};

if (localUserMail) {
  userMailBtn.innerHTML = localUserMail;
}

console.log(userNameElement);
console.log(userNameElement.textContent);
console.log(userNameElement.innerHTML);
