<script lang="ts">
    import { goto } from '$app/navigation';
    import { scout_id_store, team_number_store, match_number_store, team_position_store, team_color_store } from '../stores';

    let scout_id = "";
    let team_number = 0;
    let match_number = 0;
    let team_position = 0;

    const validate = () => {
        console.log("Button clicked");

        // Fix null checks
        if (!scout_id.trim()) {
            console.error("Scout ID is missing");
            return;
        } 
        if (team_number <= 0) {
            console.error("Team number is invalid");
            return;
        }
        if (match_number <= 0) {
            console.error("Match number is invalid");
            return;
        }
        if (team_position <= 0) {
            console.error("Team position is invalid");
            return;
        }

        console.log("All verified");

        // Update stores correctly
        scout_id_store.set(scout_id);
        team_number_store.set(team_number);
        match_number_store.set(match_number);
        team_position_store.set(team_position);


        try {
            setTimeout(() => goto('/map'), 0); //possibly the stupidest workaround of all time. sveltekit goto function for some reason only works when theres a timeout

            console.log("Navigation successful");
        } catch (error) {
            console.error("Navigation error:", error);
        }
    };

    const setTeam = (color: string) => {
        console.log(color);
        team_color_store.set(color);
    };
</script>

<div class="flex content">
    <div class="flex col main-content">
        <div class={`${$team_color_store}_text header`}>Team 6632 Scouting App <div class="underline"></div></div>
        <div class="flex col sub-container">
            <div class="flex color-container">            
                <p>Select Color:</p> 
                <div style="gap: 8px;"class="flex">
                    <div onclick={() => setTeam('red')} class={$team_color_store == "red" ? "box bg-red active" : "box bg-red" }></div>
                    <div onclick={() => setTeam('blue')} class={$team_color_store == "blue" ? "box bg-blue active" : "box bg-blue" }></div>
                </div>
            </div>
            <form class="flex col sub-container" onsubmit={validate}>
                <div class="input-container col">
                    <label>Scout id:</label>
                    <input placeholder="name" bind:value={scout_id} type="text">
                </div>
                <div class="input-container col">
                    <label>Team number:</label>
                    <input bind:value={team_number} type="number">
                </div>
                <div class="input-container col">
                    <label>Match number</label>
                    <input bind:value={match_number} type="number">
                </div>
                <div class="input-container col">
                    <label>Team position</label>
                    <input bind:value={team_position} type="number">
                </div>
                {#if $team_color_store != ""}
                <button class={`${$team_color_store} submit-button`} type="submit">Continue →</button>
                {/if}
            </form>
        </div>
    </div>
</div>

<style>
  @font-face {
    font-family: "Jetbrains";
    src: url(../lib/fonts/JETBRAINSMONONL-MEDIUM.TTF );
  }
  @font-face {
    font-family: "Jetbrains Bold";
    src: url(../lib/fonts/JETBRAINSMONONL-BOLD.TTF );
  }

  input {
    font-family: Jetbrains;
  }
    label, p {
        color: #FBF1C7;
    }
    /* Preset Styles */
    .flex {
        display: flex;
    }
    .col {
        flex-direction: column;
    }
    .underline {
margin-top: 12px;
    height: 2px;
    width: 100%;
    background-color: #FBF1C7;
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
    .header {
        width: 100%;
        font-size: 44px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FBF1C7;
        font-family: Jetbrains Bold;
    }
    .main-content {
        width: 800px;
    }
    .sub-container {
        gap: 16px;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    input {
      padding: 15px 21px;
      background-color: #3C3836;
      color: #ffffff;
      border: none;
      border-radius: 8px;
    }
    .box {
        width: 44px;
        box-sizing: border-box;
        height: 44px;
        border-radius: 8px; 
    }
    .bg-red {
        background-color: #cc241d;
    }
    .bg-blue{
        background-color: #076678;
    }
    .submit-button {
      padding: 8px 0px;
    }
    .color-container {
      display: flex;
      justify-content: space-between;
      padding: 16px 8px 0px 0px;
  }
    .blue_text {
        color: #076678;
  }
    .red_text {
        color: #cc241d;
    }
    .blue {
        background-color: #076678;
  }
    .red {
        background-color: #cc241d;
    }
  button {
    font-family: Jetbrains;
    border: none;
    color: #ffffff;
  }
  .active {
    border: 1px solid #000000;
}

</style>
