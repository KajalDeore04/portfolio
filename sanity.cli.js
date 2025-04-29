import {defineCliConfig} from 'sanity/cli'
import path from 'path'

export default defineCliConfig({
  api: {
    projectId: '1ofznrqz',
    dataset: 'production'
  },
  vite: (prevConfig) => ({
    ...prevConfig,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'), // Points to /app directory
        '~': path.resolve(__dirname, './') // Root directory alias
      }
    }
  })
})