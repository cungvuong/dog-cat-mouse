function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.die = function () {
	// body...
	this.isDead = true;
}
module.exports = Mouse;