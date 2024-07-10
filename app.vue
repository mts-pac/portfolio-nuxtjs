<template>
  <main class="flex flex-col">
    <section class="bg-green py-10">
      <div class="mx-auto 2xl:container">
        <ui-navbar :links />

        <div class="flex justify-between py-10">
          <div class="flex flex-col justify-center gap-4">
            <h1 class="whitespace-nowrap text-3xl">Olá, sou o Matheus Pacheco</h1>

            <h1 class="fs-lobster whitespace-nowrap text-6xl drop-shadow-md">
              Programando soluções <br />
              inteligentes!
            </h1>

            <h2 class="whitespace-nowrap text-2xl">Desenvolvedor Full Cycle Nuxt.js e Nest.js</h2>
          </div>

          <div>
            <nuxt-img
              class="rounded-[50px] drop-shadow-black"
              alt="Banner do portfólio. Jovem com headphone em frente ao computador"
              height="500px"
              src="/img/banner.jpeg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-black to-slate-900 text-slate-100">
      <div class="mx-auto 2xl:container">
        <ui-carousel hide-pagination>
          <vc-slide v-for="(item, i) in techs" :id="i" :key="i" class="mx-3 py-2">
            <h3 class="mb-0 text-nowrap">{{ item }}</h3>
          </vc-slide>
        </ui-carousel>
      </div>
    </section>

    <section id="about-me" class="bg-blue text-slate-200">
      <div class="mx-auto flex gap-3 py-10 2xl:container">
        <div class="w-1/3">
          <nuxt-img class="rounded-[50px] drop-shadow-md" src="/img/me.jpeg" width="400px">
          </nuxt-img>
        </div>

        <div class="my-auto w-2/4 justify-center">
          <h1 class="fs-lobster self-center text-5xl drop-shadow-md">
            Bem-vindo ao meu portifólio!
          </h1>

          <p class="mb-3 mt-5 text-justify">
            Sou desenvolvedor Full-Stack. Atualmente, resido em Curitiba e estou disponível para
            trabalhos remotos e presenciais. Sou formado em Bacharelado em Ciência da Computação
            pela Universidade Federal do Paraná (UFPR).
          </p>

          <p class="mb-3 text-justify">
            Apaixonado por desafios e soluções inovadoras. Com experiência de 4 anos em projetos
            amplos de administração universitária e da indústria de vidros, domínio em tecnologias
            como Nuxt.js, Vue.js, Nest,js, Java, Spring Boot e MySQL.
          </p>

          <p class="text-justify">
            Meu objetivo é contribuir como desenvolvedor Front-end e/ou Back-end, priorizando a
            qualidade e arquitetura de software. Estou sempre em busca de aprender e implementar
            soluções criativas e ficarei feliz em colaborar em seu próximo projeto.
          </p>

          <ui-button
            class="me-3 mt-5 min-w-[100px] duration-300 hover:scale-110"
            icon="fa-brands fa-whatsapp"
            icon-size="lg"
            icon-label
            title="WhatsApp"
            @click="onClickWhatsapp"
          />

          <ui-button
            class="duration-300 hover:scale-110"
            icon="fa-solid fa-envelope"
            icon-label
            icon-size="lg"
            variant="green"
            title="Email"
            @click="onClickEmail"
          />
        </div>
      </div>
    </section>

    <section id="skills" class="to-from-slate-100 bg-gradient-to-b from-slate-200 py-10">
      <div class="mx-auto flex flex-col gap-3 2xl:container">
        <h1 class="fs-lobster self-center text-5xl drop-shadow-md">Habilidades</h1>

        <div class="grid grid-cols-3 gap-4">
          <ui-card-skill v-for="({ title, paragraph }, i) in skills" :key="i" :title :paragraph />
        </div>
      </div>
    </section>

    <section id="graduate" class="bg-blue text-slate-200">
      <div class="mx-auto gap-3 py-10 2xl:container">
        <div class="flex justify-between">
          <div>
            <span class="flex items-center gap-2">
              <h1 class="fs-lobster !mb-0 self-center text-5xl drop-shadow-md">Formação</h1>
            </span>

            <span class="mb-2 block font-semibold">
              Desenvolvedor Nuxt.js (Vue.js) e Nest.js (Typescript)
            </span>

            <span class="flex items-center gap-2">
              <nuxt-img class="h-[20px] w-icon-svg-fixed px-1" src="/icon/nuxt.svg" />

              <font-awesome-icon icon="fa-brands fa-vuejs" size="lg" fixed-width />

              <nuxt-img class="h-[20px] w-icon-svg-fixed px-1" src="/icon/tailwind.svg" />

              <font-awesome-icon icon="fa-brands fa-bootstrap" size="lg" fixed-width />

              <nuxt-img class="h-[20px] w-icon-svg-fixed px-1" src="/icon/nestjs.svg" />

              <nuxt-img class="h-[20px] w-icon-svg-fixed px-1" src="/icon/spring-boot.svg" />

              <font-awesome-icon icon="fa-brands fa-golang" size="lg" fixed-width />

              <font-awesome-icon icon="fa-brands fa-node-js" size="xl" fixed-width />

              <font-awesome-icon icon="fa-brands fa-linux" size="lg" fixed-width />

              <font-awesome-icon icon="fa-brands fa-docker" size="lg" fixed-width />

              <font-awesome-icon icon="fa-brands fa-git" size="lg" fixed-width />
            </span>

            <hr class="my-2 w-[700px] border-t-2" />

            <div class="mt-4 w-[700px]">
              <ul>
                <li class="flex gap-2">
                  <font-awesome-icon class="mt-1" icon="fa-solid fa-minus" />
                  Bacharel em Ciência da Computação pela Universidade Federal do Paraná
                </li>

                <li class="flex gap-2">
                  <font-awesome-icon class="mt-1" icon="fa-solid fa-minus" /> 4 anos de experiência
                  em desenvolvimento web com Vue.js
                </li>

                <li class="flex gap-2">
                  <font-awesome-icon class="mt-1" icon="fa-solid fa-minus" /> 3 anos de experiência
                  em desenvolvimento web com Spring Boot
                </li>

                <li class="flex gap-2">
                  <font-awesome-icon class="mt-1" icon="fa-solid fa-minus" /> 1 ano de experiência
                  em desenvolvimento web com Nuxt.js
                </li>
              </ul>
            </div>

            <hr class="my-2 w-[700px] border-t-2" />

            <div class="mt-4 w-[700px]">
              <p class="mb-2 text-justify">
                Atualmente realizando o "<nuxt-link
                  class="underline-offset-3 underline duration-300 hover:font-semibold hover:text-green"
                  to="https://curso.fullcycle.com.br/curso-fullcycle/"
                  target="_blank"
                  >Curso Full Cycle 3.0</nuxt-link
                >" para sistemas de grande porte.
              </p>

              <p class="text-justify">
                Um desenvolvedor full cycle é um profissional que gerencia todas as etapas do
                desenvolvimento de software, desde a criação até a manutenção.
              </p>
            </div>

            <ui-button
              class="me-3 mt-5 min-w-[100px] duration-300 hover:scale-110"
              icon="fa-brands fa-linkedin"
              icon-size="lg"
              icon-label
              title="Linkedin"
              @click="onClickLinkedin"
            />

            <ui-button
              class="duration-300 hover:scale-110"
              icon="fa-solid fa-download"
              icon-label
              icon-size="lg"
              variant="green"
              title="Baixar CV"
              @click="onClickDownloadCV"
            />
          </div>

          <div>
            <nuxt-img
              class="rounded-[50px] drop-shadow-black"
              src="/img/me-graduate.jpg"
              height="500px"
              alt="Banner do portfólio. Jovem com headphone em frente ao computador"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="works" class="bg-gradient-to-b from-black to-slate-900 py-10">
      <div class="mx-auto flex flex-col gap-3 text-slate-100 2xl:container">
        <h1 class="fs-lobster text-5xl drop-shadow-md">Experiência</h1>

        <div class="grid grid-cols-3 gap-4">
          <ui-card-work-experience
            v-for="(
              { company, logo, initiation, title, techs: tchs, paragraph, ending }, i
            ) in works"
            :key="i"
            :company
            :ending
            :initiation
            :logo
            :paragraph
            :techs="tchs"
            :title
          />
        </div>
      </div>
    </section>

    <footer class="bg-slate-200">
      <div class="items-top mx-auto flex items-center gap-3 py-3 2xl:container">
        <div class="me-auto">
          <span class="me-auto block text-xs font-medium">
            <font-awesome-icon class="me-1" icon="fa-solid fa-envelope" />
            mts.pacheco.sts@gmail.com
          </span>

          <span class="me-auto text-xs font-medium">
            <font-awesome-icon class="me-1" icon="fa-solid fa-phone" />
            41 99192-7475
          </span>
        </div>

        <span class="fs-lobster me-auto text-3xl drop-shadow-md">MP</span>

        <span class="text-xs font-medium">&copy; 2024 - Matheus Pacheco</span>
      </div>
    </footer>
  </main>
