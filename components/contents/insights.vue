<template>
  <section
    class="max-w-6xl mx-auto pt-24 px-4 flex flex-col md:flex-row justify-between gap-20"
  >
    <div class="space-y-8 max-w-[375px] lg:py-24 relative z-10">
      <h1 class="text-[32px] md:text-4xl text-secondary">
        Get important <span class="text-primary">Usage Insights</span>
      </h1>
      <p class="text-paragraph">
        Say goodbye to pointless data. With our insights, you get real web vital
        data from your visitors.
      </p>
      <p class="text-paragraph">
        Better accuracy, better performance, and better privacy for your
        visitors.
      </p>
      <button
        @click="toggleSidebar"
        class="bg-primary rounded-xl py-6 font-semibold text-white w-48"
      >
        Get Started
      </button>
    </div>

    <div class="relative hidden sm:block">
      <img class="h-auto lg:h-[740px]" src="/img/analytics.png" />

      <div class="absolute bottom-20 -left-40">
        <img src="/img/stats.svg" />
      </div>
    </div>
    <div class="sm:hidden">
      <img class="w-full" src="/img/analytics-mobile.svg" />
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
