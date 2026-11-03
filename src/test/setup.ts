import '@testing-library/jest-dom/vitest'
import 'fake-indexeddb/auto'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { __resetRepositoryForTests } from '../storage/repositories/appRepository'

afterEach(() => {
  cleanup()
  localStorage.clear()
  __resetRepositoryForTests()
})
