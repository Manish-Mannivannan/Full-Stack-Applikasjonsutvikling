import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { mount } from "@vue/test-utils";
import Contact from "../Contact.vue";

describe("Contact", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(Contact, {});
    expect(wrapper.text()).toContain("Contact us here");
  });
});