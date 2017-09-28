import * as React from 'react'
import EchartsContainer from '../EchartsContainer'
import { bar } from '../Echarts-demo/EchartsFactory' 

export default class SchoolDataAnalysis extends React.Component<SchoolDataAnalysisProps, SchoolDataAnalysisState> {
    render() {
        return (
            <div>
                <p className="text-bar-stack">意向专业统计</p>
                <div className="bar-stack">
                    <EchartsContainer echartOption={bar()} id="bar"/>
                </div>
            </div>

        )
    }
}