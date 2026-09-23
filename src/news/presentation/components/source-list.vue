<script setup>
import {Source} from "../../../news/domain/model/source.entity.js";
import SourceItem from "./source-item.vue";
const {visible, sources} = defineProps({
                  visible:{type:Boolean},
                  sources:{type:Array[Source]}});

const emit = defineEmits(['source-selected', 'update:visible']);
const emitSourceSelectedEvent = source =>{
  emit('source-selected', source);
}
const emitVisibilityUpdatedEvent = value =>{
  emit('update:visible', value);
}
</script>
<template>
<pv-drawer :visible="visible" @update:visible="emitVisibilityUpdatedEvent">

  <source-item
      v-for="source in sources"
      :key="source.id"
      :source="source"
      @source-selected="emitSourceSelectedEvent(source)"
  />
</pv-drawer>
</template>
<style scoped>
</style>