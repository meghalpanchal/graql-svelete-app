<script lang="ts">
  import { onMount } from "svelte";
  import Pagination from "./Pagination.svelte";
  import NewUserDialog from "./NewUserDialog.svelte";
  import { requestGraphApi } from "../Utlis/Utils";

  let users = [];
  let userMeta = {};
  
  const onPageChange = (page) => {
    getUser(page);
    console.log("Pagignation:::", page);
  };
  let userDialogOpen = false;
  let newUser = {};
  const dialogToggle = () => {
    userDialogOpen = !userDialogOpen;
  };
  const newUserDetail = (details) => {
    newUser = details;
    setTimeout(() => {
      newUser = {};
    }, 5000);
  };

  const getUser = (page) => {
    let query = `query ($page: Int, $pageSize: Int, $username: String) {
    Users(pagination: {page: $page, pageSize: $pageSize}, filter: {username: $username}) {
      data {
        id
        username
        companies {
        id
        name
        rooms {
          id
          name
        }
      }
      }
      meta {
        pagination {
          page
          pageSize
          totalOfPage
          totalOfRecord
        }
      }
    }
  }`;

    let variables = {
      page: page,
      pageSize: 20,
    };
    requestGraphApi(query, variables).then((response) => {
      const { Users } = response ?? {};
      const { data, meta } = Users ?? {};
      console.log("response checking:::", data, meta);
      if (data && data.length) {
        users = data;
        userMeta = meta.pagination ?? {};
      }
    });
  };
  onMount(async () => {
    getUser(1);
  });
</script>

<div class="user-container">
  <div class="new-user-container">
    <h1>User</h1>
    <div>
      <button class="btn-new-user" on:click={dialogToggle}
        >Add a new User</button
      >
    </div>
  </div>

  {#if newUser?.saved === true}
    <p class="success-message">User {newUser?.name} added suceessfully.</p>
  {/if}
  {#if newUser?.saved === false}
    <p class="error-message">Failed to add User {newUser?.name}.</p>
  {/if}

  <table class="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Companies</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.companies.map((c) => c.name).join(", ")}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <Pagination {userMeta} {onPageChange} />
  {#if userDialogOpen === true}
    <NewUserDialog {dialogToggle} {newUserDetail} />
  {/if}
</div>

<style>
  .user-container {
    padding: 1.5rem;
    margin-right: 0;
    margin-left: 0;
    border-width: 1px;
    border-radius: 0.375rem;
    max-width: 1280px;
    margin: 0 auto;
    min-height: 75.5vh;
  }
  .user-table {
    width: 100%;
    border-collapse: separate;
    border: 1px solid #ccc;
    border-spacing: 0;
    border-bottom: 0;
  }
  .user-table thead {
    background-color: #ccc;
    text-align: left;
    height: 3rem;
    vertical-align: bottom;
    color: #212529;
  }
  .user-table th {
    padding: 0.75rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .user-table tbody tr:nth-of-type(odd) td {
    background-color: #f2f2f2;
  }
  .user-table tr:hover td,
  .user-table tbody tr:nth-of-type(even):hover td {
    background-color: #ddd;
  }
  .user-table td {
    padding: 0.75rem;
    color: #212529;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    margin: 0;
  }

  .new-user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-new-user {
    margin-right: 0.25rem;
    border: none;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .success-message {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 15px;
    line-height: 18px;
    color: #095a00;
  }
  .error-message {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 15px;
    line-height: 18px;
    color: #830202;
  }
</style>
