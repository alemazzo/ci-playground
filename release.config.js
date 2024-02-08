var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/commit-analyzer",
        {
            "preset": "conventionalcommits"
        }
    ],
    [
        "@semantic-release/release-notes-generator",
        {
            "preset": "conventionalcommits"
        }
    ],
    "@semantic-release/release-notes-generator",
    [
        "@semantic-release/npm",
        {
            "npmPublish": false
        }
    ],
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
)
config.branches = ["main"]
module.exports = config