<template>
  <section>
    <div :class="darkMode ? 'bg-[#000B1D]' : 'bg-[#f5f6fd]'">
      <header class="py-6 max-w-6xl mx-auto flex items-center justify-between">
        <div></div>
        <img v-if="!darkMode" src="/img/brimble-logo-dark.svg" />
        <img v-else src="/img/brimble-logo-white.svg" />

        <div
          @click="darkMode = !darkMode"
          class=" w-14 h-6 rounded-full p-0.5 bg-[#c4c4c4] cursor-pointer relative transition-all duration-200"
          
        >
          <div
            class="w-7 h-full rounded-full bg-white transition-all duration-200"
            :class="{'translate-x-6': !darkMode}"
          ></div>
        </div>
      </header>
    </div>

    <div v-if="!darkMode" class="bg-[#f5f6fd]">
      <div class="text-center pt-28 px-7">
        <h1
          class="font-extrabold text-primary text-[56px] md:text-8xl lg:text-[120px] leading-none"
        >
          Deployment
        </h1>
        <h1
          class="font-semibold text-black text-5xl md:text-6xl lg:text-[70px] mt-6 md:mt-8 leading-none"
        >
          made easy
        </h1>
        <p class="mt-7 md:mt-12 max-w-[490px] mx-auto">
          Spend less time on DevOps and more time building. The most efficient
          way to host & scale your web app.
        </p>

        <button
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-12 rounded-xl"
        >
          Get Started
        </button>
      </div>

      <div class="mt-20">
        <img class="w-full" src="/img/hero-img.svg" />
      </div>
    </div>

    <div v-else class="bg-[#000B1D]">
      <div class="text-center pt-28 px-7">
        <h1
          class="font-extrabold text-primary text-[56px] md:text-8xl lg:text-[120px] leading-none"
        >
          Deployment
        </h1>
        <h1
          class="font-semibold text-white text-5xl md:text-6xl lg:text-[70px] mt-6 md:mt-8 leading-none"
        >
          made easy
        </h1>
        <p class="mt-7 md:mt-12 max-w-[490px] mx-auto text-white">
          Spend less time on DevOps and more time building. The most efficient
          way to host & scale your web app.
        </p>

        <button
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-12 rounded-xl"
        >
          Get Started
        </button>
      </div>

      <div class="mt-20">
        <img class="w-full" src="/img/hero-img-dark.svg" />
      </div>
    </div>
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
