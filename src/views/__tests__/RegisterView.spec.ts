import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import RegisterView from '../RegisterView.vue'

import { UserService } from '@/services/UserService'
import { beforeEach } from 'node:test'

beforeEach(() => {
  vi.clearAllMocks();
})

describe('RegisterView', () => {
  it('Deve enviar os dados corretos para cadastro do usuário', async () => {
    const wrapper = mount(RegisterView)
    const registerSpy = vi.spyOn(UserService.prototype, 'register')

    await wrapper.find('input[type="text"]').setValue('name@mail.com')
    const [passwordInput, checkPasswordInput] = wrapper.findAll('input[type="password"]')
    await passwordInput.setValue('password')
    await checkPasswordInput.setValue('password')
    await wrapper.find('button').trigger('click')

    expect(registerSpy).toHaveBeenCalledWith({
      email: 'name@mail.com',
      password: 'password',
      checkPassword: 'password',
    })
  })
})
