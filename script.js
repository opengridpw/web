document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const body = document.body;
  const mobileToggle = document.querySelector('.mobile-nav-toggle');

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        nav.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        nav.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // 表单提交处理
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      if (!data.name || !data.email || !data.message) {
        alert('请填写所有必填项');
        return;
      }

      console.log('表单数据:', data);
      alert('感谢您的留言！我们会尽快与您联系。');
      form.reset();
    });
  }

  // 为导航链接添加active类
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // 添加简单的交互效果
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.02)';
      section.style.transition = 'transform 0.3s ease';
    });
    
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'scale(1)';
    });
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
