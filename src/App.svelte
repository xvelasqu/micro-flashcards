<script lang="ts">
  // @ts-nocheck
  import FlashCard from './FlashCard.svelte'
  import type { FlashCardContents } from './FlashCard'

  import { A1_2 } from '../static/data/flashcards.yaml'
  
  let currentCardId : number|null
  let showBackOfCurrentCard : boolean = false

  const cardsDataMap : Record<number, FlashCardContents> = {}
  let correctCardsIds : number[] = []
  let pendingCardsIds : number[] = []

  for (const rawFlashcardContents of A1_2) {
    cardsDataMap[rawFlashcardContents.id] = rawFlashcardContents
    pendingCardsIds.push(rawFlashcardContents.id)
  }
  setRandomCardAsCurrent()

  /**
   * Functions
  */
  function markCardAsCorrect(cardId : number) : void {
    correctCardsIds.push(cardId)
    correctCardsIds = correctCardsIds

    const indexInPendingCardsArr = pendingCardsIds.indexOf(cardId)
    if (indexInPendingCardsArr !== -1) {
      pendingCardsIds.splice(indexInPendingCardsArr, 1)
      pendingCardsIds = pendingCardsIds
    } 
    setRandomCardAsCurrent(cardId)
  }

  function markCardAsWrong(cardId : number) : void {
    setRandomCardAsCurrent(cardId)
  }

  function setRandomCardAsCurrent(cardToAvoid : number|null = null) : void {
    if (pendingCardsIds.length === 1) {
      currentCardId = pendingCardsIds[0]
    }
    else if (pendingCardsIds.length > 1) {
      let randomCardId : number|null = null
      while (randomCardId === null || (cardToAvoid && randomCardId === cardToAvoid)) {
        randomCardId = pendingCardsIds[Math.floor(Math.random() * pendingCardsIds.length)]
      }
      currentCardId = randomCardId
    }
    else {
      currentCardId = null
    }

    showBackOfCurrentCard = false
  }
</script>

<main>
  {#if pendingCardsIds.length}
    <FlashCard contents={cardsDataMap[currentCardId ? currentCardId : 0]} showBack={showBackOfCurrentCard} />
    {#if !showBackOfCurrentCard}
      <button 
        class="mt-5 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"
        on:click={() => showBackOfCurrentCard = true}
      >
        Check answer
      </button>
    {:else}
      <div class="flex space-x-4 justify-center items-center">
        <button 
          class="mt-5 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
          on:click={() => markCardAsWrong(currentCardId ? currentCardId : 0)}
        >
          Wrong
        </button>
        <button 
          class="mt-5 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          on:click={() => markCardAsCorrect(currentCardId ? currentCardId : 0)}
        >
          Correct
        </button>
      </div>
    {/if}
    <p class="mt-5 text-gray-500">Cards left: {pendingCardsIds.length}</p>
  {:else}
    <div class="flex flex-col items-center">
      <p class="text-xl mb-10">🎉️ Congratulations! All done! =D</p>
      <iframe class="mb-6" title="dum_tek_tk" width="560" height="315" src="https://www.youtube-nocookie.com/embed/isEzhladyzA?controls=0&autoplay=1&amp;start=44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button 
        class="mt-5 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"
        on:click={() => location.reload()}
      >
        Start over
      </button>
    </div>
  {/if}
</main>

<style global lang="postcss">
 	@tailwind base;
	@tailwind components;
	@tailwind utilities;

  :global(body){
    background-color: #f0f0f0;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
    background-color: inherit;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>