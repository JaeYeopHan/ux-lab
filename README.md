# UX-Lab

이게 웹이야? 하는 그날까지 🚀

### Table of Contents

- [Phase 1. War of Input](#phase-1.-War-of-Input-tag)
- [Phase 2. App Like Transition with Pagination](phase-2.-app-like-transition-with-pagination')


# Phase 1. War of Input tag

Webview에서 input과 관련하여 맞딱뜨린 이슈들을 정리한다. 기본적으로 input 태그를 클릭하면 키패드가 올라온다. 그리고 그 때부터 UX 담당자 분들과의 불협화음이 시작된다.

## Q1. 키패드 위에 버튼을 둘 수 있나요?

하단에 fixed position으로 button이 있는 상황을 가정하자. 하단에 fixed position으로 줬으니 이 버튼은 키패드 바로 위쪽에 붙어있기를 기대하기 마련이다.

**하지만,**

### iOS

- 하단 버튼을 덮으면서 키패드가 올라온다.
- 그리고 스크롤이 없었다가 스크롤이 발생한다.
  - 즉 화면에서 보이는 영역이 viewport보다 작아졌다고 인식을 하게 된다.

### AND

- 기대한 것처럼 키패드 바로 위쪽에 붙어있는다.
- 그리고 스크롤도 발생하지 않는다.
  - 즉 viewport를 화면에서 보이는 영역으로 잡는다.

## Q2. 화면으로 진입하자마자 키패드를 띄울 수 있나요?

한 화면에 input tag 하나만 존재하는 경우가 있을 수 있다. 보통 이럴 경우 화면에 진입하자마자 키패드를 띄우면 사용성이 증대될 것이다. 사용자가 input 태그를 한 번 더 클릭하여 키패드를 띄우는 것보다 action이 하나 줄어들기 때문이다.

이 요구 사항은 iOS, AND 둘 다 `autoFocus={true}`를 주면 된다.

→ 특정 모달 안에 있는 input도 가능하다! 즉 모달이 노출됨과 동시에 키패드를 띄울 수 있다.

## Q3. 키패드 바깥 부분을 클릭해도 키패드가 내려가지 않도록 할 수 있나요?

### Try 1. `onBlur` 이벤트 발생 시, focus를 강제한다.

- 키패드에 있는 '완료' 버튼을 클릭하더라도 닫히지 않아서 onBlur를 건드릴 수 없다.

### Try 2. 특정 target을 잡은 후, focus를 강제한다.

- 특정 target이 여러개 일 경우, 전부 click handler를 등록해줘야 한다.
- 이 방식으로 가능은 하지만, 코드로 focus를 강제해줄 경우, 커서 깜빡임이 사라진다.

## Case 4. 키패드에 영향받지 않고 정중앙 위치

- 모달의 크기에 따라 다르겠지만...
  - iOS인 경우에는 viewport를 조정하지 않기 때문에 키패드가 올라오기 전과 동일하다.
    - 즉 키패드가 없는 경우를 키패드 올라왔을 경우의 정중앙으로 위치시키면 vertical 중앙에 위치시킬 수 있다.
  - AND의 경우에는 디바이스에서 viewport를 조정하기 때문에 적당한 위치로 알아서 조정한다.

---

# Phase 2. App Like Transition with Pagination

App에서는 화면 간 이동 시, 부드러운 애니메이션과 함께 transition 같은 것이 진행된다. 웹에서도 해보자.

![pagination_transition_gif](./assets/pagination_transition.gif)

(To Be Continue...)

<div align="center">

<sub><sup>Project by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>

