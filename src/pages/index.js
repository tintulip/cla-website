import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Find out more",
  url: "https://example.com/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Lorem ipsum",
    url: "https://example.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "#E95800",
  },
  {
    text: "Nullam ut",
    url: "https://example.com/",
    description:
      "Fusce et nulla eu purus aliquet tristique eget eu justo. Vivamus non purus sodales, auctor nulla at, ultrices lorem.",
    color: "#1099A8",
  },
  {
    text: "Nullam nec",
    url: "https://example.com/",
    description:
      "Maecenas ut odio porttitor, blandit nisl lacinia, suscipit lacus. Nullam ut metus eu ligula ultrices viverra nec ac leo.",
    color: "#BC027F",
  },
  {
    text: "Duis laoreet",
    url: "https://example.com/",
    description:
      "Phasellus tincidunt velit sit amet hendrerit ultrices.",
    color: "#0D96F2",
  },
  {
    text: "Aliquam orci lacus",
    url: "https://example.com/",
    description:
      "Morbi sit amet nibh condimentum, ullamcorper augue in, bibendum enim. Aliquam ut diam eget felis efficitur venenatis id vel mi.",
    color: "#8EB814",
  },
  {
    text: "Sed vitae",
    url: "https://example.com/",
    badge: true,
    description:
      "Aliquam sed mauris imperdiet nunc lobortis sagittis eget at tortor. Etiam semper eros lobortis sapien porta, at fringilla turpis suscipit.",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Creative Licensing Agency</title>
      <h1 style={headingStyles}>
        Creative Licensing Agency
        <br />
        <span style={headingAccentStyles}>— Licensing for Creatives by Creatives! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <code style={codeStyles}>Proin eget facilisis nulla.</code> Ut posuere nibh augue, nec finibus sem fringilla eget.
        Etiam ultricies tincidunt quam quis blandit. Duis laoreet ante a consequat tincidunt. Nullam nec varius sapien. Donec eu nunc vitae nunc mollis rhoncus gravida vel nulla.
        Aliquam orci lacus, facilisis at varius ac, scelerisque in nibh. Sed vitae neque rutrum, gravida lorem viverra, interdum dolor.{" "}
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
