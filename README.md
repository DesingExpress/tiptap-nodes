# [TipTap](https://github.com/ueberdosis/tiptap) Nodes

The headless rich text editor framework for web artisans.

## 🚧 Working in progress

## Nodes Structure

```bash
 Tiptap
 └── Tiptap[Core]
```

## 🔲Include Nodes

### `Tiptap[Core]` Node

```litegraph
{
  "title": "DirectoryPicker",
  "inputs": [
    { "label": "plugins", "type":"tiptap::plugins,array" }
  ],
  "outputs": [
    { "label": "component", "type":"component" }
  ]
}
```

#### Slots

##### Inputs

| Label       | Type                      | Description |
| ----------- | ------------------------- | ----------- |
| **plugins** | `tiptap::plugins`,`array` |             |

##### Outputs

| Label         | Type        | Description |
| ------------- | ----------- | ----------- |
| **component** | `component` |             |

---

&nbsp;
&nbsp;

## Sources

[Github repository [ DesingExpress/tiptap-nodes ]](https://github.com/DesingExpress/tiptap-nodes)

## License

[MIT](https://mit-license.org/)
