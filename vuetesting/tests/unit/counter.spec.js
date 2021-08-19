import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

const testcases = [
    {clicks : 1,out : 1},
    {clicks : 3,out : 'Fizz'},
    {clicks : 5,out : 'Buzz'},
    {clicks : 6,out : 'Fizz'},
    {clicks : 10,out : 'Buzz'},
    {clicks : 15,out : 'FizzBuzz'}
];

describe('Counter.vue', function () {
  it('初期状態0で表示', function ()  {
    const wrapper = mount(Counter)
    expect(wrapper.html()).to.include('<h2 id="count">0</h2>')
  })
  it('ボタンがある', function () {
    const wrapper = mount(Counter)
    expect(wrapper.find('button').exists()).to.equal(true)
  })
  testcases.forEach(async function (testcase) {
    it(`${testcase.clicks}回クリックしたら${testcase.out}と表示`, async () => {
        const wrapper = mount(Counter)
        const button = wrapper.find('button')
        for(let i = 0; i < testcase.clicks; i++){
            await button.trigger('click')
        }
        expect(wrapper.html()).to.include(`<h2 id="count">${testcase.out}</h2>`)
    })
  });
})
