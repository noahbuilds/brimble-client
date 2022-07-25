<template>
  <section
    class="max-w-6xl mx-auto py-12 md:py-24 md:px-4 flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-12"
  >
    <div class="w-full px-4 md:px-0">
      <h1 class="text-[32px] md:text-4xl text-secondary">
        Work with our <span class="text-primary">CLI</span> easily.
      </h1>

      <p class="text-paragraph mt-5">
        You can share, chat, and edit from anywhere in the world Brimble Live
        enables real-time collaboration for your entire team
      </p>

      <button
        @click="toggleSidebar"
        class="font-semibold py-6 w-[175px] bg-primary text-white mt-8 rounded-xl md:hidden"
      >
        Get Started
      </button>

      <div class="mt-16 md:mt-8 space-y-6">
        <div class="md:hidden">
          <img src="/img/brimble-in-circle.svg" />
        </div>
        <div class="flex gap-1.5 md:gap-3.5 items-center text-xs sm:text-sm">
          <div class="hidden md:block">
            <img src="/img/brimble-in-circle.svg" />
          </div>
          <div class="bg-secondary py-2.5 px-3.5 text-white rounded-xl">
            brimble login
          </div>
          <h1 class="text-[#10AB61] font-semibold">To authenticate</h1>
        </div>

        <div class="flex gap-1.5 md:gap-3.5 items-center text-xs sm:text-sm">
          <div class="hidden md:block">
            <img src="/img/brimble-in-circle.svg" />
          </div>
          <div class="bg-secondary py-2.5 px-3.5 text-white rounded-xl">
            brimble dev -/path/to/project
          </div>
          <h1 class="text-primary font-semibold">To preview project</h1>
        </div>

        <div class="flex gap-1.5 md:gap-3.5 items-center text-xs sm:text-sm">
          <div class="hidden md:block">
            <img src="/img/brimble-in-circle.svg" />
          </div>
          <div class="bg-secondary py-2.5 px-3.5 text-white rounded-xl">
            brimble cook -/path/to/project
          </div>
          <h1 class="text-[#E60000] font-semibold">To launch project</h1>
        </div>
        <div>
          <button
            @click="toggleSidebar"
            class="font-semibold py-6 w-[196px] bg-primary text-white mt-10 rounded-xl hidden md:block"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    <div
      class="bg-transparent md:bg-[#F3F6FC] rounded-3xl md:px-6 flex items-center h-auto md:h-[580px] lg:h-[700px] w-full"
    >
      <img class="w-full hidden sm:block" src="/img/terminal.svg" />
      <img class="w-full sm:hidden" src="/img/terminal-mobile.svg" />
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
