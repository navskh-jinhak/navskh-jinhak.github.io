<template><div><h1 id="jquery-교육" tabindex="-1"><a class="header-anchor" href="#jquery-교육" aria-hidden="true">#</a> [jQuery 교육]</h1>
<h2 id="_1-core" tabindex="-1"><a class="header-anchor" href="#_1-core" aria-hidden="true">#</a> 1. CORE</h2>
<p>jQuery = $
같음</p>
<h2 id="_2-selector" tabindex="-1"><a class="header-anchor" href="#_2-selector" aria-hidden="true">#</a> 2. Selector</h2>
<p>그냥 사용하다보면 알게 된다.<br>
: hide, visible, even, order 뭐 이런 것들<br>
css selector를 공부하는게 오히려 더 나을 수 있다.<br>
. 은 클래스 선택자</p>
<h1 id="은-아이디-선택자" tabindex="-1"><a class="header-anchor" href="#은-아이디-선택자" aria-hidden="true">#</a> 은 아이디 선택자</h1>
<p>attr</p>
<p>그룹선택자<br>
A, B : A또는 B</p>
<p>자손<br>
자식<br>
자식 결합자를 잘 써야 함.</p>
<p>gt는 뭐 초과<br>
has 셀렉터 : td 안에 span 태그를 가지고 있다 td:has(span)<br>
hidden 숨겨져 있는 것들</p>
<p>input 셀렉터 : input textarea select 3개 모두 리턴<br>
lt : 미만<br>
not 셀렉터 : 안가지고 있는 거 찾을 때.<br>
nth-child() 연산이 가능하다.</p>
<p>jQuery는 모든 것이 배열로 리턴된다.<br>
셀렉터가 가장 기본이고 가장 중요하다.</p>
<h2 id="_3-trversing-선택한-애를-가지고-위아래로-옮기거나-뭐-그런거" tabindex="-1"><a class="header-anchor" href="#_3-trversing-선택한-애를-가지고-위아래로-옮기거나-뭐-그런거" aria-hidden="true">#</a> 3. Trversing (선택한 애를 가지고 위아래로 옮기거나 뭐 그런거)</h2>
<p>추가 삭제의 개념<br>
append 는 아니고 add<br>
0개든 한개든 두개든 가지고 있는 엘리먼트에 추가로 더해줌.<br>
addBack<br>
show find addBack<br>
find에서 찾아온 객체에 그 상위 엘리먼트들을 추가한다.<br>
예)<br>
article 기준으로<br>
h1 을 찾아<br>
전부다 가져와서 한꺼번에 조작할 수 있음</p>
<p>어렵다는 것은 여러줄로 할 수 있는 작업을 한 줄로 할 수있는 경우<br>
그걸봐도 잘 모르는 경우 가독성이 떨어져서 그러나 사용하다보면<br>
이렇게 사용할 수 있다는 것이다.</p>
<p>children()<br>
엘리먼트의 자식들을 모둘 리턴해준다.</p>
<p>closest()<br>
내가 가진 엘리먼트<br>
$('aritcle').closest('div')<br>
뭐 이렇게 하면 그 div를 찾아줌</p>
<p>content 를 통해 그 안의 내용물을 다룰 수 있다.<br>
ex)<br>
생성툴이 있고 생성툴 에디터를 통해서 편집을 할 수가 있다.<br>
위치 지점을 대문자 두개로 처리한다.<br>
그 객체의 text 를 찾아서<br>
content를 가져와서 text를 잘라버리고<br>
그 대문자 두개를 다른 걸로 치환해버림</p>
<p>end() 를 써서 메서드 체이닝을 멈추고 그 전의 반환 값을 가져옴.<br>
굳이 이렇게 쓰는 이유는 jQuery 객체가 이중으로 안생기기 때문에 용량을 줄일 수 있다.</p>
<p>eq() 몇번째 엘리먼트<br>
even()은 짝수<br>
filter() 어려운거, map()<br>
find() 엘리먼트 찾아줌.<br>
first() 첫번째<br>
has() 와 :has 는 같음<br>
is() 이게 속성으로 체크드 되어 있는가. ( 단일 검사 true false )<br>
offsetParent() 실제로 위치된 곳의 좌표상의 상위. 실제 태그의 상위가 아니라.<br>
drag &amp; drop으로 위치 이동한 경우 거기 위치의 parent를 찾아줌<br>
parent() 단일 부모<br>
parents() 부모들</p>
<p>자 filter, map, slice<br>
Array.prototype에 있는 함수랑 동일한 역할을 한다고 보면 된다.<br>
배열은 아니지만 배열처럼 구현할 수 있게<br>
filter는 true로 입력되면 배열 만들어주는 것.</p>
<h2 id="_4-manipulation-조작-선택한-애를-가지고-조작하는-것" tabindex="-1"><a class="header-anchor" href="#_4-manipulation-조작-선택한-애를-가지고-조작하는-것" aria-hidden="true">#</a> 4. Manipulation (조작) 선택한 애를 가지고 조작하는 것</h2>
<p>after() 선택한 엘리먼트의 동일한 레벨의 형제 노드를 만드는 것<br>
append() 자식으로 맨 뒤에 추가<br>
appendTo() 나를 어디에 자식으로 추가해라.<br>
attr() 어트리뷰트. attr(name) 게터, attr(name,value) 세터<br>
before() after 에서 이전 형제 라인<br>
clone()  복사 true라고 받으면 이벤트 다 가져오고, 데이터 객체도 가져옴<br>
css() 스타일 추가 가능. object 형식으로 넘길 수 있다.<br>
detach() remove() 랑 다름. 이건 떼어내서 잠깐 보관함.<br>
empty() 안에 있는 애들을 다 비워버림. 나는 없어지지 않고, 내 자신들이 없어짐<br>
height() 엘리먼트의 높이 가져옴. 계산된 값을 리턴함. 브라우저별로 달라짐(마진 패딩 계산법이 다름)<br>
html() 순수 html 가지고 옴<br>
innerHeight() include, 패딩, 제외하고 딱 내부의 높이<br>
innerWidth() 내부의 넓이</p>
<p>offset() 내가 위치한 좌표를 가져옴. 상위 엘리먼트에 의해 결정된 상대 좌표<br>
position() 은 절대 좌표<br>
이런 것들은 라비르러리 쓸 것.</p>
<p>outerHeight()<br>
outerWidth() 패딩, 보더, 마진까지 포함해서 높이, 너비</p>
<p>prepend() 는 append와 반대, 자식을 다 밀어버리고 첫번째로 넣음</p>
<p>prop() 어트리뷰트랑 비슷한 작업을 함.<br>
attr 해봐서 안되면 prop를 쓰면 되고, prop로 안되면 attr 써보고 해봐라<br>
remove() 엘리먼트 아예 삭제</p>
<p>text()로 하면 html 값들 다 지어지고 연속된 text 반환<br>
toggleClass() 그 클래스가 있으면 지우고 없으면 넣고<br>
unwrap() 그 뒤에 들어가는 태그로 벗겨냄<br>
wrap() 은 씌우는 것</p>
<p>val() input 태그에 많이 쓰임. selectbox에 val을 써도, radio에 써도, textarea에도 다 됨</p>
<ul>
<li>textarea 같은 경우는 text() 로도 입력되니 그 정도만 알고 넘어가기</li>
</ul>
<h2 id="_5-event" tabindex="-1"><a class="header-anchor" href="#_5-event" aria-hidden="true">#</a> 5. Event</h2>
<p>이게 셀렉터 다음으로 두번째로 많이씀<br>
bind()<br>
bind(eventType[, eventData], handler)<br>
hover 마우스 올라가 있을 때<br>
keydown,<br>
keypress<br>
keyup<br>
키 이벤트 삼총사<br>
mousedown<br>
mouseenter<br>
mouseleave (드래그 &amp; 드랍에서 많이 쓴단다)</p>
<p>off/ on<br>
a name이라는 속성을 누르면 클릭 이벤트 발생하도록 동적으로 할당한다는 것.<br>
off는 꺼버림<br>
resize() 윈도우가 리사이즈 될 때마다 트리거 시킴<br>
옛날에 이렇기 많이 썼고 요즘은 반응형이기 때문에 css 레벨에서 적용함.</p>
<p>trigger() 이벤트도 실행시키고 이벤트 함수도 실행됨<br>
체크박스 체크/해제 가능<br>
triggerhandler() 트리거에 있는 함수만 실행시킴</p>
<h2 id="_6-effects" tabindex="-1"><a class="header-anchor" href="#_6-effects" aria-hidden="true">#</a> 6. Effects</h2>
<p>UI 적인 측면이 강함<br>
animated() 는 문법이 정말 신기함.</p>
<h2 id="_7-기타" tabindex="-1"><a class="header-anchor" href="#_7-기타" aria-hidden="true">#</a> 7. 기타</h2>
<p>data() 객체나 값이나 하는 것들을 elemet에 집어넣고 빼고 할 수 있음 얘는 브라우저가 돌아갈 때만 유효한 값이 됨.<br>
get() jQUery로 셀렉트 한 애들을 엘리먼트 형태로 가지고 오고 싶다. 할 때 씀<br>
param() serialize 해주는 역할<br>
size() length와 같은 개념임<br>
toArray() 배열처럼 동작하긴 하지만 실제 배열로 바꿔주는 애임</p>
<h2 id="_8-utitlities" tabindex="-1"><a class="header-anchor" href="#_8-utitlities" aria-hidden="true">#</a> 8. utitlities</h2>
<p>clearQueue()<br>
dequeque() 큐에 이벤트를 넣고 빼고 할 때 사용</p>
<p>어떤 엘리먼트에 이벤트가 뭐가 됐는지 모르겠다 하면<br>
.event() 이런식으로 입력해보면 리턴이 됨.<br>
그런데 어느 순간 버전부터, jquery.data().event 라고 하면 나옴</p>
<p>grep() array에 쓰는 함수인데, filter와 비슷함.</p>
<p>noop() no operation 그냥 함수 function(){}를 지원해줌</p>
<h1 id="javascript-이모저모" tabindex="-1"><a class="header-anchor" href="#javascript-이모저모" aria-hidden="true">#</a> [Javascript 이모저모]</h1>
<p>프론트엔드 개발자</p>
<ul>
<li>디자이너 엔지니어 간의 시각적 언어 확립<br>
이런 것들 사전에 협의가 분명하게 되어야 함.</li>
<li>뭐가 어떻게 바뀌고 그러면 어떻게 동작하는지 명확해야 함</li>
</ul>
<p>sequelize.js<br>
어떤 데이터베이스간에 호환성을 제공해주는 orm 을 통해서 db 제어</p>
<p>nodejs 쪽은<br>
db와 암호화같은 것들<br>
대용량 통신 부분들 노하우가 없음.<br>
그러나 앞으로 닷넷 보다는 nodejs로 바꿀 예정임</p>
</div></template>
