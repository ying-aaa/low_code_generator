import { evn } from "./may-extend/subscriber";

declare var $: any;


export class PageKind {
    PageEle: Element;
    ParentWarpper: Element | null;

    constructor() {
        this.PageEle = $(".footer-page");
        this.ParentWarpper = null;

        this.onInit();
    }

    onInit = () => {
        const self: any = this;

        // 设置放置目标
        $(this.PageEle).droppable({
            greedy: true,
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            accept: ":not(.ui-sortable-helper)",
            drop: function (event: any, ui: any) {

                // 只有是左侧样品列表拖拽出来的才能够在主视图中生成元素
                if(ui.draggable.attr("property") !== "sample") return;
                
                const resizableElem = $(`<div class="resizable" property="instance"></div>`)
                    .text(ui.draggable.text())


                // 缩放和拖动范围限制
                resizableElem.appendTo(this)
                    .resizable({ containment: ".footer-page" })
                    .draggable({ containment: ".footer-page" });

            }
        }).sortable({});


        // 当前选中元素
        $(this.PageEle).on("click", function (event: any) {
            // 如果选中根, 则传递空
            if (event.target === self.PageEle[0]){
               
                return self.pitchPageEle(null);

            }
            self.pitchPageEle($(event.target));

        })
    }

    // 左侧导航栏的点击事件处理函数
     pitchPageEle(dom: Element) {
        
        this.ParentWarpper = dom;
        // 发布事件
        // this.$emit('pitchPageEle', this.ParentWarpper);
        evn.$emit('pitchPageEle', this.ParentWarpper);
    }

}
