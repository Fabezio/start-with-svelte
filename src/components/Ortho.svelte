<script>
    // import { join } from "node:path";
    import { Chart } from "chart.js";
    import { claim_text } from "svelte/internal";
    // console.log(Chart);
    const x = [...Array(20 + 1).keys()];
    const y = x.map((ab) => ab ** 2);
    const coords = x.map((ab) => [ab, y[ab]]);
    console.table(coords);
    const ctx = "myChart";
    const myChart = new Chart(claim_text, { data: coords, type: "radar" });
</script>

<h2>Fonction: x<sup>2</sup></h2>
<h3>Tableau</h3>
<table>
    <tr class="title">
        <th>Abscisse</th>
        <th>Ordonnée</th>
    </tr>
    {#each coords as coord}
        <tr>
            <td>{coord[0]}</td>
            <td>{coord[1]}</td>
        </tr>
    {/each}
</table>
<h3>Repère orthonormé</h3>
<canvas id="myChart" width="500" height="500" />

<style>
    table {
        width: 25%;
        margin: 0 auto 2rem;
    }
    table,
    .title {
        border-collapse: collapse;
        border: 2px solid black;
    }
    .title {
        font-size: 1.125rem;
        background: lightblue;
    }
    tr {
        height: 1.5rem;
    }
    td,
    tr,
    th {
        border: 1px solid black;
    }
    canvas {
        color: black;
    }
</style>
