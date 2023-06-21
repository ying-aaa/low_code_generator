export interface SampleQueue {
    name: string;
    coverPhoto: string;
    type?: string
}

export interface Container {
    lable: string;
    sampleQueues: SampleQueue[];
}

export type Data = Container[];

export const sampleOptions: Data = [
    {
        lable: "容器",
        sampleQueues: [
            {
                name: "容器-111",
                coverPhoto: "",
                type: ``
            },
            {
                name: "容器-222",
                coverPhoto: "",
                
            },
            {
                name: "容器-333",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "图片",
        sampleQueues: [
            {
                name: "图片-111",
                coverPhoto: ""
            },
            {
                name: "图片-222",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "文字",
        sampleQueues: [
            {
                name: "文字-111",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "布局",
        sampleQueues: [
            {
                name: "布局-111",
                coverPhoto: ""
            },
            {
                name: "布局-222",
                coverPhoto: ""
            },
            {
                name: "布局-333",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "按钮",
        sampleQueues: [
            {
                name: "按钮-111",
                coverPhoto: ""
            },
            {
                name: "按钮-222",
                coverPhoto: ""
            },
            {
                name: "按钮-333",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "表格",
        sampleQueues: [
            {
                name: "表格-111",
                coverPhoto: ""
            },
            {
                name: "表格-222",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "表单",
        sampleQueues: [
            {
                name: "表单-111",
                coverPhoto: ""
            },
            {
                name: "表单-222",
                coverPhoto: ""
            },
            {
                name: "表单-333",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "菜单",
        sampleQueues: [
            {
                name: "菜单-111",
                coverPhoto: ""
            },
            {
                name: "菜单-222",
                coverPhoto: ""
            },
        ]
    },
    {
        lable: "弹出框",
        sampleQueues: [
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            },
            {
                name: "弹出框-111",
                coverPhoto: ""
            }
        ]
    },
    {
        lable: "图表",
        sampleQueues: [
            {
                name: "图表-222",
                coverPhoto: ""
            }
        ]
    }
]