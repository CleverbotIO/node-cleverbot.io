var request = require("request");
var base_url = "https://cleverbot.io/1.0/";
var cio = function (user, key) {
	this.user = user;
	this.key = key;
	this.setNick = function (nick) {
		this.nick = nick;
	}
	this.create = function (callback) {
		request.post({ url: base_url + "create", form: {
				user: this.user,
				key: this.key,
				nick: this.nick
			}}, function (err, httpResponse, body) {
				if (err) throw err;
				try {
					var status = JSON.parse(body).status;
				}
				catch (e) {
					console.log(e.stack);
					var status="API endpoints unreachable";
				}
				if (status == "success") {
					this.setNick(JSON.parse(body).nick);
					callback(false, this.nick);
				}
				else if (status == "Error: reference name already exists") {
					callback(false, this.nick);
				}
				else {
					callback(status, null);
				}
			}.bind(this));
	}

	this.ask = function (input, callback) {
		request.post({ url: base_url + "ask", form: {
				user: this.user,
				key: this.key,
				nick: this.nick,
				text: input
			}}, function (err, httpResponse, body) {
				if (err) throw err;
				if (JSON.parse(body).status == "success") {
					callback(false, JSON.parse(body).response);
				}
				else {
					callback(true, JSON.parse(body).status);
				}
			});
	}
}
module.exports = cio;
