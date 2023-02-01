<script>
  const sectionContent = {
    text1: "We look forward to welcoming you to our stores. Whether you",
    text2: "our Specialists can help you buy the products you love.",
    textButton1: "shop in a store",
    textButton2: "shop online",
  };
</script>

<main>
  <div class="bg-gray-100 flex justify-center items-center py-1 content">
    <p class="text-black text-center px-5 py-3 text-sm">
      {sectionContent.text1}
      <a
        href="http://"
        class="text-appleDarkBlue
        ">{sectionContent.textButton1}</a
      >
      or
      <a href="http://" class="text-appleDarkBlue"
        >{sectionContent.textButton2}</a
      >, {sectionContent.text2}
    </p>
  </div>
</main>

<style>
  .content {
    margin-top: 2px;
  }
</style>
