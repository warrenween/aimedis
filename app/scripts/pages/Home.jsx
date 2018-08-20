import React from 'react';
import GetEarlyAccess from 'components/GetEarlyAccess'
import VideoMask from 'components/VideoMask'
import Avatar from 'components/Avatar'
import Title from 'components/Title'
import Item from 'components/Item'
import Overview from '../components/Overview';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <div className="container">
          <div className="row app__home__section app__home__section1">
            <div className="col-lg-6 col-md-12">
              <div className="app__home__section1__header display">Aimedis is the health platform of the future.</div>
              <div className="app__home__section1__subheader subheader d-none d-lg-block">Aimedis has been developed by doctors for patients, doctors and hospitals - designed to give patients the complete control over their health data and support.</div>
              <div className="app__home__section1__image d-block d-lg-none">
                <VideoMask />
              </div>
              <div className="app__home__section1__get__access">
                <GetEarlyAccess />
              </div>
              <div className="app__home__section1__terms caption">By filling my email and clicking on “GET EARLY ACCESS“  I agree to the <span>Conditions Of Use</span> and the <span>Data Protection Policy</span>.</div>
            </div>
            <div className="col-lg-5 offset-lg-1 d-none d-lg-block app__home__section1__image">
              <VideoMask />
            </div>
          </div>
          <div className="row app__home__section app__home__section2">
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
          <div className="row app__home__section app__home__section3">
            <div className="col-md-12 text-center">
              <Title title="What Aimedis offers" subtitle="Platform features" />
            </div>
            <div className="col-lg-3 col-6 text-center">
              <Item title="Your health data in one place" icon="your-health-data-in-one-place" src="" align="center" active="true" />
            </div>
            <div className="col-lg-3 col-6 mb-lg-5 mb-3 text-center">
              <Item title="Videochat with doctors" icon="your-health-data-in-one-place" src="" align="center" active="true" />
            </div>
            <div className="col-lg-3 col-6 mb-lg-5 mb-3 text-center">
              <Item title="Doctors appointments" icon="your-health-data-in-one-place" src="" align="center" active="true" />
            </div>
            <div className="col-lg-3 col-6 offset-lg-3 mb-lg-5 mb-3 text-center">
              <Item title="Independent Second Opinion" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
            <div className="col-lg-3 col-6 mb-lg-5 mb-3 text-center">
              <Item title="Connect fitness trackers" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
            <div className="col-lg-3 col-6 mb-lg-5 mb-3 text-center">
              <Item title="Care for your family" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
            <div className="col-lg-3 col-6 offset-lg-3 mb-lg-5 mb-3 text-center">
              <Item title="Prescription online" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
            <div className="col-lg-3 col-6 mb-lg-5 mb-3 text-center">
              <Item title="Medical tourism" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
            <div className="col-lg-3 col-6 text-center">
              <Item title="Your health data in one place" icon="your-health-data-in-one-place" src="" align="center" />
            </div>
          </div>
          <div className="row app__home__section app__home__section4">
            <div className="col-lg-5 col-md-12">
              <div className="row">
                <div className="text-center text-lg-left mx-auto ml-lg-0">
                  <Title title="The Technology" subtitle="forward thinking" />
                </div>
                <p className="app__home__section4__subtitle">Blockchain smart contracts smart graphs artificial intelligence highest security standards payments cryptocurrencies ICD ATC HL7 FHIR HIPPA IHE DICOM.</p>
                <p className="app__home__section4__subtitle">Soon Aimedis will offer much more including AIMSocial - the interactive patient platform that is secured and supported by a blockchain and help patients to support each other on a new level.</p>
                <button className="app__home__section4__download body btn btn__secondary ml-0" type="button">DOWNLOAD TECH SPEC (3.4 MB)</button>
              </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
              <div className="row">
                <div className="col-lg-6 margin-align">
                  <Item title="Optimal Security" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="Blockchain & Smart contracts" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="Smart graphs & AI" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="Payment & cryptocurrencies" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="AIMSafe drug safety" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="ICD 10" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="HL7, FHIR, DICOM, HIPAA, IHE" icon="your-health-data-in-one-place" align="left" />
                </div>
                <div className="col-lg-6 margin-align">
                  <Item title="ATC" icon="your-health-data-in-one-place" align="left" />
                </div>
              </div>
            </div>
          </div>
          <div className="row app__home__section app__home__section5">
            <div className="col-12 text-center">
              <Title title="Aimedis Ecosystem" subtitle="Platform Overview" />
            </div>
            <div className="col-12 col-md-5">
              <Overview order="1" title="Fully responsive" subtitle="In every actual browser" />
              <Overview order="2" title="Multilanguage" subtitle="also fully functional abroad" />
              <Overview order="3" title="Easy to use" subtitle="also for unexperienced patients simple & fast" />
              <Overview order="4" title="ISO 21007 certification" subtitle="For optimal security through regular security audits" />
              <Overview order="5" title="Tested by doctors & hospitals" subtitle="Tested by active physicians and medical IT specialists" />
            </div>
            <div className="col-md-7">
              <img src={require(`assets/media/images/IMac.png`)} alt='No Image' />
            </div>
          </div>
          <div className="row app__home__section app__home__section6">
            <div className="col-12 text-center">
              <Title title="Testimonials" subtitle="what users say" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
