<script setup lang="ts">

</script>

<template>
  <footer :class="$style.Footer">
    <div :class="[$style.wrapper, 'container']">
      created by
      <NuxtLink
        :class="$style.link"
        target="_blank"
        to="https://github.com/marten-mertan"
      >
        Mertan
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" module>
  .Footer {
    position: relative;
    z-index: 10;
    background: $bg-secondary;
    border-top: .1rem solid $border;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: $footer-h;
    padding: 0 1.2rem;
    color: $text-secondary;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: .2rem;
  }

  .link {
    color: $accent;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: .2rem;
    margin-left: .6rem;
  }
</style>
