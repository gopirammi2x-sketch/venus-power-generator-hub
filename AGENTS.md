<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Define generator categories centrally in `src/config/business.ts`; derive enquiry options and displayed ranges from them to keep prime ratings consistent.
- Render the service map from locally stored geographic district boundary data, not a schematic outline or generated bitmap, to preserve accurate boundaries and crisp labels.
