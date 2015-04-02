var Tile = function(){
  this.image='';
  this.physical=false;
};

var TileMap = {};

TileMap.getTileAt = function( point ){
  var roundedPoint = point.clone().round();

  if(this._tiles[roundedPoint.y]===undefined){
    return new Tile();
  } else {
    return this._tiles[roundedPoint.y][roundedPoint.x].clone;
  }
};

TileMap.setTileAt = function( point, tile ) {
  var roundedPoint = point.clone().round();

  if(this._tiles[roundedPoint.y]===undefined){
    this._tiles[roundedPoint.y]=[];
  }
  this._tiles[roundedPoint.y][roundedPoint.x] = tile.clone();
};

TileMap.testBox = function( point, size ){
  //TODO: TEST a box for collisions

}
