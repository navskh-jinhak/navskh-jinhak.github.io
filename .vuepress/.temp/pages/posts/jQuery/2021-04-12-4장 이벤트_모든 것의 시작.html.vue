<template><div><h2 id="_4-1-브라우저-이벤트-모델-이해하기" tabindex="-1"><a class="header-anchor" href="#_4-1-브라우저-이벤트-모델-이해하기" aria-hidden="true">#</a> 4.1 브라우저 이벤트 모델 이해하기</h2>
<p>모질라 기반의 브라우저 : 파이어폭스, 카미노<br>
최신 표준 준수하는 브라우저 : 사파리, 오페라<br>
인터넷 익스플로러 : 자체 표준이 있으며 자신만의 인터페이스를 사용<br></p>
<p>브라우저별로 인터페이스가 달라 발생하는 작업을 어떻게 처리해줄 것이냐.</p>
<h3 id="_4-1-1-dom-레벨-0-이벤트-모델" tabindex="-1"><a class="header-anchor" href="#_4-1-1-dom-레벨-0-이벤트-모델" aria-hidden="true">#</a> 4.1.1 DOM 레벨 0 이벤트 모델</h3>
<p><code v-pre>$('#vstar')[0].onmouseover = function(event) {</code>
<br>
onmouserover 에 대한 이벤트가 발생하면 해당 함수를 불러와서 실행한다.</p>
<h4 id="event-인스턴스" tabindex="-1"><a class="header-anchor" href="#event-인스턴스" aria-hidden="true">#</a> Event 인스턴스</h4>
<p>근데 이건 jQuery 에서만 있는게 아니라 javascript 자체적인 기능인거 같은데..</p>
<h4 id="이벤트-버블링" tabindex="-1"><a class="header-anchor" href="#이벤트-버블링" aria-hidden="true">#</a> 이벤트 버블링</h4>
<p>부모까지 올라가면서 실행된다는 개념인데 얘도 javascript 개념인 것 같고..</p>
<h4 id="이벤트-전파의-영향과-그-의미" tabindex="-1"><a class="header-anchor" href="#이벤트-전파의-영향과-그-의미" aria-hidden="true">#</a> 이벤트 전파의 영향과 그 의미</h4>
<p>이벤트 버블링을 막고 싶다면?<br>
stopPropagation()을 호출. - 표준 호환 브라우저의 경우<br>
인터넷 익스플로러에서는 cancelBubble을 호출<br>
form 엘리먼트의 경우 return false를 호출하여 submit을 막을 수 있다.<br></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myForm<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-1-2-dom-레벨-2-이벤트-모델" tabindex="-1"><a class="header-anchor" href="#_4-1-2-dom-레벨-2-이벤트-모델" aria-hidden="true">#</a> 4.1.2 DOM 레벨 2 이벤트 모델</h3>
<p>DOM 레벨 0 에서는 이벤트 당 핸들러를 하나씩 밖에 할당 못했다.<br>
DOM 레벨 2에서는 해결했다.<br>
이벤트를 하나 이상 할당하는 방법을 알아보면..<br></p>
<h4 id="이벤트-할당하기" tabindex="-1"><a class="header-anchor" href="#이벤트-할당하기" aria-hidden="true">#</a> 이벤트 할당하기</h4>
<p>addEventListener(eventType, listener, useCapture)</p>
<ul>
<li>eventType : 처리할 이벤트 on을 뺀것.. (click, mouseover, keydown등...)</li>
<li>listener : 핸들러로 할당할 함수의 참조.. (인라인 함수도 됨)</li>
<li>useCapture : 이벤트 전파를 얘기할 때 볼 것임.. 일단 false로 설정하기..</li>
</ul>
<p>코드 예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#vstar'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// element라는 변수에 아이디 값을 통해 엘리먼트를 찾아서 넣어준다.</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 해당 엘리먼트를 불러와 거기에 리스너를 더해준다.</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">'Whee once!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">'Whee twice!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">'Whee three times!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 구성하면 click이라는 이벤트에 3개의 함수를 붙여준것이 구현된다.</p>
<h4 id="이벤트-전파-usecapture" tabindex="-1"><a class="header-anchor" href="#이벤트-전파-usecapture" aria-hidden="true">#</a> 이벤트 전파 (useCapture)</h4>
<p>캡처 단계와 버블 단계가 있는데
캡처 단계는 이벤트가 발생하면 해당 dom 루트 에서 엘리먼트로 전파하는 것.
버블 단계는 이벤트 처리 후 부모 엘리먼트로 올려보내는 것.</p>
<p>useCapture 속성을 true로 만들면 캡처 핸들러로 쓰겠다는 것이고
useCapture false로 만들면 버블 핸들러로 쓰겠다는 것이다.</p>
<h3 id="_4-1-3-인터넷-익스플로러-이벤트-모델" tabindex="-1"><a class="header-anchor" href="#_4-1-3-인터넷-익스플로러-이벤트-모델" aria-hidden="true">#</a> 4.1.3 인터넷 익스플로러 이벤트 모델</h3>
<p>인터네 익스플로러에 대한 얘기인데.. 별로 중요하지 않은 거 같아서 생략</p>
<h2 id="_4-2-jquery-이벤트-모델" tabindex="-1"><a class="header-anchor" href="#_4-2-jquery-이벤트-모델" aria-hidden="true">#</a> 4.2 jQuery 이벤트 모델</h2>
</div></template>
