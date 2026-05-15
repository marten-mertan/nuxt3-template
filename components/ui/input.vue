<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
}>(), {
  placeholder: 'Please enter text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})
</script>

<template>
  <div :class="$style.UiInput">
    <input
      v-model="value"
      :class="$style.input"
      :placeholder="placeholder"
    >
  </div>
</template>

<style lang="scss" module>
.UiInput {
  //
}

.input {
  width: 100%;
  padding: 1.4rem 1.8rem;
  background: $bg-secondary;
  border: .1rem solid $border;
  border-radius: 1.4rem;
  color: $text-primary;
  font-size: 1.6rem;
  outline: none;
  transition: all $default-transition;
}

.input:focus {
  border-color: $accent;
}

.input::placeholder {
  color: $text-muted;
}
</style>
