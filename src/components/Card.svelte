<script>
    export let title;
    export let author;
    export let content;
    export let date;
    const dateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    };
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
    };
</script>

<div class="card">
    <h2>{title}</h2>
    <hr />
    <p class="content">
        <q><i>{content}</i></q><br />

        <span class="right-aligned">{author}</span>
    </p>
    <hr />
    <p>
        Posté le
        <span class="right-float"
            >{Intl.DateTimeFormat("fr", dateOptions).format(date)}</span
        ><br />
        à
        <span class="right-float"
            >{Intl.DateTimeFormat("fr", timeOptions).format(date)}</span
        ><br />
    </p>
    <p />
</div>

<style>
    .card {
        margin: 0 1rem 1rem;
        text-align: left;
        width: 250px;
        border: 1px solid aquamarine;
        border-radius: 7px;
        padding: 0 1rem;
    }
    .right-aligned {
        display: block;
        text-align: right;
    }
    .right-float {
        float: right;
    }
    q {
        clear: both;
    }
    .content {
        /* border: 1px solid aquamarine; */
        min-height: 3rem;
    }
    hr {
        width: 250px;
        color: aquamarine;
    }
</style>
