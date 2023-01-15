<template>
  <div class="vuetify">
    <h1>This is an vuetify page</h1>
    <div>
      <v-alert title="Alert title" text="..."></v-alert>
    </div>
    <v-alert color="info" icon="$info">
      I'm an info alert that uses <strong>color</strong> and <strong>icon</strong> props instead of <strong>type</strong>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "VuetifyView"
}
</script>

<style scoped>

</style>