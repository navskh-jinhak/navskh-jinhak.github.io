<template><div><h1 id="_1장-jquery를-시작하며" tabindex="-1"><a class="header-anchor" href="#_1장-jquery를-시작하며" aria-hidden="true">#</a> 1장 jQuery를 시작하며</h1>
<h2 id="_1-3-jquery-기초" tabindex="-1"><a class="header-anchor" href="#_1-3-jquery-기초" aria-hidden="true">#</a> 1.3 jQuery 기초</h2>
<p><code v-pre>jQuery는 HTML 페이지의 엘리먼트를 조회한 다음 그 결과를 이용하여 사용자가 원하는 동작을 수행하는데 중점을 둔다.</code></p>
<h3 id="_1-3-1-jquery-함수" tabindex="-1"><a class="header-anchor" href="#_1-3-1-jquery-함수" aria-hidden="true">#</a> 1.3.1 jQuery() 함수</h3>
<p>셀렉터는 외부 스타일 시트 (css와 같은)에서 엘리먼트 그룹을 참조할 방법이 필요했기에 만들어졌다.
jQuery는 강력한 셀렉터를 지원한다.</p>
<p>jQuery 셀렉터 문법
$(selector)
또는,
jQuery(selector)</p>
<p>$() 이런 형태의 표기법에 익숙해져야 한다.
예를들어 $(&quot;p a&quot;) &lt;p&gt; 엘리먼트에 포함된 모든 링크를 찾을 때 사용한다.
위 셀렉터의 결과로 객체를 반환한다.</p>
<p>$(&quot;div.notLongForThisWorld&quot;).fadeOut();
이렇게 하면 div 태그 중 class가 notLongForThisWorld 인 애를 찾아서 페이드아웃을 시킬 수 있다.
그런데...
해당 동작을 실행한 후 추가 동작을 할 수 있도록 동일한 엘리먼트 그룹을 반환해준다. 그러므로...
$(&quot;div.notLongForThisWorld&quot;).fadeOut().addClass(&quot;removed&quot;);
이렇게 해줌으로써 새로운 css 클래스 removed를 추가할 수 있는 것이다.
위와 같은 &quot;jQuery체인&quot;은 무한대로 연결할 수 있다.</p>
<h3 id="_1-3-2-유틸리티-함수" tabindex="-1"><a class="header-anchor" href="#_1-3-2-유틸리티-함수" aria-hidden="true">#</a> 1.3.2 유틸리티 함수</h3>
<p>유틸리티 함수란 $.trim(), jQuery.trim() 과 같이 jQuery에서 지원해주는 내부메서드 같은 개념인듯하다.</p>
<h3 id="_1-3-3-문서준비핸들러" tabindex="-1"><a class="header-anchor" href="#_1-3-3-문서준비핸들러" aria-hidden="true">#</a> 1.3.3 문서준비핸들러</h3>
<p>$() 안에 함수를 인수로 전달하면 해당 함수를 (여러개가 될 수 있음) 선언한 순서대로 실행된다.
window.onload()에서는 함수 하나만 사용할 수 있는 것에 비해 좋다.</p>
<h3 id="_1-3-4-dom-엘리먼트-생성하기" tabindex="-1"><a class="header-anchor" href="#_1-3-4-dom-엘리먼트-생성하기" aria-hidden="true">#</a> 1.3.4 DOM 엘리먼트 생성하기</h3>
<p><code v-pre>$(&quot;&lt;p&gt; 안녕! &lt;/p&gt;&quot;)</code></p>
<p>이렇게 하면  DOM 엘리먼트를 바로 만들 수 있다.
그러나 이렇게만 하면 DOM 트리에 붙지 못하고 화면에 출력이 안된다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"&lt;p>안녕!&lt;/p>"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token string">"#followMe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 써서 insertAfter() 를 써주면 DOM 트리에 넣어서 화면에 출력시키는 것이 가능하다.</p>
<h2 id="_1-4-요약" tabindex="-1"><a class="header-anchor" href="#_1-4-요약" aria-hidden="true">#</a> 1.4 요약</h2>
<p>jQuery() 함수로 할 수 있는 일.</p>
<ul>
<li>어떤 동작을 수행하려고 DOM 엘리먼트를 선택하고 확장</li>
<li>전역 유틸리티 함수의 이름공간 제공</li>
<li>HTML 마크업으로 DOM 엘리먼트 만들기</li>
<li>DOM을 조작할 준비가 되었을 때 실행할 코드 지정하기</li>
</ul>
</div></template>
