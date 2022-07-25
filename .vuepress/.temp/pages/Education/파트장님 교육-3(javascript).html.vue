<template><div><h1 id="자바스크립트-공부" tabindex="-1"><a class="header-anchor" href="#자바스크립트-공부" aria-hidden="true">#</a> 자바스크립트 공부</h1>
<h2 id="이벤트" tabindex="-1"><a class="header-anchor" href="#이벤트" aria-hidden="true">#</a> [이벤트]</h2>
<p>mouseover, mouseout<br>
mouseenter, mouseleave<br>
전자는 캡처링, 버블링 자동<br>
후자는 jquery 이벤트, 버블링 캡처링 안함.</p>
<p>keydown<br>
keyup<br>
사이<br>
keypress 라는 애가 있음<br>
뭐가 눌렸는지 볼 때 사용</p>
<p>이벤트, jquery에서 remove, removeAttribute 해서 이벤트를 지울 수도 있음</p>
<p>MVC 패턴을 지키려면<br>
HTML 에 이벤트 할당하기 보다는</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token constant">ELEM</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이런 식으로 쓰는게 좋음.<br>
왜냐면 click 이벤트를 바꾸게 되면 html 이랑 다 바꿔야 하니까.</p>
<ul>
<li>
<p>addEventListener 이런 애들 안쓰는 이유는 jQuery에선 얼마든지 onclick 이벤트 몇개씩 추가 가능하기 때문</p>
</li>
<li>
<p>stopPropagation : 버블링 막아줌</p>
</li>
<li>
<p>stopImmediatePropagation : 다른 이벤트의 버블링도 막아주고 딱 걔만 실행하고 싶을 때</p>
</li>
<li>
<p>data-action<br>
이런식으로 쓰는 경우가 있는데<br>
이는 id로 할당하는 경우엔 한계가 있으므로 다른 data라는 애를 사용하여 행동들을 관리한다는 것이다.</p>
</li>
<li>
<p>data-counter == dataset.counter<br>
이렇게 쓰기도 한다</p>
</li>
<li>
<p>커스텀 이벤트 거의 쓸일 없음 ㅋ</p>
</li>
<li>
<p>key 이벤트를 통해서 단툭키 실행도 가능하게 한다.</p>
</li>
<li>
<p>애니메이션에 필요한 부분이 있다 하면 그냥 jquery 쓰자.<br>
드래그 앤 드랍도 jquery</p>
</li>
<li>
<p>노드도 객체 기반이다 당연하지 js였으니.</p>
</li>
<li>
<p>포커스에 맞게 동작하지 않는 경우<br>
포커스가 발생전에 따른 동작 발생할 수도 있음</p>
</li>
<li>
<p>submit<br>
onsubmit에 대해서 이벤트 발생시킬 수 있는데...<br>
요즘은 form 태그 자체를 잘 안 씀</p>
</li>
</ul>
<h2 id="문서와-리소스-로딩" tabindex="-1"><a class="header-anchor" href="#문서와-리소스-로딩" aria-hidden="true">#</a> [문서와 리소스 로딩]</h2>
<p>문서의 생명주기<br>
문서가 동작하기까지 단계들이 있는데<br>
무언가 동작의 시점을 설정할 수 있다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span> 태그 안에 구현 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="기타" tabindex="-1"><a class="header-anchor" href="#기타" aria-hidden="true">#</a> [기타]</h2>
<p>옵저버 패턴이란 게 있음</p>
<p>selection 과 range<br>
에디터 쓸 때.<br>
마우스가 현재 선택된 영역에 뭘 삽입, 수정, 씌우고 입히고 뭐 그런거</p>
<p>타이머 걸 때 javascript의 타이머는 정확하진 않다.<br>
DB  와 동기화 시키는데 언제 동기화 시킬거냐.</p>
<ul>
<li>
<p>popup window.open<br>
윈도우 오픈 시키고 그 객체를 저장해두면<br>
그 객체의 함수와 프로퍼티 혹은 그 윈도우의 콘텐츠도 수정할 수 있다.</p>
</li>
<li>
<p>document.domain<br>
도메인간에 통신이 가능한데, 다 있어야 함. 하나라도 없으면 먹통이 됨.</p>
</li>
</ul>
<p>프레임이로 만든 경우 주소창은 안바뀌고, 안에 콘텐츠가 바뀔 수 있다.</p>
<ul>
<li>
<p>서버사이드에 파일 저장하고 불러올 수 있는데<br>
그 때 쓰는게 blob</p>
</li>
<li>
<p>http 에러.<br>
지금 <a href="http://applyjinhak.com" target="_blank" rel="noopener noreferrer">applyjinhak.com<ExternalLinkIcon/></a>  잘못 들어가면 새로운 페이지로 redirect 가 됨.</p>
</li>
<li>
<p>실시간 통신이 필요한 애들<br>
채팅<br>
코인거래<br>
ajax로 하면 당연히 랙걸리지<br>
그럼 어떻게 하냐<br>
long polling<br>
한번 request 하고 안 끊음<br>
그런데 중간중간 계속 response만 받음</p>
</li>
<li>
<p>소켓방식<br>
브라우저에서 지원해주는 웹소켓이 생김<br>
ws<br>
80 포트 사용<br>
wss  &gt; HTTPS<br>
웹소켓이라는 프로토콜이 있음<br>
open<br>
message<br>
error<br>
close<br>
이거는 request는 하나임<br>
안끊기고 그냥 쭉 가는 거임</p>
</li>
<li>
<p>쿠키<br>
브라우저에 데이터 저장<br>
서버, 클라이언트가 주고받을 수 있는 유일한 매개체<br>
우리 회사는 모든 쿠키를 암호화해서 씀.<br>
document.cookie 에 접근 가능<br>
<code v-pre>pims 결제, 환불 쪽에서 쓰고 있다. (4kb를 넘을 수 없다.)</code></p>
</li>
<li>
<p>정규 표현식이라는 애들이 있는데 사이트에서 확인해서 해석할 것.</p>
</li>
<li>
<p>localStorage<br>
db가 필요 없고<br>
그 도메인 안에서 저장하는 것이다.</p>
</li>
<li>
<p>sessionStorage<br>
얘는 그 페이지에서만 저장</p>
</li>
<li>
<p>IndexedDB &amp; WebSQL<br>
요즘은 IndexedDB 쓰고 있다.<br>
원서쪽에서 AU 애들을 한꺼번에 보여주는 부분에서 사용했음</p>
</li>
<li>
<p>베지어 곡선의 실생활 : 스크롤 속도</p>
</li>
</ul>
<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> [VUE]</h2>
<p>DEVTOOLS 쓰지 말기</p>
<ul>
<li>
<p>CDN으로 가져올 수 있음</p>
</li>
<li>
<p>INPUT의 V- 시작하는 속성으로 그 값을 그대로 가져오게 된다.</p>
</li>
<li>
<p>컴포넌트 : 커스텀 태그<br>
VUE 템플릿 - HTML 태그<br>
상호 바인딩 가능</p>
</li>
</ul>
<p>뷰-부트스트랩이 있음 (bootstrap-vue)<br>
여기서 &lt;b-button&gt;이라는 태그를 쓰는데 이런거를 컴포넌트로 만들어주는 것임<br>
vue-bootstrap.js 까지 써야 동작하는 것임<br>
4.v 을 써야함.</p>
<ul>
<li>
<p>한페이지 내에서 여러개의 뷰 객체를 써도 된다.</p>
</li>
<li>
<p>뷰에서는
{{}}
안에 데이터를 입력하면 바인딩이 되는데<br>
v-show 를 속성으로 써서 처음부터 안그려지게 할 수 있다.</p>
</li>
<li>
<p>생명 주기라는게 있고 그 시점에 제어 가능<br>
mounted 시점에 대부분 데이터 초기화 시켜준다.</p>
</li>
<li>
<p>v-once는 한번만 바인딩</p>
</li>
<li>
<p>뷰에서는 외부 오브젝트를 못쓰는 경우 많다.<br>
그럴 때는 해당 오브젝트 기능을 제공하는 뷰 미들웨어가 있는지 찾아볼것</p>
</li>
<li>
<p>v-if 를 통해 if문 가능</p>
</li>
<li>
<p>v-on: 통해 이벤트 발생 약어 @ 씀</p>
</li>
<li>
<p>v-bind 통해 데이터 바인딩 가능 약어 : 씀</p>
</li>
<li>
<p>computed 속성<br>
변수를 받자마자 그 변수를 조작해서 곧바로 출력해주게끔 만들어줄 수 있다,</p>
</li>
<li>
<p>watch 속성<br>
만약 기존에 있는 속성이 있다고 한다면 그 속성의 변화가 있을 때 다른 액션을 취할 수 있다<br>
두개가 비슷한듯 다르다.</p>
</li>
<li>
<p>v-bind:class = &quot;{active : isActive}&quot;<br>
isActive가 true면 class에 active 추가 falsy면 추가 안햄</p>
</li>
<li>
<p>v-for 를 통해 반복할 수 있는데<br>
object key,value 순회하면서 찍어줄 수 있다.</p>
</li>
<li>
<p>v-for, v-if 같이 쓰지 말고 밖에 뺄 것</p>
</li>
</ul>
</div></template>
