<template>
  <div>
      <div v-if="cartCount > 0" class="flex justify-center w-full md:w-4/6 mx-auto p-4 md:px-10">
        <div class="shadow-md bg-white p-4 md:p-10">
        <h1 class="text-2xl pb-6 font-base">Your cart</h1>
            <hr class="text-gray pb-4">
            <div class="flex md:gap-20 gap-4 justify-between space-x-10 flex-col md:flex-row py-6" v-for="item in cart" :key="item.id">
                    <div class="flex space-x-6">
                        <img :src="item.image" :alt="item.name" class="inline w-auto h-24 md:h-32">
                        <div class="mt-4">
                            <h1 class="flex-auto text-base w-40 font-base">
                                {{item.title}}
                            </h1>
                            <div class="flex space-x-2 md:space-x-4 items-center py-4">
                                <div class="rounded-full cursor-pointer bg-gray text-center text-green flex items-center justify-center text-lg font-semibold h-8 w-8" @click="removeOneFromCart(item)">-</div>
                                <p>{{ item.quantity }}</p>
                                <div class="rounded-full cursor-pointer bg-gray text-center flex items-center justify-center text-green text-lg font-semibold h-8 w-8" @click="addToCart(item)">+</div>
                            </div>
                        </div>
                    </div>
                <div class="mt-0 md:mt-4 flex md:items-end items-center md:gap-3 gap-6 md:flex-col flex-row">
                    <div class="text-base font-semibold text-left md:text-right">Price: <span>{{item.price | dollar}}</span></div>
                    <div class="text-base font-semibold text-left py-4 md:text-right">Total: <span>{{ (item.quantity * item.price) | dollar }}</span></div>
                    <div class="cursor-pointer text-right" @click="removeAllFromCart(item)">
                        <img src="../assets/delete.svg" class="inline w-auto h-6" alt="">
                    </div>
                </div>
        </div>
        <hr class="text-gray mt-8">
            <div class="flex my-4 justify-between">
                <p class="font-bold text-base">Subtotal</p>
                <p class="font-bold">{{ cartTotal | dollar }}</p>
            </div>
            <hr class="text-gray">
            <div class="flex my-4 justify-between">
                <p class="font-bold text-base">Total</p>
                <p class="font-bold">{{ cartTotal | dollar }}</p>
            </div>
            <div class="text-center py-4">
              <paystack
                  :amount="parseInt(cartTotal * 100)"
                  :email="email"
                  :paystackkey="paystackkey"
                  :reference="reference"
                  :callback="callback"
                  :close="close"
                  :embed="false"
                >
                <button type="button" class="btn bg-green text-white rounded-sm focus:outline-none focus:ring focus:border-green mt-3 font-base px-10 py-2">Checkout <svg class="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z" fill="white"/>
                    </svg>
                </button>
            </paystack>
            </div>
        </div>
    </div>
    <section v-else class="text-center">
      <p class="text-xl pt-8 pb-4">Your cart is empty, fill it up!</p>
        <nuxt-link to="/" class="text-green">Back Home</nuxt-link>
      <button>
      </button>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import paystack from 'vue-paystack/src';
export default {
  components: {
    paystack 
  },
  data() {
    return {
      paystackkey: "pk_test_854622312183f13097c4d6bc1cfbdfa3990ebf95",
      email: "johndoe@gmail.com",
    }
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"]),
    reference(){
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( let i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addOneToCart", item);
    },
    removeOneFromCart(item) {
      this.$store.commit("removeOneFromCart", item);
    },
    removeAllFromCart(item) {
      this.$store.commit("removeAllFromCart", item);
    },
    callback: function(response){
        console.log(response)
    },
      close: function(){
          console.log("Payment closed")
      }
  }
};
</script>

<style scoped>
</style>