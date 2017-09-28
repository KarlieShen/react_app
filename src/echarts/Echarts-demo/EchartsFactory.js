import echarts from 'echarts'
//男女比例同心圆
export function circle(dataCircle) {
    let data = [dataCircle.male, dataCircle.female];  //分别为男女生人数
    let option = {
	    title: {
	        left: '30%',
	        text: '男女比例',
	        textStyle: {
	            fontSize: '16',
	            color: '#aaa',
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'男女比例',
	            type:'pie',
	            center: ['50%', '55%'],
	            radius: ['30%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '12',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {
	                    value:data[0], 
	                    name:'男生',
	                    itemStyle:{
                        normal: {
                            color: '#375ffc'
                        }
                    }	                    
	                },
	                {
	                    value:data[1], 
	                    name:'女生',
	                    itemStyle:{
                            normal: {
                                color: '#ff0000'
                            }
                        }
	                }
	            ]
	        }
	    ]
	};
    return option;
}

//学习能力与学科兴趣
export function barStackInterest(dataBarStack, ranges) {
	let result = ranges.map((item) => {
		return item.toString()
	}).map((item,index,arr)=> {
		if (index !== arr.length-1) {
			return item + "-" + arr[index+1]
		} else {
			return item
		}
	})	
	result.splice(result.length-1,1);
	let dataSource = dataBarStack.abilityAndInterest || [];
    let subjectType = dataSource.map((item) => {
        return item.name;
    }).filter((type, index, arr) => {
        return arr.indexOf(type) === index
    });  
    let source = [];
    source.length = subjectType.length;
    source.fill({});
    source = subjectType.map((item, index) => {
        return {subject: item, score: []}
    })
    for (let i=0; i<source.length; i++) {
        let arr = [];let addData = [];
        addData.length = result.length;
        addData.fill(0);
        arr = dataSource.filter((item) => {
            return item.name === source[i].subject
        });                     
        arr.forEach((item) => {
			result.forEach((ran, index) => {
				if(item.range === ran) {
					addData[index] += item.num
				}
			})         
        })
        source[i].score = addData;
    };            
	let color = ['pink', 'green', '#ffbf00', 'purple', 'skyblue', 'rgb(156, 237, 185)'];
	let range = result;
	let data = source;
	
    let	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "学分区间: {b}  <br/>学科兴趣：{a}<br />人数：{c} <br/>",
	    },
	    grid: {
	        left: '12%',
	        right: '12%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            axisTick: {
	                show: false
	            },
	            data : range
	        }
	    ],
	    yAxis : [
	        {
	        	splitNumber: 2,
    	        name: '人数',
    	        nameLocation: 'middle',
    	        nameTextStyle: {
    	            fontSize: 14
    	        },
	            nameGap: 55,
	            type : 'value',
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            }
	        }
	    ], 
	    series : data.map((item, index) => {
	        return {
	            name: item.subject,
	            data: item.score,
	            barWidth: '80%',
	            type:'bar',
	            stack: '物理',
	            itemStyle: {
	                normal: {
	                    color: color[index]
	                }
	            }
	        }
	    })
	};
	return option;
}

//分布气泡图 complete
export function bubble(dataBubble, ranges) {
	console.log('bling');
	console.log(ranges);
	let result = ranges.map((item) => {
		return item.toString()
	}).map((item,index,arr)=> {
		if (index !== arr.length-1) {
			return item + "-" + arr[index+1]
		} else {
			return item
		}
	})
	result.splice(result.length-1,1);	
	let range = result; 
	let color = ['pink', '#ffbf00', 'purple', 'skyblue', 'rgb(156, 237, 185)'];
	let type = dataBubble.map((item) => { //ESTJ ESTF
		return item.name
	}).filter((type, index, arr) => {
        return arr.indexOf(type) === index
    });
	let source = [];
	source.length = type.length;
	source.fill({});
	
	source = type.map((item, index) => {
	    return {name: item, data: []}
	})
	console.log(type);
	for (let i=0; i<source.length; i++) {
		let arr = [];let addData = [];
        addData.length = result.length;
        addData.fill(0);
		arr = dataBubble.filter((item) => {
		    return item.name === source[i].name
		});
		arr.forEach((item) => {
			result.forEach((ran, index) => {
				if(item.range === ran) {
					addData[index] = item.num
				}
			})         
        })
		source[i].data = addData;
	};
    let option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "科目：物理<br/>职业性格：{a}<br/>分数区间: {b} <br/>人数： {c}"
	    },
	    backgroundColor: '#fff',
	    legend: {
	    	left: '25',
	        data: type,
	    },
	    grid: {	
	        bottom: '15%',
	        show: true,
	        containLabel: true,
	    },
	    xAxis: {
	        name: '分数区间',
	        nameLocation: 'middle',
	        nameTextStyle: {
	            fontSize: 14
	        },
	        nameGap: 55,
	        type : 'category',
		    data : range,
		    axisTick: {
	                show: false
	        },
	        axisLabel: {
	            rotate: -90,
	        },
	        splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee',
                    type: 'solid'
                }
            }
	    },
	    yAxis: {
	        name: '人数',
	        nameLocation: 'middle',
	        nameTextStyle: {
	            fontSize: 14
	        },
	        nameGap: 35,
	        splitLine: {
	            lineStyle: {
	                color: '#eee',
	                type: 'solid'
	            }
	        },
	        splitNumber: 3,
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	                show: false
	            },
	        scale: true
	    },
	    series: source.map((item, index) => {
	    	return {
	    		center: ['50%', '50%'],
	    		name: item.name,
	    		data: item.data,
	    		type: 'scatter',
	    		symbolSize: function (data) {
	            	return Math.sqrt(data);
	            },
	            itemStyle: {
	                normal: {
	                    color: color[index]
	                }
	            }
	    	}
	    })
	};
	return option;
}

