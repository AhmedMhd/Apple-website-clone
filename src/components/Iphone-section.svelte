<script>
  import simpleParallax from "simple-parallax-js";

  export let title;
  export let subTitle;
  export let available;
  export let learnMoreLink;
  export let preOrderLink;
  export let imageSction;
  export let bgColor;
  export let marginTopSection;
  export let paddingTopSection;
  export let marginTopIphone13;
  export let iphone13SectionSize;
  export let textApplebgBodyColor;
  export let textApplePink;
  export let marginTopImage;
</script>

<main>
  <div
    class={`text-center ${marginTopSection} ${paddingTopSection} ${marginTopIphone13} ${
      title === "iPhone 13" ? bgColor : bgColor
    }`}
  >
    <h1 class={`text-3xl md:text-5xl font-bold ${textApplebgBodyColor} `}>
      {title}
    </h1>
    <p class={`text-xl md:text-3xl mt-2 ${textApplePink}`}>{subTitle}</p>
    <p class="text-xl text-gray-400 mt-2">{available}</p>

    <!-- Buttons -->
    <div class="flex items-center justify-center buttons space-x-6 mt-2">
      <div class="flex items-center">
        <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
          >{learnMoreLink}</a
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
      <div class="flex items-center">
        <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
          >{preOrderLink}</a
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

    <!-- image sm & md-->
    <!-- <div class="lg:hidden">
      <img src={srcSmMd} class="" alt="image" />
    </div> -->

    <!-- image Lg & XL-->
    <div class={`flex items-center justify-center ${marginTopImage} `}>
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={imageSction}
        class={title === "iPhone 13"
          ? iphone13SectionSize
          : "h-42 w-60 md:h-2/6 md:w-2/6"}
        alt="image"
      />
    </div>
  </div>
</main>

<!-- class={` `} -->
