/**
 * JavaScript




실행 컨텍스트(Execution Context)
Context : 문맥 / 맥락 / 환경
동일한 조건/ 환경을 지니는 코드뭉치
실행할 때 필요한 조건/환경정보
함수를 실행할 때 필요한 조건, 환경정보를 담은 객체


동일한 조건을 지닐 수 있는 조건 
전역공간 : 자바스크립트 코드가 실행되는 순간 전역 컨텍스트가 생성되고,코드가 종료될 때 종료됨(하나의 거대한 함수 공간)
함수
Module : 어딘가에서 import되는 순간에 모듈 컨텍스트가 생성되고, 모듈이 끝나는 순간 모듈 컨텍스트가 사라지기 때문에 함수공간
Eval

같은 함수 공간에 있다는 건 같은 코드환경에 있다는 것.


Let, const은 별개의 독립된 공간으로서의 역할을 한다. 하지만 별개의 실행 콘텍스트를 생성하지 않음.


가장 늦게 들어온 것이 가장 빨리 빠지는 것을 스택이라고 한다.

Call stack : 현재 어떤 함수가 동작중인지, 다음에 어떤 함수가 호출될 예정인지 등을 제어하는 자료구조
	      가장 먼저 전역 컨텍스트가 담기고, 가장 마지막까지 남는다.

각 실행 컨텍스트의 영향력은 바깥 쪽으로 퍼진다. 
내장 함수에서 외부 함수의 변수를 쓸 수 있듯이.


실행 컨텍스트의 내부
VariableEnviroment, LexicalEnviroment : 현재 환경과 관련된 식별자 정보들
VariableEnviroment : 식별자 정보 수집용도로만 쓰임 (변화X)
LexicalEnviroment : 각 식별자의 ‘데이터’ 추적.           (변화O)

컨텍스트 내부의 코드들을 실행하는 동안 변수의 값들에 변화가 생기면 LexicalEnviroment에만 실시간으로 반영됨.
둘의 차이는 값의 변화가 실시간으로 반영되느냐, 그렇지 않느냐의 차이이다.

Lexical Environment(어휘적/사전적 환경) 
어떤 실행 컨텍스트 a에 대한 환경정보가 담겨있는 사전.
내부식별자 a : 현재 값은 undefined이다.
내부식별자 b : 현재 값은 20이다.
외부 정보 : D를 참조한다.
실행컨텍스트를 구성하는 환경정보들을 모아 사전처럼 구성한 객체.




Lexical Environment의 구성요소 2가지
enviromentRecord : 환경기록, 현재 컨텍스트 내부의 식별자 정보, 현재 문맥의 식별자 정보
outerEnviromentReference : 외부 환경 참조, 외부 환경을 참조하는 정보

현재 컨텍스트의 식별자 정보들을 수집해서 enviromentRecord 에 담는 과정을 Hoisting이라고 한다.
Hoisting(끌어올리다) : enviromentRecord의 식별자 정보 수집 과정을 쉽게 이해하기 위해 만든 허구의 개념(추상적)
식별자 정보를 끌어올린다.

Enviroment가 하는 일 (Hoisting)
Var a = 3;
console.log(a);
Function fn(){}
=
Var a;
Function fn(){}
a=3;
console.log(a);

outerEnviromentReference(외부 참조)
외부 실행 컨텍스트(Lexical Enviroment)를 참조한다.
스코프 체인(외부 변수및 함수 참조).
 */



function fn_hoistingTest(){
    var a = 1;

function outer(){
    console.log(a);     //첫번 째 로그 출력
    function inner(){
        console.log(a); //두번 째 로그 출력
        var a = 3;
    }
    inner();

    console.log(a);     // 세번 째 로그 출력
}

outer();
console.log(a);         //네번 째 로그 출력 후 전역 콘텍스트 종료
}


/**
 * Nullish Coalescing Operator (널 병합 연산자)
 * Null 또는 undefined가 아닐 경우 Nothing to display 출력
 * 0또는 ''는 감지하지 못한다.
 * @param {String} text 
 */
function fn_printMessage(text){
    const message = text ?? 'Nothing to display';
    console.log(message);
}
/**
 * Default 값을 줄 수 있다.
 * undefined만 감지
 * @param {String} text 
 */
