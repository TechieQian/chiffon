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
        sitekey="6LfMO8kZAAAAAK2V-IlMzGrJJgRdyI-ih-Si7XMY"
        onChange={(captcha) => onVerify(captcha)}
        {...rest}
      />
    );
  }
}
