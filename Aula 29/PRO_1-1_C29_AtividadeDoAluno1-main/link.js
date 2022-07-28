class Link {
    constructor(corda, fruta) {
        var lastLink = corda.body.bodies.length - 2;
        // indice do ultimo retangulo
        // tira 2, pq considera 1 fruta e indice que começa a contar no 0
 
        this.link = Constraint.create({
            bodyA: corda.body.bodies[lastLink],
            pointA: { x: 0, y: 0 },
            bodyB: fruta,
            pointB: { x: 0, y: 0 },
            length: -10, // pra bola subir e n ficar estranho
            stiffness: 0.01 // rigidez da corta
        })
 
        World.add(engine.world, this.link)
    }
}
