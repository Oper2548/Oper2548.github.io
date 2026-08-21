document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const icon = themeToggle.querySelector('i');

  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      icon.classList.replace('fa-sun', 'fa-moon');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
    }
  });

  // Language Toggle
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('lang') || 'th';

  const translations = {
    th: {
      navResume: 'เรซูเม่',
      navAbout: 'เกี่ยวกับ',
      navSkills: 'ทักษะ',
      navExp: 'ประสบการณ์',
      navContact: 'ติดต่อ',
      major: 'สาขาวิทยาการคอมพิวเตอร์',
      contactTitle: 'ช่องทางการติดต่อ',
      aboutTitle: 'ประวัติโดยย่อ',
      aboutText: 'บัณฑิตวิทยาการคอมพิวเตอร์ สนใจด้าน Software Development และ QA Testing ครับ มีประสบการณ์ทดสอบระบบ และดูแลข้อมูล ผมพร้อมเรียนรู้และพัฒนา ทักษะเพื่อเติบโตในสายงาน IT ครับผม',
      softTitle: 'ทักษะ',
      expTitle: 'ประสบการณ์ฝึกงาน',
      expRole: 'รับตำแหน่ง QA Tester และดูแลข้อมูลลูกค้า',
      expDate: '1 เมษายน – 12 มิถุนายน 2569',
      expCompany: 'บริษัท IGNITE IDEA',
      eduTitle: 'การศึกษา 2027',
      eduDegree: 'ปริญญาวิทยาศาสตรบัณฑิต (วท.บ.)',
      eduMajor: 'สาขาวิทยาการคอมพิวเตอร์',
      eduGpa: 'เกรดเฉลี่ยสะสม 2.73',
      achieveTitle: 'ความสำเร็จ',
      techTitle: 'ทักษะด้านโปรแกรมและเทคโนโลยี',
      aboutHeading: 'เกี่ยวกับผม',
      skillsHeading: 'ทักษะของผม',
      expHeading: 'ประสบการณ์ & การศึกษา',
      contactHeading: 'ติดต่อผม',
      contactIntro: 'สนใจร่วมงานหรืออยากพูดคุย สามารถติดต่อได้ทุกช่องทางเลยครับ',
      downloadBtn: 'ดาวน์โหลดเรซูเม่ (PDF)',
      githubBtn: 'ดูโปรไฟล์ GitHub'
    },
    en: {
      navResume: 'Resume',
      navAbout: 'About',
      navSkills: 'Skills',
      navExp: 'Experience',
      navContact: 'Contact',
      major: 'Computer Science',
      contactTitle: 'Contact',
      aboutTitle: 'About Me',
      aboutText: 'Computer Science graduate interested in Software Development and QA Testing. Experienced in system testing and data management. Ready to learn and grow in the IT field.',
      softTitle: 'Soft Skills',
      expTitle: 'Internship Experience',
      expRole: 'QA Tester & Customer Data Management',
      expDate: '1 Apr – 12 Jun 2026',
      expCompany: 'IGNITE IDEA',
      eduTitle: 'Education 2027',
      eduDegree: 'Bachelor of Science (B.Sc.)',
      eduMajor: 'Computer Science',
      eduGpa: 'GPA 2.73',
      achieveTitle: 'Achievements',
      techTitle: 'Technical Skills',
      aboutHeading: 'About Me',
      skillsHeading: 'My Skills',
      expHeading: 'Experience & Education',
      contactHeading: 'Contact Me',
      contactIntro: 'Feel free to reach out for job opportunities or collaboration.',
      downloadBtn: 'Download Resume (PDF)',
      githubBtn: 'View GitHub Profile'
    }
  };

  function applyLanguage(lang) {
    const t = translations[lang];

    document.querySelector('.nav-links li:nth-child(1) a').textContent = t.navResume;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = t.navAbout;
    document.querySelector('.nav-links li:nth-child(3) a').textContent = t.navSkills;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = t.navExp;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = t.navContact;

    const badge = document.querySelector('.major-badge');
    if (badge) {
      badge.innerHTML = `<span class="diamond"></span> ${t.major} <span class="diamond"></span>`;
    }

    const titles = document.querySelectorAll('.section-title');
    if (titles[0]) titles[0].textContent = t.contactTitle;
    if (titles[1]) titles[1].textContent = t.aboutTitle;
    if (titles[2]) titles[2].textContent = t.softTitle;
    if (titles[3]) titles[3].textContent = t.expTitle;
    if (titles[4]) titles[4].textContent = t.eduTitle;
    if (titles[5]) titles[5].textContent = t.achieveTitle;
    if (titles[6]) titles[6].textContent = t.techTitle;

    const aboutText = document.querySelector('.about-text');
    if (aboutText) aboutText.textContent = t.aboutText;

    const expRole = document.querySelector('.exp-role');
    if (expRole) expRole.textContent = t.expRole;
    const expDate = document.querySelector('.exp-date');
    if (expDate) expDate.textContent = t.expDate;
    const expCompany = document.querySelector('.exp-company');
    if (expCompany) expCompany.textContent = t.expCompany;

    const eduDegree = document.querySelector('.edu-degree');
    if (eduDegree) eduDegree.textContent = t.eduDegree;
    const eduMajor = document.querySelector('.edu-major');
    if (eduMajor) eduMajor.textContent = t.eduMajor;
    const eduGpa = document.querySelector('.edu-gpa');
    if (eduGpa) eduGpa.textContent = t.eduGpa;

    const headings = document.querySelectorAll('.section-heading');
    if (headings[0]) headings[0].textContent = t.aboutHeading;
    if (headings[1]) headings[1].textContent = t.skillsHeading;
    if (headings[2]) headings[2].textContent = t.expHeading;
    if (headings[3]) headings[3].textContent = t.contactHeading;

    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) contactIntro.textContent = t.contactIntro;

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${t.downloadBtn}`;

    langToggle.textContent = lang === 'th' ? 'EN' : 'TH';
    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'th' ? 'en' : 'th';
    applyLanguage(newLang);
  });

  // Mobile Menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // Download Button
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', () => {
    window.open('resume.pdf.pdf', '_blank');
  });
});
