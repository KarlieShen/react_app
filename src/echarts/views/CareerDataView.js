import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import { narrowBarStack } from '../Echarts-demo/EchartsFactory' 

export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    constructor(props) {
        super(props);               
    } 
    
    render() {
        return (
                <div >                                         
                    <p className="text-bar-stack">历次考试结果统计</p>
                    <div className="bar-stack">
                        <EchartsContainer echartOption={narrowBarStack()} id="narrowbarstack"/>
                    </div>   
                </div>                  
                    
        )
    }
}