//数据分析系统中用到的全局数据：

//班级类别
let classTypes:Array<Object>;
export function setClassTypes( list:Array<Object> ){
	classTypes = list;
}

export function getClassTypes(){
	return classTypes;
}

//年级班级信息
let gradeClassInfo:Array<Object>;
export function setGradeClassInfo( list:Array<Object> ){
	gradeClassInfo = list;
}

export function getGradeClassInfo(){
	return gradeClassInfo;
}

//职业兴趣类型
let careerType:Array<Object>;
export function setCareerType( list:Array<Object> ){
	careerType = list;
}

export function getCareerType(){
	return careerType;
}

//学科名称
let subject:Array<Object>;
export function setSubject( list:Array<Object> ){
	subject = list;
}

export function getSubject(){
	return subject;
}

//分数范围
let rangesList;
export function setRangesList(list){
	rangesList = list;
}

export function getRangesList(){
	return rangesList;
}