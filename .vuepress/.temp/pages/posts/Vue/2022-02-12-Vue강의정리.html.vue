<template><div><h1 id="vue-강의-내용-정리" tabindex="-1"><a class="header-anchor" href="#vue-강의-내용-정리" aria-hidden="true">#</a> Vue 강의 내용 정리</h1>
<h2 id="router-설계-필요" tabindex="-1"><a class="header-anchor" href="#router-설계-필요" aria-hidden="true">#</a> [router 설계 필요 ]</h2>
<pre><code>news
ask
jobs

세개의 페이지가 필요하고
이를 url에 맞게 뿌려주면 됨.

특정 상세 페이지가 따로 있음
사용자 정보 페이지 (user view)
</code></pre>
<h2 id="vue-cli-2-vs-vue-cli-3" tabindex="-1"><a class="header-anchor" href="#vue-cli-2-vs-vue-cli-3" aria-hidden="true">#</a> [vue cli 2 vs vue cli 3]</h2>
<ul>
<li>
<p>명령어</p>
<ul>
<li>2.x : vue init '프로젝트 템플릿 이름'  '파일 위치'</li>
<li>3.x : vue create '프로젝트 이름'</li>
</ul>
</li>
<li>
<p>웹팩 설정 파일</p>
<ul>
<li>2.x : 노출 Y
WEBPACK.config이 밖으로 나와 있음
WEBPACK 에다 곧바로 수정하면 되었음</li>
<li>3.x : 노출 N
WEBPACK.config이 숨겨있음
webpack 조작할 때 별도의 필요한 부분 추가해줘야함</li>
</ul>
</li>
<li>
<p>프로젝트 구성</p>
<ul>
<li>2.x : 깃헙의 템플릿 다운로드</li>
<li>3.x : 플러그인 기반으로 기능 추가</li>
</ul>
</li>
<li>
<p>ES6 이해</p>
<ul>
<li>2.x : 필요 없음</li>
<li>3.x : 필요</li>
</ul>
</li>
</ul>
<h2 id="es-lint-해제하는-방법" tabindex="-1"><a class="header-anchor" href="#es-lint-해제하는-방법" aria-hidden="true">#</a> [ES lint 해제하는 방법]</h2>
<p><code v-pre>/*eslint-disable*/</code> 을 올려두면 해당 코드는 적용 x</p>
<h2 id="vue의-프로젝트-순서" tabindex="-1"><a class="header-anchor" href="#vue의-프로젝트-순서" aria-hidden="true">#</a> [vue의 프로젝트 순서]</h2>
<ol>
<li>vue create 로 생성하여 vue cli 3 를 실행하면 프로젝트 생성</li>
<li>프로젝트 생성 main.js 가 해당 application의 구조도가 됨</li>
<li>router 를 등록하는 방법</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1) vue-router 를 설치 (npm install vue-router --save)
    2) router 폴더 (src아래에 생성) > index.js 생성
    3) index.js에 url 정보와 components정보를 입력
    4) routes 를 export 시켜주고 main.js에서 import해줌
    5) App.vue에서 &lt;router-view>를 추가해주면 router에서 컴포넌트를 해당 
    태그에 뿌려주는 것을 확인할 수 있음
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="태그-새롭게-등록" tabindex="-1"><a class="header-anchor" href="#태그-새롭게-등록" aria-hidden="true">#</a> [태그 새롭게 등록]</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--ToolBar 일 때는 tool-bar 로 바꿔서 사용가능--></span>
<span class="token comment">&lt;!--Pascal 케이스는 자동완성 x--></span>
<span class="token comment">&lt;!--케밥 케이스는 자동완성 o 그리고 간략 확인가능--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router-link-to-url" tabindex="-1"><a class="header-anchor" href="#router-link-to-url" aria-hidden="true">#</a> [router-link to='url']</h2>
<p>앵커가 박히게 됨.</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> [api]</h2>
<p>api 를 불러오면 해당 정보들을 배열형태로 받을 수 있음</p>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> [this]</h2>
<p>vue에서 this를 찍으면 기본적으로 컴포넌트 자체가 찍히게 되는듯하다.
그러나 axios에서 then 을 처리한 후 this를 찍으면 axios가 찍히게 된다.</p>
<p>this 는 기본은 전역
그러나 생성자 함수에서는 그 생성자 함수
비동기 호출 시 this (then 에 나오는 this) 는 undefined이다. (이럴 경우 this binding 해줘야 함)
그러나 arrow func 일 때 this는 최종 생성자 this 를 가리킴
-&gt;
그래서 arrow function 방식을 많이 사용한다.
this 바인딩 할 필요가 없으므로</p>
<h2 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> [created]</h2>
<p>components 가 생성될 때 생성되는 곳이 created() 이다.
ES6 에서</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">created</span> <span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>를 created()로 사용할 수 있음</p>
<p>lifecycle hook이라고 부르고
이런 것들이
beforeMount,
mounted
등등이 있다.</p>
<p>이와 연관된 내용이</p>
<ul>
<li><a href="https://vuejs.org/v2/guide/reactivity.html#ad" target="_blank" rel="noopener noreferrer">Reactivity in Depth<ExternalLinkIcon/></a>
라고 하는 내용이 있음.</li>
</ul>
<p>나중에 한번 볼 것</p>
<h2 id="비동기처리-callback-promise" tabindex="-1"><a class="header-anchor" href="#비동기처리-callback-promise" aria-hidden="true">#</a> [비동기처리, callback, promise]</h2>
<ul>
<li>
<p>callback
종료되는 시점에 실행되는 함수 (함수로 인자를 넘길 수 있으므로 가능함)</p>
<pre><code>1) fetchData() 실행
2) 그 안의 result 배열 생성
3) ajax 실행 &gt; 데이터 받아옴. 
4) console.log 에 그 결과가 찍힘
</code></pre>
<p>이런 순으로 코딩이 되어있는데
1&gt;4 순이 아니라</p>
<p>1,2,4,3 순으로 실행 됨
먼저 console.log 를 먼저 처리하고
그 다음에 ajax의 처리가 완료됨</p>
<p>이게 비동기처리의 기본 임</p>
<p>그러면 console.log를 ajax안에서 실행하면 올바른 순서로 찍힘</p>
<p>callback hell 에 빠질 수 있음</p>
</li>
<li>
<p>Promise 와 resolve
콜백 관계에서 Promise가 끝나고 resolve를 통해 data 값을 넘겨주게 되는 것임.</p>
</li>
</ul>
<h2 id="vuex-간단한-구조도" tabindex="-1"><a class="header-anchor" href="#vuex-간단한-구조도" aria-hidden="true">#</a> Vuex 간단한 구조도</h2>
<p>before
NewsView 에서 API를 적용해서 호출</p>
<p>after
NewsView &lt;- Vuex &lt;- API</p>
<p>중간에 Vuex 를 사용하여 호출할 예정임.
컴포넌트의 관리의 의미가 있음</p>
<p>Vuex는 상태관리도구
컴포넌트 간에 데이터 넘겨줄 때 사용</p>
<ul>
<li>
<p>Vuex 를 만들어서 인스턴스를 추가해주면
개발자 도구에서 Vue 탭의 두번째 셀렉션으로 Vuex 를 사용할 수 있게 된다.</p>
</li>
<li>
<p>Vuex에서의 action상태는 dispatch로 가져올 수 있다.</p>
</li>
<li>
<p>Vuex에서의 상태에 대하여.
Action : 모든 비동기 호출 값을 가져온다.
Mutation : 이를 State에 담기 전 상태임. 여기를 거쳐감.
State : 최종 바뀔 값.</p>
<p>순서는 다음과 같다.
Action(API로 부터 값을 받음)</p>
<ul>
<li>mutation (값을 state로 넘겨줌) : 이 과정이 왜 있는지는 강사도 모르고 있음</li>
<li>state (여기 안의 변수를 내보낼 수 있음)</li>
</ul>
<ul>
<li>이 때, 상태에 따라 데이터 넘겨줄 때 써야하는 용어들이 정해져있음 <a href="https://vuex.vuejs.org/kr/" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a> 를 참고하고
action -&gt; mutation 은 commit
vue component에서 action에 접근하여 데이터 가져올때는 dispatch를 사용해야함</li>
</ul>
<p>위의 전체 상태 값에 대한 코드를
store 에 담아서 export 시켜주면</p>
<p>main.js에서 store를 import 시켜줬기 때문에
모든 컴포넌트에서 store를 사용할 수 있게 된다.</p>
<p>그 다음 원하는 컴포넌트에서
this.$store.dispatch('actions 안의 함수 이름')
위와 같이 사용하면 위의 state에 저장한 값에 접근할 수 있게 된다.</p>
</li>
</ul>
<h2 id="destructuring-구조-분해-문법" tabindex="-1"><a class="header-anchor" href="#destructuring-구조-분해-문법" aria-hidden="true">#</a> Destructuring (구조 분해 문법)</h2>
<p><a href="https://joshua1988.github.io/es6-online-book/destructuring.html#%EA%B8%B0%EC%A1%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%EA%B5%AC%EC%A1%B0" target="_blank" rel="noopener noreferrer">관련링크<ExternalLinkIcon/></a>
위 페이지에 긴 내용이 담겨있음.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같은 배열, 객체의 선언에서</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위를 실행할 시
a, b, c 에 각각 10,20,30 이 들어가게 된다.</p>
<p>자주 사용하는 방법은 아래와 같다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> josh <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">'javascript'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'front-end'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">'pangyo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">'singing'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'102'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> language <span class="token operator">=</span> josh<span class="token punctuation">.</span>language<span class="token punctuation">;</span>
  <span class="token keyword">var</span> position <span class="token operator">=</span> josh<span class="token punctuation">.</span>position<span class="token punctuation">;</span>
  <span class="token keyword">var</span> area <span class="token operator">=</span> josh<span class="token punctuation">.</span>area<span class="token punctuation">;</span>
  <span class="token keyword">var</span> hobby <span class="token operator">=</span> josh<span class="token punctuation">.</span>hobby<span class="token punctuation">;</span>
  <span class="token keyword">var</span> age <span class="token operator">=</span> josh<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 사용하던 것을</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> <span class="token punctuation">{</span> language<span class="token punctuation">,</span> position<span class="token punctuation">,</span> area<span class="token punctuation">,</span> hobby<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> josh<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// javascript</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// front-end</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pangyo</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hobby<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// singing</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 사용할 수 있다는 것이다.</p>
<p>vuex를 사용할 때,
context.context 사용시 {commit} 으로 간략하게 사용할 수 있게 된다.</p>
<h2 id="vuejs-map-헬퍼에-대하여" tabindex="-1"><a class="header-anchor" href="#vuejs-map-헬퍼에-대하여" aria-hidden="true">#</a> vuejs map 헬퍼에 대하여...</h2>
<ul>
<li>AskView 부분을 보면 주석으로 this.$store.state.ask 를 어떻게하면 간략하게 사용할 것이냐에 대한 내용을 적어두었음.</li>
</ul>
<p>그에 대한 설명을 여기에 기록함.</p>
<h3 id="_1-함수를-사용함" tabindex="-1"><a class="header-anchor" href="#_1-함수를-사용함" aria-hidden="true">#</a> 1 함수를 사용함.</h3>
<p>단순하다. computed : 아래에 메서드를 하나만들어
거기서 return this.$store.state.ask 을 넣어주면 끝</p>
<h3 id="_2-이제부터는-vuex-맵헬퍼-함수를-사용하여-가져올-것이다" tabindex="-1"><a class="header-anchor" href="#_2-이제부터는-vuex-맵헬퍼-함수를-사용하여-가져올-것이다" aria-hidden="true">#</a> 2 이제부터는 vuex 맵헬퍼 함수를 사용하여 가져올 것이다.</h3>
<ol>
<li>mapState 사용법
map헬퍼함수를 사용할 때는, ... (spread 구문을 사용하는 듯하다)
왜 spread 구문이냐
예를 들어</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">'count'</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 사용하였다면..
state 내의 모든 존재하는 value들을 검색하여
그 중에 count 를 가져오겠다는 뜻이다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">ask</span> <span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>ask
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 위와 같이 사용하였는데
=&gt; 인자 안에 state 를 넣으면
state의 값은 state 의 모든 값을 다 가져온다.
(물론 여기서는 created 될 때, FETCH_ASK 를 호출하였기 때문에
다른 값에는 아무 것도 안들어가지만 state.ask 에만 값이 들어가 있게 됨.)
결과적으로 위 코드에서
ask 라는 프로퍼티 안에
state.ask 값을 넣어준 것과 같이 동작한다.</p>
<ol start="2">
<li>mapGetter(객체 표기법)
index.js 안에</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">fetchedAsk</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> state<span class="token punctuation">.</span>asks<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이
getters 를 만들어  fetchedAsk 를 추가한다.
getters 란 기본적으로 데이터에 접근할 때 발생한다.</p>
<p>그 때 fetchedAsk 를 발생시켜 state.ask 를 가져갈 수 있도록 해주는 것이다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ask</span> <span class="token operator">:</span> <span class="token string">'fetchedAsk'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 선언하여 index.js 에서 ask 값을 가져온다.
혹은 배열형태로..
...mapGetters([
'fetchedAsk'
]),
위와 같이 사용할 수 있다.</p>
<h2 id="dynamic-route-matching-동적-라우트-매칭" tabindex="-1"><a class="header-anchor" href="#dynamic-route-matching-동적-라우트-매칭" aria-hidden="true">#</a> Dynamic Route matching (동적 라우트 매칭)</h2>
<p>url 에 ?id=(아이디명) 이거로 다음 페이지로 이동할 수 있다.</p>
<p>라우팅 routes/index.js 에 보면</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserView<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 설정하고</p>
<p>라우팅 링크를 설정할 때</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/user/${item.user}`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item.user}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위와 같이 설정 다시말해
v-bind:to=/user/ + id
의 구조로 설정하면</p>
<p>해당하는 곳으로 이동했을 때</p>
<p>vue 탭의 개발자도구로 들어가면
data.$route.params 안에  (여기 객체 값 확인 필요)
id 값이 넘어가는 것을 알 수 있다.</p>
<p>위에서 어디는 params 에 넘기고
어디는 query에 넘김 방법론적인 거 나중에 이 방법 저 방법 다 배울 것</p>
<ul>
<li>다이나믹 라우팅의 순서</li>
</ul>
<ol>
<li>라우터 &gt; index.js에 라우터 정보 등록</li>
<li>해당 페이지 컴포넌트로 이동했을 때 params Or querys 정보를 다룰 것</li>
</ol>
<ul>
<li>
<p>데이터 fetch 순서 (vuex 쪽이긴한데 오늘 알게 됨)</p>
<ol>
<li>vue component 생성</li>
<li>vuex 를 사용하여 dispatch실행 =&gt; store의 actions 로 가게 됨</li>
<li>해당 하는 함수 (FETCH_ITEM) 실행</li>
<li>axios등을 실행하여 데이터 가져옴</li>
<li>여기 데이터 mutation으로 옮김</li>
<li>mutation에서 state에 셋팅한 정보들을 component에서 사용 가능</li>
</ol>
</li>
<li>
<p>font awsome 페이지 참고</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/your-path-to-fontawesome/css/all.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
  <span class="token comment">&lt;!--load all styles --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>html 에 해당하는 content를 가져왔을 때 태그를 인식시켜서 출력시켜줄 경우
v-html 을 사용하면 끝
&lt;div v-html=&quot;fetchedItem.content&quot;&gt;</li>
</ul>
<h2 id="라우터-트랜지션" tabindex="-1"><a class="header-anchor" href="#라우터-트랜지션" aria-hidden="true">#</a> 라우터 트랜지션</h2>
<p>라우터에 의해 페이지가 바뀔 때,
좀더 스무스하게 바뀔 수 있도록 할 수 있음</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="리팩토링" tabindex="-1"><a class="header-anchor" href="#리팩토링" aria-hidden="true">#</a> 리팩토링</h2>
<p>구조를 바꿀 것임.
공통으로 사용되는 부분을 컴포넌트로 뽑아낼 것임
ex)
하나의 글(피드)를 컴포넌트로 만들 수 있음.</p>
<ul>
<li>일단, style 태그 안에 scoped 속성을 주면 해당 컴포넌트에만 영향을 끼치겠다는 소리임</li>
</ul>
<p>컴포넌트 만들어서 사용할 때,
명명 규칙의 변화가 됨을 유의할 것.
예를들어, ListItem.vue 로 컴포넌트를 생성해서 가져왔으면
태그는 list-item으로 생성해야함. 대문자로 구분이 - 로 구분이 되고 소문자로 변경됨.</p>
<p>핵심은 분기를 어떻게 해줄 것이냐하는 것임.
this.$route;
에 접근할 수 있음.
이 안에 있는 정보, path or name을 통해 분기를 주면 됨</p>
<p>그 외에는 v-if 를 사용하는 방법 설명함.
어떤 애는 있는데 어떤 애는 없으면 이를 판단하여 분기해주면 됨.</p>
<h2 id="사용자-컴포넌트-데이터-흐름" tabindex="-1"><a class="header-anchor" href="#사용자-컴포넌트-데이터-흐름" aria-hidden="true">#</a> 사용자 컴포넌트 데이터 흐름</h2>
<ul>
<li>
<p>첫번째 방법
userView 안에 userProfile 컴포넌트를 가져왔다.
이 경우</p>
<ol>
<li>userView에서  fetch dispatch하는 부분에서 데이터 가져옴</li>
<li>위 데이터를 아래 컴포넌트인 userProfile 에서 사용할 수 있음</li>
<li>this.$store.state.user 를 통해 사용하면 됨</li>
</ol>
</li>
<li>
<p>두번째 방법
userView 안에 &lt;user-profile&gt; 태그에</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-profile</span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-profile</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위와 같이 :info 안에 데이터를 넘겨준다.
(물론 userView 안에 computed 속성에 userInfo 값이 있어야한다.)
그러면 userProfile 안에는 props 로 info 값을 받을 수 있다.</p>
</li>
<li>
<p>두가지 방법의 비교
직빵으로 가져오는 것과
info 로 보내주고 받는 것.</p>
<p>1번은
UserView =&gt; Vuex =&gt; API
=&gt; Vuex =&gt; UserProfile
=&gt; UserView</p>
<p>2번은
UserView =&gt; Vuex =&gt; API
=&gt; Vuex =&gt; UserView
=&gt; UserProfile =&gt; UserView</p>
<p>조금더 Vuex의 구조에 적합하게 만들려면
표현하는 부분에 바로 땡기는 것이 간편하게 만든 것이기 때문에</p>
<p>곧바로 가져가는 1번 방법이 낫고</p>
<p>그러나 구조적으로 의미를 주고 싶으면 2번으로 사용하는게 낫다.</p>
</li>
</ul>
<h2 id="slot-의-사용" tabindex="-1"><a class="header-anchor" href="#slot-의-사용" aria-hidden="true">#</a> slot 의 사용</h2>
<p>UserProfile 에서</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 상위 컴포넌트에서 정의할 영역 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 slot을 뚫어주면</p>
<p>UserVue 에서</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ userInfo.id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>와 같이 사용하면 된다.
그러면 해당 위치에 내가 원하는 정보를 그대로 넘겨줄 수 있다.</p>
<p>언제 사용하는가
ex)
ItemView 에서는 <a href="http://info.id" target="_blank" rel="noopener noreferrer">info.id<ExternalLinkIcon/></a> 값을 넘겨주는데
UserView 에서는 info.user 값을 넘겨준다고 하면
분기를 만들수도 있겠지만 위와 같이 처리하는게 직관적으로 보기가 좋은듯</p>
<p>router-link 에 물려서 보내줄 수 있음.</p>
<h2 id="spinner" tabindex="-1"><a class="header-anchor" href="#spinner" aria-hidden="true">#</a> spinner</h2>
<blockquote>
<p>&quot;웹 페이지의 로딩 상태를 나타내는 컴포넌트를 의미합니다.&quot;</p>
</blockquote>
<ol>
<li>Spinner.vue 를 생성한다.
걍구글링해서 복붙함.</li>
<li>javascript</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>props 에 loading 값을 설정할 것,
3. bus 셋팅
&quot;Spinner는 여러 컴포넌트에서 사용할 수 있기 때문에, Event Bus를 이용하는 것이 좋습니다. event bus는 단순히 이벤트를 공유할 수 있도록 하는 bus입니다.&quot;
bus.js 생성 (단순 vue 만들어서 export 시켜줌)</p>
<ol start="4">
<li>bus를 사용하여 App.vue 의 created()와 beforeDestroy() 안에서 사용함.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'start:spinner'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'end:spinner'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 이벤트 등록하고 나면 반드시 종료시켜줘야함.</span>
    bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'start:spinner'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'end:spinner'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>엘리먼트 created() 에서 페이지 생성 될 때 해당 로딩 화면 보여지도록 수정</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'start:spinner'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// start:spinner 발생 (이때 부터 로딩값 보여줌)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// setTimeout 은 로딩을 인위적으로 보도록 만든 것임 </span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'FETCH_JOBS'</span><span class="token punctuation">)</span>  <span class="token comment">// 데이터받아와서</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> 
      bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'end:spinner'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 정상적으로 받아오면 spinner 종료</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="하이오더-컴포넌트-hoc" tabindex="-1"><a class="header-anchor" href="#하이오더-컴포넌트-hoc" aria-hidden="true">#</a> 하이오더 컴포넌트 (HOC)</h2>
<p>&quot;하이오더 컴포넌트는 컴포넌트의 로직(코드)을 재사용하기 위한 고급기술&quot;
위의 spinner를 만든다 하면, 모든 엘리먼트 파일에 해당 동일한 코드를 추가해줘야했다.</p>
<p>이를 공통 컴포넌트로 만들어서(하이오더 컴포넌트) 언제든 재사용하게 만들겠다는 것이다.</p>
<ol>
<li>
<p>CreateListView.js
이게 하이오더 컴포넌트라 할 수 있음.</p>
</li>
<li>
<p>router 쪽에서
사용된 component의 갯수가 적어짐.
그냥 CreateListView 만 쓰면 됨.</p>
</li>
</ol>
<p>컴포넌트의 구조가 어떻게 되는가.
NewsView  &gt; ListView(hoc로 생상된 컴포넌트) &gt; ListItem</p>
<h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2>
<blockquote>
<p>&quot;공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법&quot;</p>
</blockquote>
<p>하이오더 컴포넌트의 단점은
NewsView  &gt; ListView(hoc로 생상된 컴포넌트) &gt; ListItem</p>
<p>Level이 깊어짐.
통신에 있어서 불편함이 발생할 수 있음.</p>
<p>Mixin을 사용하면</p>
<ol>
<li>코드가 깔끔해짐.</li>
<li>spinner의 효율이 좋아짐.</li>
</ol>
<h2 id="데이터-호출-시점" tabindex="-1"><a class="header-anchor" href="#데이터-호출-시점" aria-hidden="true">#</a> 데이터 호출 시점</h2>
<h3 id="_1-컴포넌트-라이프-사이클-훅" tabindex="-1"><a class="header-anchor" href="#_1-컴포넌트-라이프-사이클-훅" aria-hidden="true">#</a> 1. 컴포넌트 라이프 사이클 훅</h3>
<ul>
<li>created()
인스턴스(컴포넌트)가 생성되자 마자. 호출되는 로직들.
data 관찰, computed 속성, methods 접근 가능
화면에 mounted 에 접근은 안됨</li>
</ul>
<p>'컴포넌트 생성되자마자' 타이밍이 핵심!</p>
<h3 id="_2-라우터-네비게이션-가드" tabindex="-1"><a class="header-anchor" href="#_2-라우터-네비게이션-가드" aria-hidden="true">#</a> 2. 라우터 네비게이션 가드.</h3>
<p><a href="https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/" target="_blank" rel="noopener noreferrer">참고<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token function">fucntion</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// to: 이동할 url</span>
  <span class="token comment">// from : 현재 url</span>
  <span class="token comment">// next : to에서 지정한 url로 이동하기 위해 꼭 호출해야하는 함수</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런식으로 라우팅 되기전 시점에 호출할 수 있음.</p>
<p><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards" target="_blank" rel="noopener noreferrer">vue-router 공식 문서 &gt; advanced<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>특정 &quot;url로 접근하기 전&quot;에 동작을 정의! 시점은 라우터 네비게이션 가드가 먼저임.</p>
</li>
<li>
<p>라이프 사이클 훅의 문제점.
해당 내용이 update되기 전에 그 전의 내용을 먼저 보여줬다가
그다음 내용이 뜸.</p>
<p>왜 그러냐면
vuex(store) &gt; state 에서
list라는 데이터를 공유하고 거기에 덮어쓰기를 반복하기 때문임.
(news, jobs, ask 따로 쓸 때는 괜찮음)</p>
</li>
</ul>
<h2 id="라우터-네비게이션-가드-사용법" tabindex="-1"><a class="header-anchor" href="#라우터-네비게이션-가드-사용법" aria-hidden="true">#</a> 라우터 네비게이션 가드 사용법</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">component</span><span class="token operator">:</span> NewsView<span class="token punctuation">,</span>
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>beforeEnter 를 사용하면 url 이동하기 전에 동작을 줄 수 있다.
여기서 auth 같은걸로 구분해서 if문 걸어서 못가게 만들 수도 있음.</p>
<ul>
<li>라우터 네비게이션을 사용하게 되면 반드시 그 중간중간에 기다릴 수 있도록 인지시키는 도구가 필요하다.</li>
</ul>
<ul>
<li>spinner</li>
<li>progress bar</li>
<li>loading bar
등등이 되어야 함!</li>
</ul>
<h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async await</h2>
<p>함수들의 단축, 가독성 증가
함수 앞에 async 를 붙이면
그 안에 함수 호출할 때, await 를 사용할 수 있음.</p>
<p>async await 의 예외처리는
try - catch 로 사용</p>
<p>handleException(error) 를 만들어서 사용하는 경우도 있다.</p>
<h2 id="외부-라이브러리-모듈화" tabindex="-1"><a class="header-anchor" href="#외부-라이브러리-모듈화" aria-hidden="true">#</a> 외부 라이브러리 모듈화</h2>
<ul>
<li>
<p>이유
Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결함할 수 있어야함.
※ state of js 페이지가 있음</p>
</li>
<li>
<p>종류</p>
<ol>
<li>차트</li>
<li>데이트 피크</li>
<li>테이블</li>
<li>스피너</li>
</ol>
</li>
</ul>
<ul>
<li>
<p>chart.js</p>
<ol>
<li>차트 라이브러리 npm 설치</li>
<li>설치된 라이브러리를 import 로 App.vue 에서 로딩</li>
</ol>
<ul>
<li>import 시킬 때
import Chart from &quot;chart.js/auto&quot;;
위와 같이 /auto 를 붙여줘야한다. (안그러면 딴거 참조해오기 때문에 에러남. 버전에 따른 문제라고 함.)</li>
</ul>
<ol start="3">
<li>
<p>mounted() 라이프 사이클 훅에서 차트를 그림
여기 사용할 때 script DOM 에 접근해야하므로 mounted 된 후에 사용해야 함.</p>
</li>
<li>
<p>차트를 컴포넌트화 시킴</p>
<ol>
<li>component 등록</li>
<li>해당 컴포넌트에 원하는 대로 setting</li>
<li>App.vue 에서 import 시켜서 가져옴</li>
</ol>
<p>reference 속성</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getelementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue에서 제공하는 위의 기능</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>script안에
<code v-pre>this.$refs.app; (이렇게 사용하면 됨);</code>
reference를 사용하면 좋은점.
DOM 으로 변환될 때 사용 안됨.
그러므로 중복 값을 만들어도 사용 가능함!</p>
</li>
<li>
<p>컴포넌트의 플러그인화
매번 컴포넌트 가져올 때마다 chart.js 라이브러리를 불러와야함.
라이브러리를 플러그인으로 만들 수 있음.
<a href="https://vuejs.org/v2/guide/plugins.html#ad" target="_blank" rel="noopener noreferrer">vuejs 플러그인 공식 문서<ExternalLinkIcon/></a>
Vue.use(라이브러리 명) - 뷰에서 제공하는 플러그인을 가져온 경우를 말함</p>
</li>
</ol>
<ul>
<li><code v-pre>Vue.prototype.$_Chart = Chart;</code><br>
에 대한 의미.<br>
($_Chart는 공식문서 권고 표기방법)</li>
</ul>
<ol start="6">
<li>컴포넌트 통신을 이용한 컴포넌트 기능 결합
<code v-pre>v-bind:propsdata=&quot;...&quot;</code> 이런식으로 해서 넘겨줄 수 있고
이벤트에 대해선</li>
</ol>
<ol>
<li>컴포넌트에서</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">onclick</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'refresh:chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>App.vue 에서 <code v-pre>v-on:refresh:chart=&quot;refreshChart&quot;</code></li>
<li>App.vue methods: 안에서 refreshChart 정의</li>
</ol>
</li>
</ul>
<h2 id="컴포넌트-디자인-패턴" tabindex="-1"><a class="header-anchor" href="#컴포넌트-디자인-패턴" aria-hidden="true">#</a> 컴포넌트 디자인 패턴</h2>
<p>4가지 패턴</p>
<ol>
<li>Common - 기본적인 컴포넌트 등록 방식, 컴포넌트 통신</li>
<li>Slot - 마크업 확장이 가능한 컴포넌트</li>
<li>Controlled - 결합력 높음</li>
<li>Renderless - 데이터 처리 컴포넌트</li>
</ol>
<h3 id="_1-common-지금까지-살펴봤던-방식과-같음" tabindex="-1"><a class="header-anchor" href="#_1-common-지금까지-살펴봤던-방식과-같음" aria-hidden="true">#</a> 1) Common (지금까지 살펴봤던 방식과 같음)</h3>
<ul>
<li>컴포넌트 설정<br>
App
<ul>
<li>AppHeader</li>
<li>AppContent</li>
</ul>
</li>
</ul>
<p>v-bind:변수명 으로 전달</p>
<ul>
<li>props 를 통해서 전달할 때는</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>props<span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런식으로 타입을 지정할 수 있음.
(속성=기본적인 속성)</p>
<h3 id="_2-slots" tabindex="-1"><a class="header-anchor" href="#_2-slots" aria-hidden="true">#</a> 2) slots</h3>
<p>slot은 컴포넌트와 다르게 사이에 텍스트가 올 수 있음.
보통 컴포넌트는 <app-content></app-content> 사이에 아무것도 올 수 없었음.
그러나 slot에는 <item> 아이템1 </item> 이런식으로 올 수 있음.</p>
<h5 id="_1-props에서-사용할-때는-차이점을-보기위해" tabindex="-1"><a class="header-anchor" href="#_1-props에서-사용할-때는-차이점을-보기위해" aria-hidden="true">#</a> [1] props에서 사용할 때는 (차이점을 보기위해..)</h5>
<pre><code>  data() 안에서 ```items: ['1', '2', '3', '4'];``` 이렇게 하고
</code></pre>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span> <span class="token attr-name">:propsData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">//    item.vue 로 가서 </span>
  item props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'propsData'</span><span class="token punctuation">]</span>  <span class="token comment">//로하고</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>propsData<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">//를 사용했음.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-slot에서-사용할-때는" tabindex="-1"><a class="header-anchor" href="#_2-slot에서-사용할-때는" aria-hidden="true">#</a> [2] slot에서 사용할 때는</h5>
<p>data 필요 없음</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//item.vue 안에서 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span> 여기는 정의할 때마다 계속 정의 됨 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>약간 치환된다고 보면 됨. slot =&gt; 내용으로
만약에 리스트를 찍어주다가
어떤 요청.,. 난 이 경우는 그림을 보여주고 싶어 그러면
굳어진 컴포넌트라면 불가능 함.</p>
<p>쇼핑몰 상품, 모달 같은 것들을 맘대로 확장가능
스타일도 넣을 수 있음.
상당히 동적인처리가 가능해짐.</p>
<h5 id="_3-controlled" tabindex="-1"><a class="header-anchor" href="#_3-controlled" aria-hidden="true">#</a> [3] controlled</h5>
<pre><code>자 정리해보면, props 방식의 문제를 알아야 함.
상위 컴포넌트 =&gt; props로 전달 =&gt; 하위 컴포넌트에서 props 변경 =&gt; 에러발생 
상위 컴포넌트 =&gt; v-model 로 연결 =&gt; 하위 컴포넌트에서 value 와 input 이벤트 =&gt; 이벤트 발생 시 toggle 메서드 생성 
</code></pre>
<h5 id="_4-renderless" tabindex="-1"><a class="header-anchor" href="#_4-renderless" aria-hidden="true">#</a> [4] Renderless</h5>
<ul>
<li>render() function 에 대한 내용</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    # <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'태그이름'</span><span class="token punctuation">,</span> <span class="token string">'태그 속성'</span><span class="token punctuation">,</span> <span class="token string">'하위 태그 내용'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token string">'Hello Vue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span><span class="token operator">=></span><span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span> <span class="token comment">// 에 대한 내용 위의 코드의 원리대로 </span>
  <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    # <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'태그이름'</span><span class="token punctuation">,</span> <span class="token string">'태그 속성'</span><span class="token punctuation">,</span> <span class="token string">'하위 태그 내용'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token literal-property property">createElement</span> <span class="token operator">:</span> <span class="token function">h로</span> <span class="token punctuation">(</span>hypertext<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>여기 createElement 는 Virtual DOM 을 의미하는데 vue의 창시자 EvanU 에 의해 hypertext의 약자 h로 사용
</code></pre>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span><span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//이렇게 되는 것임.</span>

  <span class="token comment">//하위 데이터를 상위로 보낼 수 있음.</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span><span class="token function">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">,</span>
      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loading
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>위와 같이 정의하면

상위 컴포넌트에서 
</code></pre>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot-scoped</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{response, loading}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 안에서 해당 데이터를 받아올 수 있음. --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cli-를-통한-배포" tabindex="-1"><a class="header-anchor" href="#cli-를-통한-배포" aria-hidden="true">#</a> CLI 를 통한 배포</h2>
<p><code v-pre>npm run build </code>
dist 폴더 밑에 hosting 할수 있는 파일이 생성됨.</p>
<h2 id="netlify-을-이용한-배포" tabindex="-1"><a class="header-anchor" href="#netlify-을-이용한-배포" aria-hidden="true">#</a> Netlify 을 이용한 배포</h2>
<p>bae directory 만 설정해서 배포하면 해당 사이트가 잘 나옴.</p>
<pre><code>그런데, url/(path) 이렇게 url 이 지정될 경우
페이지를 찾을 수 없다고 뜬다. 
딱 url로만 들어가야 잘 뜬다.
왜냐면 서버에서 해당 path url을 알 길이 없기 때문이다.
이에 대해서 설정을 해줄 수 있는 파일이 
public/_redirects 에서 설정해줄 수 있다.

위 파일에
Netlify settings for single-page application
/*    /index.html   200
</code></pre>
<p>를 추가해준다.</p>
<p><a href="https://cli.vuejs.org/guide/deployment.html#general-guidelines" target="_blank" rel="noopener noreferrer">Netlify설정<ExternalLinkIcon/></a>
위 링크 Netlify 에 배포할 때 설정 값임.</p>
<p>위와 같이 추가하면 그 뒤의 route 정보를 가져가서 확인하는듯하다.</p>
<h2 id="env-파일" tabindex="-1"><a class="header-anchor" href="#env-파일" aria-hidden="true">#</a> env 파일</h2>
<p>어플리케이션에 공통으로 접근할 수 있는 변수를 만들겠다는 것임.
1) 전역 파일 .env 파일을 만든다.
2) APP_TITLE=HELLO 이렇게 만들고
3) App.vue 에서</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//created() 안에     </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APP_TITLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//을 넣어서 실행</span>
<span class="token comment">//=> undefined 이 뜬다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4) 원래는 dotenv 라는 패키지 가져와서, 뭐 어쩌구 저쩌구해서 정의해야만 사용할 수 있었음.
5) vue cli 3 이상부터 지원하는 기능이 있음. 앞에 VUE_ 를 붙이면 됨.
6) console.log(process.env.VUE_APP_TITLE); 를 사용하면 끝!
</code></pre>
</div></template>
