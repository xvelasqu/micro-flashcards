<script lang="ts">
  import { FlashCardType } from "./FlashCard";
  import type { FlashCardContents } from "./FlashCard";

  export let contents : FlashCardContents
  export let showBack : boolean
</script>

<div class="p-20 max-w-lg mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4">
  <div class="flex-shrink-0">
    {#if !showBack}
      <img class="h-12 w-12" src="/assets/img/chat-svgrepo-com.svg" alt="Conversation Logo">
    {:else}
      <img class="h-12 w-12" src="/assets/img/magnifying_glass.png" alt="Magnifier Logo">
    {/if}
  </div>
  <div>
    {#if !showBack}
      <div class="text-2xl font-medium text-black">{contents.frontText}</div>
      {#if contents.type === FlashCardType.VOCABULARY}
        <p class="text-gray-500">Translate this word aloud into English</p>
      {/if}
    {:else}
      <div class="text-2xl font-medium text-black">{contents.backText}</div> 
    {/if}
  </div>
</div>