// Smooth
toHome = () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
};

toAbout = () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
};

toExperience = () => {
  document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
};

toPortfolio = () => {
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
};

toNews = () => {
  document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
};

toContact = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

toTop = () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
};

// Scroll Top
let scrollIntoView = document.getElementById('scroll-top');
scrollIntoView.style.display = 'none';
window.addEventListener('scroll', () => {
  if (this.scrollY > 20) {
    scrollIntoView.style.display = 'block';
  } else {
    scrollIntoView.style.display = 'none';
  }
});

// Paralax
// Mouse position
let mouseX, mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Add GSAP Effect
  gsap.to('#parallax-wrap img', {
    // The '30' value bellow corresponds to the effect power, change it as you want
    x: (mouseX / window.innerWidth - 0.5) * 100,
    y: (mouseY / window.innerHeight - 0.5) * 100,
    delay: 0.1,
    ease: 'power2.out',
    overwrite: 'auto',
  });
});

// Scroll to fixed navigation bar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction(scroll) {
  const scrollNav = document.querySelectorAll('#navbar');

  scrollNav.forEach((scrollElement) => {
    const scrollClasses = scrollElement.classList;

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      scrollElement.style.padding = '10px 0';
      scrollElement.style.transition = '0.4s';
    } else {
      scrollElement.style.padding = '20px 0';
    }
  });
}

// Filter
function filterTags(tag) {
  const tags = document.querySelectorAll('.tag');

  // Show/hide tags based on the selected tag
  tags.forEach((tagElement) => {
    const tagClasses = tagElement.classList;
    if (tag === 'all' || tagClasses.contains(tag)) {
      tagElement.style.display = 'block';
    } else {
      tagElement.style.display = 'none';
    }
  });
}

// Active Buttons
