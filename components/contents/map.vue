<template>
  <section class="max-w-6xl mx-auto pt-24 px-4">
    <div
      class="py-20 bg-gradient-to-b from-[#EBF0FA] to-[#F3F6FC00] rounded-3xl"
    >
      <div class="max-w-[620px] px-4 md:px-12">
        <h1 class="text-[28px] leading-10 md:text-4xl text-secondary">
          Connect with top developers to see what they are shipping.
        </h1>
        <button
          @click="toggleSidebar"
          class="font-semibold py-6 w-[196px] bg-primary text-white mt-5 md:mt-8 rounded-xl"
        >
          Get Started
        </button>
      </div>

      <div class="mt-12 md:mt-4">
        <nuxt-img placeholder class="hidden sm:block" src="img/mapping.png" />
        <nuxt-img
          placeholder
          class="sm:hidden w-full"
          src="https://storage.googleapis.com/brimble-assets/img/mapping-mobile.svg"
        />
      </div>
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
