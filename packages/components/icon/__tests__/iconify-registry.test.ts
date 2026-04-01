import { beforeEach, describe, expect, test, vi } from 'vitest'
import {
  registerIconifyCollection,
  registerIconifyIcon,
} from '../src/iconify-registry'

const { addCollection, addIcon } = vi.hoisted(() => ({
  addCollection: vi.fn(),
  addIcon: vi.fn(),
}))

vi.mock('@iconify/vue', () => ({
  addCollection,
  addIcon,
}))

describe('iconify-registry', () => {
  beforeEach(() => {
    addCollection.mockReset()
    addIcon.mockReset()
    addCollection.mockReturnValue(true)
    addIcon.mockReturnValue(true)
  })

  test('registers iconify collections', () => {
    const collection = {
      prefix: 'mdi',
      icons: {
        home: {
          body: '<path />',
        },
      },
    }

    expect(registerIconifyCollection(collection)).toBe(true)
    expect(addCollection).toHaveBeenCalledWith(collection, undefined)
  })

  test('registers iconify icons by string name', () => {
    const data = {
      body: '<path />',
    }

    expect(registerIconifyIcon('mdi:home', data)).toBe(true)
    expect(addIcon).toHaveBeenCalledWith('mdi:home', data)
  })

  test('registers iconify icons by object name', () => {
    const data = {
      body: '<path />',
    }

    expect(
      registerIconifyIcon(
        {
          provider: 'custom',
          prefix: 'mdi',
          name: 'home',
        },
        data
      )
    ).toBe(true)
    expect(addIcon).toHaveBeenCalledWith('@custom:mdi:home', data)
  })
})
