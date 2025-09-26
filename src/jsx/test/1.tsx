var ref1 = new ActionReference();
// 给AR设置一个 property ，表示只要获取 Nm  属性的值，其它的不要给我返回了。
ref1.putProperty(app.charIDToTypeID("Prpr"), app.charIDToTypeID("Nm  "));
ref1.putName(app.stringIDToTypeID("layer"), "1");
var layerDescriptor = app.executeActionGet(ref1);

$.writeln(layerDescriptor.count);
$.writeln("===================");
for (var i = 0; i < layerDescriptor.count; i++) {
    var key = layerDescriptor.getKey(i);
    var keyString = app.typeIDToStringID(key);
    $.writeln(keyString);
}
