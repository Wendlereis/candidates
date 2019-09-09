import { shallowMount } from '@vue/test-utils'
import Badge from './Badge'
import Label from '../atoms/Label'

describe('Badge', () => {
  it("renders default Badge's text when passed", () => {
    const text = "I'm a badge"

    const wrapper = shallowMount(Badge, {
      propsData: { text }
    })

    const wrapperLabel = wrapper.find(Label)

    expect(wrapperLabel.attributes('text')).toMatch(text)
  })

  it("renders default Badge's text variant", () => {
    const wrapper = shallowMount(Badge)

    const wrapperLabel = wrapper.find(Label)

    expect(wrapperLabel.attributes('variant')).toBe('body2')
  })

  it("renders highlighted Badge's text when passed", () => {
    const wrapper = shallowMount(Badge, {
      propsData: { highlight: true }
    })

    const wrapperBadge = wrapper.find('section.badge')

    expect(wrapperBadge.attributes('class')).toContain('is-highlighted')
  })
})
