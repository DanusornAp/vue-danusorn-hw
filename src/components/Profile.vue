<template>
  <div class="container mx-auto px-4 bg-gray-300">
    <div class="box-content h-30 w-30 p-4 border-4 border-blue-400">
      <div class="space-y-4">
        <p class="text-5xl">Profile</p>
        <img
          src="https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160093"
          alt=""
        />
        <span class="block text-4xl">{{ fullName }}</span>
        <span class="block text-2xl">{{ position }}</span>
        <span class="block text-3xl font-bold">Overview</span>
        <span class="block">{{ overview }}</span>
        <span class="block text-3xl font-bold">Education</span>
        <p class="font-bold">2018 - Present</p>
        <p>B.Sc. (Information Technology) - in progress</p>
        <p>Burapha University Faculty of Informatics</p>
        <p class="font-bold">2016 - 2018</p>
        <p>High School Certificate</p>
        <p>Sci - IT Benchamarachuthit Chanthaburi</p>
        <span class="block text-3xl font-bold">Skills</span>
        <ul class="list-inside list-disc">
          <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
        </ul>
        <span class="block text-3xl font-bold">Softwares</span>
        <ul class="list-inside list-disc">
          <li v-for="sw in softwares" :key="sw.id">{{ sw.name }}</li>
        </ul>
        <router-link :to="{ name: 'contact' }">
          <span class="block text-3xl font-bold mb-10 mt-10"
            >Click Hear For Contact.<img
              class="float-left mr-5"
              src="https://img.icons8.com/ios/50/000000/info--v1.png"
          /></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router/dist/vue-router.esm-bundler';
export default {
  data() {
    return {
      fullName: 'Danusorn Apaidusit',
      position: 'Developer',
      overview: `In the internship, I will use the programming skills I have learned for
      4 years to develop the work that comes out to be more quality. I hope
      this internship will improve my competence to continue working in this
      work.`,
      skills: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'Java' },
        { id: 4, name: 'CSS' },
        { id: 5, name: 'C#' },
      ],
      softwares: [
        { id: 1, name: 'Android Studio' },
        { id: 2, name: 'Visual Studio' },
        { id: 3, name: 'Adobe XD' },
        { id: 4, name: 'Unity' },
      ],
    };
  },
};
</script>
