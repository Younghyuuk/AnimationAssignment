class Slime {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Run+Attack.png"), 0, 0, 120, 120, 10, 0.2);
    };

    update() {

    };

    draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, 25, 25);
    };  

}