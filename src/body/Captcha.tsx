import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: Function;
  style?: any;
}

export default class Captcha extends React.Component<CaptchaProps> {
  captcha: any;
  constructor(props: CaptchaProps) {
    super(props);
    this.captcha = React.createRef();
  }

  render() {
    const { onVerify, ...rest } = this.props;
    return (
      <ReCAPTCHA
        ref={this.captcha}
        sitekey="6Led9a8UAAAAAJV5q2v6C_U33C6CiUP_kjwqXSpu"
        onChange={(captcha) => onVerify(captcha)}
        {...rest}
      />
    );
  }
}
