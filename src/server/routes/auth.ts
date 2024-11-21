import express, { Router } from 'express';
import { body, ValidationChain } from 'express-validator';
import { register, login, verifyEmail, forgotPassword, resetPassword } from '../controllers/auth';
import { authLimiter } from '../middleware/auth';
import { RequestHandler } from 'express';

const router: Router = express.Router();

const validateRequest = (validations: ValidationChain[]): RequestHandler[] => {
  return validations;
};

const registerValidation: ValidationChain[] = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('name').optional().trim(),
  body('organizationId').optional().trim(),
];

const loginValidation: ValidationChain[] = [
  body('email').isEmail().normalizeEmail(),
  body('password').exists(),
];

const forgotPasswordValidation: ValidationChain[] = [
  body('email').isEmail().normalizeEmail(),
];

const resetPasswordValidation: ValidationChain[] = [
  body('token').exists(),
  body('password').isLength({ min: 8 }),
];

router.post('/register', validateRequest(registerValidation), register);
router.post('/login', authLimiter, validateRequest(loginValidation), login);
router.get('/verify-email', verifyEmail);
router.post('/forgot-password', validateRequest(forgotPasswordValidation), forgotPassword);
router.post('/reset-password', validateRequest(resetPasswordValidation), resetPassword);

export default router;
