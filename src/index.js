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

let scrollIntoView = document.getElementById('scroll-top');
windown.addEventListener('scroll', () => {
  if (this.scrollY > 20) {
    scrollIntoView.style.display = 'block';
  } else {
    scrollIntoView.style.display = 'none';
  }
});
