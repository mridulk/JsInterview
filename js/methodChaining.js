// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
// Expected output: 143545000

function computeAmount() {
  this.total = 0;
  this.lacs = function (num) {
    this.total = this.total + num * Math.pow(10, 5);
    return this;
  };
  this.crore = function (num) {
    this.total = this.total + num * Math.pow(10, 7);
    return this;
  };
  this.thousand = function (num) {
    this.total = this.total + num * Math.pow(10, 3);
    return this;
  };
  this.value = function () {
    return this.total;
  };
}

// initiating a new constructor function
const compute = new computeAmount();
console.log(
  new computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
