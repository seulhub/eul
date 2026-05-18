document.addEventListener("DOMContentLoaded", () => {
  // header
  // 모바일 버전 버튼
  const contactBtn = document.querySelector(".contact-btn");
  const contactBox = document.querySelector(".contact-box");
  const openContact = document.querySelector(".open-contact");
  const contactModal = document.querySelector(".contact-modal");
  const closeBtn = document.querySelector(".contact-close");
  const menuBtn = document.querySelector(".menu-btn");

  // contact 아이콘 클릭, 툴팁 열고 닫기
  // contactBtn.addEventListener("click", () => {
  contactBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // 바깥 클릭 이벤트로 안 새어나가게 막음
    contactBox.classList.toggle("active");

    // 메뉴 닫기
    menuBtn.classList.remove("active");
  });

  // contact 클릭, 모달 열기
  // contactBox.addEventListener("click", () => {
  contactBox.addEventListener("click", (e) => {
    e.stopPropagation();
    // 클릭 이벤트 충돌 방지
    contactModal.classList.add("active");

    // 툴팁 닫기
    contactBox.classList.remove("active");
  });

  // 모달 닫기 버튼
  closeBtn.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });

  // 메뉴 버튼
  // menuBtn.addEventListener("click", () => {
  //   menuBtn.classList.toggle("active");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");

    // contact 닫기
    contactBox.classList.remove("active");
  });

  // 메뉴 클릭 시 자동 닫힘
  const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

  // 모달 내용 양식
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    // e :: 지금 발생한 이벤트에 대한 정보 객체
    // submit이라는 이벤트가 발생했을 때 그 이벤트에 대한 정보(e)를 넘겨줌
    e.preventDefault();

    alert("연락주셔서 감사합니다!");
    form.reset();
  });

  // header
  // 스크롤 효과

  const header = document.querySelector("header");
  const visual = document.querySelector("#visual");

  window.addEventListener("scroll", () => {
    const triggerPoint = visual.offsetHeight - 80;

    if (window.scrollY > triggerPoint) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // visual
  // 커튼 효과
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const visualContent = document.querySelector(".video-overlay");
    const video = document.querySelector(".main-video");

    // 스크롤 될수록 비디오와 글자가 투명해지며 위로 살짝 이동
    if (scrollY < window.innerHeight) {
      const opacity = 1 - scrollY / window.innerHeight;
      visualContent.style.opacity = opacity;
      visualContent.style.transform = `translateY(calc(-50% - ${scrollY * 0.2}px))`;
      video.style.transform = `scale(${1 + scrollY * 0.0005})`; // 미세하게 확대되는 효과
    }
  });

  // work
  // 탭 메뉴
  const tabs = document.querySelectorAll(".work-tab");
  const contents = document.querySelectorAll(".preview-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // 모든 active 제거
      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      // 현재 탭 active
      tab.classList.add("active");

      // 연결된 콘텐츠 active
      document.getElementById(target).classList.add("active");
    });
  });

  // 탑 버튼
  const topBtn = document.querySelector(".top-btn")
;
window.addEventListener("scroll", ()=>{
if (window.scrollY > 600) {
  topBtn.classList.add("active");
}  else{
  topBtn.classList.remove("active")
}
}) 
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


});
