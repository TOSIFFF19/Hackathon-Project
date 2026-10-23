# AI Career Navigator: architecture inspection

## A. Project structure and technologies

The repository contains:

- `README.md` — a two-line project placeholder.
- `hello.py` — a Python “hello world” example.
- `.github/copilot-instructions.md` — repository guidance describing the project as a minimal documentation-focused scaffold.

**Found in code:** The only executable example is Python. No JavaScript, frontend framework, module system, package manifest, or test setup is present. No `package.json` or other relevant application configuration was found.

**Found in documentation:** The repository guidance says there are no build, test, or lint commands and recommends keeping the project structure simple.

## B. Student profile input contract

**Not yet defined.** No student profile form, profile schema, or related frontend code was found. No profile fields can be confirmed from this repository.

## C. Career data contract

**Not yet defined.** No career data, career schema, or roadmap data was found. There are no actual field names or representative data examples to report.

## D. Existing recommendation and frontend integration interfaces

- **Recommendation function:** Not found; there is no signature or call site.
- **Frontend output contract:** Not found; no frontend or expected recommendation response shape is defined.
- **Imports/callers:** No related JavaScript imports or function calls were found.

## E. Missing decisions that require team confirmation

Before implementing the engine, agree with the frontend and Career Database Specialist on:

1. The exact profile field names, types, and required/optional status.
2. The career and roadmap data shape, including stable career identifiers and any skill/interest fields used for matching.
3. The recommendation function’s input/output shape, ranking behavior, and handling of incomplete profiles or ties.
4. The JavaScript runtime/module convention and where tests will live once application tooling is introduced.

These are open decisions, not existing project contracts.

## F. Suggested module location and test approach

**Recommendation:** Keep the first reusable, deterministic module as a root-level `recommendations.js` until the team establishes an application directory convention. Export a pure function that accepts the agreed profile and career data and returns the agreed result shape; do not add assumed fields or data.

**Test approach:** Once JavaScript tooling is agreed, test fixed profile/career inputs and verify exact output shape, ranking, repeatability, and edge cases such as missing optional values and ties. The repository currently has no JavaScript test runner or test command, so no test command can be recommended as an existing convention.

## G. Files inspected

- `README.md`
- `hello.py`
- `.github/copilot-instructions.md`
- Repository top-level file listing (to check for package manifests and configuration)
