<script>
</script>

<div class="container">
  <h1>Home</h1>
  <div class="grid text-center" style="row-gap: 0;">
    <div class="grid-item inner-grid">
      <div class="inner-grid-item"> Inner Grid 1</div>
      <div class="inner-grid-item"> Inner Grid 2</div>
      <div class="inner-grid-item"> Inner Grid 3</div>
      <div class="inner-grid-item"> Inner Grid 4</div>
    </div>
    <div class="grid-item">Outer Grid 2</div>
    <div class="grid-item">Outer Grid 3</div>
    <div class="grid-item">Outer Grid 4</div>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 0.5rem;
    justify-items: center;
    align-items:start;
    
  }
  .grid .grid-item {
    background-color: #f2f2f2;
    padding: 0rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
    min-height: 300px;
    margin:2px 0;
  }
  .inner-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:5px;
  }
  .inner-grid-item {
    background-color: #ccc;
    padding: 0rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  h1{
    text-align: left;
  }
</style>
