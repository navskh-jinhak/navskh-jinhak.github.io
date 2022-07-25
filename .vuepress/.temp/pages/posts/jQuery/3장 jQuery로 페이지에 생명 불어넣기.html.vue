<template><div><h1 id="_3장-jquery로-페이지에-생명-불어넣기" tabindex="-1"><a class="header-anchor" href="#_3장-jquery로-페이지에-생명-불어넣기" aria-hidden="true">#</a> 3장 jQuery로 페이지에 생명 불어넣기</h1>
<p>DHTML : Dynamic HTML 동적 HTML이란 뜻이며 그냥 컨텐츠만 출력해주는 페이지가 아닌, 유저로부터 정보를 받아와서 정보를 가지고 양방향 상호작용을 하는 페이지를 의미한다.</p>
<p>HTML, CSS, javascript 3가지 언어로 구성한다고 보면 되는데</p>
<p>3장에서는 jQuery를 사용해 동적 웹페이지를 구성하는 방법을 본격적으로 알아본다.</p>
<h2 id="_3-1-엘리먼트-프로퍼티와-어트리뷰트-조작하기" tabindex="-1"><a class="header-anchor" href="#_3-1-엘리먼트-프로퍼티와-어트리뷰트-조작하기" aria-hidden="true">#</a> 3.1 엘리먼트 프로퍼티와 어트리뷰트 조작하기</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myImage<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image.gif<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>이미지<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>someClass<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>이미지다.<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>태그명 : img
마크업(어트리뷰트) : id, src, alt, class, title
어트리뷰트에 상응하는 프로퍼티를 &quot;어트리뷰트 프로퍼티&quot;라 부르기로 한다.</p>
<p>어트리뷰트 프로퍼티와 어트리뷰트는 동기화 된다고 생각하면 된다.
어트리뷰트 프로퍼티명은 대부분 어트리뷰트 명과 일치한다.
다만 class 명만 className이라는 어트리뷰트 프로퍼티명을 사용한다고만 주의할 것.</p>
<h3 id="_3-1-1-엘리먼트-프로퍼티-조작하기" tabindex="-1"><a class="header-anchor" href="#_3-1-1-엘리먼트-프로퍼티-조작하기" aria-hidden="true">#</a> 3.1.1 엘리먼트 프로퍼티 조작하기</h3>
<h4 id="each-커맨드" tabindex="-1"><a class="header-anchor" href="#each-커맨드" aria-hidden="true">#</a> each 커맨드</h4>
<p>엘리먼트를 읽고 수정하는 커맨드</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>alt<span class="token operator">=</span><span class="token string">'아이디가 '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token string">'인 image['</span><span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">'] 이다.'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 each를 사용하면 해당 모든 엘리먼트 프로퍼티에 쉽게 값을 설정할 수 있다.</p>
<h3 id="_3-1-2-어트리뷰트-값-가져오기" tabindex="-1"><a class="header-anchor" href="#_3-1-2-어트리뷰트-값-가져오기" aria-hidden="true">#</a> 3.1.2 어트리뷰트 값 가져오기</h3>
<h4 id="attr-커맨드" tabindex="-1"><a class="header-anchor" href="#attr-커맨드" aria-hidden="true">#</a> attr 커맨드</h4>
<p>읽고 쓰기에 모두 사용하는 커맨드</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myImage<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image.gif<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>이미지<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>someClass<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>이미지다.<span class="token punctuation">"</span></span> <span class="token attr-name">custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>값<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>끝에 'custom=값' 추가하였음</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#myImage"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"custom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위와 같이하면 custom 어트리뷰트 값을 가져올 수 있다.</p>
<h4 id="_3-1-3-어트리뷰트-값-설정하기" tabindex="-1"><a class="header-anchor" href="#_3-1-3-어트리뷰트-값-설정하기" aria-hidden="true">#</a> 3.1.3 어트리뷰트 값 설정하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">attr</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'나는 '</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">'번 엘리먼트이고 내 이름은 '</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">:</span> <span class="token string">'unset'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'이다.'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 엘리먼트의 title 값을 해당 함수의 반환값으로 지정하겠다는 것임.
매번 엘리먼트를 가져올 때마다. 함수를 호출한다.</p>
<p>두번째 방법
여러 어트리뷰트의 이름과 값을 명시한다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'값을 입력하세요.'</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-4-어트리뷰트-제거하기" tabindex="-1"><a class="header-anchor" href="#_3-1-4-어트리뷰트-제거하기" aria-hidden="true">#</a> 3.1.4 어트리뷰트 제거하기</h3>
<p>removeAttr(name) 을 사용해서 프로퍼티 값을 제거할 수는 있으나 어트리뷰트가 제거되는 것은 아니다.</p>
<h3 id="_3-1-5-어트리뷰트-가지고-놀기" tabindex="-1"><a class="header-anchor" href="#_3-1-5-어트리뷰트-가지고-놀기" aria-hidden="true">#</a> 3.1.5 어트리뷰트 가지고 놀기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"a[href^=http://]"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"target"</span><span class="token punctuation">,</span><span class="token string">"_blank"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http:// 로 시작하는 링크에 target 어트리뷰트를 _blank로 설정한다.</p>
<h2 id="_3-2-엘리먼트-스타일-변경하기" tabindex="-1"><a class="header-anchor" href="#_3-2-엘리먼트-스타일-변경하기" aria-hidden="true">#</a> 3.2 엘리먼트 스타일 변경하기</h2>
<h3 id="_3-2-1-클래스-추가하고-제거하기" tabindex="-1"><a class="header-anchor" href="#_3-2-1-클래스-추가하고-제거하기" aria-hidden="true">#</a> 3.2.1 클래스 추가하고 제거하기</h3>
<p>class = &quot;someClass anotherClass yetAnotherClass&quot;
라고 한다면 클래스의 종류가 3가지인 것이지만
className 안에는 배열 형태로 3가지가 들어가는 것이 아니라 문자열 전체가 들어가게 된다는 것이다.
그러므로 클래스를 추가하고 제거할 때엔 커맨드를 사용하여 조작한다.</p>
<h4 id="addclass-name-removeclass-name" tabindex="-1"><a class="header-anchor" href="#addclass-name-removeclass-name" aria-hidden="true">#</a> addClass(name), removeClass(name)</h4>
<p>클래스 name을 추가/제거 한다.
toggleClass(name) 을 사용하면...
class에 name 이라는 이름이 있다면 제거하고 없다면 추가하는 메서드이다.</p>
<h3 id="_3-2-2-스타일-얻고-설정하기" tabindex="-1"><a class="header-anchor" href="#_3-2-2-스타일-얻고-설정하기" aria-hidden="true">#</a> 3.2.2 스타일 얻고 설정하기</h3>
<h4 id="css-메서드-사용하기" tabindex="-1"><a class="header-anchor" href="#css-메서드-사용하기" aria-hidden="true">#</a> css()메서드 사용하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div.expandable"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"width"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>width 값을 변경하고 싶을 때 위와 같이 사용한다.</p>
<p>width(), height()는
css(&quot;width&quot;,&quot;500px&quot;)
css(&quot;height&quot;,&quot;500px&quot;) 와 동일한 것이다.</p>
<p><code v-pre> style.width, style.height는 style 어트리뷰트를 통해 설정되었을 때만 값을 가져올 수 있다.</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body onresize<span class="token operator">=</span><span class="token string">"report()"</span><span class="token operator">></span>
<span class="token keyword">function</span> <span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#display'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#testSubject'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">'x'</span><span class="token operator">+</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#testSubject'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 코딩하면 글의 크기가 바뀔때마다 report() 함수를 호출하는데
report 함수는 display라는 아이디가 있는 곳에 글의 크기를 출력해주게 작성하였다.</p>
<h3 id="_3-2-3-스타일과-관련된-유용한-커맨드" tabindex="-1"><a class="header-anchor" href="#_3-2-3-스타일과-관련된-유용한-커맨드" aria-hidden="true">#</a> 3.2.3 스타일과 관련된 유용한 커맨드</h3>
<h4 id="hasclass-메서드" tabindex="-1"><a class="header-anchor" href="#hasclass-메서드" aria-hidden="true">#</a> hasClass() 메서드</h4>
<p><code v-pre>$(&quot;p:first&quot;).hasClass(&quot;surpriseMe&quot;)</code></p>
<p>surpriseMe 라는 클래스가 있으면 true를 반환한다.
getClassName이라는 메서드를 사용할 수 있다.</p>
<h2 id="_3-3-엘리먼트-콘텐츠-설정하기" tabindex="-1"><a class="header-anchor" href="#_3-3-엘리먼트-콘텐츠-설정하기" aria-hidden="true">#</a> 3.3 엘리먼트 콘텐츠 설정하기</h2>
<p>DOM API를 사용하여 수정
innerHTML을 사용하여 수정</p>
<h3 id="_3-3-1-html과-텍스트-콘텐츠-대체하기" tabindex="-1"><a class="header-anchor" href="#_3-3-1-html과-텍스트-콘텐츠-대체하기" aria-hidden="true">#</a> 3.3.1 HTML과 텍스트 콘텐츠 대체하기</h3>
<h4 id="html-메서드" tabindex="-1"><a class="header-anchor" href="#html-메서드" aria-hidden="true">#</a> html() 메서드</h4>
<p>html(text) 를 작성하여 html 코드의 콘텐츠를 수정할 수 있다.</p>
<h4 id="text-메서드" tabindex="-1"><a class="header-anchor" href="#text-메서드" aria-hidden="true">#</a> text() 메서드</h4>
<p>text() 메서드는 html의 text를 결합한 문자열을 반환한다.
text(content)에서 '&lt;&gt;'를 포함한다면 html 엔티티로 대체된다고 한다.</p>
<h3 id="_3-3-2-엘리먼트-복사하기와-이동하기" tabindex="-1"><a class="header-anchor" href="#_3-3-2-엘리먼트-복사하기와-이동하기" aria-hidden="true">#</a> 3.3.2 엘리먼트 복사하기와 이동하기</h3>
<h4 id="append-커맨드" tabindex="-1"><a class="header-anchor" href="#append-커맨드" aria-hidden="true">#</a> append() 커맨드</h4>
<p>마지막에 콘텐츠 추가 가능</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'&lt;b>텍스트&lt;/b>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 추가하면
모든 p 엘리먼트 뒤에</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>텍스트<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>가 붙게 된다.</p>
<p>엘리먼트 하나만 다른 위치로 이동시키거나 복사하려면 appendTo()를 사용
appendTo의 경우 엘리먼트가 여러개일 경우 복사가 되고 하나일 경우에는 이동 된다.</p>
<ul>
<li>prepend(), prependTo() 역시 append, appendTo 와 비슷하나 앞에 이동,복사 시키는 커맨드이다.</li>
<li>before(), insertBefore()</li>
<li>after(), insertAfter() 역시 비슷한경우다.</li>
</ul>
<ul>
<li>참고1</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>command<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prependTo<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위와 같은 input 엘리먼트가 있고 해당 라디오버튼 중 선택된 애를 가지고 오고 싶다고하면
<code v-pre>$('input[name=command]:checked')</code>
를 사용하면 name=command인 모든 라디오 버튼 중 체크 된 애를 가지고 오는 방법이다.
뒤에 .val()을 입력하여 value 값을 가지고 왔다.</p>
<ul>
<li>참고2<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'input[name=command]:checked'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#car'</span><span class="token punctuation">)</span><span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">'#targets p:first'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>를 보면<br>
commad 값으로 체크된 라디오 버튼의 값을 가져온 후 걔를 command에 담았다.<br>
그 후 셀렉터로 '#car'라는 id를 가진 자동차 이미지를 선택한 후 command의 문자열을 []에 넣어 해당 메서드를 불러왔다.<br>
그러면<br>
<code v-pre>$('#flower')[insertBefore]('#targets p')</code>
위와 같이 command 대신에 insertBefore를 그대로 입력시켜 주어 insertBefore를 그대로 실행시키는 건 안될까하여<br>
해봤는데 안된다. 왜그런지 생각해보니<br>
$('#flower')를 통해서 '#flower' 아이디를 가진 엘리먼트를 가져왔다.<br>
보통 메서드를 불러올 때는 . 을 써서 호출해준다.<br>
자바스크립트에선 []를 사용해서도 객체의 메서드를 호출할 수 있는데<br>
이 때, [메서드 명]이라기 보다는 [&quot;메서드 명&quot;] 이런식이다.<br>
큰 따옴표를 써줘야하는 이유는 []이렇게 해서 불러올 때는 보통 중간에 공백이 있는 경우기 때문에 문자열로 불러와야해서 그런 것이다.</li>
</ul>
<h3 id="_3-3-3-엘리먼트-감싸기" tabindex="-1"><a class="header-anchor" href="#_3-3-3-엘리먼트-감싸기" aria-hidden="true">#</a> 3.3.3 엘리먼트 감싸기</h3>
<p>특정 클래스를 가진 엘리먼트를 감싸고 싶을 때</p>
<h4 id="wrap-커맨드를-사용" tabindex="-1"><a class="header-anchor" href="#wrap-커맨드를-사용" aria-hidden="true">#</a> wrap() 커맨드를 사용</h4>
<p>$(&quot;a.surprise&quot;).wrap(&quot;<div class='hello'> </div>&quot;)</p>
<p>엘리먼트 말고 엘리먼트의 콘텐츠를 감싸고 싶을 때</p>
<h4 id="wrapinner-커맨드-사용" tabindex="-1"><a class="header-anchor" href="#wrapinner-커맨드-사용" aria-hidden="true">#</a> wrapInner() 커맨드 사용</h4>
<h3 id="_3-3-4-엘리먼트-제거하기" tabindex="-1"><a class="header-anchor" href="#_3-3-4-엘리먼트-제거하기" aria-hidden="true">#</a> 3.3.4 엘리먼트 제거하기</h3>
<ul>
<li>remove() 를 사용하면 엘리먼트가 제거가 되고</li>
<li>empty()를 사용하면 content가 제거 됨</li>
</ul>
<h3 id="_3-3-5-엘리먼트-복사하기" tabindex="-1"><a class="header-anchor" href="#_3-3-5-엘리먼트-복사하기" aria-hidden="true">#</a> 3.3.5 엘리먼트 복사하기</h3>
<h4 id="clone-커맨드" tabindex="-1"><a class="header-anchor" href="#clone-커맨드" aria-hidden="true">#</a> clone() 커맨드</h4>
<p>복사본의 객체를 넘긴다 해야하나..
예를들어
<code v-pre> $('img').clone().appendTo('fieldset.photo');</code></p>
<p>모든 이미지 엘리먼트의 복사본을 만들어 photo 클래스를 가진 모든 fieldset 엘리먼트에 덧붙인다.</p>
<h2 id="_3-4-폼-엘리먼트-값-다루기" tabindex="-1"><a class="header-anchor" href="#_3-4-폼-엘리먼트-값-다루기" aria-hidden="true">#</a> 3.4 폼 엘리먼트 값 다루기</h2>
<p>form 엘리먼트는 특별한 프로퍼티를 가지기에 얘는 따로 편리한 함수를 제공한다.
그리고 폼 플러그인 이라는 애가 있는데 얘는 더 강력한 기능을 지원해준단다..</p>
<h4 id="val-메서드" tabindex="-1"><a class="header-anchor" href="#val-메서드" aria-hidden="true">#</a> val() 메서드</h4>
<p>폼의 value 프로퍼티를 반환한다.
다중 선택 가능한 엘리먼트의 경우, 반환값은 선택된 값의 배열이다.</p>
<p>아무 것도 선택되지 않은 체크박스나 라디오버튼의 경우는 undefined를 반환한다.</p>
</div></template>
