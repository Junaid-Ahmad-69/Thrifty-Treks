<script setup lang="ts">
import AuthButton from "~/components/auth-button.vue";
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Thrifty Treks
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple thrifty treks app. Add locations, photos, and notes, to create a digital journey of your journeys.
        </p>
        <AuthButton />
      </div>
    </div>
  </div>
</template>
