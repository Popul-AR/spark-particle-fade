const Scene = require('Scene')
const Animation = require('Animation')

const init = async function(){

  const emitter = await Scene.root.findFirst('emitter0')

  const alphaSampler = Animation.samplers.HSVA([
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.easeInQuad(1, 0)
  ])
  emitter.hsvaColorModulationModifier = alphaSampler
  
  const sizeSampler = Animation.samplers.easeInQuad(0, .01)
  emitter.sizeModifier = sizeSampler

}()