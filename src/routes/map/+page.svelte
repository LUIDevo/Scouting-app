<script lang="ts">
    import { scout_id_store, team_number_store, match_number_store, team_position_store } from "../../stores";
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
        Match Number:{$match_number_store}
        <div class="box-container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>


        <button onclick={validate}>Continue</button>
    </div>
</div>