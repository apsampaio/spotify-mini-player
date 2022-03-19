<script lang="ts">
  export let name: string;
</script>

<main class="container">
  <div class="control-container">
    <img src="assets/Previous.svg" alt="Previous Button" />
    <img src="assets/Play.svg" alt="Play Button" id="control-play" />
    <img src="assets/Next.svg" alt="Next Button" />
  </div>
  <div class="information-container">
    <p class="song">2010</p>
    <p class="artist">Earl Sweatshirt</p>
    <div class="time-container">
      <p class="current-time">02:30</p>
      <div class="progress-contanier" />
      <p class="total-time">04:10</p>
    </div>
  </div>
</main>

<style>
  main.container {
    display: flex;

    align-items: center;

    width: 100%;
    height: 100%;

    background-color: var(--black);
  }

  /* PLAYER CONTROLLER */

  main.container div.control-container {
    display: flex;
    margin: 0 24px;
  }

  main.container div.control-container img {
    transition: opacity 0.3s ease;
  }

  main.container div.control-container img#control-play {
    margin: 0 16px;
  }

  main.container div.control-container img:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  /* PLAYER INFORMATION */

  main.container div.information-container {
    display: flex;
    flex-direction: column;
    flex: 1;

    height: 100%;

    padding-top: 16px;
    padding-right: 24px;
  }

  main.container div.information-container p.song {
    color: var(--white);

    font-size: 16px;
    font-weight: 500;

    margin-bottom: 8px;
  }

  main.container div.information-container p.artist {
    color: var(--light-grey);
    font-size: 14px;
    margin-bottom: 16px;
  }

  main.container div.information-container div.time-container {
    display: flex;
    align-items: center;
  }

  main.container div.information-container div.time-container p {
    color: var(--light-grey);
    font-size: 12px;
  }

  main.container
    div.information-container
    div.time-container
    div.progress-contanier {
    width: 100%;
    height: 4px;

    margin: 0 4px;

    border-radius: 4px;
    background-color: var(--grey);
  }

  main.container
    div.information-container
    div.time-container
    div.progress-contanier::after {
    content: "";
    display: block;
    background-color: var(--green);

    width: 68%;
    height: 4px;
    border-radius: 4px;
  }
</style>
