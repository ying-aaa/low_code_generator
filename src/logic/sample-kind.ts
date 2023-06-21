declare var $: any;

export class SampleKind {
    SampleEle: Element;

    constructor() {
        this.SampleEle = $(".sider-sample");
        this.onInit();
    }

    onInit = () => {
        $(document).on("dragstart", ".sample-warpper", (event: any) => {
            $(event.currentTarget).draggable({
                // helper: 'clone', // 拖拽时使用克隆
                helper: () => {
                    const helperElem = $(`<div style="color: 'yellow';">Hello World!</div>`);
                    return helperElem;
                }, // 拖拽时自定义生成元素
                revert: 'invalid', // 拖拽未放置到目标上时恢复原位
                addClasses: false, // 禁用默认添加类名的行为
                cursor: "grabbing",
                classes: {
                    'ui-draggable-dragging': 'ant-sample-dragging', // 自定义拖拽时添加的类名
                    // 'ui-draggable-helper': 'ant-sample-dragging' // 自定义拖拽 helper 添加的类名
                },
                start: function (event: any, ui: any) {
                    $(this).css('opacity', 0.5); // 将原来的元素透明度降低
                    const offsetX = event.pageX - ui.offset.left;
                    const offsetY = event.pageY - ui.offset.top;
                    ui.helper.css('cursorAt', { left: offsetX, top: offsetY });
                },
                darg: function(){
                    console.log("当前在拖拽");
                },
                stop: function (event: any, ui: any) {
                    $(this).css('opacity', 1); // 恢复原来的元素透明度
                }
            });
        });
    }

    createSample = (SampleOptions: Element) => {
        this.SampleEle.append(SampleOptions);
    }
}
