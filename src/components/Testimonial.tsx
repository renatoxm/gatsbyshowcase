import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Testimonial = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allData {
      nodes {
        id
        name
        company
        text
      }
    }
  }`)
    return (
      <>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              {data.allData.nodes.map((node: { text: string; name: string; company: string; }) => (
                <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      {node.text}
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>{node.name} </span> - {node.company}
                    </h6>
                  </div>
                </div>
              </TabPanel>
              ))}

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-3.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-4.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-5.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-6.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-7.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/images/client/testimonial-8.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </>
    );
}
export default Testimonial;
