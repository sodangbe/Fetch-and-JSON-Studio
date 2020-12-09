var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Panthera = /** @class */ (function () {
    function Panthera(currentRoar) {
        this.roar = currentRoar;
    }
    return Panthera;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stripes = true;
        return _this;
    }
    return Tiger;
}(Panthera));
var tigger = new Tiger("loud");
console.log(tigger.roar);
console.log(tigger.stripes);
