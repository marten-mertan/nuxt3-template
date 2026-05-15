<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string
  options: string[]
  placeholder?: string
}>(), {
  placeholder: 'Please select an option',
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
  <div :class="$style.UiSelect">
    <select
      v-model="value"
      :class="$style.select"
    >
      <option
        value=""
        disabled
        hidden
      >
        {{ props.placeholder }}
      </option>
      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <div :class="$style.arrow">
      ▼
    </div>
  </div>
</template>

<style lang="scss" module>
.UiSelect {
  position: relative;
  width: 100%;
}

.select {
  width: 100%;
  padding: 1.4rem 4.2rem 1.4rem 1.8rem;
  background: $bg-tertiary;
  border: .1rem solid $border;
  border-radius: 1.2rem;
  color: $text-primary;
  font-size: 1.6rem;
  font-weight: 500;
  appearance: none;
  cursor: pointer;
  transition: all $default-transition;

  &:hover {
    border-color: $accent;
    background: $bg-secondary;
  }

  &:focus {
    border-color: $accent;
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
}

.arrow {
  position: absolute;
  right: 1.8rem;
  top: 50%;
  transform: translateY(-48%);
  font-size: 1.1rem;
  color: $text-muted;
  pointer-events: none;
  transition: color $default-transition;

  .select:hover + &,
  .select:focus + & {
    color: $accent;
  }
}

.select option:disabled {
  color: $text-muted;
}
</style>
