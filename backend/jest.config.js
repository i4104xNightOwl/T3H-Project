module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@handlers/(.*)$': '<rootDir>/src/handlers/$1'
    },
    setupFiles: ['<rootDir>/src/test/setup.ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts',
        '!src/test/**/*.ts',
    ],
}; 