import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/useAuthStore';
import { Button } from '../../ui/Button';
import './AuthModal.css'

export const AuthModal: React.FC = () => {
  const navigate = useNavigate();
  const isAuthModalOpen = useAuthStore(state => state.isAuthModalOpen);
  const closeAuthModal = useAuthStore(state => state.closeAuthModal);
  const login = useAuthStore(state => state.login);
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle body scroll lock & reset state
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStep(1);
      setPhone('');
      setOtp(['', '', '', '']);
      setIsLoading(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isAuthModalOpen]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep(2);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = useCallback(async () => {
    if (otp.every(digit => digit !== '') && !isLoading) {
      try {
        setIsLoading(true);
        // Mock API call simulation
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock token generation and storage
        const mockToken = `mock_jwt_token_${Math.random().toString(36).substring(7)}`;
        localStorage.setItem('auth_token', mockToken);
        
        login(phone);
        navigate('/dashboard');
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [otp, isLoading, phone, login, navigate]);

  useEffect(() => {
    if (otp.every(digit => digit !== '') && step === 2) {
      const timer = setTimeout(() => {
        handleVerify();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [otp, step, handleVerify]);

  if (!isAuthModalOpen) return null;

  // Use createPortal to render directly on document.body
  // This avoids any CSS stacking context issues from parent elements
  const modalContent = (
    <div className="auth-modal-overlay" onClick={closeAuthModal}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="auth-modal-close"
        >
          <X size={20} />
        </button>

        <div className="auth-modal-content">
          {step === 1 ? (
            <div>
              <div className="auth-modal-header">
                <h2 className="auth-modal-title">Welcome Back</h2>
                <p className="auth-modal-subtitle">Enter your phone number to continue</p>
              </div>

              <form onSubmit={handlePhoneSubmit}>
                <div className="auth-modal-form-group">
                  <label className="auth-modal-label">Phone Number</label>
                  <div className="auth-modal-input-wrapper">
                    <span className="auth-modal-country-code">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10 digit number"
                      className="auth-modal-input"
                      required
                      autoFocus
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-base" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Request OTP'}
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="auth-modal-header">
                <h2 className="auth-modal-title">Verify OTP</h2>
                <p className="auth-modal-subtitle">Sent to +91 {phone}</p>
              </div>

              <div className="auth-modal-otp-grid">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={el => { otpInputs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="auth-modal-otp-input"
                    disabled={isLoading}
                  />
                ))}
              </div>

              <Button
                type="button"
                onClick={handleVerify}
                variant="primary"
                className="w-full py-4 text-base"
                disabled={otp.some(d => !d) || isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify & Login'}
              </Button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="auth-modal-text-button"
                disabled={isLoading}
              >
                Change Phone Number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
