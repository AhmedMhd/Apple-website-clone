<script>
  import { fade, blur, fly } from "svelte/transition";

  const classP = "text-appleDarkgrey text-left text-xs leading-5 mt-3";

  // let visible = true;

  const firstSection = {
    text1: `1. Qualified Purchasers receive Promotion Savings when they purchase an
      eligible Mac or eligible iPad with eligible AirPods at a Qualifying
      Location. Only one Promotion Product per eligible Mac or eligible iPad per
      Qualified Purchaser. Offer subject to availability. While supplies last.
      Qualified Purchasers selecting Apple Card Monthly Installments (“ACMI”) as
      payment type at checkout shall receive a discount equal to the value of
      the eligible AirPods off the price of the eligible Mac or iPad. This will
      result in one ACMI installment plan over 12 months for the eligible iPad
      or Mac discounted by the instant credit, and a second ACMI installment
      plan over 6 months for the full price of the eligible AirPods. Qualified
      Purchasers will be charged for all items in their cart, including the
      eligible AirPods plus any additional Upgrade Cost. If you choose the
      pay-in-full or one-time-payment option for an ACMI eligible purchase
      instead of choosing ACMI as the payment option at checkout, that purchase
      will be subject to the variable APR assigned to your Apple Card. Taxes and
      shipping are not included in ACMI transactions and are subject to your
      standard purchase APR. ACMI is subject to credit approval and credit
      limit. Variable APRs for Apple Card other than ACMI range from 10.99% to
      21.99% based on creditworthiness. Rates as of April 1, 2020. See the Apple
      Card Customer Agreement for more information. Apple Card is issued by
      Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying
      applicants in the United States. If you reside in the U.S. territories,
      please call Goldman Sachs at 877-255-5923 with questions about accessing
      this offer or applying for Apple Card. This offer cannot be combined with
      the Apple Employee Purchase Plan or business loyalty pricing. Availability
      of in-store promotion offerings may be limited by Apple Store location
      closures as a result of COVID-19. Additional restrictions apply. View full
      terms and conditions of offer here.`,
    text2: `2. $9.99/month after free trial. No commitment. Plan automatically renews
      after trial until cancelled.`,
    text3: `To access and use all the features of Apple Card, you must add Apple Card
      to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.
      Update to the latest version by going to Settings > General > Software
      Update. Tap Download and Install.`,
    text4: ` Available for qualifying applicants in the United States.`,
    text5: `Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.`,
    text6: `Learn more about how Apple Card applications are evaluated at`,
    text6Link: `support.apple.com/kb/HT209218.`,
    text7: `Apple TV+ is $4.99/month after free trial. One subscription per Family
      Sharing group. Offer good for 3 months after eligible device activation.
      Plan automatically renews until cancelled. Restrictions and other terms
      apply.`,
  };

  let toggle1 = "hidden";
  let toggle2 = "hidden";
  let toggle3 = "hidden";
  let toggle4 = "hidden";
  let toggle5 = "hidden";
  let toggle6 = "hidden";
  let toggle7 = "hidden";
  let toggle8 = "hidden";
  let toggle9 = "hidden";
  let toggle10 = "hidden";

  const change1 = () => {
    toggle1 = toggle1 === "block" ? "hidden" : "block";
  };

  const change2 = () => {
    toggle2 = toggle2 === "block" ? "hidden" : "block";
  };

  const change3 = () => {
    toggle3 = toggle3 === "block" ? "hidden" : "block";
  };

  const change4 = () => {
    toggle4 = toggle4 === "block" ? "hidden" : "block";
  };

  const change5 = () => {
    toggle5 = toggle5 === "block" ? "hidden" : "block";
  };

  const change6 = () => {
    toggle6 = toggle6 === "block" ? "hidden" : "block";
  };

  const change7 = () => {
    toggle7 = toggle7 === "block" ? "hidden" : "block";
  };

  const change8 = () => {
    toggle8 = toggle8 === "block" ? "hidden" : "block";
  };

  const change9 = () => {
    toggle9 = toggle9 === "block" ? "hidden" : "block";
  };

  const change10 = () => {
    toggle10 = toggle10 === "block" ? "hidden" : "block";
  };
