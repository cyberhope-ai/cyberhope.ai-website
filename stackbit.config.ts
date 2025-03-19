import { defineStackbitConfig } from '@stackbit/sdk';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [
        {
            "name": "sanity",
            "sanity": {
                "projectId": "qpk3k6kb",
                "dataset": "production"
            }
        }
    ],
    "presetSource": {
        "type": "files",
        "baseDir": "public/preset"
    },
    "styleObjectModelName": "style",
    "models": {}
})