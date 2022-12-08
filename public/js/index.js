const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.name');
const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.innerHTML = `${name} <span>님</span>`;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  // todo: userName에 대한 유효성 검사
  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};


console.log(userNameElement);
console.log(userNameElement.textContent);
console.log(userNameElement.innerHTML);
