<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>
<template>
<div class="grid mt-4 p-4 justify-content-center bg-primary text-primary text-center">
  <div class="col-12 flex flex-column align-items-center" >
    <p>Copyright 2026 ACME Studios</p>
  </div>
  <div class="col-12 flex flex-column align-items-center mt-3" >
    <p>
      {{t('authoring-phrase.intro')}} <i class="pi pi-heart text-red-500"></i>
      {{t('authoring-phrase.use')}} <a href="https://primevue.org" target="_blank" class="text-white">PrimeVue</a>
      {{t('authoring-phrase.author',{brand:'ACME'})}}
    </p>
    <p>
      {{t('footer.powered-by')}} <a href="https://newsapi.org" target="_blank" class="text-white">NewsAPI</a>
      {{t('footer.and')}} <a href="https://logo.dev" target="_blank" class="text-white">Logo dev Logo API</a>

    </p>
  </div>

</div>
</template>

<style scoped>

</style>