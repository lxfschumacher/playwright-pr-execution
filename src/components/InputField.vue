<template>
  <div class="input-field">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      data-testid="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:modelValue'],
  computed: {
    inputId() {
      return `input-${Math.random().toString(36).substr(2, 9)}`
    }
  }
}
</script>

<style scoped>
.input-field {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #42b983;
}
</style>
