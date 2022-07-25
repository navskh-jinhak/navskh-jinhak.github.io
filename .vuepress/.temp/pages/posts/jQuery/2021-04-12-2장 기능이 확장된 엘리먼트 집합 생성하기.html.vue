<template><div><h1 id="_2장-기능이-확장된-엘리먼트-집합-생성하기" tabindex="-1"><a class="header-anchor" href="#_2장-기능이-확장된-엘리먼트-집합-생성하기" aria-hidden="true">#</a> 2장 기능이 확장된 엘리먼트 집합 생성하기.</h1>
<h2 id="_2-1-조작하려는-엘리먼트-선택하기" tabindex="-1"><a class="header-anchor" href="#_2-1-조작하려는-엘리먼트-선택하기" aria-hidden="true">#</a> 2.1 조작하려는 엘리먼트 선택하기.</h2>
<p>일단 선택하려면 해당 엘리먼트를 설명할 줄 알아야한다
jQuery는 그런면에서 어떤 엘리먼트라도 세련,간결,쉽게 설명할 수 있는 셀렉터를 만들었다.
기본이 되는 것은 &quot;CSS문법&quot;이다.</p>
<h3 id="_2-1-1-기본-css-셀렉터-사용하기" tabindex="-1"><a class="header-anchor" href="#_2-1-1-기본-css-셀렉터-사용하기" aria-hidden="true">#</a> 2.1.1 기본 CSS 셀렉터 사용하기</h3>
<p>예시를 통해 보자.</p>
<ul>
<li>a - 모든 링크 &lt;a&gt; 엘리먼트와 일치하는 셀렉터</li>
<li>#specialID - specailID를 아이디로 가지는 애 선택 셀렉터</li>
<li>.specialClass - specialClass를 클래스로 가진애 선택 셀렉터</li>
<li>a#specailID.specialClass - 아이디가 specialID이고 specialClass를 클래스로 가지는 링크와 일치하는 셀렉터</li>
</ul>
<p>이정도만 돼도 꽤 상세하게 들어갈 수 있다.
위 사항을 그냥 $(&quot;&quot;) 로 감싸주기만 하면 곧바로 사용할 수 있다.
그러나 또한 고급 셀렉터를 제공해준다.</p>
<h3 id="_2-1-2-자식-셀렉터-컨테이너-셀렉터-어트리뷰트-셀렉터-사용하기" tabindex="-1"><a class="header-anchor" href="#_2-1-2-자식-셀렉터-컨테이너-셀렉터-어트리뷰트-셀렉터-사용하기" aria-hidden="true">#</a> 2.1.2 자식 셀렉터, 컨테이너 셀렉터, 어트리뷰트 셀렉터 사용하기</h3>
<p>&quot;자식 셀렉터&quot;
<br>일단 알아야하는 것은 &quot;부모 셀렉터 &gt; 자식 셀렉터&quot; 를 통해 자식 셀렉터를 선택할 수 있다.
이렇게하면 직계 자식만 가져오는 것이다. 후손을 가져오는 것이 아니다.</p>
<p>&quot;어트리뷰트 셀렉터&quot;<br>
또 링크 가져오는 경우 링크를 선택하는 셀렉터를 작성할 수 있다.
a[href^=http://]
캐럿문자(^)는 문자열의 시작을 의미한다.
http:// 로 시작하는 모든 링크를 가져오라는 뜻이다. &quot;이를 어트리뷰터 셀렉터&quot;라고 한다.</p>
<p>어트리뷰트 셀렉터 는 값에 상관 없이 특정 어트리뷰트를 가진 엘리먼트를 찾으려면
form[method] 를 쓰면, method 어트리뷰트를 가지는 <form> 엘리먼트를 찾는다.
input[type=text] type 어트리뷰트의 값을 text로 가지는 input 엘리먼트를 찾는다.</p>
<ul>
<li>어트리뷰트 시작 문자열 찾기
div[title^=my] my로 시작하는 title 어트리뷰트의 div 엘리먼트를 찾는다.</li>
<li>어트리뷰트 끝 문자열 찾기
a[href<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>=</mo><mi mathvariant="normal">.</mi><mi>p</mi><mi>d</mi><mi>f</mi><mo stretchy="false">]</mo><mi>p</mi><mi>d</mi><mi>f</mi><mtext>를참조하는링크를가져온다</mtext><mi mathvariant="normal">.</mi><mo stretchy="false">(</mo></mrow><annotation encoding="application/x-tex">=.pdf] pdf를 참조하는 링크를 가져온다.(</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">.</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span><span class="mclose">]</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span><span class="mord hangul_fallback">를참조하는링크를가져온다</span><span class="mord">.</span><span class="mopen">(</span></span></span></span>=를 사용하면 어트리뷰트 값이 끝나는 문자열을 지정하는 것이다.)</li>
<li>어트리뷰트 중간 문자열 찾기
a[href*=<a href="http://jquery.com" target="_blank" rel="noopener noreferrer">jquery.com<ExternalLinkIcon/></a>] 얘를 중간으로 갖는 엘리먼트를 가져온다.</li>
</ul>
<p>&quot;컨테이너 셀렉터&quot;
li:has(a)
li엘리먼트 중 a 엘리먼트를 가지는 애를 찾는다.</p>
<ul>
<li>li a 는 li 안에 있는 a를 찾으라는 거고 li:has(a)는 a를 가지는 li를 찾으라는 거임</li>
</ul>
<h3 id="_2-1-3-위치로-선택하기" tabindex="-1"><a class="header-anchor" href="#_2-1-3-위치로-선택하기" aria-hidden="true">#</a> 2.1.3 위치로 선택하기</h3>
<pre><code>a:first 
첫번째 a 엘리먼트와 일치한다.

p:odd 모든 홀수 문단
p:even 모든 짝수 문단

li:last-child 마지막 자식 엘리먼트를 선택한다.
※li가 자식인 것이다.

:first               = 페이지에서 처음나오는 엘리먼트
:last                = 마지막에 있는 엘리먼트
:first-child         = 첫번째 자식 엘리먼트
:last-child          = 마지막 자식 엘리먼트
:only-child          = 형제가 없는 엘리먼트
:nth-child(n)        = n번째 자식 엘리먼트 nth-child(2) 면 두번째 자식 엘리먼트이다.
:nth-child(even|odd) = 짝수번째, 홀수번째 자식 엘리먼트
:nth-child(Xn+Y)     = 공식에 따른 자식 엘리먼트 예를들어 (3n+3) 3의 배수에 3번째 후에 있는 엘리먼트를 의미함
:even / :odd         = 페이지 전체의 짝수/ 홀수 번째 엘리먼트
:eq(n)               = n번째 일치하는 엘리먼트 찾음
:gt(n)               = n번째 엘리먼트는 포함하지 않고 그 후의 엘리먼트 찾음
:lt(n)               = n번째 엘리먼트는 포함하지 않고 그 전의 엘리먼트 찾음
</code></pre>
<h3 id="_2-1-4-jquery-정의-셀렉터-사용하기" tabindex="-1"><a class="header-anchor" href="#_2-1-4-jquery-정의-셀렉터-사용하기" aria-hidden="true">#</a> 2.1.4 jQuery 정의 셀렉터 사용하기</h3>
<pre><code>:animated        = 현재 애니메이션이 적용되고 있는 엘리먼트를 선택한다.
:button          = 모든 버튼을 선택한다(input[type=submit], input[type=reset], input[type=button], button).
:checkbox        = 체크박스 엘리먼트만 선택한다.
:checked         = 선택된 체크박스나 라디오 버튼만을 선택한다(CSS에서 지원). 
:contains(foo)   = 텍스트 foo를 포함하는 엘리먼트만 선택한다.
:disabled        = 인터페이스에서 비활성화 상태인 모든 폼 엘리먼트를 선택한다(CSS에서 지원).
:enabled         = 인터페이스에서 활성화 상태인 모든 폼 엘리먼트를 선택한다(CSS에지원).
:file            = 모든 파일 엘리먼트를 선택한다(input[type=file]).
:header          = 헤더 엘리먼트만 선택한다. 예를 들어&lt;h1&gt;부터 &lt;h6&gt;까지의 엘리먼트를 선택한다.
:hidden          = 감춰진 엘리먼트만 선택한다.
:image           = 폼 이미지를 선택한다(input[type=image]).
:input           = 폼 엘리먼트만 선택한다(input, select, textarea, button).
:not(filter)     = 필터의 값을 반대로 변경한다.
:parent빈        = 엘리먼트를 제외하고, 텍스트도 포함해서 자식 엘리먼트를 가지는 엘리먼트를 선택한다.
:password        = 패스워드 엘리먼트만 선택한다(input[type=password]).
:radio           = 라디오 버튼 엘리먼트만 선택한다(input[type=radio]).
:reset           = 리셋 버튼을 선택한다(input[type=reset] 이나 button[type=reset]).
:selected        = 선택된 엘리만트만 선택한다.
:submit          = 전송 버튼을 선택한다(button[type=submit] 이나 input[type=submit]).
:text            = 텍스트 엘리먼트만 선택한다(input[type=text]).
:visible         = 보이는(visible) 엘리먼트만 선택한다.

중첩 사용이 가능하다.


** :not 필터라는 것도 있다.
</code></pre>
<h2 id="_2-2-새로운-html-생성하기" tabindex="-1"><a class="header-anchor" href="#_2-2-새로운-html-생성하기" aria-hidden="true">#</a> 2.2 새로운 HTML 생성하기</h2>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">&quot;</mi><mi mathvariant="normal">&quot;</mi><mo stretchy="false">)</mo><mtext>안에문자열을넣어서</mtext><mi>H</mi><mi>T</mi><mi>M</mi><mi>L</mi><mtext>을생성할수있다</mtext><mi mathvariant="normal">.</mi><mi mathvariant="normal">‘</mi><mi mathvariant="normal">‘</mi><mi mathvariant="normal">‘</mi></mrow><annotation encoding="application/x-tex">(&quot;&quot;) 안에 문자열을 넣어서 HTML을 생성할 수 있다.
  ```</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">&quot;&quot;</span><span class="mclose">)</span><span class="mord hangul_fallback">안에문자열을넣어서</span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mord mathnormal" style="margin-right:0.10903em;">TM</span><span class="mord mathnormal">L</span><span class="mord hangul_fallback">을생성할수있다</span><span class="mord">.‘‘‘</span></span></span></span>(&quot;<DIV> 안녕하세요 </DIV>&quot;)```</p>
<h2 id="_2-3-확장된-엘리먼트-집합-관리하기" tabindex="-1"><a class="header-anchor" href="#_2-3-확장된-엘리먼트-집합-관리하기" aria-hidden="true">#</a> 2.3 확장된 엘리먼트 집합 관리하기</h2>
<h3 id="_2-3-1-확장된-집합의-크기-결정하기" tabindex="-1"><a class="header-anchor" href="#_2-3-1-확장된-집합의-크기-결정하기" aria-hidden="true">#</a> 2.3.1 확장된 집합의 크기 결정하기</h3>
<p>확장 엘리먼트 집합은 배열과 유사함.
그러므로 length 프로퍼티를 지원하며 엘리먼트의 갯수 정보를 알 수 있다.
같은 정보를 반환하는 .size() 메서드도 있다.
a.size()를 실행해보니 문서내의 &lt;a&gt; 갯수 4개를 반환해주었다.</p>
<h3 id="_2-3-2-확장-집합에서-엘리먼트-획득하기" tabindex="-1"><a class="header-anchor" href="#_2-3-2-확장-집합에서-엘리먼트-획득하기" aria-hidden="true">#</a> 2.3.2 확장 집합에서 엘리먼트 획득하기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>img<span class="token punctuation">[</span>alt<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>을 사용하면 alt 속성을 가지고 있는 첫번째 이미지를 가져온다.
get 을써도 된다. 메서드를 사용하고 싶다면...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img[alt]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>인덱스를 써서 인덱스 번호도 알 수 있다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img#verdana'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-3-확장-엘리먼트-집합-재편성하기" tabindex="-1"><a class="header-anchor" href="#_2-3-3-확장-엘리먼트-집합-재편성하기" aria-hidden="true">#</a> 2.3.3 확장 엘리먼트 집합 재편성하기</h3>
<h4 id="확장-집합에-다른-엘리먼트-추가하기" tabindex="-1"><a class="header-anchor" href="#확장-집합에-다른-엘리먼트-추가하기" aria-hidden="true">#</a> 확장 집합에 다른 엘리먼트 추가하기<br></h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img[alt]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'img[title'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>add() 메서드를 통해 논리합을 구현할 수 있다.
$('img[alt],img[title]') ,(콤마) 를 통해서도 논리합을 구현할 수 있다.
그러나 이럴 경우 엘리먼트를 추가할 때는 별로임.</p>
<br>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img[alt]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'thickBorder'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'img[title]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'seeThrough'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>를 사용할 경우 alt 속성을 가진 애를 굵게 칠하고
alt와 title 속성을 가진 애 모두 투명하게 만들겠다는 것이다.</p>
<h4 id="확장-집합-다듬기" tabindex="-1"><a class="header-anchor" href="#확장-집합-다듬기" aria-hidden="true">#</a> 확장 집합 다듬기</h4>
<p>not() 메서드는 논리 부정이 가능한 메서드이다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img[title]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token string">'[title*=puppy]'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 할 경우 title을 가지는 애중 puppy 를 가지는 애는 빼라는 뜻이다.
filter(조건) 해당 조건을 만족하면 필터링해낸다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'img[title]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'seeThrough'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'[title*=puppy]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'thickBorder'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="확장-집합의-부분집합-얻기" tabindex="-1"><a class="header-anchor" href="#확장-집합의-부분집합-얻기" aria-hidden="true">#</a> 확장 집합의 부분집합 얻기</h4>
<p>slice(begin, end) 라는 메서드를사용하면 연속된 부분을 잘라서 새로운 집합으로 반환한다.
$('*').slice(2,3);
페이지 전체에서 세번째 엘리먼트를 담은 새로운 집합을 반환한다.</p>
<h4 id="관계를-이용해-확장집합-얻기" tabindex="-1"><a class="header-anchor" href="#관계를-이용해-확장집합-얻기" aria-hidden="true">#</a> 관계를 이용해 확장집합 얻기</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>children() - 확장 엘리먼트의 고유한 자식으로 구성된 확장 집합을 반환
contents() - 엘리먼트의 콘텐츠로 구성된 확장 집합을 반환. 텍스트 노드도 포함되며 주로 &lt;iframe> 엘리먼트의 콘텐츠를 얻고자 사용
next() - 확장 집합 내의 각 확장 엘리먼트 바로 다음에 나오는 형제로 구성된 확장 집합을 반환
nextAll() - 확장 집합 내의 각 확장 엘리먼트 다음에 나오는 모든 형제로 구성된 확장 집합을 반환
parent() - 확장 집합 내에 있는 모든 확장 엘리먼트의 바로 위 부모로 구성된 확장 집합을 반환
parents() - 모든 확장 엘리먼트의 조상으로 구성된 확장 집합을 반환. 바로 위 부모와 상위의 모든 조상이 포함되지만 문서 루트(document root)는 포함되지 않는다.
prev() - 확장 집합 내의 각 확장 엘리먼트 바로 이전에 나오는 형제로 구성된 확장 집합을 반환
prevAll() - 확장 집합 내의 각 확장 엘리먼트 이전에 나오는 모든 형제로 구성된 확장 집합을 반환
siblings() - 확장 엘리먼트의 모든 형제를 포함하는 확장 집합을 반환
find(selector) - 원본의 모든 엘리먼트 중 전달된 셀렉터 표현식과 일치하는 엘리먼트로 구성된 새로운 확장 집합을 반환
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="확장-집합을-이용하는-기타-방법들" tabindex="-1"><a class="header-anchor" href="#확장-집합을-이용하는-기타-방법들" aria-hidden="true">#</a> 확장 집합을 이용하는 기타 방법들</h4>
<p>find() 메서드는 확장 집합에서 전달된 셀렉터 표현식으로 찾은 애들을 새로운 집합으로 반환한다.
$() 랑 별 다를바 없음.
is() 메서드는 셀렉터 표현식으로 찾아지면 true를 반환한다.</p>
<h3 id="_2-3-6-jquery-체인-관리하기" tabindex="-1"><a class="header-anchor" href="#_2-3-6-jquery-체인-관리하기" aria-hidden="true">#</a> 2.3.6 jQuery 체인 관리하기</h3>
<pre><code>end()메서드를 통해 jQuery 체인을 끊고 초기 확장 집합으로 돌아간다고 보면 된다.
예를들어 
$('img').clone().appendTo('#someWhere').addClass('beenCloned')
※ .clone() 메서드는 복사본을 만들어주는 메서드이다.
이렇게 하면 복사본 이미지에 클래스가 추가되는 코드가 된다.
그런데 복사본은 복사본대로 만들고 그 원본 이미지에 클래스 확장을 원하는 경우 중간에 end()를 넣어주어 끊어준다.
$('img').clone().appendTo('#someWhere').end().addClass('beenCloned')
</code></pre>
</div></template>
