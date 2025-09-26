function Layer(id) {
    this.id = id;
}

// 获取当前图层的名称
Layer.prototype.name = function () {
    var ref1 = new ActionReference();
    ref1.putProperty(app.charIDToTypeID("Prpr"), app.charIDToTypeID("Nm  "));
    ref1.putIdentifier(app.stringIDToTypeID("layer"), this.id);
    var descriptor = app.executeActionGet(ref1);
    return descriptor.getString(app.charIDToTypeID("Nm  "));
};

// ------- 类方法 -------
/**
 * 获取当前选中的图层
 * @return {Layer[]}
 */
Layer.getSelectedLayers = function () {
    // 创建一个ActionReference
    var selectedLayersReference = new ActionReference();
    // 给这个AR设置我们需要从AD中获取的属性值
    selectedLayersReference.putProperty(app.charIDToTypeID("Prpr"), app.stringIDToTypeID("targetLayersIDs"));
    // 目标对象是当前选中的文档
    selectedLayersReference.putEnumerated(app.charIDToTypeID("Dcmn"), app.charIDToTypeID("Ordn"), app.charIDToTypeID("Trgt"));
    var desc = app.executeActionGet(selectedLayersReference); // 拿到一个ActionDescriptor
    var layers = [];
    if (desc.hasKey(app.stringIDToTypeID("targetLayersIDs"))) {
        // 拿到的是一个ID列表，我们遍历它把每个id拿出来，然后实例化Layer对象
        var list = desc.getList(app.stringIDToTypeID("targetLayersIDs"));
        for (var i = 0; i < list.count; i++) {
            var ar = list.getReference(i);
            var layerId = ar.getIdentifier();
            layers.push(new Layer(layerId));
        }
    }
    return layers;
};
