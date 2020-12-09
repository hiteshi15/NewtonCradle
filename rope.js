class ropeClass{
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options)
        this.rope = Constraint.create(options)
        World.add(world, this.rope)

        rope1 = new this.rope(bobObject1.body,roof.object.body,-bobDiameter*2, 0)
        rope2 = new this.rope(bobObject2.body,roof.object.body, -bobDiameter*2, 0)
        rope3 = new this.rope(bobObject3.body,roof.object.body, -bobDiameter*2, 0)
        rope4 = new this.rope(bobObject4.body,roof.object.body, -bobDiameter*2, 0)
        rope5 = new this.rope(bobObject5.body,roof.object.body, -bobDiameter*2, 0)
    }
}
    