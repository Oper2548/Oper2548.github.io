document.addEventListener('DOMContentLoaded', () => {
  // ========== Theme Toggle ==========
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

  // ========== Language Toggle ==========
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('lang') || 'th';

  const translations = {
    th: {
      navResume: 'เรซูเม่',
      navAbout: 'เกี่ยวกับ',
      navSkills: 'ทักษะ',
      navExp: 'ประสบการณ์',
      navContact: 'ติดต่อ',
      name: 'สุริยา คะคะเนปะ',
      title: 'ผู้สมัครฝึกงานด้านเทคโนโลยีสารสนเทศ (IT)',
      contactTitle: 'ช่องทางติดต่อ',
      eduTitle: 'การศึกษา',
      edu1: 'โรงเรียนอนุบาลบึงกาฬวิศิษฐอำนวยศิลป์',
      edu1Sub: 'ประถมศึกษาปีที่ 1-6',
      edu2: 'โรงเรียนบึงกาฬ',
      edu2Sub: 'มัธยมศึกษาปีที่ 1-6',
      edu3: 'มหาวิทยาลัยราชภัฏอุดรธานี',
      edu3Sub: 'คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์<br>ปริญญาตรี | เกรดเฉลี่ย 2.73',
      techTitle: 'ทักษะและเครื่องมือ',
      softTitle: 'ทักษะด้านซอฟต์',
      soft1: 'การสื่อสาร',
      soft2: 'การแก้ปัญหา',
      soft3: 'ความใส่ใจในรายละเอียด',
      soft4: 'เรียนรู้เร็ว',
      soft5: 'การทำงานเป็นระบบ',
      aboutTitle: 'ประวัติโดยย่อ',
      aboutText: 'นักศึกษาวิทยาการคอมพิวเตอร์ที่มีความสนใจด้าน AI Automation และ Software Development มีพื้นฐานการเขียนโปรแกรมและพัฒนา Web Application พร้อมเรียนรู้และพัฒนาทักษะ เพื่อสนับสนุนการทำงานขององค์กรด้านเทคโนโลยีและบริการลูกค้า',
      expTitle: 'ประสบการณ์การทำงาน',
      expRole: 'QA Tester (ทดสอบระบบ/โปรแกรม และดูแลข้อมูลลูกค้า)',
      expCompany: 'บริษัท IGNITE IDEA',
      expDate: '1 เมษายน – 12 มิถุนายน 2569',
      nscTitle: 'การแข่งขันพัฒนาโปรแกรม – NSC',
      nscDesc: 'พัฒนาเกมสื่อการเรียนรู้ VR ด้วย Unreal Engine สำหรับการแข่งขัน NSC ออกแบบระบบภายในเกมและกลไกการเล่นให้ทำงานได้อย่างสมบูรณ์',
      startupTitle: 'เข้าร่วมการแข่งขัน STARTUP',
      startupDesc: 'พัฒนาแนวคิดธุรกิจ จัดทำ Business Model Canvas และ Pitch Deck เพื่อนำเสนอแนวคิดต่อคณะกรรมการ',
      chatbotTitle: 'เข้าร่วมการแข่งขัน AI CHATBOT',
      chatbot1: 'ออกแบบระบบตอบคำถามอัตโนมัติ วิเคราะห์ความต้องการผู้ใช้งาน และพัฒนาโครงสร้างบทสนทนา',
      chatbot2: 'เป็นวิทยากรสอนการสร้าง AI Chatbot ให้กับ อบต. ในจังหวัดอุดรธานี',
      awardTitle: 'ผลงาน / รางวัล',
      award1: 'ได้รับรางวัลระดับภูมิภาคจากการแข่งขันเขียนโปรแกรม NSC',
      award2: 'เป็นผู้สอนเขียนโปรแกรม AI Chatbot ให้กับ อบต. 20 แห่งในอุดรธานี',
      aboutHeading: 'เกี่ยวกับผม',
      aboutP1: 'สวัสดีครับ ผม สุริยา คะคะเนปะ นักศึกษาสาขาวิทยาการคอมพิวเตอร์ ที่มีความสนใจเป็นพิเศษในด้าน AI Automation และ Software Development',
      aboutP2: 'ระหว่างฝึกงานที่บริษัท IGNITE IDEA ผมได้ทำหน้าที่ QA Tester และดูแลข้อมูลลูกค้า ซึ่งทำให้ได้เรียนรู้การทำงานจริงและการทดสอบระบบอย่างเป็นระบบ',
      aboutP3: 'นอกจากนี้ ผมยังมีประสบการณ์พัฒนาเกม VR ด้วย Unreal Engine สำหรับการแข่งขัน NSC, เข้าร่วมการแข่งขัน Startup และสอนการสร้าง AI Chatbot ให้กับ อบต. กว่า 20 แห่งในจังหวัดอุดรธานี',
      aboutP4: 'ผมพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ และมุ่งมั่นที่จะเติบโตในสายงาน IT ด้วยความละเอียดรอบคอบและความรับผิดชอบสูงครับ',
      skillsHeading: 'ทักษะของผม',
      expHeading: 'ประสบการณ์ & ผลงาน',
      contactHeading: 'ติดต่อผม',
      contactIntro: 'สนใจร่วมงานหรืออยากพูดคุย สามารถติดต่อได้ทุกช่องทางเลยครับ',
      downloadBtn: 'ดาวน์โหลดเรซูเม่ (PDF)',
      githubBtn: 'ดูโปรไฟล์ GitHub',
      timeline1Date: 'เม.ย. – มิ.ย. 2569',
      timeline1Title: 'QA Tester',
      timeline1Company: 'บริษัท IGNITE IDEA',
      timeline1Desc: 'ทดสอบระบบ/โปรแกรม และดูแลข้อมูลส่วนตัวของลูกค้า',
      timeline2Date: 'NSC',
      timeline2Title: 'การแข่งขันพัฒนาโปรแกรม – NSC',
      timeline2Company: 'โครงการเกมสื่อการเรียนรู้ VR',
      timeline2Desc: 'พัฒนาเกมสื่อการเรียนรู้ VR ด้วย Unreal Engine ออกแบบระบบและกลไกการเล่น',
      timeline3Date: 'Startup',
      timeline3Title: 'เข้าร่วมการแข่งขัน STARTUP',
      timeline3Desc: 'พัฒนาแนวคิดธุรกิจ จัดทำ Business Model Canvas และ Pitch Deck',
      timeline4Date: 'AI Chatbot',
      timeline4Title: 'การแข่งขัน AI Chatbot + วิทยากร',
      timeline4Desc: 'ออกแบบระบบตอบคำถามอัตโนมัติ และสอนการสร้าง AI Chatbot ให้กับ อบต. 20 แห่งในอุดรธานี',
      timeline5Date: 'รางวัล',
      timeline5Title: 'รางวัล NSC ระดับภูมิภาค',
      timeline5Desc: 'ได้รับรางวัลระดับภูมิภาคจากการแข่งขันเขียนโปรแกรม NSC',
      footer: '© 2026 สุริยา คะคะเนปะ · สร้างด้วย ❤️ สำหรับ GitHub Pages'
    },
    en: {
      navResume: 'Resume',
      navAbout: 'About',
      navSkills: 'Skills',
      navExp: 'Experience',
      navContact: 'Contact',
      name: 'Suriya Kaganepa',
      title: 'IT Internship Applicant',
      contactTitle: 'Contact',
      eduTitle: 'Education',
      edu1: 'Anuban Bueng Kan Wisit Amnuay Sin School',
      edu1Sub: 'Primary Education, Grades 1–6',
      edu2: 'Bueng Kan School',
      edu2Sub: 'Secondary Education, Grades 7–12',
      edu3: 'Udon Thani Rajabhat University',
      edu3Sub: 'Faculty of Science, Bachelor\'s Degree in Computer Science<br>GPA: 2.73',
      techTitle: 'Skills & Tools',
      softTitle: 'Soft Skills',
      soft1: 'Communication',
      soft2: 'Problem Solving',
      soft3: 'Attention to Detail',
      soft4: 'Fast Learner',
      soft5: 'Systematic Thinking',
      aboutTitle: 'Profile',
      aboutText: 'Computer Science student interested in AI Automation and Software Development, with a foundation in programming and Web Application Development and a strong willingness to learn and develop new skills.',
      expTitle: 'Work Experience',
      expRole: 'QA Tester (System/Program Testing & Customer Data Management)',
      expCompany: 'IGNITE IDEA Company',
      expDate: 'April 1 – June 12, 2026',
      nscTitle: 'National Software Contest – NSC',
      nscDesc: 'Developed a VR educational game using Unreal Engine for the National Software Contest (NSC). Designed the in-game systems and gameplay mechanics to ensure smooth and complete functionality.',
      startupTitle: 'Participated in a Startup Competition',
      startupDesc: 'Developed a business concept, created a Business Model Canvas and Pitch Deck, and presented the business idea to a panel of judges.',
      chatbotTitle: 'Participated in an AI Chatbot Competition',
      chatbot1: 'Designed an automated Q&A system, analyzed user needs, and developed conversation flows.',
      chatbot2: 'Taught AI Chatbot development to local government organizations (SAOs) in Udon Thani.',
      awardTitle: 'Awards',
      award1: 'Received a regional-level award in the NSC Programming Competition.',
      award2: 'Trained 20 Subdistrict Administrative Organizations (SAOs) in Udon Thani on AI Chatbot programming.',
      aboutHeading: 'About Me',
      aboutP1: 'Hello, I am Suriya Kaganepa, a Computer Science student with a strong interest in AI Automation and Software Development.',
      aboutP2: 'During my internship at IGNITE IDEA, I worked as a QA Tester and managed customer data, gaining real-world experience in systematic testing.',
      aboutP3: 'I also developed a VR educational game with Unreal Engine for the NSC competition, participated in a Startup competition, and taught AI Chatbot development to more than 20 SAOs in Udon Thani.',
      aboutP4: 'I am always eager to learn new technologies and committed to growing in the IT field with attention to detail and high responsibility.',
      skillsHeading: 'My Skills',
      expHeading: 'Experience & Achievements',
      contactHeading: 'Contact Me',
      contactIntro: 'Feel free to reach out for internship opportunities or collaboration.',
      downloadBtn: 'Download Resume (PDF)',
      githubBtn: 'View GitHub Profile',
      timeline1Date: 'Apr – Jun 2026',
      timeline1Title: 'QA Tester',
      timeline1Company: 'IGNITE IDEA Company',
      timeline1Desc: 'System/program testing and customer personal data management',
      timeline2Date: 'NSC',
      timeline2Title: 'National Software Contest – NSC',
      timeline2Company: 'VR Educational Game Project',
      timeline2Desc: 'Developed a VR educational game using Unreal Engine, designed systems and gameplay mechanics',
      timeline3Date: 'Startup',
      timeline3Title: 'Participated in a Startup Competition',
      timeline3Desc: 'Developed a business concept, created Business Model Canvas and Pitch Deck',
      timeline4Date: 'AI Chatbot',
      timeline4Title: 'AI Chatbot Competition + Instructor',
      timeline4Desc: 'Designed automated Q&A system and taught AI Chatbot development to 20 SAOs in Udon Thani',
      timeline5Date: 'Award',
      timeline5Title: 'NSC Regional Award',
      timeline5Desc: 'Received a regional-level award in the NSC Programming Competition',
      footer: '© 2026 Suriya Kaganepa · Made with ❤️ for GitHub Pages'
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

    // Name & Title
    const nameEl = document.querySelector('.full-name');
    if (nameEl) nameEl.textContent = t.name;
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) navLogo.textContent = t.name;
    const badge = document.querySelector('.major-badge');
    if (badge) {
      badge.innerHTML = `<span class="diamond"></span> ${t.title} <span class="diamond"></span>`;
    }

    // Section titles in poster
    const titles = document.querySelectorAll('.section-title');
    if (titles[0]) titles[0].textContent = t.contactTitle;
    if (titles[1]) titles[1].textContent = t.eduTitle;
    if (titles[2]) titles[2].textContent = t.techTitle;
    if (titles[3]) titles[3].textContent = t.softTitle;
    if (titles[4]) titles[4].textContent = t.aboutTitle;
    if (titles[5]) titles[5].textContent = t.expTitle;
    if (titles[6]) titles[6].textContent = t.nscTitle;
    if (titles[7]) titles[7].textContent = t.startupTitle;
    if (titles[8]) titles[8].textContent = t.chatbotTitle;
    if (titles[9]) titles[9].textContent = t.awardTitle;

    // Education
    const eduItems = document.querySelectorAll('.edu-list li');
    if (eduItems[0]) eduItems[0].innerHTML = `${t.edu1}<br><small>${t.edu1Sub}</small>`;
    if (eduItems[1]) eduItems[1].innerHTML = `${t.edu2}<br><small>${t.edu2Sub}</small>`;
    if (eduItems[2]) eduItems[2].innerHTML = `${t.edu3}<br><small>${t.edu3Sub}</small>`;

    // Soft skills (poster)
    const softSkills = document.querySelectorAll('.soft-skills li');
    if (softSkills[0]) softSkills[0].textContent = t.soft1;
    if (softSkills[1]) softSkills[1].textContent = t.soft2;
    if (softSkills[2]) softSkills[2].textContent = t.soft3;
    if (softSkills[3]) softSkills[3].textContent = t.soft4;
    if (softSkills[4]) softSkills[4].textContent = t.soft5;

    // Soft tags (skills section)
    const softTags = document.querySelectorAll('.skill-card .tag.soft');
    if (softTags[0]) softTags[0].textContent = t.soft1;
    if (softTags[1]) softTags[1].textContent = t.soft2;
    if (softTags[2]) softTags[2].textContent = t.soft3;
    if (softTags[3]) softTags[3].textContent = t.soft4;
    if (softTags[4]) softTags[4].textContent = t.soft5;

    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) aboutText.textContent = t.aboutText;

    // Experience
    const expRole = document.querySelector('.exp-role');
    if (expRole) expRole.textContent = t.expRole;
    const expCompany = document.querySelector('.exp-company');
    if (expCompany) expCompany.textContent = t.expCompany;
    const expDate = document.querySelector('.exp-date');
    if (expDate) expDate.textContent = t.expDate;

    // Project descriptions
    const projectDescs = document.querySelectorAll('.project-desc');
    if (projectDescs[0]) projectDescs[0].textContent = t.nscDesc;
    if (projectDescs[1]) projectDescs[1].textContent = t.startupDesc;

    // Chatbot & Awards lists
    const achieveLists = document.querySelectorAll('.achievements');
    if (achieveLists[0]) {
      const lis = achieveLists[0].querySelectorAll('li');
      if (lis[0]) lis[0].textContent = t.chatbot1;
      if (lis[1]) lis[1].textContent = t.chatbot2;
    }
    if (achieveLists[1]) {
      const lis = achieveLists[1].querySelectorAll('li');
      if (lis[0]) lis[0].textContent = t.award1;
      if (lis[1]) lis[1].textContent = t.award2;
    }

    // Section headings
    const headings = document.querySelectorAll('.section-heading');
    if (headings[0]) headings[0].textContent = t.aboutHeading;
    if (headings[1]) headings[1].textContent = t.skillsHeading;
    if (headings[2]) headings[2].textContent = t.expHeading;
    if (headings[3]) headings[3].textContent = t.contactHeading;

    // About paragraphs
    const aboutPs = document.querySelectorAll('.about-content p');
    if (aboutPs[0]) aboutPs[0].textContent = t.aboutP1;
    if (aboutPs[1]) aboutPs[1].textContent = t.aboutP2;
    if (aboutPs[2]) aboutPs[2].textContent = t.aboutP3;
    if (aboutPs[3]) aboutPs[3].textContent = t.aboutP4;

    // Contact
    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) contactIntro.textContent = t.contactIntro;

    const downloadBtnEl = document.getElementById('downloadBtn');
    if (downloadBtnEl) downloadBtnEl.innerHTML = `<i class="fas fa-download"></i> ${t.downloadBtn}`;

    const githubBtn = document.querySelector('.btn-primary');
    if (githubBtn) githubBtn.innerHTML = `<i class="fab fa-github"></i> ${t.githubBtn}`;

    // Timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems[0]) {
      timelineItems[0].querySelector('.timeline-date').textContent = t.timeline1Date;
      timelineItems[0].querySelector('h3').textContent = t.timeline1Title;
      timelineItems[0].querySelector('.company').textContent = t.timeline1Company;
      const p = timelineItems[0].querySelector('p:not(.company)');
      if (p) p.textContent = t.timeline1Desc;
    }
    if (timelineItems[1]) {
      timelineItems[1].querySelector('.timeline-date').textContent = t.timeline2Date;
      timelineItems[1].querySelector('h3').textContent = t.timeline2Title;
      timelineItems[1].querySelector('.company').textContent = t.timeline2Company;
      const p = timelineItems[1].querySelector('p:not(.company)');
      if (p) p.textContent = t.timeline2Desc;
    }
    if (timelineItems[2]) {
      timelineItems[2].querySelector('.timeline-date').textContent = t.timeline3Date;
      timelineItems[2].querySelector('h3').textContent = t.timeline3Title;
      const p = timelineItems[2].querySelector('p');
      if (p) p.textContent = t.timeline3Desc;
    }
    if (timelineItems[3]) {
      timelineItems[3].querySelector('.timeline-date').textContent = t.timeline4Date;
      timelineItems[3].querySelector('h3').textContent = t.timeline4Title;
      const p = timelineItems[3].querySelector('p');
      if (p) p.textContent = t.timeline4Desc;
    }
    if (timelineItems[4]) {
      timelineItems[4].querySelector('.timeline-date').textContent = t.timeline5Date;
      timelineItems[4].querySelector('h3').textContent = t.timeline5Title;
      const p = timelineItems[4].querySelector('p');
      if (p) p.textContent = t.timeline5Desc;
    }

    // Footer
    const footer = document.querySelector('.footer p');
    if (footer) footer.textContent = t.footer;

    langToggle.textContent = lang === 'th' ? 'EN' : 'TH';
    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'th' ? 'en' : 'th';
    applyLanguage(newLang);
  });

  // ========== Mobile Menu ==========
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const i = menuToggle.querySelector('i');
    i.classList.toggle('fa-bars');
    i.classList.toggle('fa-times');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
  });

  // ========== Navbar scroll ==========
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ========== Scroll Reveal ==========
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ========== Download Button ==========
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', () => {
    const file = currentLang === 'en' ? 'resume-en.pdf.pdf' : 'resume.pdf.pdf';
    window.open(file, '_blank');
  });
});