</script>

<main>
  <!-- Start footer section-1 -->
  <div class="bg-appleBlack py-7 mt-2 px-6 lg:px-64 ">
    <p class="text-appleDarkgrey text-left text-xs leading-5 ">
      {firstSection.text1}
    </p>
    <p class={classP}>
      {firstSection.text2}
    </p>
    <p class={classP}>{firstSection.text3}</p>
    <p class={classP}>
      {firstSection.text4}
    </p>
    <p class={classP}>{firstSection.text5}</p>
    <p class={classP}>
      {firstSection.text6}
      <!-- svelte-ignore a11y-missing-content -->
      <a href="http:\\" class="text-white hover:underline">
        {firstSection.text6Link}</a
      >
    </p>
    <p class={classP}>
      {firstSection.text7}
    </p>
    <hr class="text-appleDarkgrey mt-5 border-opacity-20" />
  </div>
  <!-- End footer section-1 -->

  <!-- Start Footer section-2 -->
  <div
    class="footer bg-appleBlack text-white  px-6 lg:px-64 grid grid-cols-1 md:grid-cols-5"
  >
    <!-- --------------- column-1 --------------- -->
    <div class="colunm-1">
      <!-- Mobile style -->
      <div
        class="flex items-center justify-between cursor-pointer md:cursor-default transition ease-in-out duration-500"
        on:click={change1}
      >
        <h6 class="text-xs font-semibold">Shop and Learn</h6>
        <!-- plus icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle1 === 'block'
            ? 'hidden'
            : 'block'}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- close-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle1}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- links -->
      <div
        class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle1} md:block"
      >
        <ul class="text-xs transition ease-in-out duration-500">
          <li class="pb-2 hover:underline"><a href="http:\\">Mac</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">iPad</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">iPhone</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">Watch</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">TV</a></li>

          <li class="pb-2 hover:underline"><a href="http:\\">Music</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">AirPods</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">HomePod</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">iPod touch</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">AirTag</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Accessories</a>
          </li>
          <li class="pb-2 hover:underline"><a href="http:\\">Gift Cards</a></li>
        </ul>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
    </div>
    <!-- --------------- End column-1 --------------- -->

    <!-- --------------- column-2 section-1 --------------- -->
    <div class="colunm-2">
      <!-- Mobile style -->
      <div
        class="flex items-center justify-between cursor-pointer md:cursor-default"
        on:click={change2}
      >
        <h6 class="text-xs font-semibold">Services</h6>
        <!-- plus icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle2 === 'block'
            ? 'hidden'
            : 'block'}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- close-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle2}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- links -->
      <div
        class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle2} md:block"
      >
        <ul class="text-xs">
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Music</a>
          </li>
          <li class="pb-2 hover:underline"><a href="http:\\">Apple TV+</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Fitness+</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple News+</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Arcade</a>
          </li>

          <li class="pb-2 hover:underline"><a href="http:\\">iCloud</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">Apple One</a></li>
          <li class="pb-2 hover:underline"><a href="http:\\">Apple Card</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Books</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Podcasts</a>
          </li>
          <li class="pb-2 hover:underline"><a href="http:\\">App Store</a></li>
        </ul>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />

      <!-- col-2 section-2 -->
      <div class="col-2-section-2 md:pt-5 ">
        <div
          class="flex items-center justify-between cursor-pointer md:cursor-default"
          on:click={change3}
        >
          <h6 class="text-xs font-semibold">Account</h6>
          <!-- plus icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle3 === 'block'
              ? 'hidden'
              : 'block'}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- close-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle3}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- links -->
        <div
          class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle3} md:block"
        >
          <ul class="text-xs">
            <li class="pb-2 hover:underline">
              <a href="http:\\">Manage Your Apple ID</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Apple Store Account</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">iCloud.com</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End col-2 section-2 -->
      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
    </div>
    <!-- --------------- End column-2 section-1 --------------- -->

    <!-- --------------- column-3 --------------- -->
    <div class="colunm-3">
      <div
        class="flex items-center justify-between cursor-pointer md:cursor-default"
        on:click={change4}
      >
        <h6 class="text-xs font-semibold">Apple Store</h6>
        <!-- plus icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle4 === 'block'
            ? 'hidden'
            : 'block'}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- close-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle4}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- links -->
      <div
        class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle4} md:block"
      >
        <ul class="text-xs">
          <li class="pb-2 hover:underline">
            <a href="http:\\">Find a Store</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Shop Online</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Genius Bar</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Today at Apple</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Camp</a>
          </li>

          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Store App</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Refurbished and Clearance</a>
          </li>
          <li class="pb-2 hover:underline"><a href="http:\\">Financing</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple Trade In</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Order Status</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Shopping Help</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- line -->
    <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
    <!-- --------------- End column-3 --------------- -->

    <!-- --------------- column-4 --------------- -->
    <div class="colunm-4">
      <div
        class="flex items-center justify-between cursor-pointer md:cursor-default"
        on:click={change5}
      >
        <h6 class="text-xs font-semibold">For Business</h6>
        <!-- plus icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle5 === 'block'
            ? 'hidden'
            : 'block'}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- close-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle5}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- links -->
      <div
        class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle5} md:block"
      >
        <ul class="text-xs">
          <li class="pb-2 hover:underline">
            <a href="http:\\">Apple and Business</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Shop for Business</a>
          </li>
        </ul>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />

      <!-- col-4 section-2 -->
      <div class="col-4-section-2 md:pt-5">
        <div
          class="flex items-center justify-between cursor-pointer md:cursor-default"
          on:click={change6}
        >
          <h6 class="text-xs font-semibold">For Education</h6>
          <!-- plus icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle6 === 'block'
              ? 'hidden'
              : 'block'}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- close-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle6}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <!-- links -->
        <div
          class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle6} md:block"
        >
          <ul class="text-xs">
            <li class="pb-2 hover:underline">
              <a href="http:\\">Apple and Education</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Shop for K-12</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Shop for College</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
      <!-- End col-4 section-2 -->

      <!-- Start col-4 section-3 -->
      <div class="col-4-section-3 md:pt-5">
        <div
          class="flex items-center justify-between cursor-pointer md:cursor-default"
          on:click={change7}
        >
          <h6 class="text-xs font-semibold">For Healthcare</h6>
          <!-- plus icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle7 === 'block'
              ? 'hidden'
              : 'block'}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- close-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle7}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- links -->
        <div
          class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle7} md:block"
        >
          <ul class="text-xs">
            <li class="pb-2 hover:underline">
              <a href="http:\\">Apple in Healthcare</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Health on Apple Watch</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Health Records on iPhone</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
      <!-- End col-4 section-3 -->
      <!-- Start col-4 section-4 -->
      <div class="col-4-section-4 md:pt-5">
        <div
          class="flex items-center justify-between cursor-pointer md:cursor-default"
          on:click={change8}
        >
          <h6 class="text-xs font-semibold">For Government</h6>
          <!-- plus icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle8 === 'block'
              ? 'hidden'
              : 'block'}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- close-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle8}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- links -->
        <div
          class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle8} md:block"
        >
          <ul class="text-xs font-semibold">
            <li class="pb-2 hover:underline">
              <a href="http:\\">Shop for Government</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Shop for Veterans and Military</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
      <!-- End col-4 section-3 -->
    </div>
    <!-- --------------- End column-4 --------------- -->

    <!-- --------------- column-5 --------------- -->
    <div class="colunm-5">
      <div
        class="flex items-center justify-between cursor-pointer md:cursor-default"
        on:click={change9}
      >
        <h6 class="text-xs font-semibold">Apple Values</h6>
        <!-- plus icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle9 === 'block'
            ? 'hidden'
            : 'block'}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- close-icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 cursor-pointer md:hidden {toggle9}"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- links -->
      <div
        class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle9} md:block"
      >
        <ul class="text-xs">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li class="pb-2 hover:underline">
            <a href="http:\\">Accessibility</a>
          </li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li class="pb-2 hover:underline"><a href="http:\\">Education</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Environment</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Inclusion and Diversity</a>
          </li>
          <li class="pb-2 hover:underline"><a href="http:\\">Privacy</a></li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Racial Equity and Justice</a>
          </li>
          <li class="pb-2 hover:underline">
            <a href="http:\\">Supplier Responsibility</a>
          </li>
        </ul>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />

      <!-- col-4 section-2 -->
      <div class="col-4-section-2 lg:pt-5">
        <div
          class="flex items-center justify-between cursor-pointer md:cursor-default"
          on:click={change10}
        >
          <h6 class="text-xs font-semibold">About Apple</h6>
          <!-- plus icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle10 === 'block'
              ? 'hidden'
              : 'block'}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- close-icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 cursor-pointer md:hidden {toggle10}"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- links -->
        <div
          class="links ml-4 md:ml-0 pt-2 text-appleDarkgrey {toggle10} md:block"
        >
          <ul class="text-xs">
            <li class="pb-2 hover:underline"><a href="http:\\">Newsroom</a></li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Apple Leadership</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Career Opportunities</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Investors</a>
            </li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Ethics & Compliance</a>
            </li>
            <li class="pb-2 hover:underline"><a href="http:\\">Events</a></li>
            <li class="pb-2 hover:underline">
              <a href="http:\\">Contact Apple</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- line -->
      <hr class="text-appleDarkgrey pb-4 mt-3 md:hidden border-opacity-20" />
      <!-- End col-4 section-2 -->
    </div>
    <!-- --------------- End column-5 --------------- -->
  </div>
  <!-- End Footer -->

  <!-- Start last footer section -->
  <div class="bg-appleBlack py-7 px-6 lg:px-64">
    <p class={classP}>
      More ways to shop: <a
        href="http:\"
        class="text-appleDarkBlue hover:underline">Find an Apple Store</a
      >
      or
      <a href="http:\" class="text-appleDarkBlue hover:underline"
        >other retailer</a
      > near you. Or call 1-800-MY-APPLE.
    </p>

    <hr class="text-appleDarkgrey mt-2 border-opacity-20" />

    <!-- Start -->
    <div class="flex-none md:flex item-center justify-between flex-wrap mt-2">
      <!-- left-content -->
      <div class="flex-none md:flex">
        <p class="text-appleDarkgrey text-xs mb-2 md:mb-0">
          Copyright © 2021 Apple Inc. All rights reserved.
        </p>

        <!-- Links -->
        <ul
          class="links text-xs text-appleDarkgrey flex items-center flex-wrap ml-0 md:ml-10 pb-2"
        >
          <li class="hover:underline mr-2">
            <a href="http:\\">Privacy Policy</a>
            <span class="ml-1 md:ml-2 opacity-60">|</span>
          </li>
          <li class=" hover:underline mr-2">
            <a href="http:\\">Terms of Use</a>
            <span class="ml-1 md:ml-2 opacity-60">|</span>
          </li>
          <li class=" hover:underline mr-2">
            <a href="http:\\">Sales and Refunds</a>
            <span class="ml-1 md:ml-2 opacity-60">|</span>
          </li>
          <li class=" hover:underline mr-2">
            <a href="http:\\">Legal</a>
            <span class="ml-1 md:ml-2 opacity-60">|</span>
          </li>
          <li class=" hover:underline">
            <a href="http:\\">Site Map</a>
          </li>
        </ul>
      </div>
      <!-- End left-content -->

      <!-- right-content -->
      <a href="http:\\" class="text-appleDarkgrey text-xs hover:underline"
        >United States</a
      >
      <!-- End Links -->
    </div>
    <!-- End -->
  </div>
  <!-- End last footer section -->
</main>

<style>
  .trans {
    transition: margin-top 0.3192s cubic-bezier(0.04, 0.04, 0.012, 0.96);
  }
</style>
