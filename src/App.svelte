<script lang="ts">
  import FullDeckGame from "./FullDeckGame.svelte"

  let fullDeckGameRunning = false

  /**
   * Functions
  */

</script>

<main class="
  text-center
  mx-auto
">  
  {#if fullDeckGameRunning}
    <FullDeckGame/>
  {:else}
    <h1 class="mt-5">
      <p>Turkish</p>
      <p>Academy</p>
      <p>Logo</p>
    </h1>

    <button 
      class="
        mt-5 py-10 px-32
        max-w-full lg:max-w-2xl
        rounded-lg shadow-md
        bg-gray-100 hover:bg-gray-200"
      on:click={() => fullDeckGameRunning = true}
    >
      <div class="flex align-middle justify-center">
        <div class="
          mr-6
          flex flex-col
          align-middle justify-center
        ">            
          <p class="text-4xl">
            🗃️
          </p>
        </div>
        <div class="
          flex flex-col
          justify-between
        ">
          <p class="text-4xl font-semibold text-gray-700">
            Full Deck Game
          </p>
          <p class="text-xl text-gray-600">
            All cards in random order
          </p>
        </div>
      </div>
    </button>
  {/if}
</main>

<style global lang="postcss">
 	@tailwind base;
	@tailwind components;
	@tailwind utilities;

  :global(body){
    background-color: #f0f0f0;
  }
</style>