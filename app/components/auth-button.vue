<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

const loading = ref(false);

async function signIn() {
  loading.value = true;
  await authClient.signIn.social({
    provider: "github",
  });
  loading.value = false;
}
</script>

<template>
  <button class="btn btn-accent" @click="signIn">
    Sign in With Github
    <Icon name="tabler:brand-github" size="24" />
  </button>
</template>
