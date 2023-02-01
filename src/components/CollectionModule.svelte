<script>
  
  const boxes = [
    {
      title1: "Offer Ends 9/27",
      title2: "Buy a Mac or iPad for",
      title3: "college. Get AirPods.",
      link: "Save with education pricing",
      imageSrc: "assets/images/bts-header-202109.png",
    },
    {
      imageSrc1:
        "assets/images/promo_logo_ipad_mini__n5nqff6gq8yu_large.png",
      title: "Mega power. Mini sized.",
      subtitle: "Available starting 9.8",
      imageSrc2:
        "assets/images/startframe__ct3tiehbomie_large-removebg-preview.png",
      learnMoreLink: "Learn more",
      orderLink: "Order",
    },
    {
      title: "iMac",
      subtitle: "Say Hello.",
      imageSrc: "assets/images/iMaac.png",
      learnMoreLink: "Learn more",
      orderLink: "Buy",
    },
    {
      imageSrc1: "assets/images/fitness.png",
      titleLine1: "Pilates, Group Workouts,",
      titleLine2: "and guided Meditation coming soon.",
      imageSrc2:
        "assets/images/tile_apple_fitness_plus__em4a8tdthw4m_large-removebg-preview.png",
      learnMoreLink: "Learn more",
      orderLink: "Try it free",
    },
    {
      imageSrc1: "assets/images/card.png",
      titleLine1: "Get up to 3% Daily Cash back",
      titleLine2: "with every purchase.",
      imageSrc2:
        "assets/images/tile__cauwwcyyn9hy_large-removebg-preview.png",
      learnMoreLink: "Learn more",
      orderLink: "Apply now",
    },
    {
      imageSrc:
        "assets/images/promo_foundation_s1__fih0re3y8zu6_large.jpg",
      imageSrc2:
        "assets/images/logo_light__cfvl40z2nzau_large.png",
      link: "Stream the first episode free",
      imageSrc3:
        "assets/images/logo_foundation_s1__fpga2losku6i_large.png",
    },
  ];
</script>

<main>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 px-auto text-center">
    <!-- ---------- Box-1 ---------- -->
    <div class="box-1 bg-applePinkLight pt-10">
      <p class="text-red-600 text-lg">{boxes[0].title1}</p>
      <h1 class="text-4xl font-semibold">{boxes[0].title2}</h1>
      <h1 class="text-4xl font-semibold">{boxes[0].title3}</h1>
      <!-- Link -->
      <div class="flex items-center justify-center buttons space-x-6 mt-2">
        <div class="flex items-center">
          <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
            >{boxes[0].link}</a
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
      <!-- Image -->
      <div class="flex items-center justify-center my-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[0].imageSrc} class="h-9/12 w-9/12" alt="image" />
      </div>
    </div>

    <!-- ---------- Box-2 ---------- -->
    <div class="box-2 bg-applebgBody">
      <!-- image -->
      <div class="flex items-center justify-center mt-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[1].imageSrc1} class="" alt="image" />
      </div>
      <!-- title -->
      <h2 class="text-xl mt-3">{boxes[1].title}</h2>
      <!-- subtitle -->
      <p class="text-sm mt-2 text-appleDarkgrey">{boxes[1].subtitle}</p>
      <!-- Links -->
      <div class="flex items-center justify-center buttons space-x-6 mt-2">
        <div class="flex items-center">
          <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
            >{boxes[1].learnMoreLink}</a
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
            >{boxes[1].orderLink}</a
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
      <!-- Image -->
      <div class="flex items-center justify-center pt-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[1].imageSrc2} class="h-full w-full" alt="image" />
      </div>
    </div>

    <!-- ---------- Box-3 ---------- -->
    <div class="box-3 bg-applebgBody pt-10">
      <!-- title -->
      <h2 class="text-5xl font-semibold mt-3">{boxes[2].title}</h2>
      <!-- subtitle -->
      <p class="text-xl mt-2">{boxes[2].subtitle}</p>
      <!-- Links -->
      <div class="flex items-center justify-center buttons space-x-6 mt-2">
        <div class="flex items-center">
          <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
            >{boxes[2].learnMoreLink}</a
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
            >{boxes[2].orderLink}</a
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
      <!-- Image -->
      <div class="flex items-center justify-center mt-16 pb-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[2].imageSrc} class="w-3/4" alt="image" />
      </div>
    </div>

    <!-- ---------- Box-4 ---------- -->
    <div class="box-4 bg-appleGreyFitneesSection">
      <!-- image -->
      <div class="flex items-center justify-center mt-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[3].imageSrc1} class="" alt="image" />
      </div>
      <!-- title -->
      <h2 class="text-xl mt-3">{boxes[3].titleLine1}</h2>
      <h2 class="text-base md:text-xl">{boxes[3].titleLine2}</h2>
      <!-- Links -->
      <div class="flex items-center justify-center buttons space-x-6 mt-2">
        <div class="flex items-center">
          <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
            >{boxes[3].learnMoreLink}</a
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
            >{boxes[3].orderLink}</a
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
      <!-- Image -->
      <div class="flex items-center justify-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[3].imageSrc2} class="h-full w-full" alt="image" />
      </div>
    </div>

    <!-- ---------- Box-5 ---------- -->
    <div class="box-5 bg-applebgBody">
      <!-- image -->
      <div class="flex items-center justify-center mt-10">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[4].imageSrc1} class="" alt="image" />
      </div>
      <!-- title -->
      <h2 class="text-xl mt-3">{boxes[4].titleLine1}</h2>
      <h2 class="text-xl">{boxes[4].titleLine2}</h2>
      <!-- Links -->
      <div class="flex items-center justify-center buttons space-x-6 mt-2">
        <div class="flex items-center">
          <a href="http://" class="text-appleDarkBlue text-lg hover:underline"
            >{boxes[4].learnMoreLink}</a
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
            >{boxes[4].orderLink}</a
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
      <!-- Image -->
      <div class="flex items-center justify-center">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={boxes[4].imageSrc2} class="h-3/5 w-3/5 pt-6" alt="image" />
      </div>
    </div>

    <!-- ---------- Box-6 ---------- -->
    <div class="box-6 h-96 md:h-auto">
      <!-- Image -->
      <div
        class="flex items-center justify-center h-full relative top-0 left-0"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={boxes[5].imageSrc}
          class="h-full w-full object-cover relative top-0 left-0"
          alt="image"
        />
        <!-- image-2 -->

        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={boxes[5].imageSrc2}
          class="absolute top-8 lg:top-12"
          alt="image"
        />

        <!-- Link -->
        <div
          class="flex items-center justify-center buttons space-x-6 mt-2 absolute bottom-6"
        >
          <div class="flex items-center">
            <div class="h-8">
              <a
                href="http://"
                class="text-appleDarkBlue text-lg hover:underline"
                >{boxes[5].link}</a
              >
            </div>
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
        <!-- End Link -->

        <!-- Start image-3 -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={boxes[5].imageSrc3}
          class="absolute bottom-20 md:bottom-20 lg:bottom-28 w-64 lg:w-3/6"
          alt="image"
        />
        <!-- End image-3 -->
      </div>
    </div>
  </div>
</main>
