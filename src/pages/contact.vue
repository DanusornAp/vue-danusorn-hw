<template>
  <div class="container mx-auto px-4 m-5 bg-gray-300">
    <div class="box-content h-30 w-30 p-4 border-4 border-blue-400">
      <div class="space-y-4">
        <p class="text-5xl mb-10">Contact</p>
        <ul>
          <li>
            <span class="block text-3xl mb-10"
              >091-5837292<img
                class="float-left mr-5"
                src="https://img.icons8.com/external-sbts2018-blue-sbts2018/50/000000/external-contact-social-media-basic-1-sbts2018-blue-sbts2018.png"
            /></span>
          </li>
          <li>
            <span class="block text-3xl mb-10">
              Est Danusorn<img
                class="float-left mr-5"
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
              />
            </span>
          </li>
          <li>
            <span class="block text-3xl mb-10"
              >aiis000za@gmail.com<img
                class="float-left mr-5"
                src="https://img.icons8.com/color/50/000000/gmail-new.png"
              />
            </span>
          </li>
          <li>
            <span class="block text-3xl mb-10"
              >https://github.com/DanusornAp<img
                class="float-left mr-5"
                src="https://img.icons8.com/fluency/48/000000/github.png"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router/dist/vue-router.esm-bundler';
export default {
  name: 'Contact',
  setup() {
    const route = useRoute();
  },
};
</script>
