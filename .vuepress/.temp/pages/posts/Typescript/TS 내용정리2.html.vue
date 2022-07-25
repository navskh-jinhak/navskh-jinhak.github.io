<template><div><p><a href="https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%EC%A0%84" target="_blank" rel="noopener noreferrer">* 타입스크립트 강의-02 링크<ExternalLinkIcon/></a></p>
<h2 id="클래스" tabindex="-1"><a class="header-anchor" href="#클래스" aria-hidden="true">#</a> [클래스]</h2>
<ul>
<li>프로토타입 - 자바스크립트 내용</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">'capt'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// var admin = { name : 'capt', age : 100, role : 'admin'};</span>
  <span class="token keyword">var</span> admin <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  admin<span class="token punctuation">.</span>__propto__ <span class="token operator">=</span> user<span class="token punctuation">;</span> <span class="token comment">// 프로토타입을 설정</span>

  admin<span class="token punctuation">.</span>name <span class="token comment">// 'capt'</span>
  admin<span class="token punctuation">.</span>age <span class="token comment">// 100</span>

  admin<span class="token punctuation">.</span>role <span class="token operator">=</span> <span class="token string">'admin'</span><span class="token punctuation">;</span>

  <span class="token comment">// 이렇게 하면 위와 같이 사용할 수 있다.</span>


  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Object 메서드 사용할 수 있음.</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Array 메서드 사용할 수 있음.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="제네릭" tabindex="-1"><a class="header-anchor" href="#제네릭" aria-hidden="true">#</a> [제네릭]</h2>
<p>타입스크립트 시작하는 사람들의 가장 두려워하는 문법.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token function">logText</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">logNumber</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">logText</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">logNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같은 경우</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">logText</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// T : string 매칭이 되어 string 형으로 결정 됨.</span>
  <span class="token generic-function"><span class="token function">logText</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'하이'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 바꿀 수 있다.</p>
<ul>
<li>Union과의 차이점</li>
</ul>
<ol>
<li>유니온에서는</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token function">logText</span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">logText</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//에러가 뜸. 보장된 형이 split이 제공되지 않기 때문임.</span>
  <span class="token function">logText</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>제네릭에서는</li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">logText</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token generic-function"><span class="token function">logText</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// 에러 안뜸. (string으로 지정이 됨!)</span>
<span class="token keyword">const</span> login <span class="token operator">=</span> <span class="token generic-function"><span class="token function">logText</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>인터페이스에 제네릭을 선언하는 방법</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// interface Dropdown{</span>
<span class="token comment">//   value: string;</span>
<span class="token comment">//   selected: boolean;</span>
<span class="token comment">// }</span>

<span class="token comment">// const obj : Dropdown = {value: 'abc', selected: false};</span>

