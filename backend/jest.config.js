module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/__tests__/database-simulator/singleton.simulator.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
}