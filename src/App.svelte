<script lang="ts">
 
  import Users from "./lib/Users.svelte";
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Footer from "./lib/Footer.svelte";
 

  let activeTab = "home";
  const switchTab = (tab) => {
    activeTab = tab;
    
  }
  

</script>

<main>
  <div class="main">
    <Header {switchTab} />
    <div class="container">
      {#if activeTab === "home"}
      <Home />
      {/if}
      {#if activeTab === "user"}
      <Users />
      {/if}
      <Footer />
    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
