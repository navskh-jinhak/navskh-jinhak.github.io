<template><div><h1 id="_21-03-25" tabindex="-1"><a class="header-anchor" href="#_21-03-25" aria-hidden="true">#</a> &lt;21.03.25&gt;</h1>
<h1 id="자바스크립트-기본" tabindex="-1"><a class="header-anchor" href="#자바스크립트-기본" aria-hidden="true">#</a> [자바스크립트 기본]</h1>
<p>아는 내용은 생략하고 모르는 내용만 정리</p>
<h3 id="_1-switch-문" tabindex="-1"><a class="header-anchor" href="#_1-switch-문" aria-hidden="true">#</a> 1. switch 문</h3>
<h3 id="_2-함수" tabindex="-1"><a class="header-anchor" href="#_2-함수" aria-hidden="true">#</a> 2. 함수</h3>
<ul>
<li>함수 이름 짓기<br>
&quot;show&quot; - 함수는 대개 무언가를 보여줌<br>
&quot;get…&quot; - 값을 반환함<br>
&quot;calc…&quot; - 무언가를 계산함<br>
&quot;create…&quot; - 무언가를 생성함<br>
&quot;check…&quot; - 무언가를 확인하고 불린값을 반환함<br>
get 함수에서 출력해주거나<br>
create 함수에서 문서에 추가하거나<br>
check 함수에서 출력해주거나<br>
이러면 안됨 모듈별로 따로 있는 것이 좋음</li>
<li>함수를 잘 활용하면 가독성 좋은 코드를 만들 수 있음!</li>
</ul>
<h3 id="_3-함수-표현식" tabindex="-1"><a class="header-anchor" href="#_3-함수-표현식" aria-hidden="true">#</a> 3. 함수 표현식</h3>
<p>함수를 값처럼 전달하는 경우를 의미한다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sayHi 안에 fucntion의 반환값이 들어간다.</p>
<p>위와 같이 사용할 경우 sayHi()를 sayHi의 위에서 사용할 수 없다.<br>
use strict 를 사용하면 가능하다고 함.</p>
<p>또한 함수 선언문은 선언한 코드 블록 안에서만 유효하다.<br>
그러나 함수 표현식으로 할당해서 사용하면 어디서든 사용 가능하다.<br>
근데 이 역시 맨처음 변수 선언 위치가 전역 범위에 있어야 한다.</p>
<h3 id="_4-화살표-함수-기본" tabindex="-1"><a class="header-anchor" href="#_4-화살표-함수-기본" aria-hidden="true">#</a> 4. 화살표 함수 기본</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span>argN</span><span class="token punctuation">)</span> <span class="token operator">=></span> expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>인수 arg1~argN까지를 받고, expression을 반환해주는 것이다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래와 같이 코드 길이가 확 줄어든다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> <span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token comment">// let double = function(n) { return n * 2 }과 거의 동일합니다.</span>

  <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인수가 하나일땐 괄호를 비워둔다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"안녕하세요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>괄호를 생략할 수는 없다.</p>
