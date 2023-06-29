Object.defineProperty(globalThis, 'setImmediate', {
  writable: false,
  configurable: false
})
require('@sinonjs/fake-timers')
