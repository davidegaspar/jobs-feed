function ext(x) {
    var r;
    if (x instanceof Array) {
        r = [];
        z(r, x);
    } else {
        r = {};
        for (var y in x) {
            r[y] = [];
            a(r[y], x[y]);
        }
    }
    function z(s, a) {
        for (var i = 1; i < a.length; i++) {
            var t = {};
            for (var j = 0; j < a[i].length; j++)
                t[a[0][j]] = a[i][j];
            s.push(t);
        }
    }
    return r;
}
