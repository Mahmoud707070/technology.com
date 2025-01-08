// الحصول على الأزرار
const darkModeButton = document.getElementById('toggle-darkmode');
const languageButton = document.getElementById('toggle-language');

// تبديل الوضع الليلي
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// تبديل اللغة
languageButton.addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  if (currentLang === 'en') {
    document.documentElement.lang = 'ar';
    languageButton.textContent = 'English';
    document.querySelector('.content h2').textContent = 'اشترك الآن في نشرتنا الإخبارية';
    document.querySelector('.content p').textContent = 'ابقَ على اطلاع بأحدث اتجاهات التسويق والنصائح والرؤى من خلال الاشتراك.';
    document.querySelector('form input[type="text"]').placeholder = 'اسمك';
    document.querySelector('form input[type="email"]').placeholder = 'بريدك الإلكتروني';
    document.querySelector('form button').textContent = 'اشترك';
  } else {
    document.documentElement.lang = 'en';
    languageButton.textContent = 'العربية';
    document.querySelector('.content h2').textContent = 'Subscribe Now to Our Newsletter';
    document.querySelector('.content p').textContent = 'Stay updated with the latest trends in marketing, tips, and insights by subscribing to our newsletter.';
    document.querySelector('form input[type="text"]').placeholder = 'Your Name';
    document.querySelector('form input[type="email"]').placeholder = 'Your Email';
    document.querySelector('form button').textContent = 'Subscribe';
  }
});
