import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 15, //takes time in seconds i.e 15 second
  limit: 2,

  message: {
    success: false,
    message: "Too many request, please try again",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
