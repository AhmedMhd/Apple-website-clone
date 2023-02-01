<script>
  // @ts-nocheck

  import Navbar from "./components/Navbar.svelte";
  import SectionContentTop from "./components/RibbonShopOnline.svelte";
  import IphoneSection from "./components/Iphone-section.svelte";
  import AppleWatch from "./components/AppleWatch.svelte";
  import CollectionModule from "./components/CollectionModule.svelte";
  import Footer from "./components/Footer.svelte";
  import SectionContentShopOnline from "./components/RibbonShopOnline.svelte";
  import RibbonShopOnline from "./components/RibbonShopOnline.svelte";

  const colorClass = {
    bgApplebgBodyColor: "bg-applebgBody",
    AppleDarkpurpleColor: "bg-appleDarkpurple",
  };

  const textColorClasses = {
    textApplebgBodyColor: "text-applebgBody",
    textApplePink: "text-applePink",
  };

  let bgColor = colorClass.bgApplebgBodyColor;

  const iphone13ProSection = {
    title: "iPhone 13 Pro",
    subTitle: "Oh. So. Pro",
    available: "Available starting 9.24",
    learnMoreLink: "Learn More",
    preOrderLink: "Pre-order",
    imageSction: "assets/images/water_resistant__gnhxpuloslay_large.jpg",
  };

  const iphone13Section = {
    title: "iPhone 13",
    subTitle: "Your new Superpower",
    available: "Available starting 9.24",
    learnMoreLink: "Learn More",
    preOrderLink: "Pre-order",
    imageSction:
      "assets/images/hero_1_static__d195o2nfxt26_large-removebg-preview.png",
  };

  const tailwindClasses = {
    iphone13ProSectionSize: "h-3/6 w-3/6",
    // iphone13SectionSize: "h-3/5 w-3/5 md:h-6/12 w-6/12",
    iphone13SectionSize: "h-3/5 h-3/5",
    marginTopSection: "mt-12",
    marginTopIphone13: "mt-3",
    marginTopImage: "mt-10",
    paddingTopSection: "pt-12",
  };
</script>

<main>
  <Navbar />
  <RibbonShopOnline />
  <IphoneSection
    title={iphone13ProSection.title}
    subTitle={iphone13ProSection.subTitle}
    available={iphone13ProSection.available}
    learnMoreLink={iphone13ProSection.learnMoreLink}
    preOrderLink={iphone13ProSection.preOrderLink}
    imageSction={iphone13ProSection.imageSction}
    marginTopSection={tailwindClasses.marginTopSection}
    marginTopImage={tailwindClasses.marginTopImage}
  />
  <IphoneSection
    title={iphone13Section.title}
    subTitle={iphone13Section.subTitle}
    available={iphone13Section.available}
    learnMoreLink={iphone13Section.learnMoreLink}
    preOrderLink={iphone13Section.preOrderLink}
    imageSction={iphone13Section.imageSction}
    bgColor={colorClass.AppleDarkpurpleColor}
    paddingTopSection={tailwindClasses.paddingTopSection}
    marginTopIphone13={tailwindClasses.marginTopIphone13}
    iphone13SectionSize={tailwindClasses.iphone13SectionSize}
    textWhite={iphone13Section.textWhite}
    textApplebgBodyColor={textColorClasses.textApplebgBodyColor}
    textApplePink={textColorClasses.textApplePink}
    marginTopImage={tailwindClasses.marginTopImage}
  />
  <AppleWatch />
  <CollectionModule />
  <Footer />
</main>

<style>
  
</style>