</template>

<script lang="ts" setup>
const onClickWhatsapp = () => {
  window.open('https://wa.me/5541991927475', '_blank')
}

const onClickEmail = () => {
  window.open('mailto:mts.pacheco.sts@gmail.com', '_blank')
}

const onClickLinkedin = () => {
  window.open('https://www.linkedin.com/in/matheus-pacheco-a42845239', '_blank')
}

const onClickDownloadCV = () => {
  window.open('/curriculum.pdf', '_blank')
}

const links = [
  { name: 'SOBRE MIM', to: '#about-me' },
  { name: 'HABILIDADES', to: '#skills' },
  { name: 'FORMAÇÃO', to: '#graduate' },
  { name: 'EXPERIÊNCIA', to: '#works' }
]

const techs = [
  'Nuxt.js',
  'Vue.js',
  'Nest.js',
  'Next.js',
  'React.js',
  'Typescript',
  'TailwindCSS',
  'Sass',
  'UX Design',
  'Bootstrap',
  'Spring Boot',
  'Spring Security',
  'JPA',
  'Java EE',
  'JSP',
  'GO Lang',
  'MySQL',
  'SQL Server',
  'Postman',
  'Design Patterns',
  'Git',
  'Docker',
  'Linux',
  'AWS S3',
  'DDD',
  'SOLID',
  'Microserviços',
  'Clean Architecture',
  'REST API',
  'GraphQL',
  'Scrum',
  'Metodologias Ágeis',
  'Jira',
  'Rabit MQ',
  'Apache Kafka',
  'Keycloak'
]

