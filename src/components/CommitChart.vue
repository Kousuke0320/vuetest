<script>
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
import {Radar} from 'vue-chartjs'

var motivation = JSON.parse(localStorage.getItem('motivation')) || []
var management = JSON.parse(localStorage.getItem('management')) || []
var design = JSON.parse(localStorage.getItem('design')) || []
var communication = JSON.parse(localStorage.getItem('communication')) || []
var system = JSON.parse(localStorage.getItem('system')) || []

export default {
  extends: Radar,
  data () {
    return {
      datacollection: {
        labels: ['Motivation', 'design', 'Management', 'Communication', 'System'],
        datasets: [
          {
            label: "レーダーチャート",
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
  mounted () {
    this.renderChart(this.datacollection, {
        pointLabelFontSize : 12,
        scaleOverride : true,
        scaleSteps : 8,
        scaleStepWidth : 2,
        scaleStartValue : 0,
        responsive: true,
        maintainAspectRatio: false})
  }
}

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