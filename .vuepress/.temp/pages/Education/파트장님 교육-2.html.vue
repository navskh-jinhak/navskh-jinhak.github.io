<template><div><h1 id="객체-기본-이어서" tabindex="-1"><a class="header-anchor" href="#객체-기본-이어서" aria-hidden="true">#</a> [객체:기본 이어서]</h1>
<p>arrow function 이 나온 배경
this는 런타임 시 결정 됨</p>
<p>생성자 함수의 경우</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이라고 한다면</p>
<p>User(&quot;aaa&quot;) 이런식으로 하면 안되고<br>
new User(&quot;aaa&quot;)<br>
new를 붙여줘야 해당 객체가 만들어진다.<br>
<br>
function(par, par2, ...)<br>
필수 파라미터를 넘기고, 그 외에는 optional하게 넘기고<br>
옵션을 어떻게 설정하느냐에 따라서 어떤 방식으로 쓸지를 결정할 수도 있다.<br>
함수 overriding이 안되고, overwriting이 되버리기 때문에<br>
위와 같은 기법으로 많이 쓴다.<br>
<br></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 주소 정보가 없는 사용자&lt;br></span>
<span class="token function">alert</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>address<span class="token punctuation">.</span>street<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Cannot read property 'street' of undefined&lt;br></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br>
  과 같은 경우 <br>
  ```
  console.log(user.address && user.address.street || 'a') 
  ```
  이런식으로 찍어보면<br>
  둘다 없다 치면 'a'가 출력된다.<br>
  ```alert( user?.address?.street ); // undefined ```
  에러가 발생하지 않습니다.<br>
  이런 방식으로 간단하게 쓰면 undefined로 출력하여 검지할 수 있다.<br>
<h2 id="자료구조-자료형" tabindex="-1"><a class="header-anchor" href="#자료구조-자료형" aria-hidden="true">#</a> [자료구조, 자료형]<br></h2>
<p>Math.floor 버림<br>
Math.ceil 올림<br>
여기서 주의할 것은 -1.1 버림은 -2 가 되고 올림은 -1이 된다는 음수의 경우<br>
자바스크립트에서 숫자형 연산은 생각보다 난해하다 (주의)<br>
<br>
문자열은 재밌는게 배열이 아니지만 배열처럼 쓸 수 있다.<br></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'abc'</span><span class="token operator">&lt;</span>br<span class="token operator">></span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// a 가 된다.&lt;br></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>string에 indexof 함수도 지원해준다.<br>
<br>
string 안에 right라는 함수를 만들 수 있다.<br>
string.right 를 쓸 수 있다.<br>
array.remove도 만들 수 있다.<br>
<br>
object에 뭘 만들 수 있는데... 그러면 다 쓸 수 있고 <br>
근데 문제 될 수 있으니 웬만하면 안쓰는게 좋다.<br>
<br></p>
<h4 id="mdn-을-보는-방법" tabindex="-1"><a class="header-anchor" href="#mdn-을-보는-방법" aria-hidden="true">#</a> mdn 을 보는 방법<br></h4>
<p>&quot;새 배열을 반환한다.&quot; 는 문구가 있으면 해당 배열은 그대로고 새로운 배열을 만드는 것이고<br>
이런 문구가 없으면 그 원본 배열을 바꾸는 것이다.<br>
이 문구를 잘 보면서 써야 한다.<br>
<br></p>
<h4 id="배열에서" tabindex="-1"><a class="header-anchor" href="#배열에서" aria-hidden="true">#</a> 배열에서.. <br></h4>
<p>var arr = [];<br>
arr.length = 1000000; 으로 넣어주면<br>
arr를 출력해보면 백만이 됨<br>
실제 길이가 바뀜. 그런데 그만큼 메모리를 차지하는 것은 아님.<br>
<br></p>
<ul>
<li>
<p>filter는 반드시 return true를 써줘야함.<br>
<br></p>
</li>
<li>
<p>sort 정렬은 유니코드에 따라 정렬하는 거기 때문에 제대로 잘 안되고<br>
비교연산으로 만들어주는게 낫다. <br>
배열함수의 경우 많이 쓰게 될 것이다 써보면 생각보다 어렵지는 않다.<br>
<br></p>
</li>
<li>
<p>reduce() 어렵지만 여러가지 많은 것을 할 수 있다.<br>
<br></p>
</li>
</ul>
<h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h4>
<p>object에<br>
object.key<br>
object.value<br>
<br></p>
<ul>
<li>for .. of 는 array에만 되는데<br>
object의 경우 key, value를 참조해서 for 문 돌려도 됨<br>
<br></li>
<li>구조분해 할당<br>
배열, 객체의 경우 모두 가능..<br>
객체의 경우는 key값에 대응해줘야함.<br>
<br></li>
<li>date<br>
커스텀한 형식으로 붙이기 위한 예외처리를 해줘야 함.<br>
한달을 더해야하냐, 30일을 더해야하냐...<br>
moment에 있는 걸로 쓴다고 함.<br>
<br></li>
<li>JSON OBJECT 임.<br>
parse를 하는데 오류가 난다. key value 모두 &quot;&quot; 묶여있는지 확인<br>
toJSON 함수 통해 만들 수 있음.<br>
<br></li>
<li>전개 문법<br>
...arg<br>
이 경우 arg를 배열로 만들어준다.<br>
이렇게 안쓸 경우는<br>
argument[0], ... 이렇게 표시하지만 얘는 배열은 아님<br>
이 두개의 가장 큰 차이는 Array.prototype 의 함수를 온전히 쓸 수 있냐 없냐의 차이는<br>
<br></li>
<li>변수의 유효범위 클로저<br>
일단 변수 호출을 보고 싶으면 (어디 어떤 애가 호출 된건지 보고 싶으면) console.trace를 쓰는게 좋다.<br>
<br></li>
<li>함수 내의 함수<br>
클로저의 대표적인 것은 함수 즉시 실행 () 얘<br>
<br></li>
<li>'var'는 블록단위에서만 접근 가능<br>
<br></li>
<li>전역 객체 : window<br></li>
<li>var로 선언한 것은 delete가 안됨<br>
<br></li>
</ul>
<h4 id="폴리필-사용하기" tabindex="-1"><a class="header-anchor" href="#폴리필-사용하기" aria-hidden="true">#</a> 폴리필 사용하기<br></h4>
<br>
  함수도 객체임..<br>
  익명함수 남용은 좋지 않다<br>
