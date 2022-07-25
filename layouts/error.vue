<template>
  <section
    class="min-h-screen relative"
    :class="darkMode ? 'bg-[#000B1D]' : 'bg-[#f5f6fd]'"
  >
    <div class="absolute inset-x-0 bottom-0">
      <img src="/img/moon-bg.svg" />
    </div>

    <div class="mb-16">
      <header
        class="py-6 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-3.5"
      >
        <div></div>
        <img v-if="!darkMode" src="/img/brimble-logo-dark.svg" />
        <img v-else src="/img/brimble-logo-white.svg" />

        <div
          @click="darkMode = !darkMode"
          class="w-14 h-6 rounded-full p-0.5 bg-[#c4c4c4] cursor-pointer relative transition-all duration-200"
        >
          <div
            class="w-7 h-full rounded-full bg-white transition-all duration-200"
            :class="{ 'translate-x-6': !darkMode }"
          ></div>
        </div>
      </header>
    </div>

    <template v-if="!darkMode">
      <div class="text-center px-7 flex flex-col items-center relative z-10">
        <div class="relative">
          <img src="/img/404-dark.svg" />

          <div class="absolute -bottom-24 -left-24">
            <img class="h-48 sm:h-auto"  src="/img/astronaut.svg" />
          </div>
        </div>
        <h1
          class="font-semibold text-black text-3xl md:text-[40px] mt-6 md:mt-8 leading-none"
        >
          You seem lost
        </h1>
        <p class="mt-5 md:mt-12 max-w-[490px] mx-auto text-paragraph">
          What you are in search for doesn't exist or has been moved from this
          domain. Don't fret click the button below to get back to safety
        </p>

        <button
          @click="$router.replace('/')"
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-8 rounded-xl"
        >
          Back to Safety
        </button>
      </div>
    </template>

    <template v-else>
      <div class="text-center px-7 flex flex-col items-center relative z-10">
        <div class="relative">
          <img src="/img/404-white.svg" />

          <div class="absolute -bottom-24 -left-24">
            <img class="h-48 sm:h-auto" src="/img/astronaut.svg" />
          </div>
        </div>
        <h1
          class="font-semibold text-white text-3xl md:text-[40px] mt-6 md:mt-8 leading-none"
        >
          You seem lost
        </h1>
        <p class="mt-5 md:mt-12 max-w-[490px] mx-auto text-white">
          What you are in search for doesn't exist or has been moved from this
          domain. Don't fret click the button below to get back to safety
        </p>

        <button
          @click="$router.replace('/')"
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-8 rounded-xl"
        >
          Back to Safety
        </button>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      darkMode: true,
    };
  },
};
</script>
