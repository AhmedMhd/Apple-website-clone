<script>
  const appleWatchContentSection = {
    imageSrc1: "assets/images/watch_logo_lte__sd64ksudvayy_large.png",
    title: "Full screen ahead",
    subTitle: "Available later this fall",
    learnMoreLink: "Learn More",
    imageSrc2:
      "assets/images/Apple_watch-series7_hero_09142021_big.jpg.large-removebg-preview.png",
  };
</script>

<main>
  <div class="text-center mt-12">
    <div class="flex items-center justify-center">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={appleWatchContentSection.imageSrc1} alt="image" />
    </div>

    <h2 class="text-xl md:text-3xl mt-2">{appleWatchContentSection.title}</h2>
    <p class="text-xl text-gray-400 mt-2">
      {appleWatchContentSection.subTitle}
    </p>

    <div class="flex items-center justify-center buttons space-x-6 mt-2">
      <div class="flex items-center">
        <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
          >{appleWatchContentSection.learnMoreLink}</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-appleDarkBlue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={appleWatchContentSection.imageSrc2}
        class="h-42 w-64 md:h-2/5 md:w-2/5"
        alt="image"
      />
    </div>
  </div>
</main>
