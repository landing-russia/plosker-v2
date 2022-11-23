<script>
  import { onMount } from "svelte"
  import { DarkMode, Drawer, Button, CloseButton } from "flowbite-svelte"
  import { Icon, Menu } from "svelte-hero-icons"
  import Pattern from "$lib/components/Pattern.svelte"
  import Pattern2 from "$lib/components/Pattern-2.svelte"
  import Logo from "$lib/components/Logo.svelte"

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-2"

  let resume = false

  let url = ""

  onMount(() => {
    url = window.location.href
    if (
      url === "https://www.plosker-groupe.ru/" ||
      url === "http://localhost:5173/"
    ) {
      window.scrollTo(0, 0)
    }
  })
</script>

<svelte:head>
  <title>ПЛОСКЕР ГРУПП - Юридическая компания</title>
  <meta
    name="description"
    content="Налоговая практика для юридических лиц и индивидуальных предпринимателей"
  />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>

<div
  id="home"
  class="bg-slate-100 dark:bg-slate-900 grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen"
>
  <div class="container-fluid overflow-hidden">
    <div class="h-16 mt-4 lg:mt-6 flex items-start justify-between">
      <Logo />
      <div class="flex items-center space-x-5">
        <DarkMode {btnClass} />
        <a
          href="#contact-info"
          aria-label="Контактная информация"
          class="hidden sm:block text-right"
        >
          <div
            class="flex items-center justify-end text-base 2xl:text-xl font-bold text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg><span
              ><span class="font-semibold text-slate-300">+7&nbsp;978</span
              >&nbsp;946-12-29</span
            >
          </div>
          <div class="text-sm 2xl:text-lg leading-4 2xl:leading-5 text-white">
            г.&nbsp;Евпатория, пр-т&nbsp;Победы,&nbsp;37, оф.&nbsp;2
          </div>
        </a>
        <button
          class="sm:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-2"
          ><Icon
            src={Menu}
            class="text-gray-500 dark:text-gray-400"
            solid
            size="22"
          /></button
        >
      </div>
    </div>
    <div
      class="relative lg:min-h-full pt-10 pb-14 lg:pt-0 lg:pb-32 flex items-center"
    >
      <Pattern />
      <Pattern2 />
      <div class="relative z-10">
        <h1
          class="text-3xl xs:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-7.5xl font-bold text-white"
        >
          Специализация&nbsp;— <span class="text-slate-300"
            >налоговое&nbsp;право</span
          >
        </h1>
        <p
          class="text-slate-300 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal my-6 max-w-4xl"
        >
          Налоговая практика для юридических лиц и&nbsp;индивидуальных
          предпринимателей
        </p>
        <div class="mt-10 lg:mt-12 2xl:mt-14">
          <a
            href="#leto"
            class="bg-sky-700 text-base lg:text-lg xl:text-xl text-white text-center hover:bg-sky-900 mt-8 block py-5 px-6 border border-transparent rounded-md font-medium transition duration-200"
            >Внимание акция! <br />
            <span
              class="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-serif font-bold"
              >Летний тариф для&nbsp;ИП на&nbsp;патенте</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative grid min-h-144 lg:min-h-full pb-4 bg-[url('/women-mono.webp')] bg-cover bg-center overflow-hidden"
  >
    {#if resume}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (resume = false)}
        class="absolute inset-0 backdrop-blur-sm bg-slate-900/75 z-10"
      />
      <button
        aria-label="Закрыть"
        class="absolute right-6 top-6 backdrop-blur bg-slate-500/30 hover:bg-slate-600/40 border border-slate-500 px-3 py-1 text-slate-100 rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-800 transition-all duration-200 z-20"
        type="button"
        on:click={() => (resume = false)}>Закрыть</button
      >
      <div
        class="relative container-fluid max-w-xl 2xl:max-w-3xl self-center mb-8 mt-16 text-white space-y-3 z-20"
      >
        <div class="flex items-center">
          <img
            class="h-16 w-16 lg:h-20 lg:w-20 2xl:h-24 2xl:w-24 border-2 border-slate-300 mr-3 inline-block rounded-full shadow-lg"
            src="women-avatar-mono.webp"
            alt="women-avatar"
          />
          <div>
            <p class="font-serif font-bold text-xl 2xl:text-3xl italic">
              Татьяна Плоскер
            </p>
            <p class="font-serif font-semibold text-sm 2xl:text-xl italic">
              руководитель налоговой практики
            </p>
          </div>
        </div>
        <div class="h-2" />
        <p class="text-base 2xl:text-2xl">
          <span class="font-bold">2008</span> <br />
          Российский экономический университет им.&nbsp;Г.В.&nbsp;Плеханова
          <br /> Специальность: Бухгалтерский учёт и&nbsp;налогообложение
        </p>

        <p class="text-base 2xl:text-2xl">
          <span class="font-bold">2016</span> <br />
          Московский государственный юридический университет им.&nbsp;О.Е.&nbsp;Кутафина
          (МГЮА) г.&nbsp;Москва<br />
          Специальность: Юриспруденция
        </p>

        <p class="pt-2 italic font-serif text-base 2xl:text-2xl">
          «Специализируюсь в&nbsp;области налогового права, бухгалтерского учёта
          и&nbsp;более 11&nbsp;лет оказываю правовую поддержку клиентам при
          возникновении споров с&nbsp;налоговыми органами. Принимаю участие
          в&nbsp;крупных консультационных проектах для российских организаций
          в&nbsp;различных отраслях бизнеса.»
        </p>
      </div>
    {:else}
      <div class="h-144 lg:h-full flex items-end justify-center">
        <button
          aria-label="Подробнее"
          on:click={() => (resume = !resume)}
          type="button"
          class="backdrop-blur-sm bg-slate-800/50 hover:bg-slate-900/60 text-center font-serif italic px-8 py-3 border border-slate-500 rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-800 transition-all duration-200"
        >
          <p class="text-white text-2xl font-bold">Татьяна Плоскер</p>
          <p class="text-white">
            <span class="border-b border-slate-200">подробнее</span>
          </p>
        </button>
      </div>
    {/if}
  </div>
</div>
