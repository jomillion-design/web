//1.alert 예제
document.getElementById('btn_alert').onclick = () =>{
  alert('이것은 alert()으로 띄운 메세지 입니다');
}

//2.prompt 예제
//prompt('입력재용','입력내용 초기값');
document.getElementById('btn_prompt1').onclick = () =>{
  const nickName = prompt('닉네임을 입력하세요','졸리다');
  // console.log(nickName);
  document.getElementById('ioResult').innerHTML = nickName;
}
