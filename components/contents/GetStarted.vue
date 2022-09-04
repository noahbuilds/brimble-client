<template>
  <section class="max-w-6xl mx-auto py-24 px-4">
    <div
      class="py-16 md:py-20 px-6 md:px-14 bg-primary background rounded-3xl relative overflow-hidden"
    >
      <h1
        class="text-white font-bold text-[32px] leading-10 md:text-5xl md:leading-[64px] max-w-3xl relative z-10"
      >
        Start deploying now and showcase with developers what you've built.
      </h1>
      <div
        class="mt-16 md:mt-20 mb-8 relative z-10 flex flex-col md:flex-row items-center gap-8"
      >
        <button
          @click="toggleSidebar"
          class="bg-white py-6 px-8 text-black rounded-xl font-medium"
        >
          Get Started with Brimble
        </button>

        <a
          href="https://www.loom.com/share/8b12bc0b6b434a5c8ec2c0940f1321bf"
          target="_blank"
          class="flex items-center gap-3 cursor-pointer"
        >
          <nuxt-img
            placeholder
            src="https://storage.googleapis.com/brimble-assets/img/icons/play.svg"
          />
          <h1 class="font-semibold text-white">
            Deploying your Project on Brimble
          </h1>
        </a>
      </div>
      <div class="absolute bottom-0 right-0">
        <nuxt-img
          placeholder
          class="hidden md:block"
          src="https://storage.googleapis.com/brimble-assets/img/brimble-bg-icon-2.svg"
        />
        <nuxt-img
          placeholder
          class="md:hidden"
          src="https://storage.googleapis.com/brimble-assets/img/brimble-bg-icon-2-small.svg"
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

<style scoped>
@media screen and (min-width: 768px) {
  .background {
    background: linear-gradient(
      116.08deg,
      #3366cc 14.44%,
      #23478e 67.29%,
      #193366 100%
    );
  }
}
</style>
