class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
Salas Cruz Daniel Eduardo 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