<p>때에 따라선 중괄호를 사용하여 표현해줄 수 있다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span>  result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 어차피 함수 선언하는 것과 뭐가 다른가 싶지만 뭔가 여러 기능이 있다고 함.</p>
<h1 id="코드-품질" tabindex="-1"><a class="header-anchor" href="#코드-품질" aria-hidden="true">#</a> [코드 품질]</h1>
<h3 id="_1-크롬으로-디버깅-할-때" tabindex="-1"><a class="header-anchor" href="#_1-크롬으로-디버깅-할-때" aria-hidden="true">#</a> 1. 크롬으로 디버깅 할 때</h3>
<p>debugger; 코드로 그 시점에 멈추게 할 수 있다.</p>
<h3 id="_2-코딩-스타일" tabindex="-1"><a class="header-anchor" href="#_2-코딩-스타일" aria-hidden="true">#</a> 2. 코딩 스타일</h3>
<ul>
<li>가로길이</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 백틱(`)을 사용하면 문자열을 여러 줄로 쉽게 나눌 수 있습니다.</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    ECMA International's TC39 is a group of JavaScript developers,
    implementers, academics, and more, collaborating with the community
    to maintain and evolve the definition of JavaScript.
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-주석" tabindex="-1"><a class="header-anchor" href="#_3-주석" aria-hidden="true">#</a> 3. 주석</h3>
<p><strong>리팩토링 팁 :</strong></p>
<ol>
<li>함수를 분리할 것</li>
<li>함수를 만들어서 main문에 함수만 쓰게 할 것<br>
주석을 많이 달아둔 코드가 좋은 코드가 아니라<br>
딱 봤을 때 읽기 쉬운 코드가 좋은 코드이다.</li>
</ol>
<p><strong>좋은 주석 :</strong></p>
<ol>
<li>아키텍처를 설명하는 주석 : 컴포넌트 간에 상호작용, 제어흐름을 적은 주석</li>
<li>함수 용례와 매개변수 정보를 담고 있는 주석</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
  * x를 n번 곱한 수를 반환함
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span> 거듭제곱할 숫자
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> 곱할 횟수, 반드시 자연수여야 함
  * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> x의 n 거듭제곱을 반환함
  */</span>
  <span class="token keyword">function</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>문제를 해결한 후 왜 이 방법으로 해결했는지 설명하는 주석<br>
: 어떻게 해결했는지를 적어두면 나중에 보고 시간낭비를 안하게 됨</li>
<li>미묘한 기능 어디에 쓰이는지 설명하는 주석</li>
</ol>
<h3 id="_4-닌자-코드" tabindex="-1"><a class="header-anchor" href="#_4-닌자-코드" aria-hidden="true">#</a> 4. 닌자 코드</h3>
<p>딱 보기 어렵게 만드는 코드 편법에 대한 내용인데.<br>
초보 개발자의 훈련을 위해 이걸 쓰는게 좋은거라고 한다.</p>
<h3 id="_5-테스트-자동화" tabindex="-1"><a class="header-anchor" href="#_5-테스트-자동화" aria-hidden="true">#</a> 5. 테스트 자동화</h3>
<p>개발을 할 때 여러가지 유스케이스를 고려하여 다 test 하기가 어렵기 때문에
테스팅 자동화는 테스트 코드가 실제 동작에 관여하는 코드와 별개로 작성되었을 때 가능하다. 테스트 코드를 이용하면 함수를 다양한 조건에서 실행 가능하다.</p>
<ul>
<li>BDD Behavior Driven Development<br>
: 테스트, 문서, 예시를 한데 모아놓은 개념</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"pow"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"주어진 숫자의 n 제곱"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>describe : 구현하고자 하는 기능에 대한 설명<br>
함수 이름과 그 안에 설명이 들어감<br>
it : 유스케이스에 대한 설명과 유스케이스 테스트 함수</p>
<ul>
<li>개발순서</li>
</ul>
<ol>
<li>명세서 초안 작성</li>
<li>초안 바탕으로 코딩</li>
<li>코드가 작동하는지 확인 (Mocha를 사용 잘못되었으면 에러 출력)</li>
<li>코드 초안 완성</li>
<li>고려안했던 유스케이스 추가</li>
<li>테스트 실패하는 것을 성공하도록 코딩 수정</li>
</ol>
<ul>
<li>테스트 실행
Mocha : 핵심 테스트 프레임워크, 테스트 관련 주요 함수제공 (describe, it)
Chai : 다양한 assertion을 제공해주는 라이브러리
Sinon : 함수의 정보를 캐내는데 사용</li>
</ul>
<p>describe(&quot;pow&quot;, function() {</p>
<pre><code>it(&quot;2를 세 번 곱하면 8입니다.&quot;, function() {
  assert.equal(pow(2, 3), 8);
});

it(&quot;3을 네 번 곱하면 81입니다.&quot;, function() {
  assert.equal(pow(3, 4), 81);
});
</code></pre>
<p>});</p>
<p>위와 같이 it 안에 usecase(테스트케이스)를 만들어주어 하나씩 검증한다.
for문을 사용하여 테스트케이스를 여러가지 만드는 것도 가능하다.</p>
<p>중첩 describe
describe안에 describe를 사용하여 테스트의 그룹을 나눌 수 있다.</p>
<ul>
<li>before/after, beforeEach/afterEach
before : 테스트 시작 전
beforeEach : 각 테스트 시작 전
after : 테스트 끝 후
afterEach : 각 테스트 끝 후</li>
</ul>
<p>describe(&quot;test&quot;, function() {</p>
<pre><code>before(() =&gt; alert(&quot;테스트를 시작합니다 - 테스트가 시작되기 전&quot;));
after(() =&gt; alert(&quot;테스트를 종료합니다 - 테스트가 종료된 후&quot;));

beforeEach(() =&gt; alert(&quot;단일 테스트를 시작합니다 - 각 테스트 시작 전&quot;));
afterEach(() =&gt; alert(&quot;단일 테스트를 종료합니다 - 각 테스트 종료 후&quot;));

it('test 2', () =&gt; alert(2));
</code></pre>
<p>});</p>
<hr>
<p>[객체]
객체를 만드는 방법
let user = new Object(); // '객체 생성자' 문법
let user = {};  // '객체 리터럴' 문법</p>
<ol>
<li>리터럴과 프로퍼티
let user = {     // 객체
name: &quot;John&quot;,  // 키: &quot;name&quot;,  값: &quot;John&quot;
age: 30        // 키: &quot;age&quot;, 값: 30
};
user 객체에 name, age 프로퍼티 두개가 존재한다.</li>
</ol>
<ul>
<li>
<p>만약 두개의 단어 이상의 조합으로 이름을 만들 시 따옴표로 묶어줘야한다.</p>
</li>
<li>
<p>프로퍼티의 끝은 쉼표로 끝난다.</p>
</li>
<li>
<p><a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a> 과 같이 .으로 점표기법으로 프로퍼티 값을 읽어오는데
&quot;like bird&quot; 와 같이 두개의 단어가 묶여있는 프로퍼티의 경우 점표기법으로 읽어올 수 없음
그럴 땐 대괄호 표기법을 사용하면 됨 user.[&quot;like birds&quot;]; ※ 따옴표의 종류는 상관 없다.</p>
</li>
<li>
<p>대괄호 표기법으로는 대괄호 안에 변수를 지정한 후 변수를 얼마든지 유연하게 변경할 수 있으나</p>
</li>
<li>
<p>점표기법에서는 유연한 사용이 안된다.</p>
</li>
<li>
<p>계산된 프로퍼티
let bag = {
[fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};
대괄호로 묶여있는 프로퍼티를 계산된 프로퍼티라고 부른다.</p>
</li>
<li>
<p>단축 프로퍼티
function makeUser(name, age) {
return {
name: name,
age: age,
// ...등등
};
}
let user = makeUser(&quot;John&quot;, 30);
alert(<a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a>); // John
name:name 대신 name만 적어주어도 프로퍼티를 설정할 수 있음</p>
</li>
<li>
<p>객체 프로퍼티는 예약어 상관 없이 지정할 수 있다.</p>
</li>
<li>
<p>in 연산자
&quot;key&quot; in object
key 라는 프로퍼티가 object 안에 있냐는 것이다.</p>
</li>
<li>
<p>for in 반복문
for (key in object) {
// 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
}
모든 프로퍼티를 순회하며 하나씩 찍어줌.</p>
</li>
</ul>
<p>let user = {
name: &quot;John&quot;,
age: 30,
isAdmin: true
};</p>
<p>for (let key in user) {
// 키
alert( key );  // name, age, isAdmin
// 키에 해당하는 값
alert( user[key] ); // John, 30, true
}
맨처음 key 값을 출력 그다음 그에 해당하는 값을 출력</p>
<ul>
<li>객체 정렬은 정수프로퍼티의 경우 숫자의 오름차순으로 정렬되고
그 외의 경우에는 객체에 추가한 순서대로 정렬된다.</li>
</ul>
</div></template>
