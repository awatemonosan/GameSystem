var Mario = function(){
  GameObject.call(this);
  this.images[0]='http://mario.nintendo.com/img/mario_logo.png';
  this.setImage(0);
};

Mario.prototype = Object.create(GameObject.constructor);
Mario.prototype.constructor = Mario;

var Update() {
  if(Input.getKey(Input.keys.ArrowLeft)){
    this.velocity.x=-1;
  } else if(Input.getKey(Input.keys.ArrowRight)){
    this.velocity.x=1;
  } else {
    this.velocity.x=0;
  }
}
