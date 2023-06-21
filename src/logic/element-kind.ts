import { Container, SampleQueue, sampleOptions } from "@/data/sample-origin";

declare var $: any;

export class ElementKind {

    constructor() {

    }

    onInit = () => {
        console.log(sampleOptions);
    }

    // 生成左侧样品选项
    createSample = () => {
        const accordionWarpper = $("<div></div>").addClass("accordion").attr("id", "accordionExample");
        let sampleContainerEle = "";
        sampleOptions.forEach((item: Container, key) => {
            sampleContainerEle += `
            <div class="card">
                <div class="card-header" id="heading${key}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse${key}" aria-expanded="true" aria-controls="collapseOne">
                            ${item.lable}
                        </button>
                    </h2>
                </div>
                <div id="collapse${key}" class="collapse" aria-labelledby="heading${key}"
                    data-parent="#accordionExample">
                    <div class="all-sample-container">
                        ${this.createSampleChildOptions(item.sampleQueues)}
                    </div>
                </div>
            </div>
            `
        });
        accordionWarpper.html(sampleContainerEle);
        return accordionWarpper;
    };
    createSampleChildOptions = (sampleQueues: SampleQueue[]) => {
        let SampleChildOptionsEle = "";
        sampleQueues.forEach(item => {
            SampleChildOptionsEle += `
                <div class="sample-warpper" property="sample">
                    <div class="header-image">
                        <img src="https://img2.baidu.com/it/u=383270751,11753504&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
                            alt=""> 
                    </div>
                    <div class="footer-describe">
                        ${item.name}
                    </div>
                </div>`;
        })
        return SampleChildOptionsEle;
    }
}