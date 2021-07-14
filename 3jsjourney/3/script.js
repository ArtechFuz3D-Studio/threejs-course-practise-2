
// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xfff000})
const cubeMesh = new THREE.Mesh(geometry, material)

scene.add(cubeMesh)


// Sizes
const sizes = {
    width:800,
    height: 600
}
// Camera | camera.type=PerspectiveCamera
const camera = new THREE.PerspectiveCamera(66, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 2
scene.add(camera)


// Renderer
const canvas = document.querySelector('.webgl')
// renders the scene from cmera perspective, the result is drawn into a <canvas>
// canvas is an html element, that you can draw on.
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    //canvas: canvas
    canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
