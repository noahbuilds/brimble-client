<template>
  <section class="max-w-6xl mx-auto py-14 px-4 flex flex-col md:flex-row gap-12">
    <div class="max-w-[380px] w-full md:py-24">
      <h1 class="text-[32px] md:text-4xl text-secondary">
        <span class="text-primary">Collaborate</span> with others in realtime.
      </h1>

      <p class="text-paragraph mt-5 leading-6">
        You can share, chat, and edit from anywhere in the world Brimble Live
        enables real-time collaboration for your entire team
      </p>

      <button @click="toggleSidebar" class="font-semibold py-6 w-[196px] bg-primary text-white mt-8 rounded-xl">
        Get Started
      </button>
    </div>

    <div class="relative editor">
      <nuxt-img placeholder class="chat w-40 lg:w-auto absolute top-1/4 left-1/3"
        src="https://storage.googleapis.com/brimble-assets/img/chat1.svg" alt="" />
      <nuxt-img placeholder class="chat w-40 lg:w-[300px] absolute bottom-1/3 left-1/4" src="img/chat2.png" alt="" />
      <nuxt-img placeholder class="chat w-40 lg:w-auto absolute top-3/4 left-1/2"
        src="https://storage.googleapis.com/brimble-assets/img/chat3.svg" alt="" />
      <nuxt-img placeholder src="https://storage.googleapis.com/brimble-assets/img/editor.svg" />
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";

export default {
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap;
    tl.from(".chat", {
      opacity: 0,
      x: 100,
      duration: 0.8,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".editor",
        start: "top center",
      },
    });
  },
};
</script>
