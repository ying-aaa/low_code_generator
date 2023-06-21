import { evn } from "./may-extend/subscriber";

declare var $: any;

export class PitchKind {
    handEle: Element | null;
    constructor() {
        this.handEle = null;

        evn.$on("pitchPageEle", (dom: any) => {
            // 如果为空
            $(this.handEle)?.find(`div[property="control"]`).remove();
            // // 如果点击的元素有 property 为 instance，并且新点击的元素不是已选元素
            if (dom?.attr("property") === "instance" ) {
                this.createControlBox(dom);
            }
            this.handEle = dom;
            console.log("%c Line:18 🍺 this.handEle", "color:#465975", this.handEle);
        })

    }

    // 生成元素控制框
    private createControlBox = (ele: any) => {
        const controlBox1 = $(`<div property="control"></div>`);
        const controlBox2 = $(`<div property="control"></div>`);
        const controlBox3 = $(`<div property="control"></div>`);
        const controlBox4 = $(`<div property="control"></div>`);

        controlBox1.css({
            "width": "100%",
            "height": "2px",
            "background": "#0000ff",
            "position": "absolute",
            "top": "0px"
        })
        controlBox2.css({
            "width": "100%",
            "height": "2px",
            "background": "#0000ff",
            "position": "absolute",
            "bottom": "0px"
        })
        controlBox3.css({
            "width": "2px",
            "height": "100%",
            "background": "#0000ff",
            "position": "absolute",
            "bottom": "0px",
            "left": "0px"
        })
        controlBox4.css({
            "width": "2px",
            "height": "100%",
            "background": "#0000ff",
            "position": "absolute",
            "bottom": "0px",
            "right": "0px"
        })

        ele.append(controlBox1);
        ele.append(controlBox2);
        ele.append(controlBox3);
        ele.append(controlBox4);
    }
}