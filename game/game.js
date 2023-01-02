import kaboom from "kaboom";

kaboom();

loadBean()

const bean = add([
    sprite("bean"),
    pos(center()),
    area(),
    body(),
])

const SPEED = 120;

add([
    pos(0,height()-1),
    rect(width(),1),
    outline(3),
    area(),
    solid()
]);

add([
    pos(1,0),
    rect(1,height()),
    outline(3),
    area(),
    solid()
]);

add([
    pos(0,0),
    rect(width(),1),
    outline(3),
    area(),
    solid()
]);

add([
    pos(width(),0),
    rect(1,height()),
    outline(3),
    area(),
    solid()
]);

onKeyPress("space", () => {
    // .jump() is provided by the body() component
    if (bean.isGrounded()){
        bean.jump()
    }
})

onKeyDown("d", () => {
    // bean.flipX(false);
    bean.move(SPEED, 0);
});

onKeyDown("a", () => {
    // bean.flipX(true);
    bean.move(-SPEED, 0);
})