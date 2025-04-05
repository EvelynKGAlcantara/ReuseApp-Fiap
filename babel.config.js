module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ["babel-preset-expo", {
                jsxImportSource: "nativewind"
            }],
            "nativewind/babel",
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "chrome": "49",
                        "ios": "10"
                    }
                }
            ]
        ],

        plugins: [
            ["module-resolver", {
                root: ["./"],
                alias: {
                    "@": "./",
                    "tailwind.config": "./tailwind.config.js"
                }
            }]
        ]
    };
};
