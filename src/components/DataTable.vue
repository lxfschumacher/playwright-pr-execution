<template>
  <div class="data-table">
    <table data-testid="data-table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredData.length === 0">
          <td :colspan="columns.length" class="no-data">
            No data available
          </td>
        </tr>
        <tr 
          v-for="(row, index) in filteredData" 
          :key="index"
          :data-testid="`table-row-${index}`"
        >
          <td v-for="column in columns" :key="column.key">
            {{ row[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    columns: {
      type: Array,
      required: true,
      validator: (columns) => {
        return columns.every(col => col.key && col.label)
      }
    },
    data: {
      type: Array,
      default: () => []
    },
    searchQuery: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.data
      }
      
      const query = this.searchQuery.toLowerCase()
      return this.data.filter(row => {
        return this.columns.some(column => {
          const value = row[column.key]
          return value && value.toString().toLowerCase().includes(query)
        })
      })
    }
  }
}
</script>

<style scoped>
.data-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #42b983;
  color: white;
}

th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e0e0e0;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

tbody tr:last-child td {
  border-bottom: none;
}

.no-data {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 2rem;
}
</style>
