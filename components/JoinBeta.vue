<template>
  <div
    @click="toggleSidebar"
    class="fixed inset-0 bg-black bg-opacity-40 transitiion-all duration-500"
    :class="sidebar ? 'bg-opacity-40 z-50':'bg-opacity-0 -z-10'"
  >
    <div
      @click.stop=""
      class="bg-white px-7 py-8 fixed md:h-auto inset-x-0 md:inset-x-auto md:inset-y-0 bottom-0 md:right-0 flex flex-col overflow-auto rounded-t-xl md:rounded-none z-50 transition-all duration-500"
      :class="sidebar ? 'md:w-[480px] h-[428px]' : 'md:w-0 h-0 md:opacity-0'"
    >
      <div class="hidden md:block">
        <img src="/img/join-beta.svg" />
      </div>

      <h1 class="mt-8 text-black font-medium text-2xl">
        Join our Beta Users to get to use brimble first hand.
      </h1>

      <form class="mt-7 space-y-5">
        <div class="space-y-2.5">
          <label class="flex gap-1.5 items-center" for=""
            ><svg
              class="w-4"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
              />
            </svg>
            <h1 class="font-medium text-sm">First Name</h1>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
          />
        </div>

        <div class="space-y-2.5">
          <label class="flex gap-1.5 items-center" for=""
            ><svg
              class="w-4"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
              />
            </svg>
            <h1 class="font-medium text-sm">Last Name</h1>
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
          />
        </div>

        <div class="space-y-2.5">
          <label class="flex gap-1.5 items-center" for=""
            ><svg
              class="w-4"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                  }
                </style>
              </defs>
              <title>email</title>
              <path
                d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"
                transform="translate(0)"
              />
              <rect
                id="_Transparent_Rectangle_"
                data-name="&lt;Transparent Rectangle&gt;"
                class="cls-1"
                width="32"
                height="32"
              />
            </svg>
            <h1 class="font-medium text-sm">Email Address</h1>
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
          />
        </div>
      </form>

      <button
        class="font-semibold w-full py-6 bg-primary text-white rounded-xl mt-8 md:mt-auto"
      >
        Join the Beta Users of Brimble!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
