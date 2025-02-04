<script lang="ts">
    import { goto } from '$app/navigation';
    import { scout_id_store, team_number_store, match_number_store, team_position_store } from '../stores';

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
    };
</script>
<div class="flex content">
    <div class="flex col main-content">
        <div class="header">Team 6632 Scouting App <div class="underline"></div></div>
        <div class="flex col sub-container">
            <div class="flex">            
                <p>Select Color:</p> 
                <div class="flex">
                    <div onclick={() => setTeam('red')} class="box bg-red"></div>
                    <div onclick={() => setTeam('blue')} class="box bg-blue"></div>
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
                <button class="submit-button" type="submit">Continue →</button>


            </form>
        </div>
    </div>
</div>

<style>
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
    }
    .header {
        width: 100%;
        color: #FBF1C7;
    }
    .main-content {
        width: 800px;
    }
    .sub-container {
        gap: 16px;
    }
    .input-container {
        gap: 4px;
    }
    .box {
        width: 44px;
        height: 44px;
    }
    .bg-red {
        background-color: #cc241d;
    }
    .bg-blue{
        background-color: #0E45D0;
    }

</style>