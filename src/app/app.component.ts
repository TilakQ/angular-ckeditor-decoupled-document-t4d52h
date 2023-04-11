import { Component } from "@angular/core";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  editor = DecoupledEditor;
  data = `<p>Hello, world!</p>`;

  onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
  print() {
    alert(this.data)
  }
}