//选课结果玫瑰图谱 complete
export function pieRose(dataRose) {
	//console.log(dataRose);	
	let Xaxisname = dataRose.map((item) => {
		return item.subjCombName
	});
	let data = dataRose.map((item) => {
		return {value: item.studentCount, name: item.subjCombName}
	});
	let option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a}： {b}  <br/>人数：{c} "
		    },
		    legend: {
		        left: '25px',
		        data: Xaxisname,
		    },
		    calculable : true,
		    series : [
		        {
		            name:'选课',
		            type:'pie',
		            radius : [70, 120],
		            center : ['50%', '70%'],
		            roseType : 'radius',
		            label: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: false
		                }
		            },
		            lableLine: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:data
		        }
		    ]
	};
	return option;
}

//历届职业倾向于升学能力比例图 complete
export function careerOrientation(dataCareer) {
	let years = [2013, 2014, 2015, 2016, 2017];
	var arr = dataCareer || [];              
    var Batch = arr.map((item) => {
        return item.enrollmentBatch;
    }).filter((type, index, arr) => {
        return arr.indexOf(type) === index
    });  
    var source = [];
    source.length = Batch.length;
    source.fill({});
    source = Batch.map((item, index) => {
        return {name: item, data: []}
    })
    
    for (let i=0; i<Batch.length; i++) {    
    	let enrollmentNum = [];let addData = [];
        addData.length = years.length;
        addData.fill(0);     
        enrollmentNum = arr.filter((item) => {
            return item.enrollmentBatch === Batch[i]
        });                               
        enrollmentNum.forEach((item) => {
        	years.forEach((year, index) => {
        		if(year === item.enrollmentDate) {
					addData[index] = item.num
				}
        	})                                  
        }) 
        source[i].data = addData;                                        
    };         	
	let range = years;
	let data = source;
	let option = {	   
	    tooltip: {
	        trigger: 'item',
	        axisPointer: {
	            type: 'shadow'
	        },
	        formatter: "录取年份：{b}<br/>录取批次：{a} <br/>录取人数: {c} "
	    },
	    legend: {
	    	top: '3%',
	        left: '3%',
	        data: data.map((item) => {
	            return item.name
	        })
	    },
	    grid: {
	        top: '10%',
	        left: '10%',
	        right: '10%',
	        bottom: '10%',
	        containLabel: true
	    },
	    xAxis: {
	        name: '人数',
	        nameLocation: 'middle',
	        nameTextStyle: {
	            fontSize: 14
	        },
	        max: 1700,
	        axisTick: {
	                show: false
	        },
	        nameGap:34,
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        axisTick: {
	            show: false
	        },
	        name: '年份',
	        nameLocation: 'middle',
	        nameTextStyle: {
	            fontSize: 14
	        },
	        nameGap: 60,
	        type: 'category',
	        data: range
	    },
	    series: data.map((item) => {
	        return {
	            name: item.name,
	            type: 'bar',
	            data: item.data
	        }
	    })
	};
	return option;
}
//历次考试分析
export function narrowBarStack() {
	//X轴的显示标签，考试时间
	let testTime = ['2017-03-12','2017-03-22','2017-04-12','2017-04-22','2017-05-12','2017-05-22','2017-06-12','2017-06-22','2017-07-12','2017-07-22','2017-08-12','2017-08-22','2017-09-12','2017-09-22','2017-10-12','2017-10-22','2017-11-12','2017-11-22','2017-12-12','2017-12-22'];
	let data = [
            {
                //同一科目在不同考试时间所得平均分
                name: '物理',
                score: [520, 532, 601, 1134, 990,520, 532, 601, 1134, 990,1134, 990,520, 532, 601, 1134, 990,520, 532, 601]
                
            },
            {
                name: '生物',
                score: [520, 532, 501, 534, 590,590,520, 532, 501, 534, 590,590,520, 532, 501, 534, 590,590,520, 532]
                
            },
            {
                name: '化学',
                score: [720, 782, 691, 734, 490,490,720, 782, 691, 734, 490,490,720, 782, 691, 734, 490,490,720, 782]
                
            },
            {
                name: '地理',
                score: [550, 632, 701, 754, 490,490,490,550, 632, 701, 754, 490,550, 632, 701, 754, 490,490,490,550]
                
            },
            {
                name: '历史',
                score: [862, 518, 964, 626, 1679,1679,862, 518, 964, 626, 1679,1679,862, 518, 964, 626, 1679,1679,862, 518]
                
            },
            {
                name: '政治',
                score: [620, 732, 701, 734, 1090,1090,620, 732, 701, 734, 1090,1090,620, 732, 701, 734, 1090,1090,620, 732]
                
            }
           ]

    let	option = {       
	    tooltip : {
	        trigger: 'item',
	        formatter: "考试时间: {b}<br/>班级：全部<br/>学年： 高二<br/>学生： 平均分<br />科目：{a} <br />分数：{c}分",
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	    	top: 20,
	    	left: 35,
	        data:[data[0].name, data[1].name, data[2].name, data[3].name, data[4].name, data[5].name]
	    },
	    grid: {
	    	top: '15%',
	        left: '12%',
	        right: '4%',
	        bottom: '12%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            axisLabel: {
	                interval:0,
	                rotate: -90
	            },
	            axisTick: {
	                show: false
	            },
	            type : 'category',
	            data : testTime
	        }
	    ],
	    yAxis : [
	        {
    	        name: '分数',
    	        nameLocation: 'middle',
    	        nameTextStyle: {
    	            fontSize: 14
    	        },
	            nameGap: 55,
	            type : 'value',
	            axisTick: {
	                show: false
	            },
	            axisLine: {
	                show: false
	            }
	        }
	    ], 
	    series : [
	        {
	            name: data[0].name,
	            type: 'bar',
	            stack: '物理',
	            data: data[0].score,
	            itemStyle: {
	                normal: {
	                    color: '#ffbf00'
	                }
	            },
	            barWidth: '22%'
	        },
	        {
	            name:data[1].name,
	            type:'bar',
	            stack: '物理',
	            itemStyle: {
	                normal: {
	                    color: '#787eaa'
	                }
	            },
	            data:data[1].score
	        },
	        {
	            name:data[2].name,
	            type:'bar',
	            stack: '物理',
	            itemStyle: {
	                normal: {
	                    color: '#ff9966'
	                }
	            },
	            data:data[2].score
	        },
	        {
	            name:data[3].name,
	            type:'bar',
	            stack: '物理',
	            itemStyle: {
	                normal: {
	                    color: 'pink'
	                }
	            },
	            data:data[3].score
	        },
	        {
	            name:data[4].name,
	            type:'bar',
	            stack: '物理',
	            itemStyle: {
	                normal: {
	                    color: 'blue'
	                }
	            },
	            data:data[4].score
	        },
	        {
	            name:data[5].name,
	            data:data[5].score,
	            type:'bar',
	            itemStyle: {
	                normal: {
	                    color: '#e68a00'
	                }
	            },
	            stack: '物理',
	        }
	    ]
	};
	return option;
}
//意向专业统计
export function bar() {
	var dataAxis = ['计算机类','教育学类', '戏剧与影视类','工程管理类','心理学类','设计学类','社会学类',
               '历史学类', '艺术学理论类','新闻传播学类','音乐与舞蹈学类','经济学类','中国语言文学类',
               '生物科学类', '临床医学类','化学类','法学类','外国语言文学类','美术学类','中医学类','基础医学类'];
	var data = [10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220];
	var yMax = 500;
	var dataShadow = [];

	for (var i = 0; i < data.length; i++) {
	    dataShadow.push(yMax);
	}
	let option = {
	    xAxis: {
	        data: dataAxis,
	        nameGap:55,
	        axisLabel: {
	            inside: false,
	            interval:0,
	            rotate: -90,
	            textStyle: {
	                color: '#333'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        z: 10
	    },
	    yAxis: {
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#999'
	            }
	        }
	    },
	    grid: {
	    	bottom: '25%',
	    	containLabel: true
	    },
	    dataZoom: [
	        {
	            type: 'inside'
	        }
	    ],
	    series: [
	        { // For shadow
	            type: 'bar',
	            itemStyle: {
	                normal: {color: 'rgba(0,0,0,0.05)'}
	            },
	            barGap:'-100%',
	            barCategoryGap:'40%',
	            data: dataShadow,
	            animation: false
	        },
	        {
	            type: 'bar',
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#83bff6'},
	                            {offset: 0.5, color: '#188df0'},
	                            {offset: 1, color: '#188df0'}
	                        ]
	                    )
	                },
	                emphasis: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#2378f7'},
	                            {offset: 0.7, color: '#2378f7'},
	                            {offset: 1, color: '#83bff6'}
	                        ]
	                    )
	                }
	            },
	            data: data
	        }
	    ]
	};
	return option;
}
