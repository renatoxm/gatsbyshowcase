import * as React from 'react'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

class CounterOne extends React.Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = (inView: boolean) => {
    if (inView) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    const Data = [
      {
        countNum: 199,
        countTitle: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.`,
      },
      {
        countNum: 575,
        countTitle: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.`,
      },
      {
        countNum: 69,
        countTitle: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.`,
      },
    ]

    return (
      <>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <h5 className="counter">
                <InView onChange={inView => this.onVisibilityChange(inView)}>
                  <CountUp
                    end={this.state.didViewCountUp ? value.countNum : 0}
                  />
                </InView>
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
}
export default CounterOne
