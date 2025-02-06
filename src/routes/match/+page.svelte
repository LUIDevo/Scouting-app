<script lang="ts">
let num_missed_goals = $state(0);
let num_net_goals = $state(0);
let num_human_goals = $state(0);
let num_l1 = $state(0);
let recentActions = $state([]);
let lastAction = $state("");
let total = $state(0)

const clickedCard = (cardName:string) => {
  num_missed_goals += 1
  lastAction = "added"
  recentActions.unshift(cardName)
  total += 1
}

const undoLatestAction = () => {
  lastAction = "undo"
  recentActions.shift()
  recentActions = recentActions
  total += 1
}

const handleKeyDown = (event) => {
  if (event.key == "u") {
    undoLatestAction()
  }
  if (event.key == "j") {
    clickedCard("Net Goal")
  }
  if (event.key == "1") {
    num_l1 += 1
    console.log(num_l1)
  }
  if (event.key == "i") {
    clickedCard("Missed Goal")
  }
  console.log(`pressed the ${event.key} key`);
  console.log("hi")
}

</script>

<svelte:window on:keydown={handleKeyDown}/>

<div class="flex content">
  <div class="main-content">
    <div role="button" aria-label="Undo" tabindex="0" onkeydown={undoLatestAction} onclick={undoLatestAction} class="undo-content-container">
      <div class="undo-container">
        <div class="undo-static">
          <svg style="zoom: 0.75;" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 50.6667V45.3333H37.6001C40.4001 45.3333 42.8339 44.4444 44.9014 42.6667C46.969 40.8889 48.0019 38.6667 48.0001 36C47.9983 33.3333 46.9654 31.1111 44.9014 29.3333C42.8374 27.5556 40.4036 26.6667 37.6001 26.6667H20.8001L27.7334 33.6L24.0001 37.3333L10.6667 24L24.0001 10.6667L27.7334 14.4L20.8001 21.3333H37.6001C41.9112 21.3333 45.6116 22.7333 48.7014 25.5333C51.7912 28.3333 53.3352 31.8222 53.3334 36C53.3316 40.1778 51.7876 43.6667 48.7014 46.4667C45.6152 49.2667 41.9148 50.6667 37.6001 50.6667H18.6667Z" fill="white"/>
          </svg>
          Undo last action:
        </div>
        {#key total}
          <div class:add={lastAction=="added"} class:undo={lastAction=="undo"} class="first-action">{recentActions[0]}</div>
        {/key}
      </div>
      <div class={recentActions.length <= 1 ? "" : "later-actions"}>{recentActions[1]}</div>
      <div class={recentActions.length <= 2 ? "" : "later-actions"}>{recentActions[2]}</div>
      <div class={recentActions.length <= 3 ? "" : "later-actions"}>{recentActions[3]}</div>
    </div>
    <div class="container">
      <div onclick={() => clickedCard("Missed Goal")} class="card missed-goal">Missed Goal {num_missed_goals}</div>
      <div class="goal-container flex">
        <div onclick={() => clickedCard("Net Goal")} class="card net">Net</div>
        <div class="card processor">Processor</div>
        <div class="card human">Human</div>
      </div>
      <div class="card l1">L1</div>
      <div class="card l2">L2</div>
      <div class="card l3">L3</div>
      <div class="card l4">L4</div>
      <div class="continue-btn">Continue →</div>
    </div>

  </div>
</div>

<style>
@font-face {
  font-family: "Jetbrains";
  src: url(../../lib/fonts/JETBRAINSMONONL-MEDIUM.TTF )
}
div {
  color: #FBF1C7;
}
/* Preset Styles */
.flex {
  display: flex;
}
.col {
  flex-direction: column;
}
/* Normal Styling */
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: #1D2021;
  align-items: center;
  font-family: Jetbrains;
}
.main-content {
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  grid-template-rows: repeat(4, auto); /* 4 rows */
  gap: 8px;
  width: 100%;
  height: 100%;
  margin: auto;
}

.card {
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bold;
  background-color: #222;
  color: white;
}

/* Left column items take two rows each */
.missed-goal {
  grid-row: 1 / 3; /* Spans rows 1 and 2 */
  grid-column: 1;  /* First column */
}

.goal {
  grid-row: 3 / 5; /* Spans rows 3 and 4 */
  grid-column: 1;  /* First column */
}

/* Right column items stay in their rows */
.l1 { grid-row: 1; grid-column: 2; }
.l2 { grid-row: 2; grid-column: 2; }
.l3 { grid-row: 3; grid-column: 2; }
.l4 { grid-row: 4; grid-column: 2; }

/* Continue button spans both columns */
.continue-btn {
  grid-column: span 2;
  background-color: red;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 40px !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.goal-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Two equal columns */
  grid-template-rows: 1; /* 4 rows */
  grid-row: 3 / 5; /* Spans rows 3 and 4 */
  grid-column: 1;  /* First column */
  gap: 8px;
}
.card:before {
  position: relative;
  z-index: 1000;
  top: 45%;
  left: 50%;
}
.missed-goal::before {
  position: relative;
  z-index: 1000;
  top: 45%;
  content: "i";
  /*if changes to missed goal, and pseudo class not visible, change later.*/
  left: 60%;
}
.net::before {
  content: "j";
}
.processor::before {
  content: "k";
}
.human::before {
  content: "l";
}
.l1::before {
  content: "1";
}
.l2::before {
  content: "2";
}
.l3::before {
  content: "3";
}
.l4::before {
  content: "4";
}
.undo-content-container {
  display: flex;
  zoom: 0.75;
  align-items: center;
}
.undo-container {
  color: white;
  display: flex;
  align-items: center;
  width: auto;
  padding: 10px 44px 10px 10px;
  border: solid 2px #F9F5D7;
  border-radius: 12px;
  font-size: 24px;
  user-select: none;
  width: 500px;
}
.undo-static {
  font-size: 24px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.first-action {
  margin-left: 16px;
}
.undo {
  animation: slideLeft 0.3s ease-in-out forwards;
}
@keyframes slideLeft { 
from {
  opacity: 0;
  transform: translateX(30px) 
}
to {
  opacity: 1;
  transform: translateX(0x) 
}
}
.add{
  animation: slideRight 0.3s ease-in-out forwards;
}
@keyframes slideRight { 
from {
  opacity: 0;
  transform: translateX(-30px) 
}
to {
  opacity: 1;
  transform: translateX(0x) 
}
}
.later-actions {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 20px;
  /*border: 3px solid grey;*/
  border-radius: 8px;
}
</style>
