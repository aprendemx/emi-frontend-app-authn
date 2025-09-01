import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from '@openedx/paragon';

const TermsAndPrivacy = ({
  honorCode,
  privacyPolicy,
  onHonorCodeChange,
  onPrivacyPolicyChange,
  honorCodeError,
  privacyPolicyError,
}) => {
  // URL temporal mientras se crean las páginas específicas
  const redirectUrl = 'https://emi.aprende.gob.mx/news';

  const handleHonorCodeClick = () => {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePrivacyPolicyClick = () => {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="terms-and-privacy mb-3">
      {/* Código de Honor */}
      <div className="d-flex align-items-start mb-2">
        <Form.Checkbox
          id="honorCode"
          name="honorCode"
          checked={honorCode}
          onChange={onHonorCodeChange}
          className="me-2"
        />
        <div className="d-flex align-items-center flex-wrap">
          <span className="me-2">He leído y acepto el</span>
          <Button
            variant="link"
            className="p-0 text-decoration-underline text-primary"
            onClick={handleHonorCodeClick}
            size="sm"
          >
            Código de honor de la Plataforma
          </Button>
        </div>
      </div>
      {honorCodeError && (
        <div className="text-danger-300 small mb-2 ms-4">
          {honorCodeError}
        </div>
      )}

      {/* Aviso de Privacidad */}
      <div className="d-flex align-items-start mb-2">
        <Form.Checkbox
          id="privacyPolicy"
          name="privacyPolicy"
          checked={privacyPolicy}
          onChange={onPrivacyPolicyChange}
          className="me-2"
        />
        <div className="d-flex align-items-center flex-wrap">
          <span className="me-2">He leído y acepto el</span>
          <Button
            variant="link"
            className="p-0 text-decoration-underline text-primary"
            onClick={handlePrivacyPolicyClick}
            size="sm"
          >
            Aviso de privacidad de la Plataforma
          </Button>
        </div>
      </div>
      {privacyPolicyError && (
        <div className="text-danger-300 small mb-2 ms-4">
          {privacyPolicyError}
        </div>
      )}
    </div>
  );
};

TermsAndPrivacy.propTypes = {
  honorCode: PropTypes.bool.isRequired,
  privacyPolicy: PropTypes.bool.isRequired,
  onHonorCodeChange: PropTypes.func.isRequired,
  onPrivacyPolicyChange: PropTypes.func.isRequired,
  honorCodeError: PropTypes.string,
  privacyPolicyError: PropTypes.string,
};

TermsAndPrivacy.defaultProps = {
  honorCodeError: '',
  privacyPolicyError: '',
};

export default TermsAndPrivacy;
