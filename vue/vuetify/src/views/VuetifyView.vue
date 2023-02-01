<template>
  <div class="vuetify">
    <h1>This is an vuetify page</h1>
    <Alerts/>
    <AspectRatios/>
    <Avatars/>
    <Badges/>
    <Banners text="sefdddddddddddddddd"></Banners>
  </div>
</template>

<script>
import Alerts from "@/components/Alerts.vue";
import AspectRatios from "@/components/AspectRatios.vue";
import Avatars from "@/components/Avatars.vue";
import Badges from "@/components/Badges.vue";
import Banners from "@/components/Banners.vue";
export default {
  name: "VuetifyView",
  components: {Banners, Badges, Avatars, AspectRatios, Alerts}
}
</script>

<style scoped>

</style>