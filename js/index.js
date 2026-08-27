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

    // 스크롤 될수록 비디오와 글자가 투명해지면서 위로 이동
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

  // footer
  const footerTitle = document.querySelector(".footer-title");

  window.addEventListener("scroll", () => {
    const footerTop = footerTitle.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;

    if (footerTop < trigger) {
      footerTitle.classList.add("show");
    }
  });

  // footer gsap
  gsap.registerPlugin(ScrollTrigger);

  /* footer 전체 타임라인 */
  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "top 80%",
      end: "bottom bottom",
      toggleActions: "play none none none",
    },
  });

  // 메인 타이틀
  footerTl.to(".footer-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  //  서브 텍스트
  footerTl.to(
    ".footer-subtitle",
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.6",
  );

  // 키워드 stagger
  footerTl.to(
    ".keyword",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.4",
  );

  // 마지막 서명
  footerTl.to(
    ".footer-sign",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.2",
  );

  // 탑 버튼
  const topBtn = document.querySelector(".top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      topBtn.classList.add("active");
    } else {
      topBtn.classList.remove("active");
    }
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// contact 메일 전송
// EmailJS 초기화
emailjs.init({
  publicKey: "ikrZKyRCEMirHsMkm",
});

const contactSectionForm = document.getElementById("contact-section-form");
const statusText = document.getElementById("form-status");

contactSectionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  statusText.innerText = "메일 전송 중...";

  emailjs
    .sendForm("service_d4934ig", "template_t04jxgu", contactSectionForm)
    .then(() => {
      statusText.innerText = "메일이 전송되었습니다 :)";

      contactSectionForm.reset();
    })
    .catch((error) => {
      console.error(error);

      statusText.innerText =
        "메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.";
    });
});
