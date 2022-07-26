<template>
  <div
    @click="toggleSidebar"
    class="fixed inset-0 bg-black bg-opacity-40 transitiion-all duration-500"
    :class="sidebar ? 'bg-opacity-40 z-50' : 'bg-opacity-0 -z-10'"
  >
    <div
      @click.stop=""
      class="bg-white px-7 py-8 fixed md:h-auto inset-x-0 md:inset-x-auto md:inset-y-0 bottom-0 md:right-0 overflow-auto rounded-t-xl md:rounded-none z-50 transition-all duration-500"
      :class="sidebar ? 'md:w-[480px] h-[428px]' : 'md:w-0 h-0 md:opacity-0'"
    >
      <div v-if="!completedForm">
        <div class="hidden md:block">
          <img src="/img/join-beta.svg" />
        </div>

        <h1 class="mt-8 text-black font-medium text-2xl">
          Join our Beta Users to get to use brimble first hand.
        </h1>

        <ValidationObserver v-slot="{ invalid }" ref="form">
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

              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
                  v-model="first_name"
                />
                <span class="text-xs text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
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
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  type="text"
                  placeholder="Enter your last name"
                  class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
                  v-model="last_name"
                />
                <span class="text-xs text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="space-y-2.5">
              <label class="flex gap-1.5 items-center" for=""
                ><svg
                  class="w-4"
                  width="30.03px"
                  height="30.03px"
                  viewBox="0 -4.2 30.03 30.03"
                  id="_15_-_Email"
                  data-name="15 - Email"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Path_243"
                    data-name="Path 243"
                    d="M31.015,8.189a3,3,0,0,0-3-3H3.985a3,3,0,0,0-3,3V23.811a3,3,0,0,0,3,3h24.03a3,3,0,0,0,3-3V8.189Zm-2,0V23.811a1,1,0,0,1-1,1H3.985a1,1,0,0,1-1-1V8.189a1,1,0,0,1,1-1h24.03a1,1,0,0,1,1,1Z"
                    transform="translate(-0.985 -5.189)"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Path_244"
                    data-name="Path 244"
                    d="M2.9,8.465l12.613,7.008a1.006,1.006,0,0,0,.972,0L29.1,8.465a1,1,0,1,0-.971-1.748L16,13.455,3.872,6.717A1,1,0,1,0,2.9,8.465Z"
                    transform="translate(-0.985 -5.189)"
                    fill-rule="evenodd"
                  />
                </svg>
                <h1 class="font-medium text-sm">Email Address</h1>
              </label>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  type="email"
                  placeholder="Enter email address"
                  class="py-5 px-4 bg-[#F1F5F9] rounded-xl w-full"
                  v-model="email"
                /><span class="text-xs text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </form>

          <button
            @click="joinBeta"
            :disabled="loading || invalid"
            class="font-semibold w-full py-6 bg-primary text-white rounded-xl mt-12 flex gap-3 items-center justify-center"
            :class="{ 'bg-opacity-50': loading || invalid }"
          >
            Join the Beta Users of Brimble!
            <div v-if="loading" class="loader"></div>
          </button>
        </ValidationObserver>
      </div>

      <div v-else>
        <div>
          <img class="mx-auto" src="/img/successful.svg" />
        </div>

        <h1 class="mt-10 text-lg text-secondary text-center">
          Hurray!. You've successfully joined Brimble beta testing. an email
          with the link would be sent to you.
        </h1>

        <button
          class="font-semibold w-full py-6 bg-primary text-white rounded-xl mt-12"
        >
          <a
            href="https://twitter.com/intent/tweet?text=Joined%20Brimble%20waitlist%2C%20deploy%20your%20frontend%20application%20within%20seconds%20with%20brimble.%20https%3A%2F%2Fbrimble.io"
            target="_blank"
          >
            Tell your friends about Brimble</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      loading: false,
      completedForm: false,
      API_URL: process.env.NUXT_ENV_API_URL,
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
      this.completedForm = false;
    },
    async joinBeta() {
      this.loading = true;
      try {
        await this.$axios.$post(`${this.API_URL}/auth/waitlists`, {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
        });

        this.completedForm = true;
        this.$refs.form.reset();
        this.first_name = "";
        this.last_name = "";
        this.email = "";
      } catch (error) {
        const { response } = error;
        if (response) {
          if (response.status === 500) {
            this.$toast.error("Could not add user to waitlist");
          } else {
            this.$toast.error(response.data.message);
          }
        } else {
          this.$toast.error(
            "Couldn't connect to server; make sure you are connected to the internet"
          );
        }
      } finally {
        this.loading = false;
      }
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
.loader {
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid rgb(223, 223, 223);
  width: 16px;
  height: 16px;
  animation: spin 0.5s linear infinite;
}
</style>
