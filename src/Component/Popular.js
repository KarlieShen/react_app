import * as React from 'react'
import SummaryDataView from "../echarts/views/SummaryDataView"
import InterestDataView from "../echarts/views/InterestDataView"
import CharacterDataView from "../echarts/views/CharacterDataView"
import CareerDataView from "../echarts/views/CareerDataView"
import OrientationDataView from "../echarts/views/OrientationDataView"
import BubbleDataView from "../echarts/views/BubbleDataView"
import { setClassTypes, setGradeClassInfo, 
    setCareerType, setSubject,
    setRangesList
} from "../../common/DataAnalysisContext"


export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    constructor(props) {
        super(props); 
        this.state = {
            rangesList: [30,60,90],
            dataClass: 
                [
                    {
                        "typeID": 3,
                        "typeName": "行政班"
                    }
                ],
            dataCareerType: 
                [
                    {
                        "name": "企业型",
                        "typeID": 1
                    },
                    {
                        "name": "常规型",
                        "typeID": 2
                    },
                    {
                        "name": "艺术型",
                        "typeID": 3
                    },
                    {
                        "name": "研究型",
                        "typeID": 4
                    }
                ],
            dataSubject: 
                [
                    {
                        "name": "物理",
                        "subjectID": 1
                    },
                    {
                        "name": "生物",
                        "subjectID": 2
                    },
                    {
                        "name": "化学",
                        "subjectID": 3
                    },
                    {
                        "name": "政治",
                        "subjectID": 4
                    },
                    {
                        "name": "历史",
                        "subjectID": 5
                    },
                    {
                        "name": "地理",
                        "subjectID": 6
                    }
                ],
            dataGradeClassInfo: 
                [
                    {
                        "classes": [
                            {
                                "classID": 1,
                                "className": "一班",
                                "classTypeID": 3,
                                "classTypeName": "行政班"
                            }
                        ],
                        "gradeID": 1,
                        "gradeName": "高一"
                    },
                    {
                        "classes": [
                            {
                                "classID": 1,
                                "className": "一班",
                                "classTypeID": 3,
                                "classTypeName": "行政班"
                            }
                        ],
                        "gradeID": 2,
                        "gradeName": "高二"
                    },
                    {
                        "classes": [
                            {
                                "classID": 1,
                                "className": "一班",
                                "classTypeID": 3,
                                "classTypeName": "行政班"
                            }
                        ],
                        "gradeID": 3,
                        "gradeName": "高三"
                    }
                ] 
        };  
        setSubject(this.state.dataSubject); 
        setRangesList(this.state.rangesList);
        setCareerType(this.state.dataCareerType);
        setClassTypes(this.state.dataClass);
        setGradeClassInfo(this.state.dataGradeClassInfo);     
    }    

    render() {
        return (
            <div className="data-analyze-system">
                <div className="container" >    
                    <SummaryDataView key={1}/>
                    <BubbleDataView key={5}/>
                    <OrientationDataView key={6}/>
                    <CharacterDataView key={3}/>
                    <CareerDataView key={4}/>
                    <InterestDataView key={2}/>
                </div>                  
            </div>         
        )
    }
}