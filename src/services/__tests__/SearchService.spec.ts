import { describe, it, expect, vi } from 'vitest'

import { beforeEach } from 'node:test'
import { SearchService } from '../SearchService';

beforeEach(() => {
  vi.clearAllMocks();
})

describe('SearchService', () => {
  it('Deve enviar apenas filtros que não estejam vazios ou com valor inválido para buscar a quadra', async () => {
    const axiosMock = {get:vi.fn()};
    const searchService = new SearchService(axiosMock as any)

    await searchService.searchSportCourt({
        sport: 'basquete',
        distance: 0,
        searchWord: '',
    })

    expect(axiosMock.get).toHaveBeenCalledWith('/courts', {
      params: {
        sport: 'basquete',
      }
    })
  })
})
