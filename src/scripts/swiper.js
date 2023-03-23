import Swiper from 'swiper';

const swiper = new Swiper('.header__swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.scroll-buttons__counter',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      return number;
    },
  },

  navigation: {
    nextEl: '.scroll-buttons__right',
    prevEl: '.scroll-buttons__left',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

