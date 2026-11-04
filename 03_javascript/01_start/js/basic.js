//1.alert 예제
document.getElementById('btn_alert').onclick = () => {
  alert('이것은 alert()으로 띄운 메세지 입니다');
}

//2.prompt 예제
//prompt('입력재용','입력내용 초기값');
document.getElementById('btn_prompt1').onclick = () => {
  const nickName = prompt('닉네임을 입력하세요', '졸리다');
  // console.log(nickName);
  document.getElementById('ioResult').innerHTML = nickName;
}

//prompt('입력내용') - 초기값 생략 가능
document.getElementById('btn_prompt2').onclick = () => {
  const age = prompt('나이를입력하세요');
  document.getElementById('ioResult').innerHTML = age + ' 기본값 없음';
}

//3.confirm 예제
document.getElementById('btn_confirm').onclick = () => {
  const isSure = confirm('자바스크립트 할만 하죠?'); /* 트루 펄스 걸림 */
  let text = isSure ? '네 할만합니다' : '죽을 것 같요'; /* 네 > 트루 / 죽 >펄스 */
  document.getElementById('ioResult').innerHTML = text;
}

//4.식(Expression) 예제 실행
const output = '<strong>4.식(Expression) 예제 결과</strong><br>';
const greeting = '안녕하세요'; //식 : 문자열 값
const isAdult = 20 >=18; //식 : true 값 생성
const num1 = prompt('첫번째 숫자를 입력하세요');
const num2 = prompt('두번째 숫자를 입력하세요');
const sum = Number(num1) + Number(num2); //식 : sum값을 생성 

document.getElementById('btn_expression').onclick = () =>{
  const resultHtml = output + sum + ' / ' + greeting + '' + isAdult;
  // '<strong>4.식(Expression) 예제 결과</strong><br>'
  // 20 / 안녕하세요 true
  document.getElementById('result_output2').innerHTML = resultHtml;
  document.querySelector('.pre_wrap2').classList.remove('on');
  document.querySelector('.pre_wrap1').classList.add('on'); /* 요부분이 이해가 잘 안됨 */
}

//5. 문(Statement) 예제 실행
document.getElementById('btn_statement').onclick = () =>{
  const output = '<strong>문(Statement) 예제</strong><br>';
  let output2;
  if(sum>5){
    output2 = sum2 + '값이 5보다 큽니다';
  } else {
    output2 = sum2 + '값이 5이하 입니다';
  }

  document.getElementById('result_output2').innerHTML = output + output2;
  document.querySelector('.pre_wrap1').classList.remove('on');
  document.querySelector('.pre_wrap2').classList.add('on'); /* 어 왜 안되짐? ㅎㅎ */
}