
import { PitchKind } from "./pitch-kind";

declare var $: any;



export class OperateKind extends PitchKind {

    constructor() {
        super();


        this.onInit();
    }

    onInit = () => {
        const obj = new PitchKind();
        setInterval(() => {
            console.log("%c Line:21 🌽 operationType", "color:#f5ce50", obj);
            
        }, 1000);
        $(document).on("click", (event: any) => {

            
            // 查找点击元素有没有控件控制属性
            const operationType: any = $(event.target).attr("operation");

            // 没有或者当前未选择控件元素则不向下执行
            if (!operationType || !this.handEle) return;

            if (operationType !== "u" && operationType !== "i") {
                $(this.handEle).parent().css({ ...this.operationCurry()[operationType], "display": "flex" });
            } else {
                $(this.handEle).css(this.operationCurry()[operationType]);
            }

        })

    }

    operationCurry(): { [key: string]: {} } {
        return {
            "q": {
                "justifyContent": "start"
            },
            "w": {
                "justifyContent": "center"
            },
            "e": {
                "justifyContent": "end"
            },
            "r": {
                "alignItems": "start"
            },
            "t": {
                "alignItems": "center"
            },
            "y": {
                "alignItems": "end"
            },
            "u": {
                "width": "100%"
            },
            "i": {
                "height": "100%"
            }
        }
    }



}