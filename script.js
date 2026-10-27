
(function () {
  // 지원 동기 문구
  var pitch = {
    co: "학교 안에서만은 실제 서비스가 어떻게 운영되는지 알기 어렵다고 느꼈습니다. 현장에서 직접 일하면서 배우고 싶어 취업연계 과정에 지원합니다. 동아리와 대회에서 해 본 서버 운영과 클라우드 설계를 실무에서 적용해 보고 싶습니다.",
    sc: "클라우드, 빅데이터, 보안을 배우면서 지능형 모빌리티 SW 경진대회 빅데이터 분야에서 대상을 받았습니다. 성균관대 소프트웨어 멘토링과 아주대 Google Outreach에도 참여했습니다. 더 깊이 배우고 싶어 지원합니다."
  };

  // 지원 동기 문구 영역과 탭 버튼 가져오기
  var p = document.getElementById("pitch");
  var tabs = document.querySelectorAll(".tabs button");

  // 선택한 탭에 맞는 문구를 표시하는 함수
  function set(k) {
    p.textContent = pitch[k];

    // 현재 선택된 탭 표시
    tabs.forEach(function (b) {
      b.setAttribute("aria-selected", b.dataset.k === k);
    });
  }

  // 각 탭 버튼을 클릭하면 해당 문구 표시
  tabs.forEach(function (b) {
    b.addEventListener("click", function () {
      set(b.dataset.k);
    });
  });

  // 페이지를 처음 열었을 때 기본 문구 표시
  set("co");

  // 다크 모드 전환 버튼
  document.getElementById("theme").addEventListener("click", function () {
    var r = document.documentElement;

    // 현재 테마 확인
    var dark = r.dataset.theme
      ? r.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;

    // 다크 모드와 라이트 모드 전환
    r.dataset.theme = dark ? "light" : "dark";
  });
})();
