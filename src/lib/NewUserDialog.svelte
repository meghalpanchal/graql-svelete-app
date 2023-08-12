<script>
  import { requestGraphApi } from "../Utlis/Utils";
  export let dialogToggle = () => {};
  export let newUserDetail = (details) => {};

  let userName = "";
  let submitted = false;
  const addUser = () => {
    submitted = true;
    console.log("on submit:::", userName);
    if (userName === "") return;
    
    submitUser();
  };
  const submitUser = () => {
    const query = ` mutation ($username: String!) {
    createUser(username: $username) {
      id
      username
     }
        }`;
    const variables = {
      username: userName,
    };
    requestGraphApi(query, variables)
      .then((data) => {
        console.log("new dialog data::", data);
        dialogToggle();
        newUserDetail({
          saved: true,
          name: userName,
        });
      })
      .catch((error) => {
        newUserDetail({
          saved: false,
          name: userName,
        });
        console.log("dialog error", error);
      });
  };
</script>

<div class="dialog-offset">
  <div class="dialog-container">
    <div class="dialog-top">
      <h4>Add a new User</h4>
      <div>
        <button on:click={dialogToggle} class="btn-close"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            ><path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              fill="#000000"
            /></svg
          ></button
        >
      </div>
    </div>

    <div>
      <div>
        <label for="user">User Name</label>
        <input
          type="text"
          id="user"
          placeholder="Enter User Name"
          bind:value={userName}
          on:change={(e) => {
            userName = e.target.value;
          }}
        />
        {#if submitted === true && userName === ""}
          <p class="error-text">* Please Enter Username</p>
        {/if}
      </div>
      <div>
        <button on:click={addUser} class="btn-user">Submit</button>
      </div>
    </div>
  </div>
</div>

<style>
  .dialog-container {
    position: fixed;
    top: 25vh;
    left: 28%;
    background: #fff;
    width: 40%;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem;
  }
  .dialog-offset {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .dialog-container h4 {
    margin-top: 0;
  }
  .dialog-container label {
    display: block;
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 0.5rem;
  }
  .dialog-container input {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.25rem;
    font-size: 14px;
    border: 1px solid #ddd;
    margin-bottom: 0.5rem;
  }

  .btn-user {
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    border: none;
    background-color: #333;
    color: #fff;
    padding: 0.75rem 2rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .error-text {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 15px;
    line-height: 18px;
    color: #830202;
  }
  .btn-close {
    border: 0;
    color: #000;
    width: 35px;
    height: 35px;
    background: none;
    cursor: pointer;
  }
  .dialog-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
