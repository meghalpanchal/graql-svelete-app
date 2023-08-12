<script>
  export let onPageChange = (page) => {};
  export let userMeta = {};
  let currentPage = 1;
  let previousPages = [];
  let nextPages = [2, 3, 4];
  const onPageClick = (page) => {
    console.log("checking for page::", page);
    let pageToChange = page;
    if (page === "prev") {
      pageToChange = currentPage - 1;
    } else if (page === "next") {
      pageToChange = currentPage + 1;
    }
    if (pageToChange === 1) {
      previousPages = [];
      nextPages = [pageToChange + 1, pageToChange + 2, pageToChange + 3];
    } else {
      let prevPages = [];
      let nextPg = [];
      for (let i = pageToChange - 3; i <= pageToChange - 1; i++) {
        console.log("checkingggggggg iiiii:::", i);
        if (i >= 1) {
          prevPages.push(i);
        }
      }

      for (let i = pageToChange + 1; i <= pageToChange + 3; i++) {
        console.log("checkingggggggg usermeta:::", i, userMeta.totalOfPage);
        if (userMeta.totalOfPage && i > userMeta.totalOfPage) {
        } else {
          nextPg.push(i);
        }
      }
      previousPages = prevPages;
      nextPages = nextPg;
    }
    currentPage = pageToChange;
    console.log("pagetochangee:::", pageToChange);
    onPageChange(pageToChange);
  };
</script>

<div class="pagination-container">
  <button
    on:click={() => onPageClick("prev")}
    disabled={currentPage === 1 ? true : false}
    class="btn-pagination">Previous</button
  >
  {#each previousPages as pg}
    <button on:click={() => onPageClick(pg)} class="btn-pagination">{pg}</button
    >
  {/each}

  <button class="btn-pagination" disabled>{currentPage}</button>
  {#each nextPages as pg}
    <button on:click={() => onPageClick(pg)} class="btn-pagination">{pg}</button
    >
  {/each}
  <button
    on:click={() => onPageClick("next")}
    disabled={userMeta.totalOfPage && currentPage === userMeta.totalOfPage
      ? true
      : false}
    class="btn-pagination">Next</button
  >
</div>

<style>
  .pagination-container {
    margin-top: 1rem;
  }
  .btn-pagination {
    margin-right: 0.25rem;
    border: none;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .btn-pagination:disabled {
    background-color: #ddd;
  }
</style>
