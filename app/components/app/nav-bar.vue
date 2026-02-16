<script setup lang="ts">
import AuthButton from "~/components/auth-button.vue";
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Thrifty
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <AppThemeToogle />
      <AuthButton />
    </div>
  </div>
</template>
