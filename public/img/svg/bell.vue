<template>
  <nav>
    <a href="https://github.com/vuejs/vue">
      <VueLogo />
      Vue
    </a>
    <a href="https://github.com/svg/svgo">
      <SVGOLogo />
      SVGO
    </a>
    <a href="https://github.com/webpack/webpack">
      <WebpackLogo />
      webpack
    </a>
  </nav>
</template>
<script>
import VueLogo from './public/vue.svg';
import SVGOLogo from './public/svgo.svg';
import WebpackLogo from './public/webpack.svg';

export default {
  name: 'Example',
  components: {
    VueLogo,
    SVGOLogo,
    WebpackLogo,
  },
};
</script>