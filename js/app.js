var Enemy = function(x, y, speed) {

  this.x = x;
  this.y = y;
  this.speed = speed;

  this.image = 'images/enemy-bug.png';
};


var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.image = 'images/char-princess-girl.png';
}


var player = new Player(200, 400);
Player.prototype.update = function(dt) {

}
Player.prototype.render = function() {


  ctx.drawImage(Resources.get(this.image), this.x, this.y);
};

Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;
  if (this.x > 505) {
    this.x = 0;
    this.speed = 50 + Math.floor(Math.random() * 100)
  }
  if (player.x < this.x + 70 && player.x + 63 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
  }


};


Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.image), this.x, this.y);
};




allEnemies = [];

var enemyPlace = [60, 145, 225];

for (var i = 0; i < enemyPlace.length; i++) {
  enemy = new Enemy(0, enemyPlace[i], 200);
  allEnemies.push(enemy);
}


player.handleInput = function(press) {
  if (press == 'left' && this.x > 0) {
    this.x = this.x - 101;
  } else if (press == 'right' && this.x < 385) {
    this.x = this.x + 101;
  } else if (press == 'up' && this.y > 0) {
    this.y = this.y - 83;
  } else if (press == 'down' && this.y < 400) {
    this.y = this.y + 83;
  }
  if (this.y < 60) {
    swal({
      allowEscapeKey: false,
      allowOutsideClick: false,
      html: true,
      title: 'Awesome You have won the game!',

      type: 'success',
      confirmButtonColor: '#02ccba',
      confirmButtonText: 'Play again!'
    }, function() {
      location.reload();

    })

  }
}

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
