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

      <button
        class="bg-white py-6 px-8 text-black mt-16 md:mt-20 rounded-xl mb-8 font-medium relative z-10"
      >
        Get Started with Brimble
      </button>

      <div class="absolute bottom-0 right-0">
        <img class="hidden md:block" src="/img/brimble-bg-icon-2.svg" />
        <img class="md:hidden" src="/img/brimble-bg-icon-2-small.svg" />
      </div>
    </div>
  </section>
</template>

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
