import { Config } from '../../src/lib/config'

describe('testing config file', () => {
  test('the url should be the same youtube', () => {
    expect(Config.url).toBe('https://www.youtube.com')
  })
})
