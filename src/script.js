import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * House
 */
//creéation d'une maison
// Walls



//  création d'un groupe
const house = new THREE.Group()
scene.add(house)
//walls
//texture du mur
const wallsTexture = textureLoader.load('/textures/bricks/color.jpg')
wallsTexture.repeat.x = 2
wallsTexture.repeat.y = 2
wallsTexture.wrapS = THREE.RepeatWrapping
wallsTexture.wrapT = THREE.RepeatWrapping
wallsTexture.magFilter = THREE.NearestFilter
wallsTexture.minFilter = THREE.NearestFilter
//normal map du mur
const wallsNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
wallsNormalTexture.repeat.x = 2
wallsNormalTexture.repeat.y = 2
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({
        map: wallsTexture,
    })
)   
walls.position.y = 2.5 / 2
walls.castShadow = true
walls.receiveShadow = true
house.add(walls)
//roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({ color: '#b35f45' })
)
roof.position.y = 2.5 + 0.5
roof.rotation.y = Math.PI * 0.25
roof.castShadow = true
roof.receiveShadow = true
house.add(roof)
//door
const doorTexture = textureLoader.load('/textures/door/color.jpg')
doorTexture.repeat.x = 0.5
doorTexture.repeat.y = 0.5
doorTexture.offset.x = 0.25
doorTexture.offset.y = 0.25
doorTexture.wrapS = THREE.RepeatWrapping
doorTexture.wrapT = THREE.RepeatWrapping
doorTexture.magFilter = THREE.NearestFilter
doorTexture.minFilter = THREE.NearestFilter
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const door = new THREE.Mesh(

    new THREE.BoxGeometry(1, 1.8, 0.05),
    new THREE.MeshStandardMaterial({
        map: doorTexture,
        normalMap: doorNormalTexture,
    })
)
door.position.y = .9
door.position.z = 2 + 0.025
door.castShadow = true
door.receiveShadow = true
house.add(door)



//window
const fenetre = new THREE.Mesh(
    
        new THREE.BoxGeometry(0.5, 0.5, 0.05),
        new THREE.MeshStandardMaterial({ color: '#aa7b7b' })
    )
    fenetre.position.y = 1.5
    fenetre.position.z = 2 + 0.
    fenetre.castShadow = true
    fenetre.receiveShadow = true
    scene.add(fenetre)



    //chimney
const chimney = new THREE.Mesh(
        
            new THREE.BoxGeometry(0.25, 0.5, 0.25),
            new THREE.MeshStandardMaterial({ color: '#aa7b7b' })
        )
        chimney.position.y = 3.5
        chimney.position.z = -0.25
        chimney.castShadow = true
        chimney.receiveShadow = true
        house.add(chimney)

//ajout d'une doorLight 
const doorLight = new THREE.PointLight('#ff7d46', 1, 7)
doorLight.position.set(0, 2.2, 2.7)
doorLight.castShadow = true
doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
house.add(doorLight)


//ajout de buisson
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })
const bush = new THREE.Mesh(bushGeometry, bushMaterial)
bush.castShadow = true
bush.receiveShadow = true
bush.position.set(0.8, 0.2, 2.2)
bush.scale.set(0.5, 0.5, 0.5)
bush.castShadow = true
bush.receiveShadow = true
house.add(bush)


const bush_2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush_2.castShadow = true
bush_2.receiveShadow = true
bush_2.position.set(3, 0, 3)
bush_2.scale.set(0.3, 0.3, 0.3)
house.add(bush_2)

// ajout un buisson    
const bush_3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush_3.castShadow = true
bush_3.receiveShadow = true
bush_3.position.set(- 0.8, 0.1, 2.2)
bush_3.scale.set(0.25, 0.25, 0.25)
house.add(bush_3)

// ajout un buisson
const bush_4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush_4.castShadow = true
bush_4.receiveShadow = true
bush_4.position.set(- 3, 0.1, 3)
bush_4.scale.set(0.4, 0.4, 0.4)
house.add(bush_4)

// ajout un buisson
const bush_5 = new THREE.Mesh(bushGeometry, bushMaterial)
bush_5.castShadow = true
bush_5.receiveShadow = true
bush_5.position.set(- 3, 0.1, - 3)
bush_5.scale.set(0.4, 0.4, 0.4)
house.add(bush_5)

// ajout un buisson
const bush_6 = new THREE.Mesh(bushGeometry, bushMaterial)
bush_6.castShadow = true
bush_6.receiveShadow = true
bush_6.position.set(3, 0.1, - 3)
bush_6.scale.set(0.4, 0.4, 0.4)
house.add(bush_6)


//add fog
const fog = new THREE.Fog('#262837', 1, 10)
scene.fog = fog//ghost
// ajout d'un ghost à aprtir d'une lumière

const ghost = new THREE.PointLight('#ff00ff', 2, 3)
ghost.position.y = 4
ghost.position.z = -0.25
scene.add(ghost)
//ghost2
const ghost2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 0.5, 0.25),
    new THREE.MeshStandardMaterial({ color: '#aa7b7b' })
)



// Create a tombstone
const tombstoneGeometry = new THREE.BoxGeometry(0.6, 1, 0.2);
const tombstoneMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
const tombstone = new THREE.Mesh(tombstoneGeometry, tombstoneMaterial);
for(let i = 0; i < 6; i++) {
    const t = tombstone.clone();
    t.position.set(Math.cos(i * Math.PI / 3) * 4, 0.5, Math.sin(i * Math.PI / 3) * 4);
    t.rotation.y = i * Math.PI / 3;
    t.rotation.z =i * Math.PI / 3;
    t.rotation.x =i * Math.PI / 3;
    t.position.y = 0.25;
    t.castShadow = true;
    t.receiveShadow = true;

    scene.add(t);
}

// Floor
const floorTexture = textureLoader.load('/textures/grass/color.jpg')
floorTexture.repeat.x = 10
floorTexture.repeat.y = 10
floorTexture.wrapS = THREE.RepeatWrapping
floorTexture.wrapT = THREE.RepeatWrapping
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ 
        map: floorTexture,
    })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
floor.castShadow = true
floor.receiveShadow = true
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.1)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)


// Directional light
const moonLight = new THREE.DirectionalLight('#3D40E1', 1, 30)
moonLight.castShadow = true
moonLight.shadow.mapSize.width = 256
moonLight.shadow.mapSize.height = 256
moonLight.shadow.camera.near = 0.5
moonLight.shadow.camera.far = 50
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
scene.add(moonLight)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true;
renderer.setClearColor('#262837')


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    //Animate ghost
    const ghostAngle = elapsedTime * 0.5;
    ghost.position.x = Math.cos(ghostAngle) * 4;
    ghost.position.z = Math.sin(ghostAngle) * 4;
    ghost.position.y = Math.sin(elapsedTime * 3);
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()