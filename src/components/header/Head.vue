<template>
  <div class="header">
    <HeadLogo  v-if="showLogo"  />
    <RankHead v-if="head.toggle" :title="head.title" :cStyle="head.style" />                      <!--这里是绑定一个自定义的值 如果没绑定会传一个定值给/ -->
    <HeadNav v-else />
  </div>
</template>

<script type="es6">
  import HeadLogo from './HeadLogo';
  import HeadNav from './HeadNav'
  import RankHead from './RankHead'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['head','showLogo'])
    },
    components: {HeadLogo, HeadNav, RankHead}
  }
</script>
