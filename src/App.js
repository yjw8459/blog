/* eslint-disable  */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css'; //CSS코딩 




/* eslint-disable은 문법 Warning을 더이상 표시하지 않음 
 * 주석처리 해야함. 
*/
//{ useState } : React의 내장함수 하나를 사용하겠다는 뜻
/* state : 변수 대신 쓸 수 있는 데이터 저장 공간  useState()를 이용해서 만들어야함 */
//JSX에서는 class="" 대신 className="" 사용
function App() {
  let posts = '강남 고기 맛집';
  function 함수(){
    return 100;
  }
   //[a,b] '남자 코트 추천'이 a로 들어가고 남자 코트 추천 state를 정정해주는 함수가 b에 들어감
  let [글제목, 글제목변경] = useState(['호날두 축구 존나잘함', '윤동주 바보 바보', '코딩신']); //이 문법은 ES6 destructuring 문법(신 문법)
  //let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); { 글제목[0] }
  //var [a, b] = [10, 100]; [10, 100] 배열에 있는 값들을 각각 a, b에 담고 싶을 경우
  //state 만의 장점 : Web이 App처럼 동작하게 만들고 싶어서(새로고침 없이) (State는 변경되면 HTML이 자동으로 재렌더링 된다. (HTML로 하면 새로고침 해야함)
  //자주 바뀌는 중요한 데이터는 State 사용
  let [따봉, 따봉변경] = useState(0); //State의 초기 값은 0

  let [modal, modal변경] = useState(false); // 모달창의 보이는 상태 state (온, 오프 스위치)
  let [누른제목, 누른제목변경] = useState(0);

  /**
   * array 안에 있던 하나하나의 데이터가 2씩 곱해져서 또 다른 Array가 생성이 됌
   * map 함수의 역할 (자바스크립트 기본 문법)
   * map()은 유사 반복문이다. 
   * map은 요소의 값을 바꿀 때 사용한다.
   */
  var 어레이 = [2, 3, 4];
  var 뉴어레이 = 어레이.map(function(a){
    return a * 2 
  }); //이런 형태의 함수, function을 콜백함수라고 부름

  function 글변경(){
    /*var newArray = 글제목; newArray 값 공유 
    newArray[0] = '여자코트 추천'; // 복사본 수정*/

    var newArray = [...글제목]; //deepCopy (복사)
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
    //2번째 방법 : 글제목변경( ['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'] );
    /**
     * Array, Object State 데이터 수정 방법
     * - 변경함수를 써야한다. 
     * - 변경함수(대체할 데이터)
     * state는 직접 건들면 안됌
     */
  }

  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3 onClick={ ()=>{ modal ===true ? modal변경(false) : modal변경(true) /* 해답 : modal변경(!modal) */ } } >모달 테스트</h3> 
        <p>2월 19일 발행</p>
        <hr/>
      </div>

        <button onClick={ () => { 누른제목변경(0) } }>버튼1</button>
        <button onClick={ () => { 누른제목변경(1) } }>버튼2</button>
        <button onClick={ () => { 누른제목변경(2) } }>버튼3</button>
      {/* */}

      {
      /* 반복문 */
      /**
       * 글제목.map( ()=>{ map을 이용한 방법은 편법이다. 

        }) 애로우 function도 무방하다 (신문법)
       * 리액트 상에서의 일반적인 반복문 (참고만 할 것 )
       function 반복된UI(){ 반복문 생성 
        
        var 어레이 = [];
        for (var i = 0; i < 3; i++){
          어레이.push(<div>안녕</div>)
        }
        return 어레이 ;
       }

       -- 사용부분 (원하는 자리에 사용) -- 
       { 반복된 UI() }
       */
        글제목.map(function(글, i){ //글 제목 갯수만큼 출력 a : array 안에 있는 하나하나의 자료  for in
          return  ( //i라는 변수는 맵이 돌때마다 반복 인덱스가 되는 변수 
                  <div className="list">
                    <h3 onClick={ () => { 누른제목변경(i) } }>{ 글 } <span onClick={ () => { 따봉변경(따봉 + 1) } }>😍{ 따봉 }</span>  </h3> 
                    <p>2월 17일 발행</p>
                    <hr/>
                  </div>
                  )//return에서 태그를 반환할 때 () 소괄호 (관습이다.)
        }) 
      }
      
      <button onClick={ () => {modal변경(!modal)}}>열고닫기</button>

    {
      /**
       * 1 < 3 ? console.log('맞아요') : console.log('틀려요');
       * 아무것도 보여주지 않을 땐 null 
       * state로 현재 모달창의 보이는 상태를 저장해서 사용한다.
       * React에서는 UI의 보임/안보임을 state로 저장해두고 사용한다.
       * modal === true  
       * ? <Modal/> 
       * : null 
       */
      modal === true //자식 Component AppComponent아래에 있기 때문
      ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal> //props로 전송해줘야 자식 컴포넌트는 부모 컴포넌트가 가진 state 사용 가능
      : null      //글제목이라는 이름으로 글제목을 전송
    }
      

    </div>
  );
/**
 * if문 대신 삼항연산자 사용 (중괄호 안에)
 */

  // return(
  //   <div></div>
  //   <div></div>
  //   <div></div>
  // ) 연속된 태그를 return할 순 없다. 하나의 div로 또다시 감싸서 return 해야함
}
//리액트에서 데이터 바인딩이 매우 쉽다.
//데이터 바인딩이란 서버에서 받든 데이터를 바꿔주는 행위
//{posts}처럼 랜더링 
//모든 속성에 { }를 쓸 수 있다 클래스명에도 변수 바인딩 가능
//style에는 Object 형식으로 작성해야함
//style을 입력할 때 CamelCase 형식으로 작성해야함 

//<div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
//<h4>{ posts }</h4> 
//<h4>{ 함수() }</h4> 
//<img src={ logo }/> 

/*
  리액트에서는 변수에 데이터를 담는 방법, state에 담는 방법
*/


/*
4강
  addEventListener('click', function() {

  })
  = 같다. 안에서 this라는 값만 다름 
  addEventListener('click', ()=>{
    
  })

  state의 값을 변경할 때는 따봉변경 사용( 정정함수 )
*/

/*
  {  }안에 함수 이름을 넣을 때 소괄호 없이
*/


/**
 * Component 생성 
Component 생성 시 대문자로 시작해야함.
return 안에는 1개의 Div
div를 쓰지 않을 경우 <> </>로 묶어줘야함 
HTML을 태그 1개로 축약해줄 수 있음 (관리가 편해짐)
1.반복적으로 출연하면 Component로 축약하면 좋음 
2.자주 변경되는 HTML UI들 (성능적으로 좋다.)
3.다른 페이지 만들 때도 컴포넌트로 만듦 

단점
1.state 쓸 때 복잡해짐
  : 상위 Component에서 만든 state 쓰려면 props 문법을 이용해야함
 */
function Modal(props){ //파라미터 이름 props
  return(
    <div className="modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

//클릭하면 모달창 등장 
export default App;
