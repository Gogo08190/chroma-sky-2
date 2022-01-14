onEvent('recipes', event => {

  event.remove({ output: 'projecte:low_covalence_dust' })
  event.shaped('40x projecte:low_covalence_dust', [
  'ICC',
  'CCC',
  'CCC'
  ], {
    I: 'mysticalagradditions:insanium_coal',
    C: 'chromasky:3x_compressed_cobblestone'
  })

});
