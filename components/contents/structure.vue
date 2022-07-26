<template>
  <section
    class="max-w-6xl mx-auto py-16 md:pt-24 px-4 flex flex-col md:flex-row-reverse gap-14"
  >
    <div class="max-w-[450px] w-full md:py-24">
      <h1 class="text-[32px] md:text-4xl text-secondary">
        Manage Stages in a single <span class="text-primary">project</span>.
      </h1>

      <p class="text-paragraph mt-5 leading-6">
        Brimble helps you and your team stay organized by managing different
        stages/branches of your project without having to deploy them
        separately. Best for A/B testing, feature rollout, and more.
      </p>

      <button
        @click="toggleSidebar"
        class="font-semibold py-6 w-[196px] bg-primary text-white mt-8 rounded-xl"
      >
        Get Started
      </button>
    </div>

    <div class="w-full">
      <nuxt-img
        placeholder
        class="hidden sm:block"
        src="https://storage.googleapis.com/brimble-assets/img/audioly.svg"
      />
      <nuxt-img
        placeholder
        class="sm:hidden mx-auto"
        src="https://storage.googleapis.com/brimble-assets/img/audioly-mobile.svg"
      />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>
