import { hash, compare } from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};
const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
const validateEmail = (email) => {
  const pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return pattern.test(email);
};
const validatePhone = (phone) => {
  const pattern = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;
  return pattern.test(phone);
};
const validatePassword = (password) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/gm;
  return pattern.test(password);
};
function checkPasswordStrength(pw) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (strongRegex.test(pw)) return "قوی";
  if (pw.length >= 6) return "متوسط";
  return "ضعیف";
}
const accessSecret = new TextEncoder().encode(process.env.AccessTokenSecretKey);
const refreshSecret = new TextEncoder().encode(
  process.env.RefreshTokenSecretKey
);

const ACCESS_EXPIRE_SECONDS = 60 * 15; // 15 دقیقه
const REFRESH_EXPIRE_SECONDS = 60 * 60 * 24 * 7; // 7 روز

export async function signAccessToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ACCESS_EXPIRE_SECONDS}s`)
    .sign(accessSecret);
}

export async function signRefreshToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${REFRESH_EXPIRE_SECONDS}s`)
    .sign(refreshSecret);
}

export async function verifyAccessToken(token) {
  try {
    const { payload } = await jwtVerify(token, accessSecret);
    return payload;
  } catch {
    throw new Error("Access token invalid");
  }
}

export async function verifyRefreshToken(token) {
  try {
    const { payload } = await jwtVerify(token, refreshSecret);
    return payload;
  } catch {
    throw new Error("Refresh token invalid");
  }
}
export {
  hashPassword,
  verifyPassword,
  checkPasswordStrength,
  validateEmail,
  validatePhone,
  validatePassword,
};
