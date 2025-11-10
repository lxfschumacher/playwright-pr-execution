<template>
  <div class="search-box">
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Searching..."
        @input="handleSearch"
        data-testid="search-input"
      />
      <button 
        v-if="searchQuery" 
        @click="clearSearch"
        class="clear-button"
        data-testid="clear-button"
      >
        ✕
      </button>
    </div>
    <p v-if="searchQuery" class="search-result" data-testid="search-result">
      Searching for: {{ searchQuery }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery)
    },
    clearSearch() {
      this.searchQuery = ''
      this.$emit('search', '')
    }
  },
  emits: ['search']
}
</script>

<style scoped>
.search-box {
  margin-bottom: 1.5rem;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b983;
}

.clear-button {
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.3s;
}

.clear-button:hover {
  color: #333;
}

.search-result {
  margin-top: 0.5rem;
  color: #666;
  font-style: italic;
}
</style>
