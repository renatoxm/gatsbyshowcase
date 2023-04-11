import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const testimonialsJson = [
  {
    id: 1,
    name: 'Taylor Buckley',
    email: 'taylorbuckley@everest.com',
    company: 'Geekus',
    country: 'Yemen',
    text: 'Lorem consequat sint mollit labore voluptate cillum magna ea eu ipsum.',
  },
  {
    id: 2,
    name: 'Bradshaw Melendez',
    email: 'bradshawmelendez@geekus.com',
    company: 'Insource',
    country: 'Luxembourg',
    text: 'Do occaecat tempor voluptate velit ut incididunt cillum eu laboris cupidatat eiusmod anim enim enim.',
  },
  {
    id: 3,
    name: 'Nola Howell',
    email: 'nolahowell@insource.com',
    company: 'Utarian',
    country: 'Finland',
    text: 'Nulla cillum reprehenderit ad ut enim mollit.',
  },
  {
    id: 4,
    name: 'Estrada Jenkins',
    email: 'estradajenkins@utarian.com',
    company: 'Verbus',
    country: 'Georgia',
    text: 'Nostrud reprehenderit Lorem fugiat officia dolor cillum laborum exercitation.',
  },
  {
    id: 5,
    name: 'Griffin Frye',
    email: 'griffinfrye@verbus.com',
    company: 'Glasstep',
    country: 'Paraguay',
    text: 'Veniam ut exercitation ipsum sunt dolore.',
  },
  {
    id: 6,
    name: 'Joni Griffin',
    email: 'jonigriffin@glasstep.com',
    company: 'Retrotex',
    country: 'Saint Vincent and The Grenadines',
    text: 'Reprehenderit mollit sunt sint laborum ipsum occaecat proident.',
  },
  {
    id: 7,
    name: 'Ophelia Cobb',
    email: 'opheliacobb@retrotex.com',
    company: 'Qot',
    country: 'Virgin Islands (US)',
    text: 'Proident magna magna anim minim incididunt tempor tempor ipsum ad mollit.',
  },
  {
    id: 8,
    name: 'Kerry England',
    email: 'kerryengland@qot.com',
    company: 'Glukgluk',
    country: 'Romania',
    text: 'Adipisicing duis voluptate Lorem irure adipisicing excepteur minim laborum pariatur elit.',
  },
  {
    id: 9,
    name: 'Cara Golden',
    email: 'caragolden@glukgluk.com',
    company: 'Isostream',
    country: 'Somalia',
    text: 'Consectetur ex ullamco sit do aliqua magna consectetur Lorem minim et commodo.',
  },
  {
    id: 10,
    name: 'Kellie Gamble',
    email: 'kelliegamble@isostream.com',
    company: 'Vertide',
    country: 'Czech Republic',
    text: 'Ullamco ad exercitation nisi dolore voluptate commodo non exercitation occaecat.',
  },
]

const Testimonial = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            {testimonialsJson.map(
              (node: {
                id: number
                name: string
                company: string
                text: string
              }) => (
                <TabPanel>
                  <div className="rn-testimonial-content text-center">
                    <div className="inner">
                      <p>{node.text}</p>
                    </div>
                    <div className="author-info">
                      <h6>
                        <span>{node.name} </span> - {node.company}
                      </h6>
                    </div>
                  </div>
                </TabPanel>
              )
            )}

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
  )
}
export default Testimonial
