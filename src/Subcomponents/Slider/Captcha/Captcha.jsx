import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
    return <ReCAPTCHA sitekey="Your client site key" onChange={() => console.log("changed!!")} style={{ marginTop: "2rem" }} elementID="enForm" />;
}

export default Captcha;
