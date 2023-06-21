import { ElementKind } from "@/logic/element-kind";
import { PageKind } from "@/logic/page-kind";
import { SampleKind } from "@/logic/sample-kind";
import { OperateKind } from "./logic/operate-kind";
import "../style.less";
import { PitchKind } from "./logic/pitch-kind";
import { Ecb } from "./test/ecb";

console.log("%c Line:10 🌭", "color:#ea7e5c");

class MainKind {
    constructor(
        private ElementKind: ElementKind,
        private PageKind: PageKind,
        private SampleKind: SampleKind,
        private operateKind: OperateKind,
        private SchemaKind: PitchKind
    ) {
        this.onInit();
    }

    onInit = () => {
        // 创建样品元素
        this.SampleKind.createSample(this.ElementKind.createSample());
    }
}
new MainKind(new ElementKind, new PageKind, new SampleKind,new OperateKind, new PitchKind);



// const ecb = new Ecb();
// const params = {
//   identity: 'abcdeftest',
//   from: 1,
//   type: 1,
//   timestamp: Math.floor(Date.now() / 1000),
// };
// const result = ecb.getEncrypted('MCSk1i2n3g4y5e6f', params);
// console.log("%c Line:39 🥑 result", "color:#33a5ff", result);