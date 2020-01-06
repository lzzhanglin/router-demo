import React,{ Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/pie'


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {value:23,name:'aaa'},
                {value:26,name:'bbb'},
                {value:13,name:'ccc'},
                {value:20,name:'ddd'},
                {value:16,name:'eee'},
                {value:36,name:'fff'},
                {value:29,name:'ggg'},
                {value:7,name:'hhh'},
                {value:41,name:'iii'},
                {value:3,name:'jjj'},
            ]
               
              
        }
    }
    
    getOption = ()=>{
        return {
            title : {
                text: '同名数量统计',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data:['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj'],
        
            },
            series : [
                {
                    name: '姓名',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: this.state.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                }
            ]
        }
    }
    componentDidMount() {
        const dashboardChart = echarts.init(document.getElementById('dashboardChart'));
        const option = this.getOption();
        dashboardChart.setOption(option);

    }
    

    render(){
        return(
            <div id="dashboardChart" style={{height:400}}>
                
            </div>
          
      )
    }
}




export default Dashboard