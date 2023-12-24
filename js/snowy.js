function Snowy() {
    function t() {
      window.requestAnimationFrame(t), $.clearRect(0, 0, w, h), $.fillStyle = "hsla(255,255%,255%,0)", $.fillRect(0, 0, w, h), $.fill();
      for (var i = 0; i < a.length; ++i) f = a[i], f.t += .05, f.t = f.t >= 2 * Math.PI ? 0 : f.t, f.y += f.sp, f.x += Math.sin(f.t * s) * (.3 * f.sz), f.y > h + 50 && (f.y = -10 - Math.random() * r), f.x > w + r && (f.x = -r), f.x < -r && (f.x = w + r), f.draw()
    }
  
    function i() {
      this.draw = function() {
        this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, "hsla(255,255%,255%,1)"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), $.moveTo(this.x, this.y), $.fillStyle = this.g, $.beginPath(), $.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), $.fill()
      }
    }
    for (var n, a = [], e = 80, s = 1, o = 1, d = 1.3, r = 20, l = 1, c = 0; c < e; ++c) n = new i, n.y = Math.random() * (h + 50), n.x = Math.random() * w, n.t = Math.random() * (2 * Math.PI), n.sz = 100 / (10 + 100 * Math.random()) * d, n.sp = .15 * Math.pow(.8 * n.sz, 2) * o, n.sp = n.sp < l ? l : n.sp, a.push(n);
    t()
  } // 300 을 조절 하면 눈의 양 조절 가능 
  var c = document.getElementById("canv"),
    $ = c.getContext("2d"),
    w = c.width = window.innerWidth,
    h = c.height = window.innerHeight;
  Snowy(), window.addEventListener("resize", function() {
    c.width = w = window.innerWidth, c.height = h = window.innerHeight
  }, !1)