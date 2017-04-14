/**
 * Created by ljs on 2017/2/27.
 */



'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text} from 'react-native';
import {Button} from 'react-native-apex-ui';

const {AXHorizontalBarChart}=require('react-native-apex-charts');

const legend = {
    enabled: true,
    font: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

};

const yaxis = {
    labelFont: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
    },
    labelPosition: 'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin: 0
};

const xaxis = {
    labelPosition: 'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,

};

const parameter = {
    highlightPerTapEnabled: true,
    defaultHighlight:{
        x:1,
        dataSetIndex:0,
        stackIndex:1,
    },
}

class AXBarChartStackExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXHorizontalBarChart style={{flex:1}}
                        legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                        rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                        xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
  }}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],

    dataSets:
      [
        {
          yVals: [[10,1],[7,2],[6,3],[9,4],[6,5]],
          stackLabels: ['label 1','label2'],
          colors: ['#ff3b30','#33ffff']
        }
      ]
    }
  }/>

        </View>;
    }
}


class AXBarChartMultiExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXHorizontalBarChart style={{flex:1}}
                        legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                        rightAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                        xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
  }}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    dataSets:
      [{
        yVals: [10,10,10,10,20],
        label: 'label 1',
        color: '#ff3b30'
      },
      {
        yVals: [10,10,10,10,20],
        label: 'label 2',
        color: '#ffe377'
      },
      ]




    }
  }/>

        </View>;
    }
}

class AXBarChartBaseExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXHorizontalBarChart style={{flex:1}}
                        parameter={parameter}
                        onChartValueSelected={(e)=>{console.log("==>",e)}}
                        legend={{
    enabled: true,
    font: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    textColor: 'black',
    form: 'square',

  }}
                        leftAxis={{
    labelFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    labelPosition:'outside',
    labelTextColor: 'black',
    labelCount: 4,
    forceLabelsEnabled: true,
    drawGridLinesEnabled: false,
    drawAxisLineEnabled: false,
    customAxisMin:0
  }}
                        xAxis={{
    labelPosition:'bottom',
    enabled: true,
    drawGridLinesEnabled: true,
    drawAxisLineEnabled: true,
  }}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    dataSets:
      [{
        yVals: [10,10,10,10,20],
        label: 'label 1',
        color: '#ff3b30',
        axisDependency: 'left',
        highlightColor:'#cccccc',
      }]




    }
  }/>

        </View>;
    }
}


class AXBarChartCombineExample extends Component {

    render() {


        return <View style={{height:300}}>
            <AXHorizontalBarChart style={{flex:1}}
                        parameter={parameter}
                        legend={legend}
                        rightAxis={yaxis}
                        xAxis={xaxis}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    barWidth:0.3,
    dataSets:
      [
        {
          yVals: [[10,1],[7,2],[6,3],[9,4],[6,5]],
          stackLabels: ['label 1','label2'],
          colors: ['#ff3b30','#33ffff'],
          highlightColor:'#4ecc4a9f',
        },
        {
        yVals: [10,10,10,10,20],
        label: 'label 1',
        color: '#464aff',
        highlightColor:'red',
      }
      ]
    }
  }/>

        </View>;
    }
}

class AXBarChartChangeExample extends Component {

    constructor() {
        super();
        this.state = {
            yValues: [10, 10, 10, 10, 20],
        };
    }

    render() {


        return <View style={{height:300}}>
            <Button
                caption='change'
                style={[ {borderWidth: 1}]}
                onPress={()=>{this.setState({yValues:[4,1,23,20,10]})}}
            />
            <AXHorizontalBarChart style={{flex:1}}
                        legend={legend}
                        rightAxis={yaxis}
                        xAxis={xaxis}
                        data={{
    valueFont: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: 12,
    },
    xVals: ['1998','2001','2003','2006','2008'],
    barWidth:0.3,
    dataSets:
      [
        {
            yVals: this.state.yValues,
            label: 'label 1',
            color: '#464aff'
        }
      ]
    }
  }/>

        </View>;
    }
}

module.exports = {
    title: 'AXHBarChartExample',
    description: '水平柱状图',
    examples: [

        {
            title: 'AXHBarChart-简单',
            render: () => <AXBarChartBaseExample/>
        },
        {
            title: 'AXHBarChart-堆',
            render: () => <AXBarChartStackExample/>
        },
        {
            title: 'AXHBarChart-并排',
            render: () => <AXBarChartMultiExample/>
        },
        {
            title: 'AXHBarChart-复合',
            render: () => <AXBarChartCombineExample/>
        },
        {
            title: 'AXHBarChart-change',
            render: () => <AXBarChartChangeExample/>
        },

    ]
}
