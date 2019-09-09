import { shallowMount } from '@vue/test-utils'
import Label from './Label'

describe('Label', () => {
  it("renders label's text when passed", () => {
    const text = 'Click me'

    const wrapper = shallowMount(Label, {
      propsData: { text }
    })

    expect(wrapper.text()).toMatch(text)
  })
})
