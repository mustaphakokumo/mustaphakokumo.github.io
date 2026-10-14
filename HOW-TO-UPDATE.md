# Updating your website

You never need to install anything. Every change is made on github.com in
the browser, and the site updates by itself about a minute after you save.

## The four files you will edit

| What you want to change | File |
|---|---|
| Name, title, email, address, profile links (Scholar, LinkedIn…), research interests | `_config.yml` |
| Your bio paragraph | `index.md` |
| Papers, abstracts, coauthors, presentations | `_data/research.yml` |
| Teaching | `_data/teaching.yml` |
| CV and photo | upload into the `assets` folder |

## How to edit a file

1. Open the repository on github.com and click the file (for example `_data`
   → `research.yml`).
2. Click the pencil icon (top right of the file).
3. Make the change.
4. Click **Commit changes…**, write a short note such as "Add abstract", and
   click **Commit changes**.
5. Wait about a minute and reload the site.

## Common tasks

### Add an abstract

In `_data/research.yml`, find the paper. Put the text on the lines under
`abstract: |`, indented by two more spaces than the word `abstract`:

```yaml
      abstract: |
        First sentence of the abstract. Second sentence, which can run
        over several lines as long as they stay indented.

        A blank line starts a second paragraph.
```

You can use *italics* with `*stars*` and links with `[text](https://…)`.

### Add a presentation

Under the paper's `presentations:` line:

```yaml
      presentations:
        - venue: EUI Microeconometrics Working Group
          year: 2025
        - venue: Conference name, City
          year: 2026
```

### Add a coauthor

```yaml
      coauthors:
        - name: Allen Magsino
          url: https://allenmagsino.com
```

Leave `url:` empty if they have no website.

### Link a paper (PDF or SSRN)

Paste the address after `link:`. The title becomes clickable. To host the PDF
yourself, upload it to the `assets` folder first (Add file → Upload files) and
use `link: /assets/your-file.pdf`.

### Add a new paper

Copy the template at the top of `_data/research.yml`. The new paper must line
up exactly with the papers above it (same number of spaces before `- title:`).

### Move a paper to "Publications"

Remove the `#` at the start of the three `Publications` lines in
`_data/research.yml`, then move the paper's block under `papers:` there.

### Replace your CV or photo

1. Open the `assets` folder → **Add file** → **Upload files**.
2. Upload the file with exactly this name, which replaces the old one:
   - CV: `Mustapha_Kokumo_CV.pdf`
   - Photo: `photo.jpg` (portrait shape, about 800 × 1000 pixels)
3. Commit.

## If something goes wrong

YAML (the `.yml` files) cares about spaces. If the site stops updating after
a change:

1. Open the **Actions** tab of the repository. A red ✗ means the last change
   broke the build; click it to see the line number.
2. The usual causes are wrong indentation, a tab instead of spaces, or a
   title containing a colon. Put such a title in quotes:
   `title: "Who Should Go Where: The Role of Job Referrals"`.
3. To undo, open the file's **History**, pick the previous version and copy
   it back.

The old version of the site stays online until a change builds correctly, so
a mistake never takes the site down.
