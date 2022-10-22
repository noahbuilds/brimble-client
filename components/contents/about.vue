<template>
  <section class="max-w-6xl mx-auto py-24 px-4">
    <div>
      <h1 class="text-[40px] leading-[50px] md:text-6xl md:leading-[74px]">
        The easiest place <br />
        to <span class="text-primary">deploy</span> your web apps
      </h1>

      <div class="mt-10 md:mt-28 flex flex-col md:flex-row gap-6 md:gap-5">
        <div v-for="(step, index) in steps" :key="index"
          class="bg-[#fafbfe] rounded-lg px-6 md:h-[280px] w-full py-8 md:py-0">
          <div class="md:h-[102px] relative">
            <div
              class="h-20 w-20 md:h-[100px] md:w-[100px] rounded-full flex justify-center items-center md:absolute left-0 -top-1/2"
              :class="index === 0 ? 'bg-primary' : 'bg-white'">
              <nuxt-img placeholder class="h-9 md:h-auto"
                :src="`https://storage.googleapis.com/brimble-assets/img/icons/${step.icon}.svg`" />
            </div>
          </div>
          <div class="text-[#000060] max-w-[265px] mt-11 md:mt-0">
            <h1 class="font-semibold text-[28px] leading-none">
              {{ step.name }}
            </h1>
            <p class="md:text-lg leading-6 mt-6">{{ step.note }}</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-gradient-to-b from-[#2E5CB8] to-[#7094DB] pt-20 sm:py-32 px-4 sm:px-12 rounded-[20px] relative mt-16 overflow-hidden">
      <div class="text-white space-y-6 max-w-[543px] relative z-10">
        <div>
          <nuxt-img placeholder class="hidden md:block"
            src="https://storage.googleapis.com/brimble-assets/img/text-one.svg" />
          <nuxt-img placeholder class="md:hidden"
            src="https://storage.googleapis.com/brimble-assets/img/text-one-small.svg" />
        </div>
        <div>
          <nuxt-img placeholder class="hidden md:block"
            src="https://storage.googleapis.com/brimble-assets/img/text-two.svg" />
          <nuxt-img placeholder class="md:hidden"
            src="https://storage.googleapis.com/brimble-assets/img/text-two-small.svg" />
        </div>
        <p>
          Brimble manages auto-scaling deployment for your frontend apps,
          powered by Google cloud GCP, whether you're constructing a basic
          landing page or a large scale frontend project.
        </p>
        <p>
          On brimble, you may launch your projects and cooperate with other
          developers.
        </p>
        <button @click="toggleSidebar" class="py-6 px-8 bg-white text-black rounded-xl font-medium">
          Get Started with Brimble
        </button>
      </div>

      <div class="sm:hidden mt-20 relative z-10">
        <nuxt-img placeholder class="mx-auto" src="img/person-mobile.png" />
      </div>

      <div class="absolute bottom-0 right-0 hidden sm:block">
        <nuxt-img placeholder src="https://storage.googleapis.com/brimble-assets/img/brimble-bg-icon.svg" />
      </div>
      <div class="absolute bottom-0 right-0 sm:hidden">
        <nuxt-img placeholder src="https://storage.googleapis.com/brimble-assets/img/brimble-bg-icon-small.svg" />
      </div>
      <div class="absolute bottom-0 right-0 hidden sm:block">
        <nuxt-img placeholder class="h-[240px] md:h-[320px] lg:h-auto" src="img/person.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          icon: "folder",
          name: "Grab your Repo.",
          note: "Whenever you push to Git, Brimble detects and triggers auto-deploy.",
        },
        {
          icon: "server",
          name: "Configure Project",
          note: "You can decide to add little to no configuration to your app.",
        },
        {
          icon: "spaceship",
          name: "Deploy 🚀🚀",
          note: "Hurray!! Your app is off you local machine. It's that easy.",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>