const skills = [
  {
    title: 'Desenvolvimento Front-end',
    paragraph: [
      'Transformando designs em sites dinâmicos e responsivos com código limpo e padronizado com criatividade.',
      'Com experiência robusta em Nuxt.js, Vue.js, Typescript, SCSS. Trabalhando com tecnologias como Pinia, VueRouter, Vuetify, TailwindCSS e Bootstrap.'
    ]
  },
  {
    title: 'Desenvolvimento Back-end',
    paragraph: [
      'Criando soluções API Rest inteligentes com padrões de software e documentação de qualidade.',
      'Com experiência em Nest.js, GO, Spring Boot, Java, JPA, Hibernate, Spring Security, Postman, Swagger, AWS S3'
    ]
  },
  {
    title: 'Desenvolvimento de Banco de Dados',
    paragraph: [
      'Modelagem, criação e manutenção de banco de dados com boas práticas e eficiência.',
      'Com experiência em MySQL, JPA, Hibernate, SQL Server'
    ]
  }
]

const works = [
  {
    company: 'Sym',
    logo: '/img/logo-sym.webp',
    initiation: '10/2022',
    title: 'Desenvolvedor Pleno 2',
    techs: ['Nuxt.js', 'Vue.js', 'SQLServer', 'OpenVPN', 'Typescript'],
    paragraph: [
      'A empresa SYM é uma software house responsável por um sistema ERP exclusivo para a indústria de vidros. Além de outros projetos de software.',
      'Atuo na migração do sistema ERP de Intraweb/Delphi para Nuxt.js, mantendo a arquitetura baseada em procedimentos armazenados no SQL Server. Além da migração, trabalhei em projetos como Ecommerce e Totem de autoatendimento.'
    ]
  },
  {
    company: 'Grupo Astus',
    logo: '/img/logo-grupo-astus.png',
    initiation: '11/2021',
    ending: '09/2023',
    title: 'Desenvolvedor Full-Stack Spring Boot',
    techs: ['Vue.js', 'Spring Boot', 'MySQL', 'GIT', 'Jira', 'Postman'],
    paragraph: [
      'No Grupo Astus, participei do projeto de gerenciamento de universidades utilizando a metodologia Scrum.',
      'No front-end, utilizávamos Vue.js com Vuex, Axios, Vuelidate e Bootstrap. No back-end, empregávamos Spring Boot com JPA e Spring Security, e o banco de dados era MySQL.'
    ]
  },
  {
    company: 'Projeto Siga UFPR',
    logo: '/img/logo-siga.png',
    initiation: '01/2021',
    ending: '12/2021',
    title: 'Atendimento, Testes e Desenvolvimento',
    techs: ['Java EE', 'JSP', 'MySQL', 'MVC', 'Bootstrap', 'GIT', 'Vue.js'],
    paragraph: [
      'O projeto SIGA vinculado a UFPR é um sistema de gerenciamento acadêmico, dividido entre graduação e pós-graduação',
      'Direcionado a pós-graduação, eu trabalha no desenvolvimento em uma arquitetura MVC usando o JSP, Java EE, JavaScript e Bootstrap. Auxiliava também no suporte ao cliente.'
    ]
  }
]
</script>

<style lang="scss">
body,
html,
h1 {
  margin: 0 !important;
}
</style>
