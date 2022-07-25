<template><div><p>2021.04.13</p>
<h1 id="javascript-기본" tabindex="-1"><a class="header-anchor" href="#javascript-기본" aria-hidden="true">#</a> javascript 기본</h1>
<p>ECMA5 가 현재 표준이고, ECMA6 는 아님
근데 지금 공부하는 사이트는 모던 환경임.</p>
<h2 id="_1-javascript는" tabindex="-1"><a class="header-anchor" href="#_1-javascript는" aria-hidden="true">#</a> 1. JavaScript는...</h2>
<pre><code>ECMAscript가 원래 명칭 
스크립트 엔진이 돌아가야 함. (브라우저별로 다름)
※ ie는 ecma6를 지원안하고, 다 지원함. ie만 안쓰면 됨.
</code></pre>
<h3 id="엔진의-종류" tabindex="-1"><a class="header-anchor" href="#엔진의-종류" aria-hidden="true">#</a> 엔진의 종류</h3>
<pre><code>1) V8 Chrome과 opera v8 엔진이 서버사이드에서 동작할 수 있게 했음
  자바스크립트만으로 개발 가능하게 되었다
2) SpiderMonkey : FireFox
3) Trident, Chakra : Ie

js만 알면 안되고, html, css 를 잘 알아야 함
왜냐 js는 결국 dom 을 건드리는 애기 때문에.
</code></pre>
<h3 id="자바스크립트로-transipile-될-수-있는-언어들" tabindex="-1"><a class="header-anchor" href="#자바스크립트로-transipile-될-수-있는-언어들" aria-hidden="true">#</a> 자바스크립트로 transipile 될 수 있는 언어들.</h3>
<p>다른 언어로 작성했으나 자바스크립트로 변환가능</p>
<ul>
<li>
<p>TypeScript : 자료형의 명시화, 개발을 단순화, 복잡한 시스템 지원
요즘 뜨고 있음.  팀웤으로 만들 때 대형 기획일수록 형규약이 필요함. 그래서임..
vuejs도 v3로 가면서 TypeScript를 지원했음. 이것도 공부하는 건 나쁘지 않음.</p>
</li>
<li>
<p>vscode가 javascript로 만들어져 있음.</p>
</li>
<li>
<p>일렉트론
윈도우 프로그래밍인데, html로 떨어짐.
c#의 ui 제어하여 이쁘게 나오기가 힘듬.
html로 구현하면 디자인은 이쁘게 나올 수 있음.</p>
</li>
</ul>
<h2 id="_2-매뉴얼과-명세서" tabindex="-1"><a class="header-anchor" href="#_2-매뉴얼과-명세서" aria-hidden="true">#</a> 2. 매뉴얼과 명세서</h2>
<pre><code>- ECMA-262 가 명세서 이름. (계속 업그레이드 됨.)
볼필요는 없는데, 그냥 이런게 있구나 
- MDN JavaScript Reference (이걸 제일 많이 봄.)
- caniuse.com (여기서 최신 브라우저 호환성, 개발자의 숙명)
</code></pre>
<h2 id="_3-코드-에디터" tabindex="-1"><a class="header-anchor" href="#_3-코드-에디터" aria-hidden="true">#</a> 3. 코드 에디터</h2>
<ul>
<li>
<p>vscode 에 익스텐션 설치할 때... (내부망, 오프라인 환경)
vsix : visual studio marcketplace라는 곳을 통해 다운로드</p>
</li>
<li>
<p>모던웹이란
html5
css3
ECMAscript6 이상을 모던 웹이라고 한다.</p>
</li>
<li>
<p>doctype이라는 게 있음.</p>
<!DOCTYPE HTML ...>
<p>이게 HTML 4.0을 지원하고, ... 이렇게 되는데
HTML5는 완전히 지원하지 않는다.
이럴 땐, JQUERY로 작성하는게 정신 건강에 이롭다.
근데 <!DOCTYPE HTML> 이렇게 끝나면 5 지원하겠다는 것임</p>
</li>
</ul>
<h2 id="_4-웹표준" tabindex="-1"><a class="header-anchor" href="#_4-웹표준" aria-hidden="true">#</a> 4. 웹표준,</h2>
<p>우리나라, 국제 표준이 있음
보통 공공기관에서 제공함.
MVC 패턴, MVVM 패턴을 구현하려면, 웹퍼블리셔라는 사람이 있어야
기능별로 명확하게 구분된다.</p>
<p>개발자 도구에 들어가서
네트워크 부분을 보면
finish 모든 데이터가 렌더링, 온로드 자바스크립트가 다 완료된 시점
위에서는 css만 로딩한다.
그 다음 dom 로딩
그리고 js 로딩</p>
<p>cdn에 있는 것들은 자주 변하지 않는 것들이다.
cdn을 쓰는 이유가 뭐냐..
서버 리소스를 적게 먹는 것이 중요하다.
특징은 한번 올리면 캐시 갱신하기 어렵다.</p>
<h2 id="_5-코드-구조" tabindex="-1"><a class="header-anchor" href="#_5-코드-구조" aria-hidden="true">#</a> 5. 코드 구조</h2>
<h5 id="문-세미콜론-주석의-의미에-대해서" tabindex="-1"><a class="header-anchor" href="#문-세미콜론-주석의-의미에-대해서" aria-hidden="true">#</a> 문, 세미콜론, 주석의 의미에 대해서</h5>
<p>개발 표준 방법론,
세미콜론은 뒤에 붙이는 것이 좋다.
그 한라인이 끝나는 것에 대한 보장을 확실히 해주기 때문.
return, {} 부분 때문임.
front end 모던 문법을 쓰면 (ESlint)
그 문법 쓰는 것을 강제할 수 없다.
테스트 해주기도 하는데
세미 콜론을 붙이면 에러를 냄.
왜냐.. 세미콜론 붙이면 용량 잡아먹는단다..
붙이는게 좋다.</p>
<p>strict 모드 (엄격모드)
엄격한 검사 모드를 쓴다.
어느 정도 문법 검사를 해준다고만 알고 있으면 됨
보통 함수 안에 쓰는 경우가 많은데
global로 쓰면 그 페이지가 뻗는 경우 많음. (팀작업하는 경우)</p>
<h2 id="_6-변수와-상수" tabindex="-1"><a class="header-anchor" href="#_6-변수와-상수" aria-hidden="true">#</a> 6. 변수와 상수</h2>
<p>let, const를 자주 사용함. ie11에서도 거의 지원 안함.</p>
<hr>
<h1 id="자바스크립트-고급" tabindex="-1"><a class="header-anchor" href="#자바스크립트-고급" aria-hidden="true">#</a> [자바스크립트 고급]</h1>
<p>일단 들어보기</p>
<h2 id="_1-hoisting" tabindex="-1"><a class="header-anchor" href="#_1-hoisting" aria-hidden="true">#</a> 1. hoisting</h2>
<p>자바스크립트는 이걸 거침
끌어올려진다.
끌어올려서 먼저 뭐가 있는지 확인하고 그 다음 쭉쭉쭉 실행됨.</p>
<ul>
<li>변수에 대한 호이시팅</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 해도 에러가 안됨.
var foo가 끌어올려짐.</p>
<ul>
<li>
<p>함수에 대한 호이스팅
함수는 조금 다름, <b>함수는 선언, 할당, 초기화 다 되고 올림
그리고 함수 호출하면 그대로 실행함.</b></p>
</li>
<li>
<p>윈도우 전역객체</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"String"</span><span class="token punctuation">;</span>
pStr <span class="token operator">=</span> <span class="token string">"property string"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>윈도우라는 객체가 있고
str은 윈도우의 지역변수가 되고
pStr 은 윈도우의 프로퍼티가 됨.</p>
<ul>
<li>함수 영역 내부에서도 변수의 호이스팅이 발생한다. (렉시컬 환경에 맞게)</li>
</ul>
<h2 id="_2-execution-context" tabindex="-1"><a class="header-anchor" href="#_2-execution-context" aria-hidden="true">#</a> 2. Execution Context</h2>
<p>실행 가능한 코드블럭 실행되는 환경
Global
Eval 함수.
Function Code</p>
<p>여기서 핵심은 뭐냐면
함수가 호출되면 그 함수의 렉시컬 환경과, 그 렉시컬 환경이 상위 글로벌 옵젝트에서 참조해오는 환경이 있어
이렇게 스코프 체이닝이 이뤄진다는 것이고
우선순위는 무조건 가까운거 부터야.
const는 밖에서 선언했으면 어디서든 중복해서 선언할 수 없음</p>
<h2 id="_3-closure" tabindex="-1"><a class="header-anchor" href="#_3-closure" aria-hidden="true">#</a> 3. closure</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  title   <span class="token operator">...</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inner = outer 라고 하면
inner 호출 시 title이 호출 되는데
global 에선 title 못찍음</p>
<p>이건 좀 어렵다.
변수를 선언했는데 내가 원하는대로 안나옴
이건 closure 문제인 경우가 대부분임.</p>
<h2 id="_4-object-array-function" tabindex="-1"><a class="header-anchor" href="#_4-object-array-function" aria-hidden="true">#</a> 4. object, array, function</h2>
<p>자바스크립트는 대부분 객체이다.
undefine(is not defined 아니고)
null
NaN 이거 빼고 다 객체임.</p>
<p>선언에서오는 속도차이
생성자 사용보다 리터럴 사용이 훨씬 빠름.
그리고 생성자는 오버라이딩 될 위험이 있음
그래서 생성자보다 리터럴을 쓰는 경우가 좋음.</p>
<p>함수도 생성자가 있음.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token string">"y"</span><span class="token punctuation">,</span> <span class="token string">"return x+y;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이게 함수의 동적 선언 x,y 인수 세번째가 바디가 됨</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자 여기서 차이점은 첫번째 두번째는 var로 만든거임.
이건 변수 호이스팅이 되고, 위에서 호출할라고 하믄 안됨
세번째는 함수 호이스팅이므로 어디서든 호출 가능</p>
<p>------------------------------------------------여기까지가 고급 JS------------------------------------------------</p>
<p>다시 변수부분 (6번 이어서) 정리하면...
웬만하면 const를 쓰고
재할당 할거면 let을 쓰라는 거임</p>
<p>어렵게 개발하지 말고
일단 개발해서 되면은 바꿔보고 해보고..
그게 경험이고 그게 가장 좋음.</p>
<h2 id="_6-자료형" tabindex="-1"><a class="header-anchor" href="#_6-자료형" aria-hidden="true">#</a> 6. 자료형</h2>
<p>: BigInt 자료형은 숫자 끝에 n을 붙인다. (사파리, ie 그냥 크롬에 맞추는게 제일 좋음)
backtick 문자열. ` 이건데 따옴표 여러개 넣고 싶은 경우 &quot;안에 `` 넣어줄 수 있으니까&quot; 또 외부에서 선언된 변수 자동으로 넣을 수 있음
(이게 제일 좋다.)</p>
<p>심볼.. ecma6에서 나왔는데 잘 안씀.</p>
<p>typeof 의 경우  array는 표시 안해줌
NaN도 숫자형이라 보면 된다.</p>
<hr>
<h2 id="_7-getter와-setter" tabindex="-1"><a class="header-anchor" href="#_7-getter와-setter" aria-hidden="true">#</a> 7. getter와 setter</h2>
<p>값을 가져갈 때, 값을 세팅할 때 그 시점에 함수를 선언해서 제어할 수 있다.
이게 뷰의 개념임.</p>
<ul>
<li>뷰가 신기한게 setter와 getter 의 동작으로 혹은 proxy를 통해서 실시간 업데이트를 해줌</li>
</ul>
<ul>
<li>뷰의 신기한 점
input에 입력할 때마다 위의 string이 바뀌게 할 수 있는게
input에 입력받는 시점에 setter를 불러와 update를 해주기 때문임!!
옛날에 게시판 만들 때
회원가입에서 비밀번호 확인할 때 기억해봐..
ie9 에서 동작 안함.</li>
</ul>
<h2 id="_8-alert-prompt-confirm" tabindex="-1"><a class="header-anchor" href="#_8-alert-prompt-confirm" aria-hidden="true">#</a> 8. alert, prompt, confirm</h2>
<p>중단이 필요할 때
원서쪽도 쓸 예정에 있음</p>
<h2 id="_9-형변환" tabindex="-1"><a class="header-anchor" href="#_9-형변환" aria-hidden="true">#</a> 9. 형변환</h2>
<p>형변환 하는 경우 거의 없음.</p>
<p>falsy 밸류
false가 아님.
자바스크립트 상에 연산자 구문으로 동작했을 때.
false로 간주되는 값
null, undefine, NaN, &quot;&quot;, 0 이런애들..
falsy object라고 한다.</p>
<h2 id="_10-기본연산자" tabindex="-1"><a class="header-anchor" href="#_10-기본연산자" aria-hidden="true">#</a> 10. 기본연산자</h2>
<p>거듭제곱 연산자는 못쓰는 브라우저도 있음 ecma6d임</p>
<ul>
<li>형변환 우선순위
숫자 + 문자열은 문자열로 취급</li>
</ul>
<p>가장 좋은 정수 형변환
parseInt(&quot;32&quot;,10) 10진법으로 문자열 변환해라...
계산하기 힘든 애들
부동소숫점 : 연산하려면 노가다 필요함
date 연산자 : 쓰는 라이브러리 정해져있음 모먼트??</p>
<p>비트연산자도 거의 안씀.</p>
<h2 id="_11-비교연산자" tabindex="-1"><a class="header-anchor" href="#_11-비교연산자" aria-hidden="true">#</a> 11. 비교연산자</h2>
<p>문자열 비교.. 많이 쓰이는 쪽. array sorting 할 때.<br>
근데 이 때 사전순이 아니라 대소문자 따지는 유니코드 순임!</p>
<h2 id="_12-if문-조건처리" tabindex="-1"><a class="header-anchor" href="#_12-if문-조건처리" aria-hidden="true">#</a> 12. if문 ? 조건처리.</h2>
<p>3항 연산자가 있다..</p>
<h2 id="_13-논리-연산자" tabindex="-1"><a class="header-anchor" href="#_13-논리-연산자" aria-hidden="true">#</a> 13. 논리 연산자</h2>
<p>굉장히 많이 쓰임.(생각보다)
앞에가 true로 떨어지면 뒤에가 실행이 안됨을 유용하게 쓴다.</p>
<p>alert(alert(1) || 2 || alert(3));
이러면 alert(1) 실행 =&gt; 반환값 undefine
그리고 alert(2) 가 실행되고 종료.</p>
<h2 id="_14-null-병합-연산자" tabindex="-1"><a class="header-anchor" href="#_14-null-병합-연산자" aria-hidden="true">#</a> 14. null 병합 연산자</h2>
<p>뭐 이런게 있다 정도.</p>
<h2 id="_15-while-for-구문" tabindex="-1"><a class="header-anchor" href="#_15-while-for-구문" aria-hidden="true">#</a> 15. while, for 구문</h2>
<p>while을 쓰는 경우는 내부에 break을 하는 경우에만 쓰였음.
for(let i=0;..) 이런식으로 쓴 i는 이 안에서만 쓸 수 있다.
continue는 반복문에서만 쓸 수 있는 것이다.
함수에서 중지시키려면 return 임.</p>
<h2 id="_16-switch-문" tabindex="-1"><a class="header-anchor" href="#_16-switch-문" aria-hidden="true">#</a> 16. switch 문</h2>
<p>스위치 문 별로라는 책도 있었는데 뭐 써도 상관 없는 것 같다.
break만 잘 쓰면 됨.</p>
<h2 id="_17-함수" tabindex="-1"><a class="header-anchor" href="#_17-함수" aria-hidden="true">#</a> 17. 함수</h2>
<p>함수의 기본값 설정이 가능하다.</p>
<p>return은 줄바꿈을 주의하자 줄바꿈 되는 즉시 return ; 으로 변환됨.</p>
<p>continuePrime, nextPrime 이런거 안씀..</p>
<ul>
<li>
<p>IIFE
함수에 이름 없이 그냥 선언한 함수를 그냥 실행해버림
엄청 많이 쓰임.
안에 변수를 선언해두고 이 변수들은 밖에서 접근 못함
그냥 함수만 사용할 수 있음.</p>
<p>외부에서 접근 불가 호출할 수 없고, 익명함수라고도 함.
&quot;전역스코프 레벨의 오염이 되지 않게 한다고 하네&quot;
그리고 (function(){})(); 이렇게 써야 함. 꼭 뒤에 (); 가 있어야 함.
외국의 라이브러리는 대부분 이런 기법 다 씀!</p>
<p>함수의 복사는 함수의 주소를 복사해서 주소에서 호출해오는 것이다.
c#에선 이게 얼마나 어려운 것인지...
그런데 자바스크립트에선 그냥 막 던지고 받을 수 있다.</p>
<p>ajax는 기본적으로 동일 도메인 원칙을 따지는데..
ajax는 콜백을 던져서 그 함수로 실행하라는 것임
jsonP는 함수 이름만 던짐
그 결과에서 함수 이름을 실행해버림.
여기선 함수 명을 던지는 것임.</p>
</li>
</ul>
<h2 id="_18-arrow-function" tabindex="-1"><a class="header-anchor" href="#_18-arrow-function" aria-hidden="true">#</a> 18. arrow function</h2>
<p>가독성이 너무 떨어짐.
함수인지 아닌지 조차 알 수 없어서... 잘 안쓴다함.</p>
<h1 id="코드-품질" tabindex="-1"><a class="header-anchor" href="#코드-품질" aria-hidden="true">#</a> [코드 품질]</h1>
<h2 id="_1-크롬으로-디버깅하기" tabindex="-1"><a class="header-anchor" href="#_1-크롬으로-디버깅하기" aria-hidden="true">#</a> 1. 크롬으로 디버깅하기</h2>
<p>breakpoint를 만들어 디버깅하는 것 보다.</p>
<p>console 객체의 메서드를 많이 쓰는데.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  console.dir 호출 트리 볼 때 사용  
  console.log
  console.trace : 내가 찍은 포인트 내에서 trace내에서 argument를 가져옴 이거 괜찮음
  console.group
  console.groupend
  console.time
  console.timeend 그 차이의 시간을 출력해줌
  console.warn 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-코딩-스타일" tabindex="-1"><a class="header-anchor" href="#_2-코딩-스타일" aria-hidden="true">#</a> 2. 코딩 스타일</h2>
<p>딱히... 필요 없음
시작지점이 잘 안보여서 중괄호 if문 뒤에 쓰기도 함.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게</p>
<p>backtick 문자열 좋음 `` 그 안에 무조건 문자열로 취급함</p>
<p>immutable 불변 객체
number, string
a라는 변수에 abc할당하고
a = &quot;abc&quot;;
a = a + &quot;abc&quot;;
string 하나에 문자열 넣어놓고
for 문으로 덧붙여서 나가는 경우가 있음</p>
<p>linter
오타, 코드 강제로 할당
띄어쓰기도 막는 경우 있음.
번거롭지만 오류는 안나게 막을 순 없다.</p>
<h2 id="_3-주석" tabindex="-1"><a class="header-anchor" href="#_3-주석" aria-hidden="true">#</a> 3. 주석</h2>
<p>요즘 트렌드는</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 
 * 
 * 관련 코드 설명 변수 파라미터 등 (타입스크립트)
*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>뭐 이런식으로 쓴댜.</p>
<ul>
<li>Devops 는 내가 주석을 써두면 주석에 맞게 명세서를 자동으로 만들어줌.</li>
</ul>
<h2 id="_4-테스트-자동화-mocha" tabindex="-1"><a class="header-anchor" href="#_4-테스트-자동화-mocha" aria-hidden="true">#</a> 4. 테스트 자동화 mocha</h2>
<p>테스트 모듈을 만들어서 그 모듈을 devops에 만들어두면</p>
<h2 id="_5-폴리필" tabindex="-1"><a class="header-anchor" href="#_5-폴리필" aria-hidden="true">#</a> 5. 폴리필</h2>
<p>mdn 보는방법
어디어디 지원하는지 볼수 있는데
거기서 지원하지 않는 브라우저면 어떻게 하느냐
폴리필을 추가해주면 거기서 특정기능을 사용할 수 있게 만들어주겠다는 것임.</p>
<h1 id="객체-기본" tabindex="-1"><a class="header-anchor" href="#객체-기본" aria-hidden="true">#</a> [객체:기본]</h1>
<h2 id="_1-객체" tabindex="-1"><a class="header-anchor" href="#_1-객체" aria-hidden="true">#</a> 1. 객체</h2>
<p>for .. in 쓰지말 것.
in object 상속을 통한 프로퍼티도 다 돌면서 가져옴
그러니 for of를 쓰는게 낫다. 그건 상속 무시하고 그 객체에 있는 프로퍼티만 가져옴.</p>
<h2 id="_2-참조에-의한-객체-복사" tabindex="-1"><a class="header-anchor" href="#_2-참조에-의한-객체-복사" aria-hidden="true">#</a> 2. 참조에 의한 객체 복사</h2>
<p>객체는 call by Reference
assign을 통해 객체 복사가 가능하다.
여기서 객체안에 중첩 객체의 경우는 assign으로 안된다. call by Reference이기 때문.
deep으로 들어가서 getter, setter 모두 다 오버라이딩 하겠다.</p>
<p>loadash는 굉장히 많이 쓰이는 객체중에 하나임.
얘 안에 deepcopy라는 애가 있음 얘 쓰면 됨.</p>
<p>loadash, jQuery, moment 이런 애들 많이 쓰임</p>
<p>deep copy 에 대해서
jQuery에선 딥 복사 가능
deep copy 방법 2개 있음</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> object1<span class="token punctuation">,</span> object2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token constant">STRINGFY</span><span class="token punctuation">(</span>object1<span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>함수가 있으면 얘기는 달라짐.</p>
<h2 id="_3-가비지-컬렉션" tabindex="-1"><a class="header-anchor" href="#_3-가비지-컬렉션" aria-hidden="true">#</a> 3. 가비지 컬렉션</h2>
<p>우리가 아무리 해도 케어를 못함.
언제 없어지는지도 몰라.
가비지 컬렉터가 있구나 정도만 알면 됨.</p>
<h2 id="_4-메서드와-this-중요" tabindex="-1"><a class="header-anchor" href="#_4-메서드와-this-중요" aria-hidden="true">#</a> 4. 메서드와 &quot;this&quot; (*중요)</h2>
<p>전역 객체의 this
: 그냥 console에 this 치면 window</p>
<p>그 외의 this</p>
<ol>
<li>object key value 안의 this는 그 object</li>
<li>new 연산자로 만들어진 객체면 그 객체
apply, call 통해서 변경 가능 함.</li>
</ol>
<p>this는 상황별로 바뀐다. (동적이다.)
this라는 애를 통해서 여러가지 속성을 통합 관리 할 수 있다.</p>
<h2 id="원서-접수-생성툴에는" tabindex="-1"><a class="header-anchor" href="#원서-접수-생성툴에는" aria-hidden="true">#</a> 원서 접수 생성툴에는..</h2>
<p>여러 필드가 있고 여러 input이 있음
this라는 거는 내 자신을 말하지만
객체의 프로토타입, 확장 다 가능하다.</p>
<p>loadash나, jQuery나, moment나 이런 애들은 함수에 this를 쓴다.
this를 통해 자신의 속성, 자신의 메서드 그대로 다 쓸 수 있다는 것이다.</p>
<p>jQuery에서 메서드 체이닝과 같은 개념에 보면 나 자신을 this 하면 됨
return this; 를 해준 것이다.</p>
<p>this 의 기능을 다시 짚어보면</p>
<ol>
<li>initialize</li>
<li>filed를 가져옴.
이 두개가 기본이고</li>
</ol>
<p>delegate pattern 이라는 패턴이 있다. (위임 방법)
여기서도 쓰이는 것이다.<br>
메서드 체이닝을 사용할 때도 return this 인거임</p>
</div></template>
