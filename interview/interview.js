const Foo = function (a) {
  function bar() {
    return a;
  }
  this.baz = function () {
    return this.a;
  };
};

Foo.prototype = {
  biz(a) {
    return a;
  },
};

const f = new Foo(7);

//   console.log(f.bar()); // ?
f.baz();
f.biz(); // ?
