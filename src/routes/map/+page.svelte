<script lang="ts">
    import { scout_id_store, team_number_store, match_number_store, team_position_store, team_color_store } from "../../stores";
    import { get } from 'svelte/store'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'

    //! Remove this onMount function - is ueseless
    onMount(() => {
        console.log($scout_id_store)
    })

    const validate = () => {
        setTimeout(() => goto('/match'), 0); 
    }
    
</script>

<div class="flex content">
    <div class="flex col main-content">
        <div class="header">Team 6632 Scouting App <div class="underline"></div></div>
    <br>
        <p>Match Number:{$match_number_store}</p>
        <p>Team color: {$team_color_store}</p>
        <div class="box-container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>


        <button onclick={validate}>Continue</button>
    </div>
</div>
<style>
  .flex {
    display: flex;
  }
  .col {
    flex-direction: column;
  }
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
    label, p {
        color: #FBF1C7;
    }
    .header {
        width: 100%;
        font-size: 44px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FBF1C7;
    }
    .underline {
    height: 2px;
    width: 100%;
    background-color: #FBF1C7;
  }
</style>
