import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import { bubble, pieRose } from '../Echarts-demo/EchartsFactory' 
import {  getGradeClassInfo, getCareerType, 
    getSubject, getRangesList 
} from "../../../common/DataAnalysisContext"

export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    constructor(props) {
        super(props);

        this.state = {};               
    }
    
    componentWillMount() { 
        this.setState({            
            rangesList: getRangesList(),
            dataSubject: getSubject(),
            dataCareerType: getCareerType(),
            dataGradeClassInfo: getGradeClassInfo(),
            dataBubble: [
                        {
                            "name": "ESTJ",
                            "num": 400,
                            "range": "0-30"
                        },
                        {
                            "name": "ESTJ",
                            "num": 420,
                            "range": "60-90"
                        },                     
                        {
                            "name": "ESTF",
                            "num": 550,
                            "range": "30-60"
                        },
                        {
                            "name": "INTJ",
                            "num": 680,
                            "range": "60-90"
                        },
                        {
                            "name": "ISTF",
                            "num": 400,
                            "range": "90-100"
                        },
                        {
                            "name": "ISTF",
                            "num": 680,
                            "range": "30-60"
                        }
                    ],
            dataRose: [
                {
                    "studentCount": 36,
                    "subjCombID": "1,5,6",
                    "subjCombName": "物史地"
                },
                {
                    "studentCount": 36,
                    "subjCombID": "2,5,7",
                    "subjCombName": "化史技"
                },
                {
                    "studentCount": 35,
                    "subjCombID": "1,2,4",
                    "subjCombName": "物化政"
                },
                {
                    "studentCount": 34,
                    "subjCombID": "1,2,3",
                    "subjCombName": "物化生"
                },
                {
                    "studentCount": 32,
                    "subjCombID": "2,3,5",
                    "subjCombName": "化生史"
                },
                {
                    "studentCount": 32,
                    "subjCombID": "1,3,7",
                    "subjCombName": "物生技"
                },
                {
                    "studentCount": 31,
                    "subjCombID": "1,2,6",
                    "subjCombName": "物化地"
                },
                {
                    "studentCount": 30,
                    "subjCombID": "1,4,5",
                    "subjCombName": "物政史"
                },
                {
                    "studentCount": 30,
                    "subjCombID": "1,3,6",
                    "subjCombName": "物生地"
                },
                {
                    "studentCount": 30,
                    "subjCombID": "3,4,7",
                    "subjCombName": "生政技"
                },
                {
                    "studentCount": 30,
                    "subjCombID": "2,5,6",
                    "subjCombName": "化史地"
                },
                {
                    "studentCount": 29,
                    "subjCombID": "3,4,5",
                    "subjCombName": "生政史"
                },
                {
                    "studentCount": 27,
                    "subjCombID": "1,2,5",
                    "subjCombName": "物化史"
                },
                {
                    "studentCount": 27,
                    "subjCombID": "2,4,7",
                    "subjCombName": "化政技"
                },
                {
                    "studentCount": 27,
                    "subjCombID": "2,4,6",
                    "subjCombName": "化政地"
                },
                {
                    "studentCount": 27,
                    "subjCombID": "5,6,7",
                    "subjCombName": "史地技"
                },
                {
                    "studentCount": 26,
                    "subjCombID": "4,5,6",
                    "subjCombName": "政史地"
                },
                {
                    "studentCount": 26,
                    "subjCombID": "1,2,7",
                    "subjCombName": "物化技"
                },
                {
                    "studentCount": 25,
                    "subjCombID": "1,4,7",
                    "subjCombName": "物政技"
                },
                {
                    "studentCount": 24,
                    "subjCombID": "1,3,4",
                    "subjCombName": "物生政"
                },
                {
                    "studentCount": 24,
                    "subjCombID": "3,5,6",
                    "subjCombName": "生史地"
                },
                {
                    "studentCount": 24,
                    "subjCombID": "2,4,5",
                    "subjCombName": "化政史"
                },
                {
                    "studentCount": 23,
                    "subjCombID": "2,6,7",
                    "subjCombName": "化地技"
                },
                {
                    "studentCount": 23,
                    "subjCombID": "1,4,6",
                    "subjCombName": "物政地"
                },
                {
                    "studentCount": 23,
                    "subjCombID": "1,3,5",
                    "subjCombName": "物生史"
                },
                {
                    "studentCount": 23,
                    "subjCombID": "2,3,6",
                    "subjCombName": "化生地"
                },
                {
                    "studentCount": 22,
                    "subjCombID": "2,3,4",
                    "subjCombName": "化生政"
                },
                {
                    "studentCount": 22,
                    "subjCombID": "2,3,7",
                    "subjCombName": "化生技"
                },
                {
                    "studentCount": 22,
                    "subjCombID": "4,6,7",
                    "subjCombName": "政地技"
                },
                {
                    "studentCount": 21,
                    "subjCombID": "3,5,7",
                    "subjCombName": "生史技"
                },
                {
                    "studentCount": 21,
                    "subjCombID": "3,4,6",
                    "subjCombName": "生政地"
                },
                {
                    "studentCount": 20,
                    "subjCombID": "4,5,7",
                    "subjCombName": "政史技"
                },
                {
                    "studentCount": 17,
                    "subjCombID": "1,5,7",
                    "subjCombName": "物史技"
                },
                {
                    "studentCount": 17,
                    "subjCombID": "1,6,7",
                    "subjCombName": "物地技"
                },
                {
                    "studentCount": 15,
                    "subjCombID": "3,6,7",
                    "subjCombName": "生地技"
                }
            ]
        })
    }

    handleBubbleChange = (value) => {  
          
    }
    handleRoseChange = (value) => {
        
    }

    
    render() {
        let {dataGradeClassInfo,dataSubject,dataRose,rangesList,dataBubble} = this.state     
        
        let subjectType = dataSubject.map((item) => {
            return item["name"]
        });
        let ranges = [0, ...rangesList, 100];
        let GradeInfo = dataGradeClassInfo.map((item) => {
            return item.gradeName;
        })        
        return (
            <div>
                <div className="bubble-rose" >
                    <div className="part-1" >
                        <p className="text-bar-stack">分布气泡图</p>
                        <div className="distributed-bubble">
                            <EchartsContainer echartOption={bubble(dataBubble, ranges)} id="distributedBubble"/>
                        </div>
                    </div>
                    <div className="part-2" >
                        <p className="text-bar-stack">选课结果玫瑰图谱</p>
                        <div className="elective-result-rose">
                            <EchartsContainer echartOption={pieRose(dataRose)} id="electiveResultRose"/>
                        </div>
                    </div>
                </div>            
            </div>         
        )
    }
}