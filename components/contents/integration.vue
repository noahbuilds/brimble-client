<template>
  <section
    class="max-w-6xl mx-auto py-16 md:py-24 px-4 flex flex-col md:flex-row gap-16 md:gap-12"
  >
    <div class="max-w-[380px] w-full md:py-24">
      <h1 class="text-[32px] md:text-4xl text-secondary">
        Integrate with services you use regularly.
      </h1>

      <button
        @click="toggleSidebar"
        class="font-semibold py-6 w-[196px] bg-primary text-white mt-8 rounded-xl"
      >
        Get Started
      </button>
    </div>

    <div class="relative rounded-full">
      <img
        class="animate-spin-slow origin-center w-full h-full"
        src="/img/integrate-circle.svg"
      />
      <img
        class="rounded-full w-1/4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        src="/img/integrate-logo.svg"
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
