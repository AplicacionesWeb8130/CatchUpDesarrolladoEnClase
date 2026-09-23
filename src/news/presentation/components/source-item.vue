<script setup>
import {Source} from "../../../news/domain/model/source.entity.js";
import {Avatar as PvAvatar} from "primevue";

const {source} = defineProps({source:{type:Source, required:true}});
const emit = defineEmits(['source-selected']);

const emitSourceSelectedEvent =() =>{
  emit('source-selected', source)
}

</script>
<template>
<div class="m-4">
  <div class = "flex align-content-start flex-wrap cursor-pointer"
       @click="emitSourceSelectedEvent">
      <span class="flex align-items-center justify-content-center mr-2">
        <pv-avatar :aria-label="source.name"
              :image="source.urlToLogo"
                   shape="circle"/>
      </span>
      <span class="flex align-items-center justify-content-center">
        {{source.name}}
      </span>
    </div>
</div>
</template>

<style scoped>

</style>