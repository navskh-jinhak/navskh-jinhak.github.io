---
icon: edit
title: jQuery-1장 jQuery를 시작하며
date: 2021-04-12
category:
  - jQuery
  - Study
tag:
  - jQuery
---
# 1장 jQuery를 시작하며

## 1.3 jQuery 기초
  `jQuery는 HTML 페이지의 엘리먼트를 조회한 다음 그 결과를 이용하여 사용자가 원하는 동작을 수행하는데 중점을 둔다.`
  
### 1.3.1 jQuery() 함수
  셀렉터는 외부 스타일 시트 (css와 같은)에서 엘리먼트 그룹을 참조할 방법이 필요했기에 만들어졌다.
  jQuery는 강력한 셀렉터를 지원한다.

  jQuery 셀렉터 문법
  $(selector)
  또는,
  jQuery(selector)

  $() 이런 형태의 표기법에 익숙해져야 한다.
  예를들어 $("p a") \<p\> 엘리먼트에 포함된 모든 링크를 찾을 때 사용한다.
  위 셀렉터의 결과로 객체를 반환한다. 

  $("div.notLongForThisWorld").fadeOut();
  이렇게 하면 div 태그 중 class가 notLongForThisWorld 인 애를 찾아서 페이드아웃을 시킬 수 있다.
  그런데...
  해당 동작을 실행한 후 추가 동작을 할 수 있도록 동일한 엘리먼트 그룹을 반환해준다. 그러므로...
  $("div.notLongForThisWorld").fadeOut().addClass("removed");
  이렇게 해줌으로써 새로운 css 클래스 removed를 추가할 수 있는 것이다.
  위와 같은 "jQuery체인"은 무한대로 연결할 수 있다.

### 1.3.2 유틸리티 함수
  유틸리티 함수란 $.trim(), jQuery.trim() 과 같이 jQuery에서 지원해주는 내부메서드 같은 개념인듯하다.

### 1.3.3 문서준비핸들러
  $() 안에 함수를 인수로 전달하면 해당 함수를 (여러개가 될 수 있음) 선언한 순서대로 실행된다.
  window.onload()에서는 함수 하나만 사용할 수 있는 것에 비해 좋다.

### 1.3.4 DOM 엘리먼트 생성하기

  ```$("<p> 안녕! </p>")```

  이렇게 하면  DOM 엘리먼트를 바로 만들 수 있다.
  그러나 이렇게만 하면 DOM 트리에 붙지 못하고 화면에 출력이 안된다.

  ```javascript
  <script type="text/javascript">
    $(function(){
      $("<p>안녕!</p>").insertAfter("#followMe");
    });
  </script>
  ```

  위와 같이 써서 insertAfter() 를 써주면 DOM 트리에 넣어서 화면에 출력시키는 것이 가능하다.

## 1.4 요약
  jQuery() 함수로 할 수 있는 일.
  - 어떤 동작을 수행하려고 DOM 엘리먼트를 선택하고 확장
  - 전역 유틸리티 함수의 이름공간 제공
  - HTML 마크업으로 DOM 엘리먼트 만들기
  - DOM을 조작할 준비가 되었을 때 실행할 코드 지정하기
