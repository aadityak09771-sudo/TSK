import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export const AuthModal: React.FC = () => {
  const navigate = useNavigate();
  const isAuthModalOpen = useAuthStore(state => state.isAuthModalOpen);
  const closeAuthModal = useAuthStore(state => state.closeAuthModal);
  const login = useAuthStore(state => state.login);
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
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

  const handleVerify = () => {
    if (otp.every(digit => digit !== '')) {
      // Show mock loading state if needed, but for now direct login
      login(phone);
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    if (otp.every(digit => digit !== '') && step === 2) {
      const timer = setTimeout(() => {
        handleVerify();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [otp, step]);

  if (!isAuthModalOpen) return null;

  // Use createPortal to render directly on document.body
  // This avoids any CSS stacking context issues from parent elements
  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={closeAuthModal}
    >
      <div
        style={{
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '28rem',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#9CA3AF',
            borderRadius: '9999px',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: '2.5rem' }}>
          {step === 1 ? (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: 0 }}>Welcome Back</h2>
                <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>Enter your phone number to continue</p>
              </div>

              <form onSubmit={handlePhoneSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.5rem' }}>Phone Number</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6B7280', fontWeight: 500 }}>+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Enter 10 digit number"
                      style={{
                        width: '100%',
                        paddingLeft: '3.5rem',
                        paddingRight: '1rem',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        backgroundColor: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        borderRadius: '0.75rem',
                        outline: 'none',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                      }}
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-base">
                  Request OTP
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', margin: 0 }}>Verify OTP</h2>
                <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>Sent to +91 {phone}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={el => { otpInputs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    style={{
                      width: '3.5rem',
                      height: '4rem',
                      textAlign: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      backgroundColor: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      borderRadius: '0.75rem',
                      outline: 'none',
                    }}
                  />
                ))}
              </div>

              <Button
                type="button"
                onClick={handleVerify}
                variant="primary"
                className="w-full py-4 text-base"
                disabled={otp.some(d => !d)}
              >
                Verify & Login
              </Button>

              <button
                type="button"
                onClick={() => setStep(1)}
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#2563EB',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
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
