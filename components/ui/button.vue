<script setup lang="ts">
const $style = useCssModule()

const props = withDefaults(defineProps<{
  type?: 'primary' | 'secondary' | 'danger'
}>(), {
  type: 'primary',
})

const classList = computed(() => {
  return {
    [$style['_' + props.type]]: true,
  }
})
</script>

<template>
  <button :class="[$style.UiButton, classList]">
    <slot />
  </button>
</template>

<style lang="scss" module>
.UiButton {
  font-size: 1.6rem;
  padding: 1.4rem 1.8rem;
  cursor: pointer;
  border: .1rem solid $border;
  border-radius: 1.4rem;
  transition: color $default-transition, background-color $default-transition, border-color $default-transition;

  &._primary {
      background: $accent;
      color: $bg-primary;
  }
  &._primary:hover {
      background: $accent-hover;
  }

  &._secondary {
      background: transparent;
      border: 1px solid $border;
      color: $text-secondary;
  }
  &._secondary:hover {
      border-color: $accent;
      color: $text-primary;
  }

  &._danger {
      background: $danger;
      color: white;
  }
  &._danger:hover {
      background: $danger-hover;
  }
}
</style>