<span class="token keyword">interface</span> <span class="token class-name">Dropdown<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span><span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  selected <span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Dropdown<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span> selected<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>제네릭의 타입 제한</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">logTextLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token generic-function"><span class="token function">logTextLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'hi'</span><span class="token punctuation">,</span> <span class="token string">'abc'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token string">'abc'</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>제네릭 타입 제한 2 - 정의된 타입 이용하기.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">LengthType</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">logTextLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> LengthType<span class="token operator">></span></span></span><span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">{</span>
    text<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// logTextLength(10); // 에러남.</span>
  <span class="token function">logTextLength</span><span class="token punctuation">(</span><span class="token punctuation">{</span>length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>제네릭 타입 제한 3 - keyof</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">ShoppingItem</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    stock<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// keyof : 인터페이스의 키 값중에 하나를 가져온다.</span>
  <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getShoppingItemOption</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> ShoppingItem<span class="token operator">></span></span></span><span class="token punctuation">(</span>itemOption<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> itemOption<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// getShoppingItemOption(10);</span>
  <span class="token comment">// getShoppingItemOption&lt;string>('a');</span>
  <span class="token function">getShoppingItemOption</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="프로젝트2" tabindex="-1"><a class="header-anchor" href="#프로젝트2" aria-hidden="true">#</a> [프로젝트2]</h2>
<p>Promise 의 제네릭.
Promise의 반환 값의 형을 제네릭으로 지정해주면 된다.</p>
<h2 id="타입추론" tabindex="-1"><a class="header-anchor" href="#타입추론" aria-hidden="true">#</a> [타입추론]</h2>
<p>이게 어떤 타입이냐 하는 것을 추론해나가는 방법.
var a하고
a 위에 마우스 갔다 대면 any라고 한다.(vscode ts 내장 서버)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 타입추론 기본 1</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">'abc'</span> <span class="token comment">// string</span>


<span class="token keyword">function</span> <span class="token function">getB</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// any</span>
  <span class="token keyword">return</span> b<span class="token punctuation">;</span> <span class="token comment">// any</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getC</span><span class="token punctuation">(</span>c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// number</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token string">'hi'</span><span class="token punctuation">;</span> <span class="token comment">// stirng</span>

  <span class="token keyword">return</span> d <span class="token operator">+</span> c<span class="token punctuation">;</span> <span class="token comment">// number + string : string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 타입 추론 기본2</span>
 <span class="token keyword">interface</span> <span class="token class-name">Dropdown1<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
   value <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
   title <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token comment">// 변수 형에 따라서 초기화 </span>
 <span class="token keyword">var</span> shoppingItem<span class="token operator">:</span> Dropdown1<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
   value <span class="token operator">:</span> <span class="token string">'item 1'</span><span class="token punctuation">,</span>
   title <span class="token operator">:</span> <span class="token string">'title 1'</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 타입추론 기본3</span>
  <span class="token keyword">interface</span> <span class="token class-name">Dropdown1<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    value <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    title <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">interface</span> <span class="token class-name">DetailedDropdown<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Dropdown1<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">></span></span><span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    tag<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 변수 형에 따라서 초기화 </span>
  <span class="token keyword">var</span> shoppingItem<span class="token operator">:</span> DetailedDropdown<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    title <span class="token operator">:</span> <span class="token string">'title 1'</span><span class="token punctuation">,</span>
    description <span class="token operator">:</span> <span class="token string">'ab'</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">'yes!'</span><span class="token punctuation">,</span>
    tag<span class="token operator">:</span><span class="token string">'t'</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Best Common Type : 지가 알아서 찾아간ㄷ.</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token operator">-</span> Best Common Type
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token keyword">var</span> arr<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Tpye Script Language Server
: 결론적으로는 내부적으로 도는 서버가 있다</li>
</ul>
<h2 id="타입-단언" tabindex="-1"><a class="header-anchor" href="#타입-단언" aria-hidden="true">#</a> [타입 단언]</h2>
<h2 id="타입-가드" tabindex="-1"><a class="header-anchor" href="#타입-가드" aria-hidden="true">#</a> [타입 가드]</h2>
<h2 id="타입스크립트-모듈" tabindex="-1"><a class="header-anchor" href="#타입스크립트-모듈" aria-hidden="true">#</a> [타입스크립트 모듈]</h2>
<h2 id="유틸리티-타입" tabindex="-1"><a class="header-anchor" href="#유틸리티-타입" aria-hidden="true">#</a> [유틸리티 타입]</h2>
<ul>
<li>Partial : 인터페이스 안에 타입 몇개만 사용하겠다. 변형해서 쓰고 싶을 때 사용</li>
<li>Pick : 인터페이스 안의 타입 중에 몇개를 뽑아서 사용하겠다.</li>
<li>Omit : 인터페이스 안에서 몇개를 제외시키겠다.
더 많은 유틸리티 타입 레퍼런스는 타입스크립트 핸드북에서 확인합시다.</li>
</ul>
<h2 id="맵드-타입" tabindex="-1"><a class="header-anchor" href="#맵드-타입" aria-hidden="true">#</a> [맵드 타입]</h2>
<p>기존에 정의되어 있는 타입을 새로운 타입으로 변환해주는 문법.
자바스크립트 map
map 함수를 돌려서 새로운 타입을 뽑아낸다.</p>
<p><code v-pre>{ [ P in K ] : T} </code>
이런식으로 쓰면 된다.</p>
<h2 id="js에-ts를-적용할-때-주의할점" tabindex="-1"><a class="header-anchor" href="#js에-ts를-적용할-때-주의할점" aria-hidden="true">#</a> [JS에 TS를 적용할 때 주의할점]</h2>
<ol>
<li>기능 변경은 하지 말 것.</li>
<li>테스트 커버리지가 낮을 땐 함부로 타입스크립트 전환하지 말 것.</li>
<li>처음부터 타입을 엄격하게 적용하지 말 것.
string 말고  any로 적용한다든지.. (일단은)</li>
</ol>
<h1 id="바꾸기" tabindex="-1"><a class="header-anchor" href="#바꾸기" aria-hidden="true">#</a> [바꾸기]</h1>
<p>※ 기존 자바스크립트 소스를 타입스크립트로 바꾸는 과정
그냥 아예 새로운 타입스크립트 프로젝트를 만들어서 그 안에 로직을 가져온다.</p>
<h2 id="_1-타입스크립트-기본-환경-구성" tabindex="-1"><a class="header-anchor" href="#_1-타입스크립트-기본-환경-구성" aria-hidden="true">#</a> 1. 타입스크립트 기본 환경 구성</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> NPM 초기화</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 타입스크립트 라이브러리 설치</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 타입스크립트 설정 파일 생성 및 기본 값 추가</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 자바스크립트 파일을 타입스크립트 파일로 변환</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> tsc 로 타입스크립트 컴파일하기</label></li>
</ul>
<h2 id="_2-하나씩-바꾸기" tabindex="-1"><a class="header-anchor" href="#_2-하나씩-바꾸기" aria-hidden="true">#</a> 2. 하나씩 바꾸기</h2>
<ul>
<li>외부 라이브러리 참조 (tsconfig.json 파일 설정)</li>
</ul>
<h2 id="_3-엄격하지-않은-타입-환경-loose-type-에서-프로젝트-돌려보기" tabindex="-1"><a class="header-anchor" href="#_3-엄격하지-않은-타입-환경-loose-type-에서-프로젝트-돌려보기" aria-hidden="true">#</a> 3. 엄격하지 않은 타입 환경(loose type)에서 프로젝트 돌려보기</h2>
<ul>
<li>프로젝트에 테스트 코드가 있다면 테스트 코드가 통과하는지 먼저 확인</li>
<li>프로젝트 js 파일을 모두 ts파일로 변경</li>
<li>타입스크립트 컴파일 에러가 나는 것 위주로만 먼저 에러가 나지 않게 수정
: 여기서 기능을 사소하게라도 변경하지 않도록 주의</li>
<li>테스트 코드가 잘 돌아가는지 확인.</li>
</ul>
<h2 id="_4-명시적인-any-선언하기" tabindex="-1"><a class="header-anchor" href="#_4-명시적인-any-선언하기" aria-hidden="true">#</a> 4. 명시적인 any 선언하기</h2>
<ul>
<li><code v-pre>tsconfig.json</code> 파일에 <code v-pre>noImplicitAny</code> 값을 <code v-pre>true</code>로 추가.</li>
<li>가능한한 구체적인 타입으로 타입 정의</li>
</ul>
<h2 id="_5-프로젝트-환경-성" tabindex="-1"><a class="header-anchor" href="#_5-프로젝트-환경-성" aria-hidden="true">#</a> 5. 프로젝트 환경 성</h2>
<h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> [Babel]</h3>
<p>브라우저 버전 호환할 때 쓰는 애들</p>
<p>예를들어</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a  <span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 입력하면</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 바꿔줌</p>
<h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> [ESLint]</h3>
<p>자바스크립트 코드에서 문제 찾고 고치는 코드.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=></span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이런 코드를</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter">a<span class="token punctuation">,</span> b</span> <span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이런식으로 바꿔줌.</p>
<h5 id="eslintrc" tabindex="-1"><a class="header-anchor" href="#eslintrc" aria-hidden="true">#</a> ESLintRC</h5>
<ul>
<li>
<p>prettier rule
print width 넓이</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">//.eslint.js</span>
rules<span class="token operator">:</span> <span class="token punctuation">{</span>
  'prettier/prettier'<span class="token operator">:</span> <span class="token punctuation">[</span>
    'error'<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      singleQuote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      semi<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      useTabs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      tabWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      printWidth<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
      bracketSpacing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      arrowParens<span class="token operator">:</span> 'avoid'<span class="token punctuation">,</span>
      endOfLine<span class="token operator">:</span> 'auto'<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>prettier 플러그인이 package.json 안에 있어야 함.
eslint가 돌면서
settings.json안의 editor.codeActionOnSave 안에
source.fixAll.eslint 의 true설정을 읽어와서 동작 함</p>
<p>.eslintignore 안에 넣어두면 해당 파일은 적용 안되게 만들 수 있음.</p>
<p>TSLint를 안쓰고,  ESLint를 사용한 이유
MS사에서 사용하다보니,  ESLint가 더 좋은 성능을 내었기 때문</p>
</li>
</ul>
<h1 id="외부라이브러리-모듈화" tabindex="-1"><a class="header-anchor" href="#외부라이브러리-모듈화" aria-hidden="true">#</a> [외부라이브러리 모듈화]</h1>
<p>가장 대표적인 에러 같은 경우는 외부라이브러리 모듈화가 필요한 부분임.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/axios/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chart.js@2.8.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 소스를 ts파일에서 읽어올 수 있어야 함.</p>
<p>npm install로 설치 후에 import 시키면 됨</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//app.ts</span>
<span class="token comment">// 라이브러리 로딩</span>
<span class="token keyword">import</span> 변수명 <span class="token keyword">from</span> <span class="token string">'라이브러리 이름'</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span> <span class="token comment">// 이러면 에러가 많이 해결 됨. (잘 만들어진 라이브러리이기 때문에)</span>
<span class="token comment">// 얘는 에러남. (typescript 지원이 안되었기 때문 - 지금 최신 버전은 메이저 업데이트가 되어 사용가능 )</span>
<span class="token keyword">import</span> Chart <span class="token keyword">from</span> <span class="token string">'chart.js'</span><span class="token punctuation">;</span> 

<span class="token comment">// 이렇게 사용해야 한다고 함. 별건 없음 (stack overflow 뒤졌다 함)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'chart.js'</span><span class="token punctuation">;</span>



<span class="token comment">// 변수, 함수 임포트 문법</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'파일 상대 경로'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="definitely-typed-에-대하여" tabindex="-1"><a class="header-anchor" href="#definitely-typed-에-대하여" aria-hidden="true">#</a> Definitely Typed 에 대하여</h3>
<p>@tpyes/chart.js
이런식으로 된게 타입스크립트로 저장 된 애임.
얘를 깔아야 ts에서 지원이 됨.</p>
<p>types라고 하는 애가 없을 때,</p>
<p>tsconfig.json 에서 아래와 같이 수정</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./node_modules/@types"</span><span class="token punctuation">,</span> <span class="token string">"types"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>임의로 project/types/chart.js -&gt; index.d.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'chart.js'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 추가한다.</p>
<h2 id="api-반환-타입" tabindex="-1"><a class="header-anchor" href="#api-반환-타입" aria-hidden="true">#</a> API 반환 타입</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 개발자도구 네트워크 부분에서 가져옴,</span>
<span class="token keyword">interface</span> <span class="token class-name">CovidSummaryResponse</span> <span class="token punctuation">{</span>
  Countries<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  Date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  Global<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  Message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// NewConfirmed: 1791655;</span>
  <span class="token comment">// NewDeaths: 5209;</span>
  <span class="token comment">// NewRecovered: 0;</span>
  <span class="token comment">// TotalConfirmed: 560298445;</span>
  <span class="token comment">// TotalDeaths: 6363126;</span>
  <span class="token comment">// TotalRecovered: 0;</span>
  <span class="token comment">// ID: '712e424f-5fb9-4839-96a4-1fa045df797d';</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">fetchCovidSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&lt;</span>CovidSummaryResponse<span class="token operator">>></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://api.covid19api.com/summary'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 위와 같이 지정해두면 interface 타입들을 가져와서 자동완성에 사용할 수 있음.; (아래와 같이)</span>
<span class="token function">fetchCovidSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Countries<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-strict-옵션-적용" tabindex="-1"><a class="header-anchor" href="#_6-strict-옵션-적용" aria-hidden="true">#</a> 6.strict 옵션 적용</h1>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
    <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위 속성 추가 =&gt; app.ts 에러 마구 뜸</p>
<p>조금 더 안전하게 코딩을 할 수 있음
실질적으로 쓰게 되는 속성은 strictNullCheck 옵션</p>
<p>객체?.요소 -&gt; 옵셔널 체이닝
객체!.요소 -&gt; 객체는 null이 절대 아님을 정하는 것. (타입단언)</p>
<h2 id="타입단언시-주의해야-할-점" tabindex="-1"><a class="header-anchor" href="#타입단언시-주의해야-할-점" aria-hidden="true">#</a> 타입단언시 주의해야 할 점.</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//타입 어썰션 : 으로 할당</span>
<span class="token keyword">interface</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  skill <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> capt <span class="token operator">:</span> Hero <span class="token operator">=</span><span class="token punctuation">{</span>
  name <span class="token operator">:</span> <span class="token string">'capt'</span><span class="token punctuation">,</span>
  skill <span class="token operator">:</span> <span class="token string">'shield'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> capt<span class="token operator">:</span> Hero <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> capt <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Hero<span class="token punctuation">;</span>
capt<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'capt'</span><span class="token punctuation">;</span>
capt<span class="token punctuation">.</span>skill<span class="token operator">=</span> <span class="token string">'shield'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// non null type assertion </span>
a<span class="token operator">!</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
