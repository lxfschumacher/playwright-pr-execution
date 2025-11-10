<template>
  <div id="app">
    <header>
      <h1>Vue 3 Test Project</h1>
      <p>A simple demo with SearchBox, InputField, and DataTable components</p>
    </header>

    <main>
      <section class="component-section">
        <h2>Search Box</h2>
        <SearchBox @search="handleSearch" />
      </section>

      <section class="component-section">
        <h2>Input Field</h2>
        <InputField
          v-model="userName"
          label="Name"
          placeholder="Enter your name"
          data-testid="name-input"
        />
        <InputField
          v-model="userEmail"
          label="Email"
          type="email"
          placeholder="Enter your email"
          data-testid="email-input"
        />
        <div v-if="userName || userEmail" class="user-info" data-testid="user-info">
          <p><strong>Name:</strong> {{ userName || 'Not provided' }}</p>
          <p><strong>Email:</strong> {{ userEmail || 'Not provided' }}</p>
        </div>
      </section>

      <section class="component-section">
        <h2>Data Table</h2>
        <DataTable
          :columns="tableColumns"
          :data="tableData"
          :searchQuery="searchQuery"
        />
      </section>
    </main>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import InputField from './components/InputField.vue'
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    SearchBox,
    InputField,
    DataTable
  },
  data() {
    return {
      searchQuery: '',
      userName: '',
      userEmail: '',
      tableColumns: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' }
      ],
      tableData: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Developer' },
        { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Tester' }
      ]
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #42b983;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

header p {
  color: #666;
  font-size: 1.1rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.component-section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 4px solid #42b983;
}

.user-info p {
  margin: 0.5rem 0;
}
</style>
