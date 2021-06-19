function toCaptalize(string) {
  return `${string?.charAt(0).toUpperCase()}${string?.slice(1)}`.replace('-', ' ')
}

export { toCaptalize }