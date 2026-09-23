<script setup>
import {Article} from "../../domain/model/article.entity.js";
import {ref} from "vue";
const {article} = defineProps({article : {type : Article, required : true}});

</script>
<template>
  <pv-card>
    <template #header>
      <img :alt="article.title" :src="article.urlToImage.toString()" class="image-fit" />
    </template>
    <template #title>
      {{article.title}}
    </template>
    <template #subtitle>
      <div class="flex align-content-start flex-wrap cursor-pointer" >
        <span class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="article.source.name"
                     :image="article.source.urlToLogo"
                     shape="circle"/>
        </span>
      </div>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap mt-4">
      {{article.description}}
      </p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>