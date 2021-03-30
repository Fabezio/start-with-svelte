<script>
    const list = [...Array(10).keys()].map((el) => el + 1);
    const evenList = list.filter((el) => el % 2 == 0);
    const adder = (acc, curVal) => acc + curVal;
    const sum = evenList.reduce(adder);
    const numToAdd = 3;
    const newSum = evenList.reduce(adder, numToAdd);
    const divided = evenList.map((el) => el / 2);
    // const;
    // const list2 = list.map((el) => el + 1);
</script>

<p>
    Liste paire de 1 à 10<br />
    {evenList.join("; ")}
</p>
<p>Total: {sum}</p>
<p>Total en ajoutant {numToAdd}: {newSum}</p>

<p>
    divisons la liste par deux<br />
    {divided.join("; ")}
</p>
<p>total de cette liste: {divided.reduce(adder)}</p>
<!-- {#each list as el}
    <span>{el + 1}; </span>
{/each} -->
