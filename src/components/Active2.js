import React, { Component } from "react";

export default class ActiveCampaignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://mariname86.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        this.setState({ formSubmitted: true });
        setTimeout(() => {
          this.setState({ formSubmitted: false });
        }, 5000);
      })
      .catch((error) => console.log("Request failed", error));
  }

  render() {
    const { formSubmitted } = this.state;

    return (
      <div>
        <h5>Join our mailing list!</h5>

        {formSubmitted && (
          <p>
            <strong>THANK YOU</strong> for joining our mailing list!
            <br />
            Check your inbox for a confirmation.
          </p>
        )}

        {!formSubmitted && (
          <form onSubmit={this.onSubmit}>
            <input type="hidden" name="u" value="9" />
            <input type="hidden" name="f" value="9" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="text" name="fullname" placeholder="yourname" />
            <input
              type="text"
              name="email"
              placeholder="ex: hello@youareawesome.com"
              required
            />
            <input type="submit" value="Submit" name="submit" />
          </form>
        )}
      </div>
    );
  }
}
