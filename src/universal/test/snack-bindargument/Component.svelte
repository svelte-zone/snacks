<script lang="ts">


    import {snackBindArguments} from "$snacks/universal/snack-bindarguments";

    const helloRich = snackBindArguments(hello, 'rich');
    const helloRichDotCom = snackBindArguments(fullname, undefined, "DotCom");
</script>

{#snippet hello(name: string)}
    Hello {name}
{/snippet}

{#snippet fullname(firstName: string, lastName: string)}
    Hello {firstName} {lastName}
{/snippet}


<div data-testid="hello-world">
    {@render hello('world')}
</div>


<div data-testid="hello-rich">
    {@render helloRich('world')}
</div>


<div data-testid="hello-richHarris">
    {@render fullname("Rich", "Harris")}
</div>

<div data-testid="hello-richDotCom">
    {@render helloRichDotCom("Rich", "Harris")}
</div>