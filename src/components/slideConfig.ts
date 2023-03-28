import { Settings } from 'react-slick';

export const portfolioSlick: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const portfolioSlick2: Settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slickDot: Settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const slideSlick: Settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  easing: 'fade',
  adaptiveHeight: true,
};

export const innerPageDemo: Settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialActivation: Settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};