import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'

import { SearchService } from '@/services/SearchService'
import { beforeEach } from 'node:test'
import HomeView from '../HomeView.vue'

beforeEach(() => {
  vi.clearAllMocks()
})

describe('HomeView', () => {
  it('Deve enviar os dados do filtro para a buscar da quadra', async () => {
    const wrapper = mount(HomeView)
    const searchSportCourtSpy = vi.spyOn(SearchService.prototype, 'searchSportCourt')

    await wrapper.find('input[type="text"]').setValue('Ondina')
    const [sportSelect, distanceSelect] = wrapper.findAll('select')
    await sportSelect.setValue('basquete')
    await distanceSelect.setValue('10')
    const botao = wrapper.find('button')
    console.log(botao)
    botao.trigger('submit')

    expect(searchSportCourtSpy).toHaveBeenCalledWith({
      distance: 10,
      searchWord: 'Ondina',
      sport: 'basquete'
    })
  })
})
