<script setup lang="ts">
const inputValue = ref('')
const selectValue = ref('')
const inputSliderValue = ref(50)
</script>

<template>
  <div :class="[$style.UiPage, 'page']">
    <div :class="[$style.container, 'container']">
      <UiButton>
        Test Button
      </UiButton>
      <UiButton
        type="secondary"
      >
        Test Button
      </UiButton>
      <UiButton
        type="danger"
      >
        Test Button
      </UiButton>
      <UiInput
        v-model="inputValue"
        placeholder="Test Input"
      />
      <UiSelect
        v-model="selectValue"
        :options="['Option 1', 'Option 2', 'Option 3']"
        placeholder="Test Select"
      />
      <UiInputSlider
        v-model="inputSliderValue"
        :min="0"
        :max="100"
        label="Test Slider"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.UiPage {
  //
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}
</style>
