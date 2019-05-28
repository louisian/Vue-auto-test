import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import {mount} from 'vue-test-utils';
describe('HelloWorld.vue', () => {
  // const Constructor = Vue.extend(HelloWorld)
  // const vm=new Constructor().$mount();
  const wrapper=mount(HelloWorld);
  it('should render correct contents', () => {
    expect(wrapper.find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })
  it('should demo right',()=>{
    expect(wrapper.find('.test-demo button').text())
      .to.equal('+')
    expect(wrapper.vm.number)
      .to.equal(0)
  })
  it('is button action right',()=>{
    wrapper.find('.test-demo button').trigger('click');
    expect(wrapper.find('.test-demo input').element.value)
      .to.equal('1')

    expect(wrapper.vm.number)
      .to.equal(1)
  })
  it('is increase function right',()=>{
    for(let i=0;i<12;i++){
      wrapper.find('.test-demo button').trigger('click');
    }
    //读取input的value
    expect(wrapper.find('.test-demo input').element.value)
      .to.equal('10')
    //读取data(){}中数据
    expect(wrapper.vm.number)
      .to.equal(10)
  })
  it('is error message right',()=>{
    expect(wrapper.find('.test-demo .number-error').exists())
      .to.be.false;
    wrapper.setData({
      number:12
    })
    expect(wrapper.find('.test-demo .number-error').exists())
      .to.be.true;
  })
  it('is error message right - input',()=>{
    const input=wrapper.find('.test-demo input')
    input.element.value='12';
    input.trigger('input')
    expect(wrapper.find('.test-demo .number-error').exists())
      .to.be.true;
  })
})
