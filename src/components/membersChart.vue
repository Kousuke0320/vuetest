<script>

var motivation
var management
var design
var communication
var system
var userName

/*
export default {
  extends: Radar,
  data () {
    return {
      datacollection: {
        labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
        datasets: [
          {
            label: userName,
                fillColor: "#FBB03B",
                strokeColor: "#FBB03B",
                pointColor: "#FBB03B",
                pointStrokeColor: "#FBB03B",
                pointHighlightFill: "#FBB03B",
                pointHighlightStroke: "#FBB03B",
                data: [motivation, design, management, communication, system]
          }
        ]
      }
    }
  },
  created () {
      userName = JSON.parse(localStorage.getItem('memberName')) || []
      var skillGet = firebase.database().ref('/users/userData/' + userName)
      skillGet.on('value', function(snapshot) {
        motivation = snapshot.val().motivation
        management = snapshot.val().management
        design = snapshot.val().design
        communication = snapshot.val().communication
        system = snapshot.val().system
      })
      
      },
  mounted () {
      this.renderChart(this.datacollection, {
        pointLabelFontSize : 12,
        scaleOverride : true,
        scaleSteps : 8,
        scaleStepWidth : 2,
        scaleStartValue : 0,
        responsive: true,
        maintainAspectRatio: false})  
 },
 updated () {
   this.renderChart(this.datacollection, {
        pointLabelFontSize : 12,
        scaleOverride : true,
        scaleSteps : 8,
        scaleStepWidth : 2,
        scaleStartValue : 0,
        responsive: true,
        maintainAspectRatio: false})
 },
 methods: {
  }
}
*/

import {Radar , mixins} from 'vue-chartjs'
export default {
  extends: Radar,
  mixins: [mixins.reactiveProp], // reactivePropを使用
  props: {
    chartData: Object // 親コンポーネントからchartDataを受け取る
  },
  mounted () {
    Chart.defaults.global.defaultFontColor = '#00A29A';
      this.renderChart(this.chartData, {
        legend: {
          display:false,
        },
        scale: {
          ticks: {
          min:0,
          max:10,
          display:false
          },
          gridLines:{
          //color: '#00A29A'
          }
        },
        pointLabelFontSize : 12,
        scaleOverride : false,
        scaleSteps : 8,
        scaleStepWidth : 2,
        scaleStartValue : 0,
        responsive: true,
        maintainAspectRatio: false})

　 }
　}




/*
import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}*/
/*
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#00A29A',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
*/

/*
abels: [“ラベル1", “ラベル2", “ラベル3", “ラベル4", “ラベル5"],
        datasets: [
            {
                label: "レーダーチャート",
                fillColor: "rgba(200,0,0,0.2)",
                strokeColor: "red",
                pointColor: "red",
                pointStrokeColor: "red",
                pointHighlightFill: "red",
                pointHighlightStroke: "red",
                data: [6, 12, 10, 18, 2]
            }
        ]
    };
    var ctx = document.getElementById("radarChart").getContext("2d");
    var options = {
        pointLabelFontSize : 12,
        scaleOverride : true,
        scaleSteps : 8,
        scaleStepWidth : 2,
        scaleStartValue : 0
    };
    var radarChart = new Chart(ctx).Radar(data, options);*/
</script>