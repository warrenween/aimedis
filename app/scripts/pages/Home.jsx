import React from 'react';
import GetEarlyAccess from 'components/GetEarlyAccess'
import VideoMask from 'components/VideoMask'
import Avatar from 'components/Avatar'
import Title from 'components/Title'
import Item from 'components/Item'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <div className="container">
          <div className="row app__home__section1">
            <div className="col-lg-6 col-md-12">
              <div className="app__home__section1__header">Aimedis is the health platform of the future.</div>
              <div className="app__home__section1__subheader d-none d-lg-block">Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.</div>
              <div className="app__home__section1__image d-block d-lg-none">
                <VideoMask />
              </div>
              <div className="app__home__section1__get__access">
                <GetEarlyAccess />
              </div>
              <div className="app__home__section1__terms">By filling my email and clicking on “GET EARLY ACCESS“  I agree to the <span>Conditions Of Use</span> and the <span>Data Protection Policy</span>.</div>
            </div>
            <div className="col-lg-6 d-none d-lg-block app__home__section1__image">
              <VideoMask />
            </div>
          </div>
          <div className="row app__home__section2">
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
            <div className="col-lg-2 col-md-6">
              <Avatar src="" />
            </div>
          </div>
          <div className="row app__home__section2">
            <Title title="What Aimedis offers" subtitle="Platform features" />
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6 offset-lg-3">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6 offset-lg-3">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
            <div className="col-lg-3 col-md-6">
              <Item title="Your health data in one place" icon="" src="" />
            </div>
          </div>
          <div className="row app__home__section3">
            <div className="col-lg-6 col-md-12">
              <Title title="The Technology" subtitle="forward thinking" />
              <p>Blockchain smart contracts smart graphs artificial intelligence highest security standards payments cryptocurrencies ICD ATC HL7 FHIR HIPPA IHE DICOM.</p>
              <p>Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help patients to support each other on a new level.</p>
              <a href="#">DOWNLOAD TECH SPEC (3.4 MB)</a>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="row">
                <div className="col-lg-6">
                  <Item title="Optimal Security" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="Blockchain & Smart contracts" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="Smart graphs & AI" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="Payment & cryptocurrencies" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="AIMSafe drug safety" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="ICD 10" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="HL7, FHIR, DICOM, HIPAA, IHE" icon="" />
                </div>
                <div className="col-lg-6">
                  <Item title="ATC" icon="" />
                </div>
              </div>
            </div>
            <div className="row app__home__section3">
              <div className="col-lg-6 col-md-12">
                <Title title="Aimedis Ecosystem" subtitle="Platform Overview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