<br>
  new function 함수 자체를 동적으로 생성할 수 있다.<br>
<br>
  함수가 너무 많아서 너무 실행시간이 길어져서.. <br>
  실행 시간을 너무 오래 걸려서 에러페이지 뜰 수 있음<br>
  setTimeOut안에 넣어서 실행하면 이벤트 큐에 넣겠다는 것이다.<br>
<br>
  또 콜백함수를 쓸줄 몰라서<br>
  setTimeOut으로 대략의 시간을 예상해서 다음으로 실행하게 만들지 말 것<br>
<br>
  call/apply 를 써서 원서 자동 테스트 쪽에서 사용한다.<br>
  결국에 그 함수를 갔다쓰겠다는 것이다.<br>
<br>
  함수 바인딩<br>
  this<br>
<br>
<h2 id="객체-프로퍼티-설정" tabindex="-1"><a class="header-anchor" href="#객체-프로퍼티-설정" aria-hidden="true">#</a> [객체 프로퍼티 설정]<br></h2>
<p>프로퍼티 플래그<br>
프로퍼티 설정 막아주는 애들... freeze 같은 애들 있는데 이런 애들은 브라우저 별로 다르기 때문에 잘 보고 쓸 것<br>
<br>
get,set은 뷰에서 쓰는 기본 개념이다 정도만<br>
<br>
프로토타입<br>
인터넷에 내가 쓰는 객체의 프로토 타입을 찾아볼 순 있지만 거의 뭐 찾아볼일 없음<br>
<br>
상속 받은 프로퍼티를 수정할 땐<br>
Array.c = ... 이렇게 쓰면 프로퍼티 추가이지 상속받은 애 쓰는 거 아님<br>
Array.<strong>proto</strong>.c = ... 이렇게 써야함.<br>
<br>
체이닝...<br>
프로토타입 체이닝, 연쇄적으로 찾아가는 것 가능<br>
<br>
Object.create(null) 로 객체 생성할 수 있는데 용법이 다르기 때문에 <br>
가끔 있는데 리터럴로 생성하는게 좋음.<br>
<br></p>
<h2 id="클래스" tabindex="-1"><a class="header-anchor" href="#클래스" aria-hidden="true">#</a> [클래스]<br></h2>
<p>클래스는 함수임!<br>
extends 에 대해서..<br>
이게 ecma5 의 표준이 아님.<br>
그래서 prototype을 직접 지정하여서 만드셨음<br>
<br>
extends 같은 기능을 쓰려면 웹팩을 가져와서 써야 하고<br>
열줄 코드가 1mb 가 넘을 수 있게 됨..<br>
깔끔한 코드는 이런걸 생각해야 함.<br>
<br>
instanceof 를 통해 그 클래스로 만들어진 객체인지를 확인할 수 있음<br>
<br>
typeof 로는 Array와 Object 가 비교가 안됐는데<br>
object.prototype.toString() 에 쓰면 가능하다.<br>
object.prototype.toString.call(value) 를 받으면 됨<br>
<br></p>
<h2 id="에러-핸들링" tabindex="-1"><a class="header-anchor" href="#에러-핸들링" aria-hidden="true">#</a> [에러 핸들링]<br></h2>
<p>이거 쓰면 디버깅이 잘 안되기도 함.<br>
거의 안쓰는 것 같은데, 라이브러리에서 가끔, 정말 필요한데 없는 경우 throw로 에러를 보낸다.<br>
<br>
window.onerror 를 쓰면 전역 에러를 조작해줄 수 있음 원서접수에 많이 쓰여있음<br>
<br>
커스텀에러 노드에서 많이 쓰임<br>
<br></p>
<h2 id="프라미스-async-await" tabindex="-1"><a class="header-anchor" href="#프라미스-async-await" aria-hidden="true">#</a> [프라미스 async, await]<br></h2>
<h4 id="_1-콜백" tabindex="-1"><a class="header-anchor" href="#_1-콜백" aria-hidden="true">#</a> 1. 콜백<br></h4>
<p>자바스크립트는 1급함수이다<br>
자바스크립트는 콜백을 함수 개념으로 던짐<br>
c#은 순차 실행에 가까움<br>
자바스크립트는 순차 실행이 안되는게 많음<br>
ajax, dom 컨트롤, 대부분 비동기로 동작함<br>
<br>
어떤 함수 중간에 시점을 줘서 그 시점에 함수를 출력해주겠다는 것.<br>
모의 논술이 콜백 <br>
콜백 중첩 콜백 엉망진창 보기 정말 어려움<br>
<br>
그래서 편하게 쓰기 위해서 만든 것이 promise 임.<br>
<br></p>
<h4 id="_2-promise" tabindex="-1"><a class="header-anchor" href="#_2-promise" aria-hidden="true">#</a> 2. promise<br></h4>
<p>ie에서 제공안하는데, 폴리필이 있음.<br>
resolve, reject<br>
프라미스 객체가 만들어지고<br>
콜백 두개 생기는 것임.<br>
resolve, reject를 실행시키면 됨<br>
<br>
promise = 함수 실행<br>
promise.then = 그 다음 함수<br>
promise.then = 그 다음 함수<br>
이런 식으로 콜백 hell 을 방지할 수 있다.<br>
근데 실제 사용해보면 쉽지는 않단다.<br>
그러므로 잘 찾아서 써보는 걸 추천<br>
<br>
fetch라는 애가 있는데 ajax임 정말 단순하게 쓸 수 있는.<br>
fetch는 promise 임.<br>
그냥 fetch를 통해서 callback 을 할 수 있다.<br>
.then으로 체이닝을 해야 한다.<br>
<br>
catch, then은 계쏙 연쇄 반응을 일으킬 수 있다.<br>
<br>
한번에 여러개를 가져와서 그걸 쓰겠다. promise.all<br>
jQuery에서 $when(안에 두개의 $.ajax) 두개를 한꺼번에 받는 것임<br>
하고 .then() 이런식으로...<br>
두개 합쳐서 한번에 가져와 이게 이제 되는 것이다 옛날엔 api 만들어줬음<br>
js에선 promise all이라는 애가 있음<br>
<br>
promise.race 언제쓸지 모르겠음<br>
<br>
프라미스 화 굳이..<br>
<br>
비동기적인 실행이 가능한 이유.<br>
마이크로 태스크 큐<br>
<br>
마지막에 .catch 를 넣어주면 에러 잡을 수 있음 안넣주면 에러뜸<br>
<br></p>
<h4 id="_3-async-await" tabindex="-1"><a class="header-anchor" href="#_3-async-await" aria-hidden="true">#</a> 3. async, await<br></h4>
<p>async는 그냥 쓴다고 달라지는건 없는데 await를 안에 쓰려면 써야 함<br>
중요한건 awiat<br>
async로 감싸는 순간 그 함수가 promise가 된다.<br>
<br>
await를 쓰면 .then이 없어짐<br>
바로 다음줄 실행 됨.<br>
await는 윈도우에서 실행 안됨<br>
<br></p>
<h2 id="제너레이터와-비동기-이터레이터" tabindex="-1"><a class="header-anchor" href="#제너레이터와-비동기-이터레이터" aria-hidden="true">#</a> [제너레이터와 비동기 이터레이터]<br></h2>
<p>이건 어따 쓸지 아직까지 모르겠음<br>
랜덤 문자열 발생? 차라리 딴거 쓰는게 낫지<br>
<br></p>
<h2 id="모듈" tabindex="-1"><a class="header-anchor" href="#모듈" aria-hidden="true">#</a> [모듈]<br></h2>
<p>minify<br>
uglify 최대한 작게 만들겠다는 것임. <br>
name, value, key 를 a,b,c 로 치환 해버림<br>
그러면 디버깅 할 때 어려워짐<br>
js.map 파일<br>
uglify 과정에서 어떤 변수가 뭘로 맵핑 됐다는 것을 표시해주는 파일<br>
=&gt;  min.js 파일이 만들어짐<br>
용량 줄이는 것과<br>
노출 안되는 것에 목적이 있다.<br>
그래도 알 사람은 안다.<br>
<br>
스크립트에 defer 속성을 주면<br>
무시하고 넘어감.<br>
script load를 빠르게 해줌<br>
<br></p>
<h2 id="기타" tabindex="-1"><a class="header-anchor" href="#기타" aria-hidden="true">#</a> [기타]<br></h2>
<p>자바스크립트의 한계를 뛰어넘은게<br>
2008, 2015년이 1,2단계<br>
여전히 막강함.<br>
많이 알아둘수록 나쁠게 없음<br>
<br>
proxy 는 가로채기의 의미<br>
뷰가 이거 썼음. <br>
getter, setter가 모양이 바뀌었구나 정도 알면 됨<br>
<br></p>
<ul>
<li>Eval <br>
vue에서도 eval을 써서 그 안에서 실행시키는 코드를 사용한 듯<br>
<br></li>
<li>curry<br>
log를 찍을 때, 에러에 대한 로그..<br>
어떤 단계에서 로그를 찍을 지 결정이 필요함.<br>
log(a name, b name, c name);<br>
==&gt; log(a name)(b name)(C name);<br>
나눠서 분할 연산을 함으로써 어디서 문제가 생겼는지 trace 할 수 있음<br>
<br>
lodash 를 쓰면 알아서 이렇게 바꿔줌 curried..<br>
<br></li>
</ul>
<ul>
<li>DOM 시작<br>
[문서]<br>
META 네임은 잘 안씀 다양한 플랫폼 정보를 담고 있는 것임<br>
언어, LOCALE, 호환 정보 등.<br>
B2B에서는 거의 쓸일 없음, 중요치 않으니까 유저가 정해져 있으니까<br>
<br>
innerHTML   html 콘텐츠<br>
<br>
ie에서는 tbody를 안만들어줌<br>
<br>
jQuery 가장 중요한 것은<br>
셀렉터를 잘 만들어내는 것이 관건이다.<br>
dom 트리 생각해서 셀렉터 만드는 것이 중요<br>
<br>
굉장히 많은 메서드가 있는데 이 것은 jQuery 공부하는게 제일 좋다.<br>
<br>
애니메이션은 jquery나 bootstrap을 쓰기.<br></li>
</ul>
</div></template>
