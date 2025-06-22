<template>
  <v-menu offset-y>
    <template #activator="{ props }">
      <v-btn v-bind="props" append-icon="mdi-menu-down" variant="text" class="text-caption">
        {{ title }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title class="text-caption">{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: { label: string }[]
}>()
</script>
