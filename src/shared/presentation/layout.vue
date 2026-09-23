<script setup>
import SourceList from '../../news/presentation/components/source-list.vue';
import {newsStore} from "../../news/application/news.store.js";
import {ref, computed, onMounted} from "vue";
import ArticleList from '../../news/presentation/components/article-list.vue';
import footerContent from "../../shared/presentation/footer-content.vue";
import languageSwitcher from "../../shared/presentation/language-switcher.vue";
const drawerVisible = ref(false);
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
  console.log("drawerVisible.value", drawerVisible.value);
}
const sources = computed(() => newsStore.sources);
const errors = computed(() => newsStore.errors);
const articles = computed(() => newsStore.articles);
const setSource = (source) => {
  newsStore.setCurrentSource(source);
};
onMounted(() => {
  newsStore.loadSources();
});
</script>
<template>
  <div class="layout-container">
    <header class="layout-header">
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="Catchup" text
                     @click="toggleDrawer" class="p-button-text"/>
          <source-list :sources="sources" @source-selected="setSource"
                        v-model:visible="drawerVisible"/>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </header>
    <main class="layout-main">
      <article-list v-if="articles.length" :articles="articles"/>

      unavailable
    </main>
    <footer-content/>
  </div>
</template>
<style scoped>
</style>