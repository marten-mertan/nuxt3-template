<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: number
  min: number
  max: number
  step?: number
  label?: string
}>(), {
  step: 1,
  label: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: (val: number) => emit('update:modelValue', val),
})
</script>

<template>
  <div :class="$style.UiInputSlider">
    <p
      v-if="label"
      :class="$style.label"
    >
      {{ $props.label }}
    </p>
    <div :class="$style.wrapper">
      <div :class="$style.min">
        {{ min }}
      </div>
      <input
        v-model.number="value"
        :class="$style.slider"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @input="(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).valueAsNumber)"
      >
      <div :class="$style.value">
        {{ value }}
      </div>
      <div :class="$style.max">
        {{ max }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.UiInputSlider {
  position: relative;
}

.label {
  margin: 0 0 .8rem 0;
  font-size: 1.6rem;
  color: $text-primary;
}

.wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 3.1rem;
}

.slider {
  flex: 1;
  cursor: pointer;
  height: .2rem;
  background: $border;
  border-radius: .4rem;
  transition: background-color $default-transition;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    background: $border;
    cursor: pointer;
    border-radius: 50%;
    transition: transform $default-transition;

    &:hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 1.6rem;
    height: 1.6rem;
    background: $border;
    cursor: pointer;
    border-radius: 50%;
    transition: transform $default-transition;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.min, .max {
  position: absolute;
  top: 0;
  background: $border;
  color: $text-primary;
  padding: .2rem .6rem;
  border-radius: .4rem;
  font-size: 1.2rem;
  border: .1rem solid $border;
}

.min {
  left: 0;
}

.max {
  right: 0;
}

.value {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: $border;
  color: $text-primary;
  padding: .2rem .6rem;
  border-radius: .4rem;
  font-size: 1.2rem;
  border: .1rem solid $border;
}
</style>
