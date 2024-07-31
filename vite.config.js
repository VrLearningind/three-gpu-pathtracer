// fig.js
export default {
    root: 'src',
    build: {
      outDir: '../dist'
    },
    resolve: {
      alias: {
        'three': 'three/build/three.module.js',
        'three-gpu-pathtracer': 'three-gpu-pathtracer/build/three-gpu-pathtracer.module.js'
      }
    }
  };
  