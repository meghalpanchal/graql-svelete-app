<script>
  export let switchTab = (tab) => {};
  let activeTab = "home";
  let menuOpen = false;
  const toggleMenu = () => {
    menuOpen = !menuOpen;
  }
  const changeTab = (tab) => {
    activeTab = tab;
    switchTab(tab);
    toggleMenu();
  }
</script>

<div class="header-container">
  <button on:click={toggleMenu} class="btn-menu">
    
    <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="#ffffff"/></svg>
  </button>
  
</div>
{#if menuOpen === true}
<div class="menu-container">
  <button on:click={toggleMenu} class="close-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="#ffffff"/></svg></button>
  <div class="menu-item-container">
  <button on:click={() => changeTab("home")} class={`menu-item ${activeTab === "home" && "active-menu-item"}`}>Home</button>
  <button on:click={() => changeTab("user")} class={`menu-item ${activeTab === "user" && "active-menu-item"}`}>User</button>
</div>
</div>
{/if}
<style>
.btn-menu{
    background: transparent;
    border: 0;
}
  .menu-icon {
    width: 3rem;
    cursor: pointer;
    
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #3a3a3a;
  }
  .menu-container {
    background-color: #000;
    color: #fff;
    padding: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
    z-index: 10;
    display: block;
    transition: left 0.3s ease;
    
  }
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    background: transparent;
    border: 0;
  }
  .close-icon svg{
    width: 3rem;
  }
  .menu-item{
    padding: 1rem 0.5rem;
    margin: 0;
    font-size: 1.25rem;
    cursor: pointer;
    background: transparent;
    transition: background 1s;
    margin-bottom: 0.5rem;
    display: block;
    width: 100%;
    border: 0;
    text-align: left;
    color: #fff;

}
.menu-item:hover{
    background-color: #ffffff8c;
}
.menu-item-container{
    margin-top: 4rem;
}
.active-menu-item{
  background-color: #ffffff8c;
}
</style>
