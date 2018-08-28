import React from 'react';

export default class Terms extends React.PureComponent {
  render() {
    return (
      <div key="terms" className="app__terms app__route">
        <div className="container">
          <section className="app__terms__section1">
            <div className="row">
              <div className="col-12 col-lg-7">
                <div className="app__terms__section1__content">
                  <p className="app__terms__section1__content__title">
                    Terms and Conditions
                  </p>
                  <p className="app__terms__section1__content__subtitle">
                    Welcome to Aimedis B.V.
                  </p>
                  <p className="app__terms__section1__content__description1">
                    The Terms and Conditions outline the rules and regulation for the use of <span>Aimedis B.V.’s</span> Website
                  </p>
                  <p className="app__terms__section1__content__description2">
                    Sint Michaëlstraat 4, 5935 BL Steyl, Netherlands
                  </p>
                  <p className="app__terms__section1__content__description2">
                    Among the types of Personal Data that this Application collects, by itself or through third parties, there are: general activity data, body measurements & indexes, movement activity, food related activity , sleeping activity, heart rate and other vital data, blood type, gender, date of birth, Cookies, Usage Data, first name, last name, phone number, address, username, email address, password, company name, profession, fax number, country, state, province, ZIP/Postal code, city, picture, workplace, various types of Data, field of activity, User ID, marital status, website, billing address, house number, prefix , language, profile picture, budget and academic background.
                  </p>
                  <p className="app__terms__section1__content__description2">
                    Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
                  </p>
                  <p className="app__terms__section1__content__description2">
                    The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
                  </p>
                  <p className="app__terms__section1__content__subheader">
                    Cookies
                  </p>
                  <p className="app__terms__section1__content__description2">
                    Any use of Cookies – or of other tracking tools – by this Application or by the owners of third party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
                    <br/>
                    Users are responsible for any third party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
                  </p>
                  <p className="app__terms__section1__content__subheader">
                    License
                  </p>
                  <p className="app__terms__section1__content__description2">
                    The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="app__terms__mask d-none d-lg-block">
            <div className="app__terms__mask__bottom">
              <img src={require('assets/media/images/Group 8.png')} alt="No Image"/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
