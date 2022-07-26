<template>
  <footer class="bg-gradient-to-b from-white to-[#F3F6FC]">
    <div class="max-w-6xl mx-auto px-4 py-12 hidden md:flex justify-between">
      <div class="space-y-12">
        <div>
          <nuxt-img
            placeholder
            src="https://storage.googleapis.com/brimble-assets/img/brimble-logo.svg"
          />
        </div>
        <p class="text-lg text-secondary">
          All Rights Reserved. © 2022 Brimble, Inc.
        </p>
      </div>

      <div class="space-y-5 flex flex-col self-end">
        <a
          class="font-semibold text-lg text-primary self-end"
          href="https://docs.brimble.io/"
          target="_blank"
          >Docs</a
        >

        <div class="flex gap-6 items-center">
          <a href="https://twitter.com/brimblehq" target="_blank">
            <nuxt-img
              placeholder
              src="https://storage.googleapis.com/brimble-assets/img/icons/twitter.svg"
            />
          </a>
          <a href="https://github.com/brimblehq" target="_blank">
            <nuxt-img
              placeholder
              src="https://storage.googleapis.com/brimble-assets/img/icons/github.svg"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="md:hidden space-y-12 px-4 py-12">
      <div>
        <nuxt-img
          placeholder
          src="https://storage.googleapis.com/brimble-assets/img/brimble-logo.svg"
        />
      </div>
      <div class="flex gap-6 items-center">
        <a href="https://twitter.com/brimblehq" target="_blank">
          <nuxt-img
            placeholder
            src="https://storage.googleapis.com/brimble-assets/img/icons/twitter.svg"
          />
        </a>
        <a href="https://github.com/brimblehq" target="_blank">
          <nuxt-img
            placeholder
            src="https://storage.googleapis.com/brimble-assets/img/icons/github.svg"
          />
        </a>
      </div>
      <div>
        <a
          class="font-semibold text-lg text-primary self-end"
          href="https://docs.brimble.io/"
          target="_blank"
          >Docs</a
        >
      </div>

      <hr />
      <p class="text-lg text-secondary text-center">
        All Rights Reserved. © 2022 Brimble, Inc.
      </p>
    </div>
  </footer>
</template>
