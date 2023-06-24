import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('renders data presenter and prefecture selector', () => {
    // We need to stub ThePrefectureSelectore in order to pass the test. To do that, we can make a
    // default stub. Moreever, we think that we can shallow mount the whole HomeView view component.
    // So we set { shallow: true } for this mounting.
    const wrapper = mount(HomeView, {
      shallow: true,
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    })

    const dataPresenter = wrapper.findAll('[data-test-class="data-presenter"]')
    expect(dataPresenter).toHaveLength(1)

    const prefectureSelector = wrapper.findAll('[data-test-class="prefecture-selector"]')
    expect(prefectureSelector).toHaveLength(1)
  })
})
