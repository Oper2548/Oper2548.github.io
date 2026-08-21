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
      // Navbar
      navResume: 'เรซูเม่',
      navAbout: 'เกี่ยวกับ',
      navSkills: 'ทักษะ',
      navExp: 'ประสบการณ์',
      navContact: 'ติดต่อ',

      // Header
      name: 'สุริยา คะคะเนปะ',
      major: 'สาขาวิทยาการคอมพิวเตอร์',

      // Poster Left
      contactTitle: 'ช่องทางการติดต่อ',
      aboutTitle: 'ประวัติโดยย่อ',
      aboutText: 'บัณฑิตวิทยาการคอมพิวเตอร์ สนใจด้าน Software Development และ QA Testing ครับ มีประสบการณ์ทดสอบระบบ และดูแลข้อมูล ผมพร้อมเรียนรู้และพัฒนา ทักษะเพื่อเติบโตในสายงาน IT ครับผม',
      softTitle: 'ทักษะ',
      soft1: 'การสื่อสาร',
      soft2: 'การเรียนรู้เครื่องมือใหม่ๆ',
      soft3: 'การแก้ไขปัญหาเฉพาะหน้า',
      soft4: 'การทำงานอย่างเป็นระบบ',
      soft5: 'ความละเอียดรอบคอบ',

      // Poster Right
      expTitle: 'ประสบการณ์ฝึกงาน',
      expRole: 'รับตำแหน่ง QA Tester และดูแลข้อมูลลูกค้า',
      expDate: '1 เมษายน – 12 มิถุนายน 2569',
      expCompany: 'บริษัท IGNITE IDEA',
      eduTitle: 'การศึกษา 2027',
      eduDegree: 'ปริญญาวิทยาศาสตรบัณฑิต (วท.บ.)',
      eduMajor: 'สาขาวิทยาการคอมพิวเตอร์',
      eduGpa: 'เกรดเฉลี่ยสะสม 2.73',
      achieveTitle: 'ความสำเร็จ',
      achieve1: 'รางวัล NSC ระดับภูมิภาค',
      achieve2: 'เป็นผู้สอนเขียนโปรแกรม AI Chatbot ให้กับ อบต. 20 แห่งทั่วจังหวัด อุดรธานี',
      techTitle: 'ทักษะด้านโปรแกรมและเทคโนโลยี',

      // Sections
      aboutHeading: 'เกี่ยวกับผม',
      skillsHeading: 'ทักษะของผม',
      expHeading: 'ประสบการณ์ & การศึกษา',
      contactHeading: 'ติดต่อผม',
      contactIntro: 'สนใจร่วมงานหรืออยากพูดคุย สามารถติดต่อได้ทุกช่องทางเลยครับ',
      downloadBtn: 'ดาวน์โหลดเรซูเม่ (PDF)',

      // Timeline
      timeline1Date: 'เม.ย. – มิ.ย. 2569',
      timeline1Title: 'QA Tester & ดูแลข้อมูลลูกค้า',
      timeline1Company: 'บริษัท IGNITE IDEA',
      timeline1Desc: 'ทดสอบระบบ ตรวจสอบคุณภาพ และจัดการข้อมูลลูกค้าอย่างเป็นระบบ',
      timeline2Date: 'สำเร็จการศึกษา 2027',
      timeline2Title: 'วิทยาศาสตรบัณฑิต (วท.บ.)',
      timeline2Company: 'สาขาวิทยาการคอมพิวเตอร์',
      timeline2Desc: 'เกรดเฉลี่ยสะสม 2.73',
      timeline3Date: 'ความสำเร็จ',
      timeline3Title: 'รางวัล & กิจกรรม',
      timeline3Item1: 'รางวัล NSC ระดับภูมิภาค',
      timeline3Item2: 'สอนเขียนโปรแกรม AI Chatbot ให้ อบต. 20 แห่ง ในจังหวัดอุดรธานี'
    },
    en: {
      navResume: 'Resume',
      navAbout: 'About',
      navSkills: 'Skills',
      navExp: 'Experience',
      navContact: 'Contact',

      name: 'Suriya Khakhanepha',
      major: 'Computer Science',

      contactTitle: 'Contact',
      aboutTitle: 'About Me',
      aboutText: 'Computer Science graduate interested in Software Development and QA Testing. Experienced in system testing and data management. Ready to learn and grow in the IT field.',
      softTitle: 'Soft Skills',
      soft1: 'Communication',
      soft2: 'Fast learner',
      soft3: 'Problem solving',
      soft4: 'Systematic working',
      soft5: 'Attention to detail',

      expTitle: 'Internship Experience',
      expRole: 'QA Tester & Customer Data Management',
      expDate: '1 Apr – 12 Jun 2026',
      expCompany: 'IGNITE IDEA',
      eduTitle: 'Education 2027',
      eduDegree: 'Bachelor of Science (B.Sc.)',
      eduMajor: 'Computer Science',
      eduGpa: 'GPA 2.73',
      achieveTitle: 'Achievements',
      achieve1: 'NSC Regional Award',
      achieve2: 'Taught AI Chatbot programming to 20 Subdistrict Administrative Organizations in Udon Thani',
      techTitle: 'Technical Skills',

      aboutHeading: 'About Me',
      skillsHeading: 'My Skills',
      expHeading: 'Experience & Education',
      contactHeading: 'Contact Me',
      contactIntro: 'Feel free to reach out for job opportunities or collaboration.',
      downloadBtn: 'Download Resume (PDF)',

      timeline1Date: 'Apr – Jun 2026',
      timeline1Title: 'QA Tester & Customer Data Management',
      timeline1Company: 'IGNITE IDEA',
      timeline1Desc: 'System testing, quality assurance, and customer data management',
      timeline2Date: 'Graduation 2027',
      timeline2Title: 'Bachelor of Science (B.Sc.)',
      timeline2Company: 'Computer Science',
      timeline2Desc: 'GPA 2.73',
      timeline3Date: 'Achievements',
      timeline3Title: 'Awards & Activities',
      timeline3Item1: 'NSC Regional Award',
      timeline3Item2: 'Taught AI Chatbot programming to 20 Subdistrict Administrative Organizations in Udon Thani'
    }
  };

  function applyLanguage(lang) {
    const t = translations[lang];

    // Navbar
    document.querySelector('.nav-links li:nth-child(1) a').textContent = t.navResume;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = t.navAbout;
    document.querySelector('.nav-links li:nth-child(3) a').textContent = t.navSkills;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = t.navExp;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = t.navContact;

    // Name
    const nameEl = document.querySelector('.full-name');
    if (nameEl) nameEl.textContent = t.name;

    // Major badge
    const badge = document.querySelector('.major-badge');
    if (badge) {
      badge.innerHTML = `<span class="diamond"></span> ${t.major} <span class="diamond"></span>`;
    }

    // Poster section titles
    const titles = document.querySelectorAll('.section-title');
    if (titles[0]) titles[0].textContent = t.contactTitle;
    if (titles[1]) titles[1].textContent = t.aboutTitle;
    if (titles[2]) titles[2].textContent = t.softTitle;
    if (titles[3]) titles[3].textContent = t.expTitle;
    if (titles[4]) titles[4].textContent = t.eduTitle;
    if (titles[5]) titles[5].textContent = t.achieveTitle;
    if (titles[6]) titles[6].textContent = t.techTitle;

    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) aboutText.textContent = t.aboutText;

    // Soft skills
    const softSkills = document.querySelectorAll('.soft-skills li');
    if (softSkills[0]) softSkills[0].textContent = t.soft1;
    if (softSkills[1]) softSkills[1].textContent = t.soft2;
    if (softSkills[2]) softSkills[2].textContent = t.soft3;
    if (softSkills[3]) softSkills[3].textContent = t.soft4;
    if (softSkills[4]) softSkills[4].textContent = t.soft5;

    // Experience
    const expRole = document.querySelector('.exp-role');
    if (expRole) expRole.textContent = t.expRole;
    const expDate = document.querySelector('.exp-date');
    if (expDate) expDate.textContent = t.expDate;
    const expCompany = document.querySelector('.exp-company');
    if (expCompany) expCompany.textContent = t.expCompany;

    // Education
    const eduDegree = document.querySelector('.edu-degree');
    if (eduDegree) eduDegree.textContent = t.eduDegree;
    const eduMajor = document.querySelector('.edu-major');
    if (eduMajor) eduMajor.textContent = t.eduMajor;
    const eduGpa = document.querySelector('.edu-gpa');
    if (eduGpa) eduGpa.textContent = t.eduGpa;

    // Achievements
    const achieves = document.querySelectorAll('.achievements li');
    if (achieves[0]) achieves[0].textContent = t.achieve1;
    if (achieves[1]) achieves[1].textContent = t.achieve2;

    // Section headings
    const headings = document.querySelectorAll('.section-heading');
    if (headings[0]) headings[0].textContent = t.aboutHeading;
    if (headings[1]) headings[1].textContent = t.skillsHeading;
    if (headings[2]) headings[2].textContent = t.expHeading;
    if (headings[3]) headings[3].textContent = t.contactHeading;

    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) contactIntro.textContent = t.contactIntro;

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) downloadBtn.innerHTML = `<i class="fas fa-download"></i> ${t.downloadBtn}`;

    // Timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems[0]) {
      timelineItems[0].querySelector('.timeline-date').textContent = t.timeline1Date;
      timelineItems[0].querySelector('h3').textContent = t.timeline1Title;
      timelineItems[0].querySelector('.company').textContent = t.timeline1Company;
      timelineItems[0].querySelector('p:not(.company)').textContent = t.timeline1Desc;
    }
    if (timelineItems[1]) {
      timelineItems[1].querySelector('.timeline-date').textContent = t.timeline2Date;
      timelineItems[1].querySelector('h3').textContent = t.timeline2Title;
      timelineItems[1].querySelector('.company').textContent = t.timeline2Company;
      timelineItems[1].querySelector('p:not(.company)').textContent = t.timeline2Desc;
    }
    if (timelineItems[2]) {
      timelineItems[2].querySelector('.timeline-date').textContent = t.timeline3Date;
      timelineItems[2].querySelector('h3').textContent = t.timeline3Title;
      const lis = timelineItems[2].querySelectorAll('li');
      if (lis[0]) lis[0].textContent = t.timeline3Item1;
      if (lis[1]) lis[1].textContent = t.timeline3Item2;
    }

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
