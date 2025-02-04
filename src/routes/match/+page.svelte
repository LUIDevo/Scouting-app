<script lang="ts">

</script>

<div class="flex content">
    <div class="main-content">
      <div class="container">
  <div class="card missed-goal">Missed Goal</div>
  <div class="card goal">
    
    </div>
  <div class="card l1">L1</div>
  <div class="card l2">L2</div>
  <div class="card r1">R1</div>
  <div class="card r2">R2</div>
  <div class="continue-btn">Continue →</div>
</div>

        <button>Continue</button>
    </div>
</div>

<style>
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
    }
    .main-content {
        width: 800px;
    }


.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  grid-template-rows: repeat(4, auto); /* 4 rows */
  gap: 8px;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.card {
  border: 2px solid #e0e0e0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.r1 { grid-row: 3; grid-column: 2; }
.r2 { grid-row: 4; grid-column: 2; }

/* Continue button spans both columns */
.continue-btn {
  grid-column: span 2;
  background-color: red;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
 
</style>