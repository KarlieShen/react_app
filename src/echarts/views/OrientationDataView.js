import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import { careerOrientation } from '../Echarts-demo/EchartsFactory' 
import { getCareerType } from "../../../common/DataAnalysisContext"


export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    constructor(props) {
        super(props);              
    }
    
    componentWillMount() {  
        this.setState({
            dataOrientation: 
                [
                    {
                        "enrollmentBatch": "一本",
                        "enrollmentDate": 2013,
                        "num": 200
                    },
                    {
                        "enrollmentBatch": "二本",
                        "enrollmentDate": 2013,
                        "num": 200
                    },
                    {
                        "enrollmentBatch": "专科",
                        "enrollmentDate": 2013,
                        "num": 200
                    },                        
                    {
                        "enrollmentBatch": "未录取",
                        "enrollmentDate": 2013,
                        "num": 200
                    },
                    {
                        "enrollmentBatch": "一本",
                        "enrollmentDate": 2015,
                        "num": 400
                    },
                    {
                        "enrollmentBatch": "二本",
                        "enrollmentDate": 2015,
                        "num": 400
                    },
                    {
                        "enrollmentBatch": "专科",
                        "enrollmentDate": 2015,
                        "num": 400
                    },                        
                    {
                        "enrollmentBatch": "未录取",
                        "enrollmentDate": 2015,
                        "num": 400
                    }
                ]
        })
    }

	handleOrientationChange = (value) => { 
    
    }

    render() {
        let { dataOrientation } = this.state;
        let dataCareerType = getCareerType();           
        return (
            <div >                                        
                <p className="text-bar-stack">历届职业倾向于升学能力比例图</p>
                <div className="career-orientation">
                    <EchartsContainer echartOption={careerOrientation(dataOrientation)} id="careerOrientation"/>
                </div>                
            </div>         
        )
    }
}