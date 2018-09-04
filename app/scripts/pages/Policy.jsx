import React from 'react';

export default class Policy extends React.PureComponent {
  render() {
    return (
      <div key="policy" className="app__policy app__route">
        <div className="container">
          <section className="app__policy__section1">
            <div className="row">
              <div className="col-12 col-lg-7">
                <div className="app__policy__section1__content">
                  <p className="app__policy__section1__content__title">
                    Policy
                  </p>
                  <p className="app__policy__section1__content__description">
                    Among the types of Personal Data that this Application collects, by itself or through third parties, there are: general activity data, body measurements & indexes, movement activity, food related activity , sleeping activity, heart rate and other vital data, blood type, gender, date of birth, Cookies, Usage Data, first name, last name, phone number, address, username, email address, password, company name, profession, fax number, country, state, province, ZIP/Postal code, city, picture, workplace, various types of Data, field of activity, User ID, marital status, website, billing address, house number, prefix , language, profile picture, budget and academic background.
                  </p>
                  <p className="app__policy__section1__content__description">
                    Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
                    <br />
                    The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
                  </p>
                  <p className="app__policy__section1__content__subtitle1">
                    Mode and place of processing the Date
                  </p>
                  <p className="app__policy__section1__content__subtitle2">
                    Methods of processing
                  </p>
                  <p className="app__policy__section1__content__description">
                    Any use of Cookies – or of other tracking tools – by this Application or by the owners of third party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
                    <br />
                    Users are responsible for any third party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="app__policy__mask d-none d-lg-block">
            <div className="app__policy__mask__bottom">
              <img src={require('assets/media/images/Group 8.png')} alt="No Asset" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
