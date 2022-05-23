<script>
	import {escala} from "./escalas.js"
  import {fade} from "svelte/transition"

  escala.createNew()

  let showAcidentes = false;

	const sortearEscala = () => {
		escala.createNew()
	}
</script>

<main transition:fade>
	<h1>Criador de Escalas</h1>
  <p>Atual escala: {$escala[0]}</p>
  {#if showAcidentes}
    <p transition:fade>A escala de {$escala[0]} tem os acidentes {$escala[1]}</p>
  {/if}
  Mostrar acidentes: <input type="checkbox" bind:checked={showAcidentes}><br><br>
  <button on:click|preventDefault={sortearEscala} class="button-12">Sortear nova escala</button><br>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
  .button-12 {
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    border-radius: 6px;
    border: none;

    background: #6E6D70;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
    color: #DFDEDF;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    left: 50%;

  }

  .button-12:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
</style>