// Points every download link with data-release-repo="<github repo url>" to that repo's
// latest release (pre-releases included). The static href stays as the fallback.
export function linkLatestReleases() {
  document.querySelectorAll<HTMLAnchorElement>("a[data-release-repo]").forEach(a => {
    const m = a.dataset.releaseRepo!.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!m) return;
    fetch(`https://api.github.com/repos/${m[1]}/${m[2]}/releases`, { cache: "no-store" })
      .then(res => res.json())
      .then(releases => { if (Array.isArray(releases) && releases.length > 0) a.href = releases[0].html_url; })
      .catch(err => console.error(`Error obteniendo releases para ${m[2]}:`, err));
  });
}
