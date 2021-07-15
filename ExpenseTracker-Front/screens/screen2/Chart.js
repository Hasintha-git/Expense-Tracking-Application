import React, { Component } from 'react'
import {VictoryBar, VictoryChart, VictoryGroup, VictoryPie} from 'victory-native'

const data={
  expense:[
    {x:'07/02/21',y:50000},
    {x:'07/05/21',y:40000},
  ],
}
export default class Chart extends Component {
  render() {
    return (
      <>
      <View style>
      {/* <VictoryChart> */}
        {/* <VictoryGroup> */}
          <VictoryPie data={data.expense}/>
          {/* <VictoryChart/> */}
        {/* </VictoryGroup> */}
      {/* </VictoryChart> */}
      </View>
      </>
    )
  }
}
