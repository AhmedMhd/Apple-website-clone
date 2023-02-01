<script>
  import { fade, blur, fly } from "svelte/transition";

  // @ts-nocheck

  const navbarLinks = {
    link1: "Store",
    link2: "Mac",
    link3: "iPad",
    link4: "iPhone",
    link5: "Watch",
    link6: "TV",
    link7: "Music",
    link8: "Support",
  };

  let isFullScreen = "";
</script>

<main transition:blur>
  <header class="py-5 {isFullScreen}">
    <!-- nav -->
    <!-- mobile -->
    <nav
      class="bg-appleColor px-3 md:px-24 lg:px-72 py-1.5 fixed left-0 right-0 top-0 z-50 transition duration-300"
    >
      <ul
        class="nav-list nav-list-mobile flex md:flex-none items-center justify-between md:hidden"
      >
        <li class="nav-item">
          <!-- Mobile menu -->
          <div
            class="mobile-menu relative z-50 w-full h-full flex flex-col items-center justify-center cursor-pointer  {isFullScreen ===
            'm-h-screen bg-black md:bg-transparent	'
              ? 'hidden'
              : 'block'}"
            on:click={() =>
              (isFullScreen =
                isFullScreen === "h-screen bg-black"
                  ? ""
                  : "h-screen bg-black")}
          >
            <span
              class="line line-top {isFullScreen === 'h-screen bg-black'
                ? 'hidden'
                : 'block'}"
            />
            <span
              class="line line-bottom {isFullScreen === 'h-screen bg-black'
                ? 'hidden'
                : 'block'}"
            />
          </div>

          <!-- x-icon -->
          <div
            class="x-ixon cursor-pointer {isFullScreen === ''
              ? 'hidden'
              : 'block'}"
            transition:fade
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-applebgBody -ml-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </li>
        <!-- icons-left -->
        <li class="nav-item">
          <a href="http:\\" class="nav-link nav-link-apple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-8 w-21 text-appleNavColor hover:text-white"
              ><g data-name="Brand Logos"
                ><path
                  fill="#d6d6d6"
                  d="M17.59413,12.62537a4.523,4.523,0,0,1,2.16138-3.80548,4.67188,4.67188,0,0,0-3.658-1.98383c-1.55768-.1579-3.03937.91693-3.82861.91693-.78974,0-2.009-.89374-3.30084-.86908A4.89591,4.89591,0,0,0,4.82973,9.39056c-1.76239,3.06018-.44989,7.59369,1.26764,10.07673.84045,1.21392,1.84228,2.58117,3.15777,2.53137,1.26771-.04981,1.74616-.81879,3.27674-.81879,1.531,0,1.96161.81879,3.30078.79407,1.36291-.02515,2.228-1.23895,3.06165-2.4574a10.94625,10.94625,0,0,0,1.38409-2.84448A4.42049,4.42049,0,0,1,17.59413,12.62537Z"
                /><path
                  fill="#d6d6d6"
                  d="M15.21588,5.04a5.56073,5.56073,0,0,0,1.32-4.04,5.67156,5.67156,0,0,0-3.73,1.92l-.02033.04688a5.56073,5.56073,0,0,0-1.32,4.04,5.67156,5.67156,0,0,0,3.73-1.92Z"
                /></g
              ></svg
            >
          </a>
        </li>
        <li class={`nav-item `}>
          <a
            href="http:\\"
            class="nav-link nav-link-bag {isFullScreen === 'h-screen bg-black'
              ? 'hidden'
              : 'block'}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-appleNavColor hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <!-- / .nav-list nav-list-mobile -->

      <!-- Search box -->
      <input
        type="text"
        placeholder="Search apple.com"
        class="mt-5 md:hidden bg-searchBoxColor placeholder-white text-white opacity-25 border-0 outline-none rounded-md p-2 w-full {isFullScreen ===
        'h-screen bg-black'
          ? 'block'
          : 'hidden'}"
      />

      <!-- line -->
      <hr
        class="text-appleDarkgrey mt-5 md:hidden border-opacity-30 {isFullScreen ===
        'h-screen bg-black'
          ? 'block'
          : 'hidden'}"
      />

      <!-- nav-list-large -->
      <ul
        class="nav-list nav-list-larger flex-none md:flex items-center justify-start md:justify-between text-left mx-6 md:ml-0 md:visible pt-4 md:pt-0 lg:mt-0 z-50 {isFullScreen ===
        'h-screen bg-black'
          ? 'block'
          : 'hidden'}"
      >
        <li class="nav-item-hidden hidden md:block">
          <a href="http:\\" class="nav-link nav-link-apple">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 w-6 text-appleNavColor hover:text-white"
              viewBox="0 0 18 48"
              ><path
                d="M13.03 16.03C11.29 15.91 9.82 17 9 17c-.83 0-2.12-.94-3.48-.92-1.79.03-3.44 1.04-4.36 2.64C-.7 21.95.69 26.73 2.5 29.35c.89 1.28 1.94 2.72 3.33 2.67 1.34-.05 1.84-.86 3.46-.86 1.61 0 2.07.86 3.48.84 1.44-.03 2.35-1.31 3.23-2.59 1.02-1.48 1.44-2.92 1.46-3-.03-.01-2.8-1.07-2.83-4.27-.03-2.67 2.18-3.95 2.28-4.01-1.27-1.84-3.2-2.05-3.88-2.1m-1.07-1.72c.74-.89 1.23-2.13 1.1-3.37-1.06.04-2.34.71-3.11 1.6-.68.79-1.28 2.05-1.12 3.26 1.19.09 2.39-.6 3.13-1.49"
                fill="#fffffe"
              /></svg
            > -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-8 w-21 text-appleNavColor hover:text-white"
              ><g data-name="Brand Logos"
                ><path
                  fill="#d6d6d6"
                  d="M17.59413,12.62537a4.523,4.523,0,0,1,2.16138-3.80548,4.67188,4.67188,0,0,0-3.658-1.98383c-1.55768-.1579-3.03937.91693-3.82861.91693-.78974,0-2.009-.89374-3.30084-.86908A4.89591,4.89591,0,0,0,4.82973,9.39056c-1.76239,3.06018-.44989,7.59369,1.26764,10.07673.84045,1.21392,1.84228,2.58117,3.15777,2.53137,1.26771-.04981,1.74616-.81879,3.27674-.81879,1.531,0,1.96161.81879,3.30078.79407,1.36291-.02515,2.228-1.23895,3.06165-2.4574a10.94625,10.94625,0,0,0,1.38409-2.84448A4.42049,4.42049,0,0,1,17.59413,12.62537Z"
                /><path
                  fill="#d6d6d6"
                  d="M15.21588,5.04a5.56073,5.56073,0,0,0,1.32-4.04,5.67156,5.67156,0,0,0-3.73,1.92l-.02033.04688a5.56073,5.56073,0,0,0-1.32,4.04,5.67156,5.67156,0,0,0,3.73-1.92Z"
                /></g
              ></svg
            >
          </a>
        </li>

        <!-- Links -->
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm  text-appleNavColor hover:text-white "
            >{navbarLinks.link1}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link2}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link3}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link4}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link5}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link6}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link7}</a
          >
        </li>
        <!-- line -->
        <hr class="text-appleDarkgrey pb-2 mt-2 md:hidden border-opacity-30" />
        <li class="pb-72 md:pb-0">
          <a
            href="http:\\"
            class="nav-link text-base md:text-sm text-appleNavColor hover:text-white"
            >{navbarLinks.link8}</a
          >
        </li>

        <!-- search -->
        <li class="hidden md:block">
          <!-- svelte-ignore a11y-missing-content -->
          <a href="http:\\" class="nav-link nav-link-search ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-appleNavColor hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </li>
        <!-- bag -->
        <li class="nav-link nav-link-bag hidden md:block">
          <a href="http:\\">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-appleNavColor hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <!-- / .nav-list nav-list-larger -->
    </nav>
  </header>
</main>

<style>
  /* Mobile menu */
  @media screen and (max-width: 767px) {
    .nav-item {
      width: 2.2rem;
      height: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mobile-menu {
      position: relative;
      z-index: 1000;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .line {
      position: absolute;
      width: 1.1rem;
      height: 1px;
      background-color: #fff;
      transition: margin-top 0.3192s cubic-bezier(0.04, 0.04, 0.012, 0.96);
    }

    .line-top {
      margin-top: 6px;
    }

    .line-bottom {
      margin-top: -0.4rem;
    }
  }
</style>
