<template>
  <!-- HEADER -->
  <header class="active">
    <a href="#home" class="logo">Portfolio.</a>

    <i class="fa-solid fa-bars" id="menu-icon"></i>

    <nav>
      <a href="#home" class="active">Home</a>
      <a href="#services">Services</a>
      <a href="#resume">Resume</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <div class="bars-box active">
    <div class="bar" style="--i:6"></div>
    <div class="bar" style="--i:5"></div>
    <div class="bar" style="--i:4"></div>
    <div class="bar" style="--i:3"></div>
    <div class="bar" style="--i:2"></div>
    <div class="bar" style="--i:1"></div>
  </div>
  <!-- HOME -->
  <HeaderHome />
  <!-- SERVICES -->
  <Services />
  <!-- RESUNE -->
  <Resume />
  <!-- PORTFOLIO -->
  <Portfolio />
  <!-- Contact -->
  <Contacts />
</template>

<script>
  export default {
    mounted() {
      const navLinks = document.querySelectorAll('header nav a');
      const logoLink = document.querySelector('.logo');
      const sections = document.querySelectorAll('section');
      const menuIcon = document.querySelector('#menu-icon');
      const navbar = document.querySelector('header nav');
      menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
      });
      const activePage = () => {
        const header = document.querySelector('header');
        const barsBox = document.querySelector('.bars-box');
        header.classList.remove('active');

        setTimeout(() => {
          header.classList.add('active');
        }, 1100);
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        barsBox.classList.remove('active');

        setTimeout(() => {
          barsBox.classList.add('active');
        }, 1100);
        sections.forEach(section => {
          section.classList.remove('active');
        });
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
      }
      navLinks.forEach((link, idx) => {
        link.addEventListener('click', () => {
          if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
              sections[idx].classList.add('active');
            }, 1100);
          }
        });
      });
      logoLink.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
          activePage();
          navLinks[0].classList.add('active');
          setTimeout(() => {
            sections[0].classList.add('active');
          }, 1100);
        }
      });
      const resumeBtns = document.querySelectorAll('.resume-btn');
      resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          const resumeDetails = document.querySelectorAll('.resume-detail');
          resumeBtns.forEach(btn => {
            btn.classList.remove('active');
          });
          btn.classList.add('active');
          resumeDetails.forEach(detail => {
            detail.classList.remove('active');
          });
          resumeDetails[idx].classList.add('active')
        });
      });
      const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
      const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
      let index = 0;
      const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        portfolioDetails.forEach(detail => {
          detail.classList.remove('active');
        });
        portfolioDetails[index].classList.add('active');
      }
      arrowRight.addEventListener('click', () => {
        if (index < 4) {
          index++;
          arrowLeft.classList.remove('disabled');
        }
        else {
          index = 5;
          arrowRight.classList.add('disabled');
        }
        activePortfolio();
      });
      arrowLeft.addEventListener('click', () => {
        if (index > 1) {
          index--;
          arrowRight.classList.remove('disabled');
        }
        else {
          index = 0;
          arrowLeft.classList.add('disabled');
        }
        activePortfolio();
      });
    }
  };
</script>

<style lang="scss"></style>
