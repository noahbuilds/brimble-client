<template>
  <section
    class="min-h-screen overflow-x-hidden"
    :class="darkMode ? 'background' : 'bg-[#f5f6fd]'"
  >
    <div>
      <header
        class="py-6 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-3.5"
      >
        <div></div>
        <nuxt-img
          placeholder
          v-if="!darkMode"
          src="https://storage.googleapis.com/brimble-assets/img/brimble-logo-dark.svg"
        />
        <nuxt-img
          placeholder
          v-else
          src="https://storage.googleapis.com/brimble-assets/img/brimble-logo-white.svg"
        />

        <div
          @click="switchModes"
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
      <div class="text-center pt-28 px-4">
        <h1
          class="font-extrabold text-primary text-5xl md:text-8xl lg:text-[120px] leading-none"
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
          @click="toggleSidebar"
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-12 rounded-xl"
        >
          Get Started
        </button>
      </div>

      <div class="mt-20 relative">
        <nuxt-img
          placeholder
          class="md:w-full min-w-5xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          src="https://storage.googleapis.com/brimble-assets/img/hero-icons2-new.svg"
          alt=""
        />
        <nuxt-img
          placeholder
          class="md:w-1/2 mx-auto paraa relative"
          src="https://storage.googleapis.com/brimble-assets/img/hero-img.svg"
        />
      </div>
    </template>

    <template v-else>
      <div class="text-center pt-28 px-4">
        <h1
          class="font-extrabold text-primary text-5xl md:text-8xl lg:text-[120px] leading-none"
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
          @click="toggleSidebar"
          class="font-semibold py-5 md:py-6 w-[196px] bg-primary text-white mt-12 rounded-xl"
        >
          Get Started
        </button>
      </div>

      <div class="mt-20 relative">
        <nuxt-img
          placeholder
          class="md:w-full min-w-5xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          src="https://storage.googleapis.com/brimble-assets/img/hero-icons-new.svg"
          alt=""
        />
        <nuxt-img
          placeholder
          class="md:w-1/2 mx-auto para relative"
          src="https://storage.googleapis.com/brimble-assets/img/hero.svg"
        />
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

  methods: {
    switchModes() {
      this.darkMode = !this.darkMode;
    },
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
  mounted() {
    const paraa = document.querySelector(".paraa");

    const para = document.querySelector(".para");
    window.addEventListener("scroll", () => {
      let val = window.scrollY;

      para.style.bottom = val * 0.6 + "px";
    });
    window.addEventListener("scroll", () => {
      let val = window.scrollY;

      if (paraa) paraa.style.bottom = val * 0.6 + "px";
    });
  },
};
</script>

<style scoped>
.background {
  background-image: url("https://storage.googleapis.com/brimble-assets/img/hero-bg-dark.svg");
  background-size: cover;
  background-position: center;
}
</style>
