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
const regNum = /[0-9]/g;
const regMail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;


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
  if (regNum.exec(userNum) === null) {
    alert('숫자만 입력해주세요');
    return false;
  }
  if (userNum.length !== 9) {
    alert('자릿수를 확인해 주세요');
    return false;
  }
  localStorage.setItem('userNum', userNum);
  userNumBtn.innerHTML = userNum;
};

if (localUserNum) {
  userNumBtn.innerHTML = localUserNum;
}

userMailBtn.onclick = () => {
  const userMail = prompt('이메일을 입력해 주세요');
  if (regMail.exec(userMail) === null) {
    alert('이메일 형식에 맞게 입력해주세요');
    return false;
  }
  localStorage.setItem('userMail', userMail);
  userMailBtn.innerHTML = userMail;
};

if (localUserMail) {
  userMailBtn.innerHTML = localUserMail;
}

console.log(userNameElement);
console.log(userNameElement.textContent);
console.log(userNameElement.innerHTML);
