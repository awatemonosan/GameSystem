window.addEventListener('keydown', function( event ) {
  Input.Keystate[event]=true;
});

window.addEventListener('keyup', function( event ) {
  Input.Keystate[event]=false;
});

var Input = {};
Input.Keys={};
Input.Keys.ArrowUp = 38;
Input.Keys.ArrowDown = 40;
Input.Keys.ArrowLeft = 37;
Input.Keys.ArrowRight = 39;

Input.getKey( key ){
	return !!input.keystate[key];
}