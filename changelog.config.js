module.exports = {
  disableEmoji: true,
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'config', 'ci', 'perf', 'revert', 'release', 'style'],
  maxMessageLength: 74,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues'],
  types: {
    test: {
      description: 'Adding missing tests',
      emoji: '',
      value: 'test',
    },
    feat: {
      description: 'A new feature',
      emoji: '',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '',
      value: 'fix',
    },
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '',
      value: 'chore',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '',
      value: 'docs',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '',
      value: 'refactor',
    },
    config: {
      description: 'A change that affects project configuration only',
      emoji: '',
      value: 'config',
    },
    ci: {
      description: 'CI related changes',
      emoji: '',
      value: 'ci',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '',
      value: 'perf',
    },
    revert: {
      description: 'Revert a previous code change',
      emoji: '',
      value: 'revert',
    },
    release: {
      description: 'Create a release commit',
      emoji: '',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '',
      value: 'style',
    },
  },
};
