module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ["./src/layouts/**/*.astro","./src/pages/**/*.astro","./src/scripts/*.ts","./src/components/**/*.astro"],
  theme: {
    extend: {
      fontFamily: {
        flow: "Flow",
      },
      colors: ({ theme }) => ({
        slate: {
          1000: "#030E1C",
        },
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.gray.700"),
            hr: {
              borderColor: theme("colors.gray.100"),
              marginTop: "3em",
              marginBottom: "3em",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: "2.4em",
              lineHeight: "1.4",
            },
            h4: {
              marginTop: "2em",
              fontSize: "1.125em",
            },
            "h2 small, h3 small, h4 small": {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.gray.500"),
              fontWeight: 500,
            },
            "h2 small": {
              fontSize: theme("fontSize.lg")[0],
              ...theme("fontSize.lg")[1],
            },
            "h3 small": {
              fontSize: theme("fontSize.base")[0],
              ...theme("fontSize.base")[1],
            },
            "h4 small": {
              fontSize: theme("fontSize.sm")[0],
              ...theme("fontSize.sm")[1],
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            "ul > li": {
              paddingLeft: "1.75em",
            },
            "ul > li::before": {
              width: "0.75em",
              height: "0.125em",
              top: "calc(0.875em - 0.0625em)",
              left: 0,
              borderRadius: "999px",
              backgroundColor: theme("colors.gray.300"),
            },
            a: {
              fontWeight: theme("fontWeight.semibold"),
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.sky.300")}`,
            },
            "a:hover": {
              borderBottomWidth: "2px",
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: theme("colors.gray.900"),
              fontWeight: theme("fontWeight.semibold"),
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            code: {
              fontWeight: theme("fontWeight.medium"),
              fontVariantLigatures: "none",
            },
            pre: {
              color: theme("colors.gray.50"),
              borderRadius: theme("borderRadius.xl"),
              padding: theme("padding.5"),
              boxShadow: theme("boxShadow.md"),
              display: "flex",
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            "p + pre": {
              marginTop: `${-4 / 14}em`,
            },
            "pre + pre": {
              marginTop: `${-16 / 14}em`,
            },
            "pre code": {
              flex: "none",
              minWidth: "100%",
            },
            table: {
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("fontSize.sm")[1].lineHeight,
            },
            thead: {
              color: theme("colors.gray.700"),
              borderBottomColor: theme("colors.gray.200"),
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: theme("fontWeight.semibold"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.100"),
            },
            "tbody tr:last-child": {
              borderBottomWidth: "1px",
            },
            "tbody code": {
              fontSize: theme("fontSize.xs")[0],
            },
            "figure figcaption": {
              textAlign: "center",
              fontStyle: "italic",
            },
            "figure > figcaption": {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.400"),
            "h2, h3, h4, thead th": {
              color: theme("colors.gray.200"),
            },
            "h2 small, h3 small, h4 small": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.200"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
              opacity: "0.05",
            },
            pre: {
              boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
            },
            a: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.sky.400"),
            },
            strong: {
              color: theme("colors.gray.200"),
            },
            thead: {
              color: theme("colors.gray.300"),
              borderBottomColor: "rgb(148 163 184 / 0.2)",
            },
            "tbody tr": {
              borderBottomColor: "rgb(148 163 184 / 0.1)",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};