module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/__test__/database-simulator/client-singleton.ts'],
    testMatch: ['**/__test__/test/*.test.ts']
}