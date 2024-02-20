<script lang="ts">
  export let path: string;
  export let width: string = "1.5rem";
  export let height: string = "1.5rem";
</script>

<svg {width} {height} class={$$props.class}>
  {@html path}
</svg>
