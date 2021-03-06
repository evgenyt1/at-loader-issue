module.exports = {
    entry: './src/index.ts',
    output: { filename: 'bundle.js', path: __dirname + "/dist" },
    resolve: { extensions: [".ts"] },
    module: { rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }] },
};

