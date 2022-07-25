<template><div><p><a href="https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/unit/57954" target="_blank" rel="noopener noreferrer">* 타입스크립트 강의-01 링크<ExternalLinkIcon/></a></p>
<h1 id="orientation" tabindex="-1"><a class="header-anchor" href="#orientation" aria-hidden="true">#</a> [orientation]</h1>
<p>이미 작성된 코드에 타입스크립트 적용하는 방식으로 해나갈 것임.</p>
<ul>
<li>git 주소 : <a href="https://github.com/joshua1988/learn-typescript" target="_blank" rel="noopener noreferrer">https://github.com/joshua1988/learn-typescript<ExternalLinkIcon/></a></li>
<li>TypeScript 핸드북 : <a href="https://joshua1988.github.io/ts/intro.html" target="_blank" rel="noopener noreferrer">https://joshua1988.github.io/ts/intro.html<ExternalLinkIcon/></a></li>
</ul>
<p>타입스크립트 : '자바스크립트에 타입을 부여한 것이다.'
※ 컴파일을 해줘야 함!</p>
<h2 id="장점" tabindex="-1"><a class="header-anchor" href="#장점" aria-hidden="true">#</a> - 장점 :</h2>
<h3 id="_1-에러의-사전방지" tabindex="-1"><a class="header-anchor" href="#_1-에러의-사전방지" aria-hidden="true">#</a> 1) 에러의 사전방지</h3>
<p>예)
주소: [object Object]
간혹가다 이런식으로 뜨는 경우 많이 있었을 것이다.
Object를 불러올 때, 그 해당 값이 명확하지 않으므로 그냥 객체라고만 하는 것인데
이를 TypeScript를 사용하면 더욱 명확하게 사용할 수 있다는 것이다.</p>
<p>혹은 undefined 등의 값을 보여주는 것도 마찬가지.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
  * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token class-name">User</span>
  * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">username</span>
  * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">email</span>
  * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">address</span>
  */</span>
  <span class="token doc-comment comment">/**
  * 
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>User<span class="token punctuation">></span><span class="token punctuation">}</span></span>
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런식으로 저장해두면, 이를 자동완성을 도와줄 수 있음
(위는 javascript에서 정해두는 식으로 사용한 것임)
오탈자의 방지가 가능해짐.</p>
<h3 id="_2-코드-가이드-및-자동완성" tabindex="-1"><a class="header-anchor" href="#_2-코드-가이드-및-자동완성" aria-hidden="true">#</a> 2) 코드 가이드 및 자동완성</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">'20'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위에서 '20'을 에러로 간주시킴.</p>
<p>또 그 결과 값이 number로 정했기 때문에
toLocaleString 같은 함수를 자동완성이 가능함.
(vscode IntelliSense)</p>
<ul>
<li>자바스크립트에서도 type을 정해서 사용할 수 있음.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token doc-comment comment">/**
  *
  * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> a 첫번째 숫자
  * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> b 두번째 숫자
  * <span class="token keyword">@returns</span>
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>//@ts-check </code>
위를 입력하면 ts 체크가 가능함.</p>
<h1 id="타입스크립트-시작하기" tabindex="-1"><a class="header-anchor" href="#타입스크립트-시작하기" aria-hidden="true">#</a> [타입스크립트 시작하기]</h1>
<h2 id="typescript-사용하기" tabindex="-1"><a class="header-anchor" href="#typescript-사용하기" aria-hidden="true">#</a> typescript 사용하기</h2>
<p>명령어 :
npm i typescript -g : typescript 사용하기
tsc index.ts : index.ts =&gt; index.js로 변환</p>
<p>웹팩 같은 번들러, 뭐 그런걸 이용해서 명령어 자동화가 가능함.</p>
<p>tsconfig.json 파일을 사용하여  옵션을 설정해줘야함.</p>
<p>※ 타입스크립트 PlayGround
<a href="https://www.typescriptlang.org/play" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org/play<ExternalLinkIcon/></a></p>
<p>typescript=&gt;js파일로 바꿔주는 웹페이지임.</p>
<p>babel : 자바스크립트의 최신 문법을 모든 브라우저에서 지원 가능하게 변환해주는 프로그램</p>
<h1 id="타입스크립트의-기초" tabindex="-1"><a class="header-anchor" href="#타입스크립트의-기초" aria-hidden="true">#</a> [타입스크립트의 기초]</h1>
<h3 id="선언-방식" tabindex="-1"><a class="header-anchor" href="#선언-방식" aria-hidden="true">#</a> - 선언 방식</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token comment">// JS 방식</span>
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>

  <span class="token comment">// TS 문자열 선언</span>
  <span class="token keyword">var</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="타입스크립트-프로젝트-시작" tabindex="-1"><a class="header-anchor" href="#타입스크립트-프로젝트-시작" aria-hidden="true">#</a> [타입스크립트 프로젝트 시작]</h1>
<p><code v-pre>let todoItems: object[]; </code></p>
<ul>
<li>인터페이스에 대하여
객체의 자료형을 모음.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 변수에 활용한 인터페이스</span>
  <span class="token keyword">var</span> seho <span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
    age <span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
    name <span class="token operator">:</span> <span class="token string">'세호'</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 함수의 스펙(구조)에 인터페이스를 활용</span>
  <span class="token keyword">interface</span> <span class="token class-name">SumFunction</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 함수의 규칙 정의 가능</span>
  <span class="token keyword">var</span> sum <span class="token operator">:</span> SumFunction<span class="token punctuation">;</span>

  <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>딕셔너리 : 객체의 요소의 자료형을 지정할 수 있음.</p>
<h1 id="타입-별칭" tabindex="-1"><a class="header-anchor" href="#타입-별칭" aria-hidden="true">#</a> [타입 별칭]</h1>
<p>type 을 앞에 붙여서 형을 지정할 수 있음</p>
<ul>
<li>인터페이스를 사용하여 생성했을 때, vscode에서 인터페이스의 이름만을 보여주지만</li>
<li>type으로 생성했을 때, vscode에서 그 내용까지 다 보여준다.
: 타입은 확장이 되지 않는다.</li>
</ul>
<h1 id="연산자를-이용한-타입-정의" tabindex="-1"><a class="header-anchor" href="#연산자를-이용한-타입-정의" aria-hidden="true">#</a> [연산자를 이용한 타입 정의]</h1>
<ul>
<li>
<p>유니온 타입
타입을 두개 이상 지정할 수 있게 해준다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logMessage</span> <span class="token punctuation">(</span>value <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약에 인터페이스의 경우 유니온 타입으로 선언하면
(보장된) 공통된 속성만을 일단 가져올 수 있다.</p>
</li>
<li>
<p>&amp; 연산자를 사용</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token comment">// never 불가능</span>
  <span class="token keyword">var</span> capt2 <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">&amp;</span> <span class="token builtin">number</span> <span class="token operator">&amp;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  인터페이스를 <span class="token operator">&amp;</span> 를 사용하여 선언하면
  모든 속성을 다 사용할 수 있다<span class="token punctuation">.</span>

  <span class="token keyword">function</span> <span class="token function">askSomeone</span><span class="token punctuation">(</span>someone<span class="token operator">:</span> Developer3 <span class="token operator">|</span> Person3<span class="token punctuation">)</span><span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
  
  <span class="token function">askSomeone</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name <span class="token operator">:</span> <span class="token string">'디벨로퍼'</span><span class="token punctuation">,</span> skill <span class="token operator">:</span> <span class="token string">'웹개발'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">askSomeone</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name <span class="token operator">:</span> <span class="token string">'캡틴'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">function</span> <span class="token function">askSomeone2</span><span class="token punctuation">(</span>someone<span class="token operator">:</span> Developer3 <span class="token operator">&amp;</span> Person3<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// someone.</span>
    <span class="token comment">// someone.name</span>
    <span class="token comment">// someone.skill</span>
    <span class="token comment">// someone.age</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">askSomeone2</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name <span class="token operator">:</span> <span class="token string">'디벨로퍼'</span><span class="token punctuation">,</span> skill <span class="token operator">:</span> <span class="token string">'개발'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="이넘" tabindex="-1"><a class="header-anchor" href="#이넘" aria-hidden="true">#</a> [이넘]</h1>
<p>: 특정 값들의 집합을 의미함.
DropDown 정해져 있는 목록을 사용할 때 사용함.</p>
<p>아무것도 안넣으면 그 구성요소의 순서를 숫자로 가져온다. (순서는 1씩 증가)
값을 넣으면 해당 값을 가져온다. (문자열의 경우 문자열을 그대로 가져온다.)</p>
<p>다 배워봤는데, 이럴바엔 객체 쓰면 되지 않나는 생각밖에 안듬...</p>
<ul>
<li>활용 사례</li>
</ul>
</div></template>
