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

describe('Label variants', () => {
  it("when label's variant is title", () => {
    const wrapper = shallowMount(Label, {
      propsData: { variant: 'title' }
    })

    const wrapperLabel = wrapper.find('label')

    expect(wrapperLabel.attributes('class')).toContain('title')
  })

  it("when label's variant is heading", () => {
    const wrapper = shallowMount(Label, {
      propsData: { variant: 'heading' }
    })

    const wrapperLabel = wrapper.find('label')

    expect(wrapperLabel.attributes('class')).toContain('heading')
  })

  it("when label's variant is body", () => {
    const wrapper = shallowMount(Label, {
      propsData: { variant: 'body' }
    })

    const wrapperLabel = wrapper.find('label')

    expect(wrapperLabel.attributes('class')).toContain('body')
  })

  it("when label's variant is body2", () => {
    const wrapper = shallowMount(Label, {
      propsData: { variant: 'body2' }
    })

    const wrapperLabel = wrapper.find('label')

    expect(wrapperLabel.attributes('class')).toContain('body2')
  })

  it("when label's variant is empty", () => {
    const wrapper = shallowMount(Label, {
      propsData: { variant: '' }
    })

    const wrapperLabel = wrapper.find('label')

    expect(wrapperLabel.attributes('class')).toContain('body2')
  })
})
