<script>
  import { DarkMode, Drawer, Button, CloseButton } from "flowbite-svelte"
  import { Icon, Menu } from "svelte-hero-icons"
  import { navItems } from "$lib/config"

  import { sineIn } from "svelte/easing"
  let hidden1 = true
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-2"
</script>

<header
  class="pl-1 pr-4 pt-4 pb-3 bg-white dark:bg-gray-800 border-b border-transparent dark:border-gray-800 flex items-end justify-between shadow dark:shadow-lg"
>
  <a
    href="/"
    class="text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-1.5 leading-none rounded-xl text-2xl font-extrabold font-serif"
    >Конспект</a
  >
  <nav class="flex items-center space-x-4">
    <DarkMode {btnClass} />
    <ul class="hidden lg:flex items-center space-x-4">
      {#each navItems as page}
        <li>
          <a
            href={page.route}
            class="text-gray-700 dark:text-gray-200 font-semibold px-3 py-2 leading-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl"
            >{page.title}</a
          >
        </li>
      {/each}
    </ul>
    <button
      class="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full p-2"
      on:click={() => (hidden1 = false)}
      ><Icon
        src={Menu}
        class="text-gray-500 dark:text-gray-400"
        solid
        size="22"
      /></button
    >
  </nav>
</header>
<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >Info
    </h5>
    <CloseButton
      on:click={() => (hidden1 = true)}
      class="mb-4 text-gray-500 dark:text-gray-400"
    />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline"
      >limited-time sale</a
    > for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
    and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/"
      >Get access <svg
        class="w-4 h-4 ml-1"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      ></Button
    >
  </div>
</Drawer>
