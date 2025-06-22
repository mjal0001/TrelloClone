<template>
  <v-row style="gap: 5px">
    <v-btn class="text-caption" variant="text">Trello</v-btn>
    <DropDown title="Workspaces" :items="workspaceItems" />
    <DropDown title="Recent" :items="RecentItems" />
    <DropDown title="Starred" :items="StarredItems" />
    <DropDown title="Templates" :items="TemplatesItems" />
  </v-row>
</template>

<script setup lang="ts">
import DropDown from '@/components/Buttons/NavDropdown.vue'

const workspaceItems = [{ label: 'Workspaces' }, { label: 'Recent' }]

const RecentItems = [{ label: 'Workspaces' }, { label: 'Recent' }]

const StarredItems = [{ label: 'Workspaces' }, { label: 'Recent' }]

const TemplatesItems = [{ label: 'Workspaces' }, { label: 'Recent' }]
</script>
