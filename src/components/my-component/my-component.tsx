import { Component, State, h } from "@stencil/core";

@Component({
  tag: "my-component"
})
export class MyComponent {
  constructor() {
    window.setTimeout(() => {
      this.options = ["foo", "bar"];
    }, 4000);
  }

  @State() options = ["foo"];

  render() {
    return [
      <anj-select placeholder="options" value="foo">
        {this.options.map(opt => (
          <anj-option key={opt} value={opt}>
            {opt}
          </anj-option>
        ))}
      </anj-select>
    ];
  }
}