function fn_printMessage2(text = 'Nothing to display'){
    console.log(text);
}

fn_printMessage(false);
fn_printMessage2(false);

/**
 * Object Destructing 
 * 객체의 값을 간소화하여 선언할 수 있다.
 * @param {Object} person 
 */
function fn_displayPerson(person){
    const { name, age } = person;
    console.log(name);
    console.log(age);
}


let person = { 'name' : 'jongwon', 'age' : 27 };
fn_displayPerson(person);


/**
 * Object.assign, ... 같다 
 * 속성을 합쳐서 대입할 수 있다. 
 * 
 * ...은 배열, 객체 모두 사용할 수 있어서 매우 중요하다.
 * ...은 원소로 꺼내 사용한다는 의미로 이해하면 될듯.
 */
function fn_assignTest(){
    const item = { type : 'String', size : '5' };
    const detail = { price : 20, made : 'korea', gender : 'M' };
    
    const shirt0 = Object.assign(item, detail);
    console.log(shirt0);
    
    const shirt = {...item, ...detail}; 
    console.log(shirt);
    //{type: 'String', size: '5', price: 20, made: 'korea', gender: 'M'}
    
    console.log(item);
}

/**
 * 배열 spread 팁
 */
function fn_arraySpreadTest(){
    let fruits = [ 'berry', 'grape', 'apple' ];
    fruits = [...fruits, 'pear'];   //push
    console.log(fruits);
    
    fruits = ['banana', ...fruits]; //unshift
    console.log(fruits);
    
    
    const fruits2 = ['melon', 'peach', 'pineapple'];
    let combined = fruits.concat(fruits2);
    combined = [...fruits, 'cherry', ...fruits2];
    
    console.log(combined);
}



/**
 * 배열 중복 제거 
 */

function fn_isExist(array){
//  const array = [ 'dog', 'mouse', 'cat', 'dog', 'dog', 'cat' ];
    console.log([...new Set(array)]);
}

/**
 * Optional Chaning
 * 연산자 ?.는 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
 * ?.은 ?. 앞의 평가 대상이 undefined 나 null이면 평가를 멈추고 undefined를 반환
 * 단락 평가(short-circuit)라고 부른다.
 * 즉 ?.의 평가가 멈췄을 경우 오른쪽 피 연산은 수행하지 않음.
 * 
 * ?.은 연산자가 아니다. ?.은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체이다.
 */
function fn_optionalChaningTest(){


function fn_optionalChaningTest1(){
    let user1 = {
        admin(){
            console.log('관리자 계정입니다.');
        }
    }
    let user2 = {};
    let user3 ;
    user1.admin?.();
    user2.admin?.();
    user3?.admin?.();
}

function fn_optionalChaningTest2(){
    let user1 = {
        firstName : 'Violet'
    };

    let user2 = null;

    let key = 'firstName';
    console.log(user1?.[key]);
    console.log(user2?.[key]);
    console.log(user1?.[key]?.something?.not?.existing);
}

/**
 * title의 값이 있으면 title 없으면 empty
 */
function fn_optionalChaningTest3(){
    let person = { job : { title : 'testTitle' } };
    const title = person.job?.title ?? 'empty';
    console.log(title);
}

fn_optionalChaningTest1();
fn_optionalChaningTest2();
fn_optionalChaningTest3();
}

function fn_templateLiteralsTest(){
    const person = {
        name : 'jongwon',
        score : 4
    };
    const { name, score } = person;
    console.log(`이름 : ${name}, 점수 : ${score}`);
}
//fn_templateLiteralsTest();

function fn_cleanLooping(){
    // Looping
    const items = [1, 2, 3, 4, 5, 6];
    const result = items.filter((num) => num % 2 === 0).map( (num) => num * 4 ).reduce( (a, b) => a + b, 0 );
    console.log(result);
    console.log(items.filter((num) => num % 2 === 0));  //짝수
    console.log(items.filter((num) => num % 2 === 0).map( (num) => num * 4 ));  //num *= num * 4
    console.log(items.filter((num) => num % 2 === 0).map( (num) => num * 4 ).reduce( (a, b) => a + b, 0 ));  
    console.log(items.filter((num) => num % 2 === 0).map( (num) => num * 4 ).reduce( (a, b) => a + b));  //뒤에 0은 시작 값
}

fn_cleanLooping();