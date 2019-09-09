import { shallowMount } from '@vue/test-utils'
import Button from './Button'

describe('Button', () => {
  it("renders button's text when passed", () => {
    const text = 'Click me'

    const wrapper = shallowMount(Button, {
      propsData: { text }
    })

    expect(wrapper.text()).toMatch(text)
  })

  it("renders button's icon when passed", () => {
    const icon = '/assets/star.svg'

    const wrapper = shallowMount(Button, {
      propsData: { icon }
    })

    const wrapperImg = wrapper.find('img')

    expect(wrapperImg.attributes('src')).toBe(icon)
  })
})
