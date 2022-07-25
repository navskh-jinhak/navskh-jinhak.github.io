<template><div><h1 id="_21-03-24" tabindex="-1"><a class="header-anchor" href="#_21-03-24" aria-hidden="true">#</a> &lt;21.03.24&gt;</h1>
<h1 id="소개-파트" tabindex="-1"><a class="header-anchor" href="#소개-파트" aria-hidden="true">#</a> [소개 파트]</h1>
<p>자바스크립트 : 웹페이지에 생동감을 불어넣기 위해 만들어진 프로그래밍 언어</p>
<ul>
<li>
<p>쉽게 말해 동적 언어</p>
</li>
<li>
<p>스크립트 언어 (컴파일 필요 없음)</p>
</li>
<li>
<p>브라우저 뿐 아니라 서버에서도 실행 가능</p>
</li>
<li>
<p>자바스크립트 가상 머신 (엔진)
<br>엔진의 종류
<br>1) V8 Chrome과 opera
<br>2) SpiderMonkey : FireFox
<br>3) Trident, Chakra : Ie</p>
</li>
<li>
<p>안전한 프로그래밍 언어
메모리 접근 허용x, 필요x</p>
</li>
<li>
<p>실행환경에 영향을 많이 받음</p>
<ul>
<li>ex) Node.js 환경 : 임의파일 읽거나 쓰고, 네트워크 요청 가능</li>
<li>브라우저 환경 : 웹페이지 조작. 클라이언트와 서버의 상호작용</li>
<li>※ 브라우저 환경에서의 제약사항
<ol>
<li>임의의 파일을 읽거나 쓰는 것에 제약이 있음.</li>
<li>탭과 창은 서로의 정보를 알 수 없음.</li>
</ol>
</li>
</ul>
</li>
<li>
<p>모바일 앱을 만드는 것이 가능함.</p>
</li>
<li>
<p>자바스크립트로 transipile 될 수 있는 언어들.
다른 언어로 작성했으나 자바스크립트로 변환가능</p>
<ol>
<li>CoffeScript: 짧은 문법을 도입하여 쉬운 코드 작성 가능</li>
<li>TypeScript : 자료형의 명시화, 개발을 단순화, 복잡한 시스템 지원</li>
<li>Flow : 자료형을 강제, Facebook에서 개발</li>
<li>Dart : 모바일 앱과 같이 브라우저가아닌 환경에서 동작하는 고유의 엔진</li>
</ol>
</li>
</ul>
<h1 id="기본파트" tabindex="-1"><a class="header-anchor" href="#기본파트" aria-hidden="true">#</a> [기본파트]</h1>
<h3 id="_1-script-태그" tabindex="-1"><a class="header-anchor" href="#_1-script-태그" aria-hidden="true">#</a> 1. &lt;script&gt; 태그</h3>
<ol>
<li>type = &quot;text/javascript&quot; : 예전에는 필수 명시 속성이였으나 요즘은 아님</li>
<li>language 속성도 더는 필요 없는 속성<br>
스크립트가 간단할 때는 태그 안에다 코딩하고<br>
보통은 스크립트를 분리된 파일로 저장하는 것이 좋다.</li>
</ol>
<h3 id="_2-코드-구조" tabindex="-1"><a class="header-anchor" href="#_2-코드-구조" aria-hidden="true">#</a> 2. 코드 구조</h3>
<p>문, 세미콜론, 주석의 의미에 대해서</p>
<h3 id="_3-strict-모드" tabindex="-1"><a class="header-anchor" href="#_3-strict-모드" aria-hidden="true">#</a> 3. strict 모드</h3>
<p>&quot;user strict&quot;를 스크립트/함수 최상단에 사용하면 &quot;모던한&quot; 방식으로 동작한다.</p>
<ul>
<li>모던 자바스크립트는 '클래스'와 '모듈'이라는 진일보한 구조를 제공한다.</li>
</ul>
<h3 id="_4-변수" tabindex="-1"><a class="header-anchor" href="#_4-변수" aria-hidden="true">#</a> 4. 변수</h3>
<ul>
<li>let 을 붙여서 선언한다. 거의 그렇게 안했는데?</li>
<li>var을 붙여도 거의 동일하게 동작한다. var는 오래된 방식이라고 한다.</li>
</ul>
<ul>
<li>특징은 자료형이 없다는 것!
: 자료형이 없는듯 하지만 사실 동적으로 변환되기 때문에 그렇게 느껴지는 것임.
: BigInt 자료형은 숫자 끝에 n을 붙인다.</li>
</ul>
<ul>
<li>변수는 한번만 선언해야 한다.</li>
<li>카멜표기법 첫 단어를 제외한 각 단어의 첫 글자를 대문자로 작성함.</li>
<li>변화하지 않는 상수를 선언할 땐 const를 사용한다. 재할당시 에러발생</li>
<li>const는 기억하기 힘든 값을 명명할 때 사용한다.</li>
<li>명명을 잘하는 사람일 수록 노련한 개발자이다! (처음부터 독립적인 코드를 작성하기 보다 기존 코드의 틀을 변경하고 확장하는데 대부분의 시간을 보냄)</li>
</ul>
<h3 id="_5-alert-prompt-confirm을-이용한-상호작용" tabindex="-1"><a class="header-anchor" href="#_5-alert-prompt-confirm을-이용한-상호작용" aria-hidden="true">#</a> 5. alert, prompt, confirm을 이용한 상호작용</h3>
<ul>
<li>alert 는 익히 알고 있음</li>
<li>prompt예시
result = prompt(title, [default]);
입력필드, 확인, 취소 버튼 창 띄움
title : 보여줄 문자열
default :  기본 입력 (선택값)
result 에 입력값을 그대로 반환해준다.</li>
<li>confirm 창
alert 창과 비슷한데 결과를 true, false로 반환해준다.</li>
</ul>
<h3 id="_6-형변환" tabindex="-1"><a class="header-anchor" href="#_6-형변환" aria-hidden="true">#</a> 6. 형변환</h3>
<ul>
<li>문자형 변환 : String(변수명)</li>
<li>숫자형 변환
<ol>
<li>나누기를 적용하면 무조건 숫자형</li>
<li>Number() 를 사용하여 숫자형으로 바꿈</li>
<li>글자 들어가있는 문자열의 경우는 NaN으로 변환됨</li>
</ol>
</li>
<li>불린형 변환
: 숫자 0, 문자열 null 값은 false로 변환됨 그 외에는 true</li>
</ul>
<h3 id="_7-연산자" tabindex="-1"><a class="header-anchor" href="#_7-연산자" aria-hidden="true">#</a> 7. 연산자</h3>
<ul>
<li>대부분의 연산자는 알고 있음</li>
<li>단항 연산자 + 를 사용하면 숫자형으로 변환 가능</li>
<li>할당연산자(=)의 체이닝 a=b=c=2+2; a,b,c에 4를 입력한다.</li>
<li>쉼표연산자 마지막 표현식의 결과만 출력해준다.
ex) let a = (1+2, 3+4) // 7로 출력 (거의 쓸일 없음)</li>
</ul>
<h3 id="_8-데이터-비교" tabindex="-1"><a class="header-anchor" href="#_8-데이터-비교" aria-hidden="true">#</a> 8. 데이터 비교</h3>
<ul>
<li>다른 형을 가진 값 간에 비교
자료형이 다르면 무조건 숫자형으로 바꿈</li>
<li>0 == false 혹은  &quot;&quot; == false 는 모두 true를 반환한다.</li>
<li>일치연산자(===)을 사용하면 자료형이 같아야 한다.</li>
</ul>
<h3 id="_9-if-문" tabindex="-1"><a class="header-anchor" href="#_9-if-문" aria-hidden="true">#</a> 9. if 문</h3>
<ul>
<li>조건부 연산자 ?
condition ? value1 : value2;
조건이 true 면 value1을, false면 value2를 출력해준다.
가독성이 떨어지므로 거의 사용 x</li>
</ul>
<h3 id="_10-논리연산자" tabindex="-1"><a class="header-anchor" href="#_10-논리연산자" aria-hidden="true">#</a> 10. 논리연산자</h3>
<ul>
<li>not ! 연산자 의 경우 !!두번쓰면 자료형을 boolean으로 바꿔준다.</li>
</ul>
<h3 id="_11-null-병합-연산자" tabindex="-1"><a class="header-anchor" href="#_11-null-병합-연산자" aria-hidden="true">#</a> 11. null 병합 연산자</h3>
<ul>
<li>a ?? b 의 경우
a가 null도 아니고 undefined도 아니면 a
그 외의 경우는 b
사용법 height = height ?? 100;
height에 값이 정의 되었으면 기존 값
정의 안되었으면 100 입력</li>
<li>연산자 우선순위가 낮기 때문에 괄호로 묶어서 사용한다.</li>
<li>안정성 이슈 때문에 &amp;&amp; || 과 같이 사용할 수 없다.</li>
</ul>
<h3 id="_12-반복문" tabindex="-1"><a class="header-anchor" href="#_12-반복문" aria-hidden="true">#</a> 12. 반복문</h3>
<ul>
<li>for 문의 경우 begin, step에 해당하는 값을 생략할 수 있다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// i를 선언하고 값도 할당하였습니다.</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 'begin'이 필요하지 않기 때문에 생략하였습니다.</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>  i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0, 1, 2</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>for(;😉 이렇게 사용하면 무한루프가 동작</li>
<li>break; 는 언제든 빠져나올 수 있는 장치</li>
<li>contiue는 다음 반복으로 넘어감</li>
<li>? 오른 쪽에 break, continue는 사용할 수 없음</li>
</ul>
</div></template>
