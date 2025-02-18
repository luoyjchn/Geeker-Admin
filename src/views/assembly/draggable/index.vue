<template>
  <draggable
    v-model="gridList"
    animation="300"
    chosen-class="chosen"
    class="card grid-container"
    force-fallback="true"
    item-key="id"
  >
    <template #item="{ element }">
      <div :class="'item' + ' ' + 'item-' + element.num">
        {{ element.num }}
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" name="draggable" setup>
import { ref } from "vue";
import draggable from "vuedraggable";

let gridList = ref([
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
  { id: 6, num: 6 },
  { id: 7, num: 7 },
  { id: 8, num: 8 },
  { id: 9, num: 9 }
]);
</script>

<style lang="scss" scoped>
@use "./index";
</style>
