export function getNodeHealth() {
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  return health;
}
